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
    <nav style={{ backgroundColor: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "16px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#1a1a1a",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#c9a961";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#1a1a1a";
            }}
          >
            🍽️ <span style={{ display: "none" }} className="hidden sm:inline">Culinary</span>
          </Link>

          {/* Desktop Menu */}
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <Link
              to="/"
              style={{
                fontWeight: "600",
                textDecoration: "none",
                color: isActive("/") ? "#c9a961" : "#1a1a1a",
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
                color: isActive("/menu") ? "#c9a961" : "#1a1a1a",
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
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                backgroundColor: isActive("/cart") ? "#1a1a1a" : "#faf8f3",
                color: isActive("/cart") ? "white" : "#1a1a1a",
                borderRadius: "8px",
                fontWeight: "600",
                transition: "all 0.3s",
                cursor: "pointer",
              }}>
                <ShoppingCart size={20} />
                Cart
                {cartItems > 0 && (
                  <span style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "24px",
                    height: "24px",
                    backgroundColor: "#c9a961",
                    color: "#1a1a1a",
                    borderRadius: "50%",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}>
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
                backgroundColor: isActive("/login") ? "#1a1a1a" : "#faf8f3",
                color: isActive("/login") ? "white" : "#1a1a1a",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="md:hidden">
            <Link
              to="/cart"
              style={{
                position: "relative",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ShoppingCart size={24} style={{ color: "#1a1a1a" }} />
              {cartItems > 0 && (
                <span style={{
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
                }}>
                  {cartItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                padding: "8px",
                color: "#1a1a1a",
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
          <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #e5e7eb", display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              style={{
                display: "block",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "600",
                backgroundColor: isActive("/") ? "#1a1a1a" : "#faf8f3",
                color: isActive("/") ? "white" : "#1a1a1a",
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
                backgroundColor: isActive("/menu") ? "#1a1a1a" : "#faf8f3",
                color: isActive("/menu") ? "white" : "#1a1a1a",
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
                backgroundColor: isActive("/cart") ? "#1a1a1a" : "#faf8f3",
                color: isActive("/cart") ? "white" : "#1a1a1a",
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
                backgroundColor: isActive("/login") ? "#1a1a1a" : "#faf8f3",
                color: isActive("/login") ? "white" : "#1a1a1a",
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
