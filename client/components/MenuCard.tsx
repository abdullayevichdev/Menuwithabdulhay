import { Product } from "@/data/mockProducts";
import { ShoppingCart } from "lucide-react";

interface MenuCardProps {
  item: Product;
  onAddToCart: () => void;
}

export default function MenuCard({ item, onAddToCart }: MenuCardProps) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        transition: "box-shadow 0.3s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
      }}
    >
      {/* Image */}
      <div
        style={{
          height: "200px",
          background: "linear-gradient(135deg, #c9a961 0%, #e8d5b5 100%)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={item.image_url}
          alt={item.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            marginBottom: "12px",
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "#1a1a1a",
              flex: 1,
            }}
          >
            {item.name}
          </h3>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#c9a961",
              marginLeft: "8px",
            }}
          >
            ${Number(item.price).toFixed(2)}
          </span>
        </div>

        <p
          style={{
            color: "#666",
            fontSize: "0.875rem",
            marginBottom: "16px",
            lineHeight: "1.5",
            flex: 1,
          }}
        >
          {item.description}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              backgroundColor: "#faf8f3",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: "600",
              color: "#1a1a1a",
            }}
          >
            {item.category}
          </span>
        </div>

        <button
          onClick={onAddToCart}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#1a1a1a",
            color: "white",
            fontWeight: "600",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#c9a961";
            e.currentTarget.style.color = "#1a1a1a";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#1a1a1a";
            e.currentTarget.style.color = "white";
          }}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
