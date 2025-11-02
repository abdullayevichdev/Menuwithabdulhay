import { useEffect, useMemo, useState } from "react";
import { Product, mockProducts } from "@/data/mockProducts";
import MenuCard from "@/components/MenuCard";
import { useCart } from "@/context/CartContext";
import { supabase } from "../supabaseClient";

const STATIC_CATEGORIES = ["Appetizers", "Main Course", "Desserts", "Beverages"] as const;

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem("favorites");
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      return [];
    }
  });
  const [search, setSearch] = useState("");
  const { addItem } = useCart();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data, error } = await supabase
          .from("menu_items")
          .select("*")
          .order("category", { ascending: true })
          .order("name", { ascending: true });
        if (error) throw error;
        const rows = (data as Product[]) || [];
        const source = rows.length > 0 ? rows : mockProducts;
        // Dedupe by name (case-insensitive)
        const seen = new Set<string>();
        const unique = source.filter((it) => {
          const key = (it.name || "").trim().toLowerCase();
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
        setItems(unique);
      } catch (e: any) {
        console.error("Failed to load menu_items", e);
        // Fallback to mock data on error as well
        const seen = new Set<string>();
        const unique = mockProducts.filter((it) => {
          const key = (it.name || "").trim().toLowerCase();
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
        setItems(unique);
        setError(null);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const categories = useMemo(() => {
    const dynamic = Array.from(new Set(items.map((i) => i.category))).filter(Boolean);
    const merged = Array.from(new Set(["All", "Favorites", ...dynamic, ...STATIC_CATEGORIES]));
    return merged;
  }, [items]);

  const filteredMenu = useMemo(() => {
    const base = selectedCategory === "All"
      ? items
      : selectedCategory === "Favorites"
      ? items.filter((i) => favorites.includes(i.id))
      : items.filter((item) => item.category === selectedCategory);
    const q = search.trim().toLowerCase();
    if (!q) return base;
    return base.filter((i) =>
      i.name.toLowerCase().includes(q) ||
      (i.description || "").toLowerCase().includes(q) ||
      (i.category || "").toLowerCase().includes(q)
    );
  }, [items, selectedCategory, favorites, search]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf8f3" }}>
      {/* Header */}
      <section
        style={{
          backgroundColor: "#1a1a1a",
          color: "white",
          padding: "48px 24px",
        }}
      >
        <div
          style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center" }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Bizning menyuyimiz
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#ccc" }}>
            Abdulhay's restaurantida eng mazali taomlar ro'yhati
          </p>
        </div>
      </section>

      {/* Search + Category Filter */}
      <section
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "24px" }}>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr" }}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Qidirish: taom nomi, tavsifi yoki kategoriya..."
              style={{
                padding: "10px 14px",
                border: "2px solid #e5e7eb",
                borderRadius: 8,
                fontSize: 16,
              }}
            />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                justifyContent: "center",
              }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: "8px 24px",
                    borderRadius: "9999px",
                    fontWeight: "600",
                    border:
                      selectedCategory === category
                        ? "none"
                        : "2px solid #1a1a1a",
                    backgroundColor:
                      selectedCategory === category ? "#1a1a1a" : "#faf8f3",
                    color: selectedCategory === category ? "white" : "#1a1a1a",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.backgroundColor = "#e8d5b5";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.backgroundColor = "#faf8f3";
                    }
                  }}
                >
                  {category}
                  {category === "Favorites" && favorites.length > 0 && ` (${favorites.length})`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          {loading && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "32px" }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} style={{ height: 360, background: "white", borderRadius: 8, border: "1px solid #e5e7eb", animation: "skeleton 1.2s ease-in-out infinite", opacity: 0.8 }} />
              ))}
            </div>
          )}

          {!loading && error && (
            <div style={{ textAlign: "center", padding: "40px 20px", color: "#b91c1c" }}>{error}</div>
          )}

          {!loading && !error && filteredMenu.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "32px",
              }}
            >
              {filteredMenu.map((item, idx) => (
                <div key={item.id} style={{ animation: "fadeInUp 500ms ease-out both", animationDelay: `${(idx % 6) * 60}ms` }}>
                  <MenuCard
                    item={item}
                    onAddToCart={() => addItem(item)}
                    isFavorite={favorites.includes(item.id)}
                    onToggleFavorite={() => toggleFavorite(item.id)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
              <p style={{ fontSize: "1.25rem", color: "#666" }}>
                No items found in this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <style>
        {`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes skeleton { 0% { background-color: #f3f4f6 } 50% { background-color: #e5e7eb } 100% { background-color: #f3f4f6 } }
        `}
      </style>
    </div>
  );
}
