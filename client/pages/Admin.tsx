import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@shared/supabaseClient";
import { MenuItem } from "./Menu";
import { Trash2, LogOut, Plus, Loader2 } from "lucide-react";

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
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white text-restaurant-dark rounded-lg font-semibold hover:bg-restaurant-accent transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
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

                <div>
                  <label className="block text-sm font-semibold text-restaurant-dark mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={form.image_url}
                    onChange={(e) =>
                      setForm({ ...form, image_url: e.target.value })
                    }
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-restaurant-accent focus:outline-none"
                  />
                </div>

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

          {/* Items List Section */}
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
                            ${Number(item.price).toFixed(2)}
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
