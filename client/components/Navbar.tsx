import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();

  const isActive = (path: string) => location.pathname === path;
  const cartItems = getTotalItems();

  return (
    <nav
      style={{
        backgroundColor: "#1a1a1a",
        boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{ maxWidth: "80rem", margin: "0 auto", padding: "16px 24px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#faf8f3",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#c9a961";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#faf8f3";
            }}
          >
            🍽️{" "}
            <span style={{ display: "none" }} className="hidden sm:inline">
              Culinary
            </span>
          </Link>

          {/* Desktop Menu */}
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <Link
              to="/"
              style={{
                fontWeight: "600",
                textDecoration: "none",
                color: isActive("/") ? "#c9a961" : "#faf8f3",
                borderBottom: isActive("/") ? "2px solid #c9a961" : "none",
                paddingBottom: isActive("/") ? "4px" : "0",
                transition: "color 0.3s",
              }}
            >
              Home
            </Link>
            <Link
              to="/menu"
              style={{
                fontWeight: "600",
                textDecoration: "none",
                color: isActive("/menu") ? "#c9a961" : "#faf8f3",
                borderBottom: isActive("/menu") ? "2px solid #c9a961" : "none",
                paddingBottom: isActive("/menu") ? "4px" : "0",
                transition: "color 0.3s",
              }}
            >
              Menu
            </Link>
            <Link
              to="/cart"
              style={{
                position: "relative",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  backgroundColor: isActive("/cart") ? "#c9a961" : "#2a2a2a",
                  color: isActive("/cart") ? "#1a1a1a" : "#faf8f3",
                  borderRadius: "8px",
                  fontWeight: "600",
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
              >
                <ShoppingCart size={20} />
                Cart
                {cartItems > 0 && (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "24px",
                      height: "24px",
                      backgroundColor: "#1a1a1a",
                      color: "#faf8f3",
                      borderRadius: "50%",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                    }}
                  >
                    {cartItems}
                  </span>
                )}
              </div>
            </Link>
            <Link
              to="/login"
              style={{
                padding: "8px 24px",
                borderRadius: "8px",
                fontWeight: "600",
                backgroundColor: isActive("/login") ? "#c9a961" : "#2a2a2a",
                color: isActive("/login") ? "#1a1a1a" : "#faf8f3",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "16px" }}
            className="md:hidden"
          >
            <Link
              to="/cart"
              style={{
                position: "relative",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ShoppingCart size={24} style={{ color: "#faf8f3" }} />
              {cartItems > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#c9a961",
                    color: "#1a1a1a",
                    borderRadius: "50%",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  {cartItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                padding: "8px",
                color: "#faf8f3",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "color 0.3s",
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            style={{
              marginTop: "16px",
              paddingTop: "16px",
              borderTop: "1px solid #e5e7eb",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              style={{
                display: "block",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "600",
                backgroundColor: isActive("/") ? "#c9a961" : "#2a2a2a",
                color: isActive("/") ? "#1a1a1a" : "#faf8f3",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              Home
            </Link>
            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              style={{
                display: "block",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "600",
                backgroundColor: isActive("/menu") ? "#c9a961" : "#2a2a2a",
                color: isActive("/menu") ? "#1a1a1a" : "#faf8f3",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              Menu
            </Link>
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "600",
                backgroundColor: isActive("/cart") ? "#c9a961" : "#2a2a2a",
                color: isActive("/cart") ? "#1a1a1a" : "#faf8f3",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              Cart {cartItems > 0 && `(${cartItems})`}
            </Link>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              style={{
                display: "block",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "600",
                backgroundColor: isActive("/login") ? "#c9a961" : "#2a2a2a",
                color: isActive("/login") ? "#1a1a1a" : "#faf8f3",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              Admin Access
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
