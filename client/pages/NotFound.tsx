import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-restaurant-light flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <h1 className="text-7xl font-bold text-restaurant-dark mb-2">404</h1>
          <div className="h-1 w-20 bg-restaurant-accent mx-auto rounded-full" />
        </div>
        <p className="text-2xl font-bold text-restaurant-dark mb-3">
          Oops! Page not found
        </p>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist. It might have been removed or the URL might be incorrect.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-restaurant-dark text-white font-semibold rounded-lg hover:bg-restaurant-accent hover:text-restaurant-dark transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
