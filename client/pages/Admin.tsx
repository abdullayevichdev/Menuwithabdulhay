import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // ✅ to‘g‘rilangan import
import { Trash2, LogOut, Plus, Loader2 } from "lucide-react";
import { mockProducts } from "@/data/mockProducts";

// ✅ MenuItem tipi e’lon qilindi
type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
};

async function uploadImageFromUrlToStorage(url: string, nameHint: string) {
  const tryFetch = async (src: string) => {
    const res = await fetch(src, { referrerPolicy: "no-referrer", mode: "cors" as RequestMode });
    if (!res.ok) throw new Error("Failed to fetch image: " + res.status);
    return res.blob();
  };
  try {
    let blob: Blob;
    try {
      blob = await tryFetch(url);
    } catch (e) {
      // Retry via images.weserv.nl proxy to bypass CORS blocks
      try {
        const u = new URL(url);
        const proxied = `https://images.weserv.nl/?url=${encodeURIComponent(`${u.host}${u.pathname}${u.search || ""}`)}`;
        blob = await tryFetch(proxied);
      } catch (e2) {
        throw e2;
      }
    }
    const ext = (url.split(".").pop() || "jpg").split("?")[0].split("#")[0];
    const safeName = nameHint.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40);
    const path = `${Date.now()}-${safeName}.${ext}`;
    const { error: upErr } = await supabase.storage.from("menu_images").upload(path, blob, {
      upsert: true,
      contentType: (blob as any).type || "image/jpeg",
    });
    if (upErr) throw upErr;
    const { data: pub } = supabase.storage.from("menu_images").getPublicUrl(path);
    return pub.publicUrl;
  } catch (e) {
    console.warn("Rehost failed for", url, e);
    // Do NOT write placeholder to DB; keep original so frontend proxy can render it
    return url;
  }
}

export default function Admin() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "Main Course",
    image_url: "",
  });
  const [user, setUser] = useState<any>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      navigate("/login");
      return;
    }
    setUser(user);
    fetchItems();
  }

  async function fetchItems() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("menu_items")
        .select("*")
        .order("category", { ascending: true });

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.price) {
      alert("Please fill in name and price");
      return;
    }

    try {
      const price = parseFloat(form.price);

      if (editingId) {
        // ✅ update mavjud element
        const { error } = await supabase
          .from("menu_items")
          .update({
            name: form.name,
            description: form.description,
            price: price,
            category: form.category,
            image_url: form.image_url,
          })
          .eq("id", editingId);

        if (error) throw error;
        setEditingId(null);
      } else {
        // ✅ yangi element qo‘shish
        const { error } = await supabase.from("menu_items").insert([
          {
            name: form.name,
            description: form.description,
            price: price,
            category: form.category,
            image_url: form.image_url,
          },
        ]);

        if (error) throw error;
      }

      // ✅ forma tozalash
      setForm({
        name: "",
        description: "",
        price: "",
        category: "Main Course",
        image_url: "",
      });

      fetchItems();
    } catch (error) {
      console.error("Error saving item:", error);
      alert("Failed to save item");
    }
  }

  async function deleteItem(id: string) {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
      const { error } = await supabase.from("menu_items").delete().eq("id", id);
      if (error) throw error;
      fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete item");
    }
  }

  function editItem(item: MenuItem) {
    setForm({
      name: item.name,
      description: item.description,
      price: item.price.toString(),
      category: item.category,
      image_url: item.image_url,
    });
    setEditingId(item.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-restaurant-light">
      {/* Header */}
      <div className="bg-restaurant-dark text-white px-6 py-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Menu Management</h1>
          <div className="flex gap-2">
            <button
              onClick={async () => {
                const ok = window.confirm(
                  "Are you sure? This will DELETE all items and seed ONLY Uzbek/Turk/European set.",
                );
                if (!ok) return;
                try {
                  // 1) Clear all rows
                  const del = await supabase.from("menu_items").delete().gte("id", 0);
                  if (del.error) throw del.error;
                  // 2) Seed ONLY categories: Uzbek / Turkish / European (take from current mockProducts)
                  const allowed = new Set(["Uzbek", "Turkish", "European", "Desserts", "Beverages"]);
                  const raw = mockProducts
                    .filter((p) => allowed.has(p.category))
                    .map(({ id, ...rest }) => rest);
                  // Rehost images to Supabase Storage to avoid hotlink issues
                  const payload = await Promise.all(
                    raw.map(async (item) => ({
                      ...item,
                      image_url: item.image_url ? await uploadImageFromUrlToStorage(item.image_url, item.name) : item.image_url,
                    })),
                  );
                  const ins = await supabase.from("menu_items").insert(payload);
                  if (ins.error) throw ins.error;
                  await fetchItems();
                  alert("Cleared and seeded Uzbek/Turk/European items successfully.");
                } catch (e: any) {
                  console.error("Clear & Seed failed", e);
                  alert("Clear & Seed failed: " + (e?.message || "Unknown error"));
                }
              }}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Clear & Seed (Uzbek/Turk/European only)
            </button>
            <button
              onClick={async () => {
                try {
                  setLoading(true);
                  // Build lookup by name from mockProducts
                  const map = new Map<string, string>();
                  for (const p of mockProducts) {
                    if (p.name && p.image_url) map.set(p.name.trim().toLowerCase(), p.image_url);
                  }
                  // Fetch current rows
                  const { data, error } = await supabase
                    .from("menu_items")
                    .select("id,name,image_url");
                  if (error) throw error;
                  const rows = (data || []) as { id: string; name: string; image_url: string | null }[];
                  for (const row of rows) {
                    const key = (row.name || "").trim().toLowerCase();
                    const newUrl = map.get(key);
                    if (!newUrl) continue;
                    if (row.image_url === newUrl) continue;
                    const upd = await supabase
                      .from("menu_items")
                      .update({ image_url: newUrl })
                      .eq("id", row.id);
                    if (upd.error) console.warn("Update failed for", row.id, upd.error);
                  }
                  await fetchItems();
                  alert("Images restored from mockProducts by name. Now they will render via display proxy.");
                } catch (e: any) {
                  console.error("Restore images failed", e);
                  alert("Restore images failed: " + (e?.message || "Unknown error"));
                } finally {
                  setLoading(false);
                }
              }}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-60"
              disabled={loading}
            >
              Restore images from mockProducts (by name)
            </button>
            <button
              onClick={async () => {
                if (loading) return;
                const ok = window.confirm("Rehost ALL existing images to Supabase Storage now?");
                if (!ok) return;
                try {
                  setLoading(true);
                  // Fetch existing items
                  const { data, error } = await supabase
                    .from("menu_items")
                    .select("id,name,image_url");
                  if (error) throw error;
                  const rows = (data || []) as { id: string; name: string; image_url: string | null }[];
                  for (const row of rows) {
                    if (!row.image_url) continue;
                    const alreadyStorage = row.image_url.includes("/storage/v1/object/public/menu_images/");
                    if (alreadyStorage) continue;
                    const newUrl = await uploadImageFromUrlToStorage(row.image_url, row.name || `item-${row.id}`);
                    if (newUrl && newUrl !== row.image_url) {
                      const upd = await supabase
                        .from("menu_items")
                        .update({ image_url: newUrl })
                        .eq("id", row.id);
                      if (upd.error) console.warn("Update failed for", row.id, upd.error);
                    }
                  }
                  await fetchItems();
                  alert("Rehost completed. Existing images now use Storage/public URLs (or placeholder if failed). ");
                } catch (e: any) {
                  console.error("Rehost all failed", e);
                  alert("Rehost all failed: " + (e?.message || "Unknown error"));
                } finally {
                  setLoading(false);
                }
              }}
              className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors disabled:opacity-60"
              disabled={loading}
              aria-disabled={loading}
            >
              {loading ? "Working..." : "Rehost ALL images to Storage"}
            </button>
            <button
              onClick={async () => {
                try {
                  const payload = mockProducts.map(({ id, ...rest }) => rest);
                  const { error } = await supabase
                    .from("menu_items")
                    .insert(payload);
                  if (error) throw error;
                  fetchItems();
                  alert("Demo items seeded successfully");
                } catch (e: any) {
                  console.error("Seed failed", e);
                  alert("Seed failed: " + (e?.message || "Unknown error"));
                }
              }}
              className="flex items-center gap-2 px-4 py-2 bg-restaurant-gold text-restaurant-dark rounded-lg font-semibold hover:bg-restaurant-accent transition-colors"
            >
              Seed demo items
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white text-restaurant-dark rounded-lg font-semibold hover:bg-restaurant-accent transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
        <p className="text-gray-300 mt-2">
          Logged in as: <span className="font-semibold">{user?.email}</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
              <h2 className="text-2xl font-bold text-restaurant-dark mb-6">
                {editingId ? "Edit Item" : "Add New Item"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-restaurant-dark mb-2">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="e.g., Grilled Salmon"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-restaurant-accent focus:outline-none"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-restaurant-dark mb-2">
                    Description
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    placeholder="Describe your dish..."
                    rows={3}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-restaurant-accent focus:outline-none resize-none"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-restaurant-dark mb-2">
                    Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-restaurant-accent focus:outline-none"
                  >
                    <option>Appetizers</option>
                    <option>Main Course</option>
                    <option>Desserts</option>
                    <option>Beverages</option>
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-semibold text-restaurant-dark mb-2">
                    Price *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                    placeholder="29.99"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-restaurant-accent focus:outline-none"
                  />
                </div>

  {/* Image Upload va URL */}
<div>
  <label className="block text-sm font-semibold text-restaurant-dark mb-2">
    Image Upload / URL
  </label>

  {/* Fayldan yuklash */}
  <input
    type="file"
    accept="image/*"
    onChange={async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const fileName = `${Date.now()}-${file.name}`;

      // Supabase Storage'ga yuklash
      const { data, error } = await supabase.storage
        .from("menu_images")
        .upload(fileName, file);

      if (error) {
        alert("Upload failed: " + error.message);
        return;
      }

      // Public URL olish
      const { data: publicUrlData } = supabase.storage
        .from("menu_images")
        .getPublicUrl(fileName);

      setForm({
        ...form,
        image_url: publicUrlData.publicUrl,
      });
    }}
    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-restaurant-accent focus:outline-none"
  />

  {/* URL ni qo‘lda yozish imkoniyati ham */}
  <input
    type="url"
    value={form.image_url}
    onChange={(e) => setForm({ ...form, image_url: e.target.value })}
    placeholder="https://example.com/image.jpg"
    className="w-full mt-2 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-restaurant-accent focus:outline-none"
  />

  {/* Yuklangan rasmni oldindan ko‘rish */}
  {form.image_url && (
    <img
      src={form.image_url}
      alt="Preview"
      className="mt-3 w-40 h-40 object-cover rounded-lg border"
    />
  )}
</div>


                {/* Buttons */}
                <div className="flex gap-2 pt-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-restaurant-dark text-white font-bold rounded-lg hover:bg-restaurant-accent hover:text-restaurant-dark transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                    {editingId ? "Update" : "Add"}
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingId(null);
                        setForm({
                          name: "",
                          description: "",
                          price: "",
                          category: "Main Course",
                          image_url: "",
                        });
                      }}
                      className="flex-1 py-2 bg-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Items List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-restaurant-dark mb-6">
              Current Menu Items
            </h2>

            {loading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-restaurant-accent" />
              </div>
            ) : items.length > 0 ? (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`bg-white rounded-lg p-6 border-2 transition-all ${
                      editingId === item.id
                        ? "border-restaurant-accent shadow-lg"
                        : "border-gray-200 hover:border-restaurant-accent"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-restaurant-dark">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                        <div className="flex gap-3 mt-3">
                          <span className="text-sm font-semibold text-white bg-restaurant-dark px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                          <span className="text-lg font-bold text-restaurant-accent">
                            ${parseFloat(item.price.toString()).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => editItem(item)}
                          className="px-4 py-2 bg-restaurant-gold text-restaurant-dark font-semibold rounded-lg hover:bg-restaurant-accent transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-600 text-lg">
                  No menu items yet. Add your first item!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
