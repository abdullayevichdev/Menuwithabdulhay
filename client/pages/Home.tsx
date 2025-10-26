export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf8f3", padding: "20px" }}>
      <h1 style={{ color: "#1a1a1a", fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
        Culinary Excellence
      </h1>
      <p style={{ color: "#666", fontSize: "1.25rem", marginBottom: "40px" }}>
        Explore our carefully curated menu
      </p>
      <a href="/menu" style={{ display: "inline-block", padding: "12px 32px", backgroundColor: "#1a1a1a", color: "white", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>
        View Menu
      </a>
    </div>
  );
}
