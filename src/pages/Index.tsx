import { useState, useMemo, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchFilters from "@/components/SearchFilters";
import VehicleCard from "@/components/VehicleCard";
import BookingModal from "@/components/BookingModal";
import { vehicles, Vehicle } from "@/data/vehicles";
import { Car, Bike, Sparkles } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [vehicleType, setVehicleType] = useState("all");
  const [location, setLocation] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const vehiclesRef = useRef<HTMLDivElement>(null);

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const matchesSearch = vehicle.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesType = vehicleType === "all" || vehicle.type === vehicleType;
      const matchesLocation =
        location === "all" || vehicle.location === location;

      let matchesPrice = true;
      if (priceRange === "0-1500") {
        matchesPrice = vehicle.price <= 1500;
      } else if (priceRange === "1500-3000") {
        matchesPrice = vehicle.price > 1500 && vehicle.price <= 3000;
      } else if (priceRange === "3000+") {
        matchesPrice = vehicle.price > 3000;
      }

      return matchesSearch && matchesType && matchesLocation && matchesPrice;
    });
  }, [searchTerm, vehicleType, location, priceRange]);

  const handleBook = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsBookingOpen(true);
  };

  const scrollToVehicles = () => {
    vehiclesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const carCount = vehicles.filter((v) => v.type === "car").length;
  const bikeCount = vehicles.filter((v) => v.type === "bike").length;

  return (
    <>
      <Helmet>
        <title>RideHub - Premium Car & Bike Rentals</title>
        <meta
          name="description"
          content="Rent premium cars and bikes at the best prices. From luxury sedans to sport bikes, find your perfect ride with RideHub."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <HeroSection onExplore={scrollToVehicles} />

        {/* Vehicles Section */}
        <section ref={vehiclesRef} className="py-20" id="vehicles">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                <Sparkles className="h-4 w-4" />
                Our Fleet
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Find Your Perfect Ride
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Browse our collection of premium vehicles. Filter by type,
                location, and price to find exactly what you need.
              </p>

              {/* Quick Stats */}
              <div className="mt-6 flex items-center justify-center gap-8">
                <div className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{carCount} Cars</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bike className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{bikeCount} Bikes</span>
                </div>
              </div>
            </div>

            {/* Filters */}
            <SearchFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              vehicleType={vehicleType}
              onTypeChange={setVehicleType}
              location={location}
              onLocationChange={setLocation}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
            />

            {/* Vehicle Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVehicles.map((vehicle, index) => (
                <div
                  key={vehicle.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <VehicleCard vehicle={vehicle} onBook={handleBook} />
                </div>
              ))}
            </div>

            {filteredVehicles.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-lg text-muted-foreground">
                  No vehicles found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border bg-card/50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-warning">
                  <Car className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">
                  Ride<span className="text-primary">Hub</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2024 RideHub. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Booking Modal */}
        <BookingModal
          vehicle={selectedVehicle}
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </div>
    </>
  );
};

export default Index;
