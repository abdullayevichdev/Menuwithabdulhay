import { useState } from "react";
import { mockProducts } from "@/data/mockProducts";
import MenuCard from "@/components/MenuCard";
import { useCart } from "@/context/CartContext";

const CATEGORIES = [
  "All",
  "Appetizers",
  "Main Course",
  "Desserts",
  "Beverages",
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addItem } = useCart();

  const filteredMenu =
    selectedCategory === "All"
      ? mockProducts
      : mockProducts.filter((item) => item.category === selectedCategory);

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
            Our Menu
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#ccc" }}>
            Discover our culinary creations
          </p>
        </div>
      </section>

      {/* Category Filter */}
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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {CATEGORIES.map((category) => (
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          {filteredMenu.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "32px",
              }}
            >
              {filteredMenu.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onAddToCart={() => addItem(item)}
                />
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
    </div>
  );
}
