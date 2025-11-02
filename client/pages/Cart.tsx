import { Link, useNavigate } from "react-router-dom";
import { Trash2, ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [showUserModal, setShowUserModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    cardNumber: "",
    address: "",
    idCard: "",
  });
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#faf8f3",
          padding: "40px 24px",
        }}
      >
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
           Menyuga qaytish
          </Link>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "80px 40px",
              textAlign: "center",
            }}
          >
            <ShoppingCart
              size={64}
              style={{ margin: "0 auto 24px", color: "#c9a961", opacity: 0.5 }}
            />
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#1a1a1a",
                marginBottom: "16px",
              }}
            >
              Savatingiz bo'sh
            </h1>
            <p
              style={{
                color: "#666",
                marginBottom: "32px",
                fontSize: "1.125rem",
              }}
            >
              Menyumizdan mazali taomlarni qo'shing!
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
              Xarid qilishda davom eting
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#faf8f3",
        padding: "40px 24px",
      }}
    >
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
            Menyuga qaytish
          </Link>
          <h1
            style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1a1a1a" }}
          >
            Xarid savati
          </h1>
        </div>

        {/* Cart Items and Summary */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 350px",
            gap: "32px",
          }}
        >
          {/* Items */}
          <div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {items.map((item, index) => (
                <div
                  key={item.product.id}
                  style={{
                    display: "flex",
                    gap: "24px",
                    padding: "24px",
                    borderBottom:
                      index < items.length - 1 ? "1px solid #e5e7eb" : "none",
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
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "bold",
                        color: "#1a1a1a",
                        marginBottom: "8px",
                      }}
                    >
                      {item.product.name}
                    </h3>
                    <p style={{ color: "#666", marginBottom: "16px" }}>
                      ${Number(item.product.price).toFixed(2)} each
                    </p>

                    {/* Quantity Controls */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
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
                      <span
                        style={{
                          minWidth: "40px",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
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
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#c9a961",
                        marginBottom: "16px",
                      }}
                    >
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
                      O'chirish
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "24px",
                position: "sticky",
                top: "100px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#1a1a1a",
                  marginBottom: "24px",
                }}
              >
                Buyurtma xulosasi
              </h2>

              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                    color: "#666",
                  }}
                >
                  <span>Subtotal:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                    color: "#666",
                  }}
                >
                  <span>Tax (8%):</span>
                  <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                    color: "#666",
                  }}
                >
                  <span>Delivery:</span>
                  <span>$5.00</span>
                </div>
              </div>

              <div
                style={{
                  borderTop: "2px solid #e5e7eb",
                  paddingTop: "16px",
                  marginBottom: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold", color: "#1a1a1a" }}>
                  Total:
                </span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#c9a961",
                  }}
                >
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
               Ro'yxatdan o'chirilishda davom etish
              </Link>

              <div style={{ display: "flex", gap: 12 }}>
                <button
                  onClick={() => setShowUserModal(true)}
                  style={{
                    flex: 1,
                    padding: "12px",
                    backgroundColor: "transparent",
                    color: "#1a1a1a",
                    border: "2px solid #1a1a1a",
                    fontWeight: "600",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Xarid qilishda davom eting
                </button>

                <button
                  onClick={clearCart}
                  style={{
                    padding: "12px",
                    backgroundColor: "#fee2e2",
                    color: "#dc2626",
                    border: "none",
                    fontWeight: "600",
                    borderRadius: "8px",
                    cursor: "pointer",
                    minWidth: 140,
                  }}
                >
                  Savatchani tozalash
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserInfoModal
        open={showUserModal}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        onClose={(saved) => {
          setShowUserModal(false);
          if (saved) {
            navigate("/menu");
          }
        }}
      />
    </div>
  );
}

// Simple user info modal
function UserInfoModal({
  open,
  onClose,
  userInfo,
  setUserInfo,
}: {
  open: boolean;
  onClose: (saved: boolean) => void;
  userInfo: { 
    fullName: string; 
    phone: string; 
    email: string; 
    cardNumber?: string; 
    address?: string; 
    idCard?: string 
  };
  setUserInfo: React.Dispatch<React.SetStateAction<{
    fullName: string; 
    phone: string; 
    email: string; 
    cardNumber?: string; 
    address?: string; 
    idCard?: string 
  }>>;
}) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        zIndex: 50,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          background: "white",
          borderRadius: 12,
          padding: 24,
        }}
      >
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, color: "#1a1a1a" }}>
          Foydalanuvchi ma'lumotlari
        </h3>
        <p style={{ color: "#666", marginBottom: 16, fontSize: 14 }}>
          Iltimos, keyingi xaridlarda tezroq buyurtma uchun ma'lumotlaringizni kiriting.
        </p>
        <div style={{ display: "grid", gap: 12 }}>
          <input
            placeholder="To'liq ism"
            value={userInfo.fullName}
            onChange={(e) => setUserInfo({ ...userInfo, fullName: e.target.value })}
            style={{ padding: 12, border: "2px solid #e5e7eb", borderRadius: 8 }}
          />
          <input
            placeholder="Telefon"
            value={userInfo.phone}
            onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
            style={{ padding: 12, border: "2px solid #e5e7eb", borderRadius: 8 }}
          />
          <input
            placeholder="Email (optional)"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            style={{ padding: 12, border: "2px solid #e5e7eb", borderRadius: 8 }}
          />
          <input
            placeholder="Karta raqami (16 raqam)"
            value={userInfo.cardNumber || ""}
            onChange={(e) => setUserInfo({ ...userInfo, cardNumber: e.target.value })}
            style={{ padding: 12, border: "2px solid #e5e7eb", borderRadius: 8 }}
            inputMode="numeric"
            maxLength={19}
          />
          <input
            placeholder="Yashash manzili"
            value={userInfo.address || ""}
            onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
            style={{ padding: 12, border: "2px solid #e5e7eb", borderRadius: 8 }}
          />
          <input
            placeholder="ID-karta / Passport raqami"
            value={userInfo.idCard || ""}
            onChange={(e) => setUserInfo({ ...userInfo, idCard: e.target.value })}
            style={{ padding: 12, border: "2px solid #e5e7eb", borderRadius: 8 }}
          />
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 16, justifyContent: "flex-end" }}>
          <button
            onClick={() => onClose(false)}
            style={{ padding: "10px 14px", background: "#f3f4f6", border: "none", borderRadius: 8, cursor: "pointer" }}
          >
            Bekor qilish
          </button>
          <button
            onClick={() => {
              try {
                localStorage.setItem("user_info", JSON.stringify(userInfo));
              } catch {}
              onClose(true);
            }}
            style={{ padding: "10px 14px", background: "#1a1a1a", color: "white", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700 }}
          >
            Saqlash va davom etish
          </button>
        </div>
      </div>
    </div>
  );
}
