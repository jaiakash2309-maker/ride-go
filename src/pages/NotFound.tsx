import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Car, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20">
            <Car className="h-10 w-10 text-primary" />
          </div>
        </div>
        <h1 className="mb-2 text-7xl font-bold text-gradient">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! This road doesn't exist</p>
        <Link to="/">
          <Button variant="hero" size="lg">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
