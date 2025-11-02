import { Product } from "@/data/mockProducts";
import { ShoppingCart, Heart } from "lucide-react";

interface MenuCardProps {
  item: Product;
  onAddToCart: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

// Prefer Storage public URLs; proxy external hosts to improve visibility
const PLACEHOLDER = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
function getCategoryFallback(category?: string) {
  const key = (category || "").toLowerCase();
  if (key.includes("uzbek")) return "https://upload.wikimedia.org/wikipedia/commons/7/7a/Plov_%28Uzbek_pilaf%29.jpg";
  if (key.includes("turk")) return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Doner_kebab.jpg";
  if (key.includes("europe")) return "https://upload.wikimedia.org/wikipedia/commons/1/16/Spaghetti_alla_Carbonara_%28cropped%29.jpg";
  if (key.includes("appet")) return "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop";
  if (key.includes("main")) return "https://images.unsplash.com/photo-1604908554028-5e474e4d2c4d?q=80&w=1200&auto=format&fit=crop";
  if (key.includes("dessert")) return "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1200&auto=format&fit=crop";
  if (key.includes("beverag") || key.includes("drink")) return "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop";
  return "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop";
}
function getImageSrc(url: string) {
  if (!url) return PLACEHOLDER;
  if (url.includes("/storage/v1/object/public/menu_images/")) return url;
  try {
    const u = new URL(url);
    // images.weserv.nl expects host+path (no scheme). Query/fragment optional.
    const path = `${u.host}${u.pathname}${u.search || ""}`;
    return `https://images.weserv.nl/?url=${encodeURIComponent(path)}&w=800&h=600&fit=cover`;
  } catch {
    return url;
  }
}

export default function MenuCard({ item, onAddToCart, isFavorite, onToggleFavorite }: MenuCardProps) {
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
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
      }}
    >
      {/* Favorite Button */}
      <button
        onClick={onToggleFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 2,
          background: "rgba(255,255,255,0.9)",
          border: "1px solid #e5e7eb",
          borderRadius: 9999,
          padding: 8,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <Heart size={18} color={isFavorite ? "#e11d48" : "#1f2937"} fill={isFavorite ? "#e11d48" : "transparent"} />
      </button>

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
  {item.image_url ? (
    <img
      src={getImageSrc(item.image_url)}
      alt={item.name}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.3s",
      }}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={(e) => {
        const img = e.currentTarget as HTMLImageElement & { _triedFallback?: boolean; _triedCategory?: boolean };
        if (!img._triedCategory) {
          img._triedCategory = true;
          img.src = getImageSrc(getCategoryFallback(item.category));
          return;
        }
        if (!img._triedFallback) {
          img._triedFallback = true;
          img.src = PLACEHOLDER;
        }
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    />
  ) : (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#f0f0f0",
        color: "#999",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      No image
    </div>
  )}
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
