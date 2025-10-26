import { MenuItem } from "@/pages/Menu";
import { Star } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      {/* Image */}
      {item.image_url ? (
        <div className="h-48 bg-gradient-to-br from-restaurant-accent to-restaurant-gold overflow-hidden">
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-restaurant-accent to-restaurant-gold flex items-center justify-center">
          <Star className="w-12 h-12 text-white opacity-50" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-restaurant-dark flex-1">{item.name}</h3>
          <span className="text-2xl font-bold text-restaurant-accent ml-2">
            ${Number(item.price).toFixed(2)}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {item.description || "An exquisite dish crafted with care"}
        </p>

        <div className="flex items-center gap-2">
          <span className="inline-block px-3 py-1 bg-restaurant-light rounded-full text-sm font-semibold text-restaurant-dark">
            {item.category}
          </span>
        </div>

        <button className="mt-4 w-full py-2 bg-restaurant-dark text-white font-semibold rounded-lg hover:bg-restaurant-accent hover:text-restaurant-dark transition-all duration-300">
          Add to Order
        </button>
      </div>
    </div>
  );
}
