import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-restaurant-dark hover:text-restaurant-accent transition-colors"
          >
            🍽️ <span className="hidden sm:inline">Culinary</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-semibold transition-colors ${
                isActive("/")
                  ? "text-restaurant-accent border-b-2 border-restaurant-accent pb-1"
                  : "text-restaurant-dark hover:text-restaurant-accent"
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`font-semibold transition-colors ${
                isActive("/menu")
                  ? "text-restaurant-accent border-b-2 border-restaurant-accent pb-1"
                  : "text-restaurant-dark hover:text-restaurant-accent"
              }`}
            >
              Menu
            </Link>
            <Link
              to="/login"
              className={`px-6 py-2 rounded-lg font-semibold ${
                isActive("/login")
                  ? "bg-restaurant-dark text-white"
                  : "bg-restaurant-light text-restaurant-dark hover:bg-restaurant-accent/20"
              } transition-colors`}
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-restaurant-dark hover:text-restaurant-accent transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg font-semibold transition-colors ${
                isActive("/")
                  ? "bg-restaurant-dark text-white"
                  : "text-restaurant-dark hover:bg-restaurant-light"
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg font-semibold transition-colors ${
                isActive("/menu")
                  ? "bg-restaurant-dark text-white"
                  : "text-restaurant-dark hover:bg-restaurant-light"
              }`}
            >
              Menu
            </Link>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg font-semibold ${
                isActive("/login")
                  ? "bg-restaurant-dark text-white"
                  : "bg-restaurant-light text-restaurant-dark hover:bg-restaurant-accent/20"
              } transition-colors`}
            >
              Admin Access
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
