import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-warning">
              <Car className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Ride<span className="text-primary">Hub</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/vehicles" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Vehicles
            </Link>
            <Link to="/bookings" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              My Bookings
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Sign In</span>
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
