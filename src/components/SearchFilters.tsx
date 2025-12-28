import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Car, Bike, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  vehicleType: string;
  onTypeChange: (value: string) => void;
  location: string;
  onLocationChange: (value: string) => void;
  priceRange: string;
  onPriceChange: (value: string) => void;
}

const SearchFilters = ({
  searchTerm,
  onSearchChange,
  vehicleType,
  onTypeChange,
  location,
  onLocationChange,
  priceRange,
  onPriceChange,
}: SearchFiltersProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-4 backdrop-blur-sm md:p-6">
      <div className="grid gap-4 md:grid-cols-5">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search vehicles..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-secondary/50 border-border/50"
          />
        </div>

        <Select value={vehicleType} onValueChange={onTypeChange}>
          <SelectTrigger className="bg-secondary/50 border-border/50">
            <div className="flex items-center gap-2">
              {vehicleType === 'car' ? (
                <Car className="h-4 w-4" />
              ) : vehicleType === 'bike' ? (
                <Bike className="h-4 w-4" />
              ) : (
                <SlidersHorizontal className="h-4 w-4" />
              )}
              <SelectValue placeholder="Type" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="car">Cars</SelectItem>
            <SelectItem value="bike">Bikes</SelectItem>
          </SelectContent>
        </Select>

        <Select value={location} onValueChange={onLocationChange}>
          <SelectTrigger className="bg-secondary/50 border-border/50">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <SelectValue placeholder="Location" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="Downtown">Downtown</SelectItem>
            <SelectItem value="Airport">Airport</SelectItem>
            <SelectItem value="City Center">City Center</SelectItem>
            <SelectItem value="Beach Area">Beach Area</SelectItem>
            <SelectItem value="Mountain View">Mountain View</SelectItem>
          </SelectContent>
        </Select>

        <Select value={priceRange} onValueChange={onPriceChange}>
          <SelectTrigger className="bg-secondary/50 border-border/50">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Price</SelectItem>
            <SelectItem value="0-100">$0 - $100</SelectItem>
            <SelectItem value="100-150">$100 - $150</SelectItem>
            <SelectItem value="150+">$150+</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchFilters;
