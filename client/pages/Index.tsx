import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Index() {
  type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image_url: string;
  };

  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // IntersectionObserver: reveal staggered sections on scroll
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

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data, error } = await supabase
          .from("menu_items")
          .select("*")
          .order("category", { ascending: true })
          .order("name", { ascending: true });
        if (error) throw error;
        setItems(data || []);
      } catch (e: any) {
        console.error("Error loading menu items", e);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const categories = Array.from(new Set(items.map((i) => i.category)));

  return (
    <div className="min-h-screen bg-skyblue-gradient">
      {/* Hero */}
      <section className="animate-zoom-in">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/70 text-skyblue-dark text-xs font-semibold mb-4">Abdulhay's Restaurant</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-skyblue-dark">
              Sky Blue Home, Gold Accents,
              <br />
              Premium Restaurant Experience
            </h1>
            <p className="mt-4 text-skyblue-dark/80 text-lg">
              Milliy va turk taomlari, yevropa klassikalari. Jonli animatsiyalar, tezkor navigatsiya va sokin dizayn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/menu" className="px-6 py-3 rounded-lg bg-restaurant-accent text-restaurant-dark font-bold hover:opacity-90 transition shadow">
                Menyuni ko‘rish
              </a>
              <a href="/admin" className="px-6 py-3 rounded-lg bg-skyblue-dark text-white font-bold hover:opacity-90 transition shadow ring-skyblue">
                Admin Panel
              </a>
            </div>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg animate-float">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop"
              alt="Restaurant Hero"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
        {/* Feature highlights */}
        <div className="stagger grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 rounded-xl p-6 shadow border border-white/50">
            <h3 className="text-skyblue-dark font-bold text-lg mb-1">Milliy & Turk taomlari</h3>
            <p className="text-skyblue-dark/80 text-sm">Osh, lag‘mon, somsa, döner va ko‘proq — sifatli rasmlar bilan.</p>
          </div>
          <div className="bg-white/80 rounded-xl p-6 shadow border border-white/50">
            <h3 className="text-skyblue-dark font-bold text-lg mb-1">Sevimlilar & Qidiruv</h3>
            <p className="text-skyblue-dark/80 text-sm">Yurak bilan saqlang, matn bo‘yicha tez toping.</p>
          </div>
          <div className="bg-white/80 rounded-xl p-6 shadow border border-white/50">
            <h3 className="text-skyblue-dark font-bold text-lg mb-1">Jonli animatsiyalar</h3>
            <p className="text-skyblue-dark/80 text-sm">Stagger, hover micro-interactions va skeleton loaderlar.</p>
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-72 bg-white/80 rounded-xl shadow-sm overflow-hidden border border-white/50 animate-pulse"
              >
                <div className="h-40 bg-white/60" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-white/60 rounded w-2/3" />
                  <div className="h-3 bg-white/60 rounded w-1/2" />
                  <div className="h-4 bg-white/60 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="text-center text-red-600">{error}</div>
        )}

        {!loading && !error && items.length === 0 && (
          <div className="text-center text-slate-600">Hozircha menyu bo'sh</div>
        )}

        {!loading && !error && items.length > 0 && (
          <div className="space-y-10">
            {categories.map((cat) => (
              <section key={cat} className="space-y-4 stagger">
                <h2 className="text-xl font-semibold text-skyblue-dark">
                  {cat}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items
                    .filter((i) => i.category === cat)
                    .map((item, idx) => (
                      <article
                        key={item.id}
                        className="group bg-white/90 rounded-xl shadow-md overflow-hidden border border-white/50 hover:shadow-lg transition-all duration-300 animate-slide-up"
                        style={{ animationDelay: `${(idx % 6) * 60}ms` }}
                      >
                        <div className="relative h-40 overflow-hidden">
                          {item.image_url ? (
                            <img
                              src={item.image_url}
                              alt={item.name}
                              className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          ) : (
                            <div className="h-full w-full bg-slate-100 flex items-center justify-center text-slate-400">
                              No image
                            </div>
                          )}
                        </div>
                        <div className="p-4 space-y-2">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-skyblue-dark font-semibold">{item.name}</h3>
                            <span className="text-restaurant-accent font-bold">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-skyblue-dark/80 text-sm line-clamp-2">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}
