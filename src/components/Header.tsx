import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">FreshMart</div>
          </Link>

          <div className="hidden flex-1 items-center justify-center space-x-4 md:flex">
            <div className="relative w-full max-w-2xl">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for products..."
                className="w-full pl-10"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <MapPin className="h-5 w-5" />
            </Button>
            <Link to="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  0
                </span>
              </Button>
            </Link>
          </div>
        </div>

        <nav className="hidden border-t py-3 md:block">
          <ul className="flex items-center justify-center space-x-8">
            <li>
              <Link
                to="/categories"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/categories") ? "text-primary" : "text-foreground"
                }`}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/promotions"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/promotions") ? "text-primary" : "text-foreground"
                }`}
              >
                Promotions
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/shop") ? "text-primary" : "text-foreground"
                }`}
              >
                Shop
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
