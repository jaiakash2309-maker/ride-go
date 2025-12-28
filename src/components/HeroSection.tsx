import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Bike, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

interface HeroSectionProps {
  onExplore: () => void;
}

const HeroSection = ({ onExplore }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury sports car"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex min-h-screen items-center px-4 pt-16">
        <div className="max-w-2xl space-y-8">
          <div className="animate-fade-in space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Premium Vehicle Rentals
            </div>
            
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Your Journey
              <br />
              <span className="text-gradient">Starts Here</span>
            </h1>
            
            <p className="max-w-lg text-lg text-muted-foreground">
              Experience the thrill of premium cars and bikes. From city rides to
              mountain adventures, find the perfect vehicle for every journey.
            </p>
          </div>

          <div className="animate-slide-up flex flex-wrap gap-4" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" onClick={onExplore}>
              Explore Vehicles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="xl">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-slide-up grid grid-cols-2 gap-6 pt-8 sm:grid-cols-4" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">Cars</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <Bike className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">30+</p>
                <p className="text-sm text-muted-foreground">Bikes</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-muted-foreground">Insured</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
