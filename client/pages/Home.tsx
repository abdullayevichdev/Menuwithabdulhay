import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf8f3" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-restaurant-dark via-transparent to-restaurant-dark opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-restaurant-dark mb-6">
              Culinary Excellence
              <span className="block text-restaurant-accent mt-2">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our carefully curated menu, discover extraordinary flavors, and experience fine dining like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center px-8 py-4 bg-restaurant-dark text-white font-semibold rounded-lg hover:bg-restaurant-accent hover:text-restaurant-dark transition-all duration-300 group"
              >
                Explore Menu
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-restaurant-dark font-semibold rounded-lg border-2 border-restaurant-dark hover:bg-restaurant-dark hover:text-white transition-all duration-300"
              >
                View Specials
              </Link>
            </div>
          </div>

          {/* Featured Image Area */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-br from-restaurant-accent to-restaurant-gold rounded-2xl h-96 flex items-center justify-center shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-restaurant-dark/30 to-transparent" />
              <div className="relative text-center text-white">
                <Sparkles className="w-16 h-16 mx-auto mb-4" />
                <p className="text-2xl font-bold">Premium Dining Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-restaurant-dark text-center mb-16">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-restaurant-light to-white hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-restaurant-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-restaurant-dark mb-2">Fresh & Fast</h3>
              <p className="text-gray-600">
                Every dish is prepared fresh to order with premium ingredients sourced daily.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-restaurant-light to-white hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-restaurant-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-restaurant-dark mb-2">Exceptional Service</h3>
              <p className="text-gray-600">
                Our dedicated team ensures every guest receives personalized, attentive care.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-restaurant-light to-white hover:shadow-lg transition-shadow">
              <Sparkles className="w-12 h-12 text-restaurant-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-restaurant-dark mb-2">Signature Dishes</h3>
              <p className="text-gray-600">
                Innovative recipes crafted by our award-winning chefs using traditional methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-restaurant-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Dine?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Browse our full menu and discover your next favorite dish
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center px-8 py-4 bg-restaurant-accent text-restaurant-dark font-semibold rounded-lg hover:bg-restaurant-gold transition-all duration-300 group"
          >
            Start Exploring
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
