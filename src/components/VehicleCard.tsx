import { Vehicle } from "@/data/vehicles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Users, Gauge } from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
  onBook: (vehicle: Vehicle) => void;
}

const VehicleCard = ({ vehicle, onBook }: VehicleCardProps) => {
  return (
    <Card className="group overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(25,95%,53%,0.15)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge variant={vehicle.type === 'car' ? 'default' : 'secondary'}>
            {vehicle.type === 'car' ? 'Car' : 'Bike'}
          </Badge>
          <Badge variant={vehicle.available ? 'success' : 'destructive'}>
            {vehicle.available ? 'Available' : 'Booked'}
          </Badge>
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg font-semibold text-foreground">{vehicle.name}</h3>
          <p className="text-sm text-muted-foreground">{vehicle.category}</p>
        </div>
      </div>

      <CardContent className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-medium">{vehicle.rating}</span>
            <span className="text-muted-foreground">({vehicle.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {vehicle.location}
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {vehicle.seats && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {vehicle.seats} seats
            </div>
          )}
          {vehicle.engine && (
            <div className="flex items-center gap-1">
              <Gauge className="h-4 w-4" />
              {vehicle.engine}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1">
          {vehicle.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border pt-4">
          <div>
            <span className="text-2xl font-bold text-foreground">₹{vehicle.price.toLocaleString('en-IN')}</span>
            <span className="text-sm text-muted-foreground">/day</span>
          </div>
          <Button 
            variant="hero" 
            size="sm"
            disabled={!vehicle.available}
            onClick={() => onBook(vehicle)}
          >
            {vehicle.available ? 'Book Now' : 'Unavailable'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
