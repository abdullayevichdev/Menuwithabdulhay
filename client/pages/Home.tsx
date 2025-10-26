import { Link } from "react-router-dom";
import { ChefHat, Clock, Truck, Star } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#1a1a1a",
          color: "white",
          padding: "120px 24px",
        }}
      >
        <div
          style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center" }}
        >
          <div style={{ marginBottom: "32px" }}>
            <ChefHat size={64} style={{ margin: "0 auto", color: "#c9a961" }} />
          </div>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: "16px",
              lineHeight: "1.2",
            }}
          >
            Culinary Excellence
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#ccc",
              marginBottom: "32px",
              maxWidth: "600px",
              margin: "0 auto 32px",
            }}
          >
            Experience fine dining delivered to your doorstep. Fresh
            ingredients, expert preparation, unforgettable taste.
          </p>
          <Link
            to="/menu"
            style={{
              display: "inline-block",
              padding: "16px 48px",
              backgroundColor: "#c9a961",
              color: "#1a1a1a",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "1.125rem",
              borderRadius: "8px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e8d5b5";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#c9a961";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Explore Menu →
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ backgroundColor: "#faf8f3", padding: "80px 24px" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#1a1a1a",
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
            Why Choose Us?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Feature 1 */}
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "16px" }}>
                <ChefHat
                  size={48}
                  style={{ margin: "0 auto", color: "#c9a961" }}
                />
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1a1a1a",
                  marginBottom: "12px",
                }}
              >
                Expert Chefs
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Our culinary experts prepare each dish with precision and
                passion using the finest ingredients.
              </p>
            </div>

            {/* Feature 2 */}
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "16px" }}>
                <Clock
                  size={48}
                  style={{ margin: "0 auto", color: "#c9a961" }}
                />
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1a1a1a",
                  marginBottom: "12px",
                }}
              >
                Fresh & Quick
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Prepared fresh daily and delivered quickly to ensure you enjoy
                your meal at its best.
              </p>
            </div>

            {/* Feature 3 */}
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "16px" }}>
                <Truck
                  size={48}
                  style={{ margin: "0 auto", color: "#c9a961" }}
                />
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1a1a1a",
                  marginBottom: "12px",
                }}
              >
                Fast Delivery
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Hot meals delivered straight to your table within 30 minutes or
                less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section style={{ backgroundColor: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#1a1a1a",
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
            Our Cuisine
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: "🍱",
                name: "Appetizers",
                desc: "Perfect starters to whet your appetite",
              },
              {
                icon: "🍖",
                name: "Main Course",
                desc: "Hearty dishes prepared with excellence",
              },
              {
                icon: "🍰",
                name: "Desserts",
                desc: "Sweet treats to end your meal",
              },
              {
                icon: "🥤",
                name: "Beverages",
                desc: "Refreshing drinks for every taste",
              },
            ].map((category, index) => (
              <div
                key={index}
                style={{
                  padding: "32px",
                  backgroundColor: "#faf8f3",
                  borderRadius: "12px",
                  textAlign: "center",
                  transition: "all 0.3s",
                  border: "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#c9a961";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>
                  {category.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#1a1a1a",
                    marginBottom: "8px",
                  }}
                >
                  {category.name}
                </h3>
                <p style={{ color: "#666", fontSize: "0.95rem" }}>
                  {category.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          backgroundColor: "#1a1a1a",
          color: "white",
          padding: "80px 24px",
        }}
      >
        <div
          style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "24px",
            }}
          >
            Ready to taste excellence?
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#ccc",
              marginBottom: "32px",
            }}
          >
            Browse our menu and place your order now. Your favorite meal is just
            a click away!
          </p>
          <Link
            to="/menu"
            style={{
              display: "inline-block",
              padding: "16px 48px",
              backgroundColor: "#c9a961",
              color: "#1a1a1a",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "1.125rem",
              borderRadius: "8px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e8d5b5";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#c9a961";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View Full Menu →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#0f0f0f",
          color: "#999",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <p style={{ marginBottom: "8px" }}>
            © 2024 Culinary Excellence. All rights reserved.
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            Delivering premium dining experiences to your home
          </p>
        </div>
      </footer>
    </div>
  );
}
