import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  if (items.length === 0 && !orderPlaced) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#faf8f3", padding: "40px 24px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <button
            onClick={() => navigate("/menu")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#c9a961",
              backgroundColor: "transparent",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "40px",
            }}
          >
            <ArrowLeft size={20} />
            Back to Menu
          </button>

          <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "80px 40px",
            textAlign: "center",
          }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1a1a1a", marginBottom: "16px" }}>
              Your cart is empty
            </h1>
            <p style={{ color: "#666", marginBottom: "32px" }}>
              Please add items to your cart before checking out.
            </p>
            <button
              onClick={() => navigate("/menu")}
              style={{
                padding: "12px 32px",
                backgroundColor: "#1a1a1a",
                color: "white",
                border: "none",
                fontWeight: "600",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#faf8f3", padding: "40px 24px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "60px 40px",
            textAlign: "center",
          }}>
            <CheckCircle size={80} style={{ margin: "0 auto 24px", color: "#10b981" }} />
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1a1a1a", marginBottom: "16px" }}>
              Order Placed Successfully!
            </h1>
            <p style={{ color: "#666", marginBottom: "32px", fontSize: "1.125rem" }}>
              Thank you for your order. Your food will be prepared and delivered soon.
            </p>
            <p style={{ color: "#999", marginBottom: "32px" }}>
              Order confirmation has been sent to your email.
            </p>
            <button
              onClick={() => navigate("/menu")}
              style={{
                padding: "12px 32px",
                backgroundColor: "#1a1a1a",
                color: "white",
                border: "none",
                fontWeight: "600",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Order More
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setOrderPlaced(true);
    clearCart();
    setIsProcessing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08;
  const delivery = 5;
  const total = subtotal + tax + delivery;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf8f3", padding: "40px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <button
            onClick={() => navigate("/cart")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#c9a961",
              backgroundColor: "transparent",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "24px",
            }}
          >
            <ArrowLeft size={20} />
            Back to Cart
          </button>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1a1a1a" }}>
            Checkout
          </h1>
        </div>

        {/* Main Content */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "32px" }}>
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {/* Delivery Information */}
              <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1a1a1a", marginBottom: "24px" }}>
                  Delivery Information
                </h2>

                <div style={{ display: "grid", gap: "16px" }}>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "12px",
                      border: "2px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "12px",
                      border: "2px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "12px",
                      border: "2px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  />
                  <textarea
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    style={{
                      padding: "12px",
                      border: "2px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      fontFamily: "inherit",
                    }}
                  />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      style={{
                        padding: "12px",
                        border: "2px solid #e5e7eb",
                        borderRadius: "8px",
                        fontSize: "1rem",
                      }}
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="Zip Code"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      style={{
                        padding: "12px",
                        border: "2px solid #e5e7eb",
                        borderRadius: "8px",
                        fontSize: "1rem",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1a1a1a", marginBottom: "24px" }}>
                  Payment Information
                </h2>

                <div style={{ display: "grid", gap: "16px" }}>
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Cardholder Name"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "12px",
                      border: "2px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number (1234 5678 9012 3456)"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "12px",
                      border: "2px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <input
                      type="text"
                      name="cardExpiry"
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      required
                      style={{
                        padding: "12px",
                        border: "2px solid #e5e7eb",
                        borderRadius: "8px",
                        fontSize: "1rem",
                      }}
                    />
                    <input
                      type="text"
                      name="cardCVV"
                      placeholder="CVV"
                      value={formData.cardCVV}
                      onChange={handleChange}
                      required
                      style={{
                        padding: "12px",
                        border: "2px solid #e5e7eb",
                        borderRadius: "8px",
                        fontSize: "1rem",
                      }}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                style={{
                  padding: "16px",
                  backgroundColor: isProcessing ? "#999" : "#1a1a1a",
                  color: "white",
                  border: "none",
                  fontWeight: "700",
                  fontSize: "1.125rem",
                  borderRadius: "8px",
                  cursor: isProcessing ? "not-allowed" : "pointer",
                }}
              >
                {isProcessing ? "Processing Payment..." : "Place Order"}
              </button>
            </form>
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

              {/* Items */}
              <div style={{ marginBottom: "24px", maxHeight: "300px", overflowY: "auto" }}>
                {items.map((item) => (
                  <div key={item.product.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid #e5e7eb" }}>
                    <div>
                      <p style={{ fontWeight: "600", color: "#1a1a1a" }}>{item.product.name}</p>
                      <p style={{ color: "#666", fontSize: "0.875rem" }}>x{item.quantity}</p>
                    </div>
                    <p style={{ fontWeight: "600", color: "#1a1a1a" }}>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div style={{ borderTop: "2px solid #e5e7eb", paddingTop: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", color: "#666" }}>
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", color: "#666" }}>
                  <span>Tax (8%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px", color: "#666" }}>
                  <span>Delivery:</span>
                  <span>${delivery.toFixed(2)}</span>
                </div>

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "16px",
                  borderTop: "2px solid #e5e7eb",
                }}>
                  <span style={{ fontWeight: "bold", color: "#1a1a1a" }}>Total:</span>
                  <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#c9a961" }}>
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
