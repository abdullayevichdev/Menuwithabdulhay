import { Link } from "react-router-dom";
import { Trash2, ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#faf8f3", padding: "40px 24px" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Link
            to="/menu"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#c9a961",
              textDecoration: "none",
              fontWeight: "600",
              marginBottom: "40px",
            }}
          >
            <ArrowLeft size={20} />
            Back to Menu
          </Link>

          <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "80px 40px",
            textAlign: "center",
          }}>
            <ShoppingCart size={64} style={{ margin: "0 auto 24px", color: "#c9a961", opacity: 0.5 }} />
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1a1a1a", marginBottom: "16px" }}>
              Your cart is empty
            </h1>
            <p style={{ color: "#666", marginBottom: "32px", fontSize: "1.125rem" }}>
              Add some delicious items from our menu!
            </p>
            <Link
              to="/menu"
              style={{
                display: "inline-block",
                padding: "12px 32px",
                backgroundColor: "#1a1a1a",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
                borderRadius: "8px",
              }}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf8f3", padding: "40px 24px" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <Link
            to="/menu"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#c9a961",
              textDecoration: "none",
              fontWeight: "600",
              marginBottom: "24px",
            }}
          >
            <ArrowLeft size={20} />
            Back to Menu
          </Link>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1a1a1a" }}>
            Shopping Cart
          </h1>
        </div>

        {/* Cart Items and Summary */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "32px" }}>
          {/* Items */}
          <div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden" }}>
              {items.map((item, index) => (
                <div
                  key={item.product.id}
                  style={{
                    display: "flex",
                    gap: "24px",
                    padding: "24px",
                    borderBottom: index < items.length - 1 ? "1px solid #e5e7eb" : "none",
                  }}
                >
                  {/* Product Image */}
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  {/* Product Info */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "bold", color: "#1a1a1a", marginBottom: "8px" }}>
                      {item.product.name}
                    </h3>
                    <p style={{ color: "#666", marginBottom: "16px" }}>
                      ${Number(item.product.price).toFixed(2)} each
                    </p>

                    {/* Quantity Controls */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        style={{
                          padding: "4px 12px",
                          border: "1px solid #e5e7eb",
                          borderRadius: "4px",
                          cursor: "pointer",
                          backgroundColor: "white",
                        }}
                      >
                        −
                      </button>
                      <span style={{ minWidth: "40px", textAlign: "center", fontWeight: "600" }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        style={{
                          padding: "4px 12px",
                          border: "1px solid #e5e7eb",
                          borderRadius: "4px",
                          cursor: "pointer",
                          backgroundColor: "white",
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Price and Remove */}
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#c9a961", marginBottom: "16px" }}>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      style={{
                        padding: "8px 12px",
                        backgroundColor: "#fee2e2",
                        color: "#dc2626",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "24px",
              position: "sticky",
              top: "100px",
            }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1a1a1a", marginBottom: "24px" }}>
                Order Summary
              </h2>

              <div style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", color: "#666" }}>
                  <span>Subtotal:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", color: "#666" }}>
                  <span>Tax (8%):</span>
                  <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", color: "#666" }}>
                  <span>Delivery:</span>
                  <span>$5.00</span>
                </div>
              </div>

              <div style={{
                borderTop: "2px solid #e5e7eb",
                paddingTop: "16px",
                marginBottom: "24px",
                display: "flex",
                justifyContent: "space-between",
              }}>
                <span style={{ fontWeight: "bold", color: "#1a1a1a" }}>Total:</span>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#c9a961" }}>
                  ${(getTotalPrice() * 1.08 + 5).toFixed(2)}
                </span>
              </div>

              <Link
                to="/checkout"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#1a1a1a",
                  color: "white",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: "600",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              >
                Proceed to Checkout
              </Link>

              <button
                onClick={clearCart}
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "transparent",
                  color: "#1a1a1a",
                  border: "2px solid #1a1a1a",
                  fontWeight: "600",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
