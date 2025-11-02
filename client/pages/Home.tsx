import { Link } from "react-router-dom";
import { ChefHat, Clock, Truck, Star } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    document.querySelectorAll<HTMLElement>(".stagger").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-skyblue-gradient">
      {/* Hero Section */}
      <section className="animate-zoom-in" style={{ padding: "120px 24px" }}>
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
              color: "#0c4a6e",
            }}
          >
            Abdulhay's Restaurant Menues
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#0c4a6e",
              opacity: 0.8,
              marginBottom: "32px",
              maxWidth: "600px",
              margin: "0 auto 32px",
            }}
          >
            Ushbu saytda ko'plab mazali taomlar mavjud bo'lib, ular sizning
            didingizga mos keladi. Har bir taom yuqori sifatli ingredientlardan
            tayyorlangan va tez yetkazib beriladi.
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
            Menyuni ko'rish →
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ backgroundColor: "#ffffffcc", padding: "80px 24px" }} className="stagger">
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#0c4a6e",
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
            Nimaga bizni tanlaysiz?
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
                  color: "#0c4a6e",
                  marginBottom: "12px",
                }}
              >
                Expert Chefs
              </h3>
              <p style={{ color: "#0c4a6e", opacity: 0.8, lineHeight: "1.6" }}>
                Bizning oshpazlik mutaxassislarimiz har bir taomni aniqlik bilan tayyorlaydilar
eng yaxshi ingredientlardan foydalangan holda ishtiyoq.
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
                  color: "#0c4a6e",
                  marginBottom: "12px",
                }}
              >
                Fresh & Quick
              </h3>
              <p style={{ color: "#0c4a6e", opacity: 0.8, lineHeight: "1.6" }}>
                Har kuni yangi tayyorlanadi va sizga zavqlanish uchun tez yetkazib beriladi
eng yaxshi taomingiz.
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
                  color: "#0c4a6e",
                  marginBottom: "12px",
                }}
              >
                Fast Delivery
              </h3>
              <p style={{ color: "#0c4a6e", opacity: 0.8, lineHeight: "1.6" }}>
                Issiq ovqat 30 daqiqa yoki undan kamroq vaqt ichida to'g'ridan-to'g'ri stolingizga yetkazib beriladi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }} className="stagger">
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#0c4a6e",
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
           Bizning oshxonamiz
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
                    color: "#0c4a6e",
                    marginBottom: "8px",
                  }}
                >
                  {category.name}
                </h3>
                <p style={{ color: "#0c4a6e", opacity: 0.8, fontSize: "0.95rem" }}>
                  {category.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#0c4a6e", color: "white", padding: "80px 24px" }}>
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
            Ajoyib ta'mni tatib ko'rishga tayyormisiz?
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#e2f3ff",
              marginBottom: "32px",
            }}
          >
           Bizning menyuni ko'rib chiqing va hoziroq buyurtma bering. Sizning sevimli taomingiz shunchaki
bir marta bosish masofasida!
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
          Menyuni ko'rish →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#083345", color: "#d3eaf8", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <p style={{ marginBottom: "8px" }}>
            ushbu sayt  30.10.2025 da Abdulhay Avazxanov tomonidan yaratilgan.
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            Sizning uyingizga premium ovqatlanish tajribalarini yetkazib berish
          </p>
        </div>
      </footer>
    </div>
  );
}
