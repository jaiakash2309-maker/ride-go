import { useState } from "react";
import { Vehicle } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, MapPin, Star, Check } from "lucide-react";
import { format, differenceInDays } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ vehicle, isOpen, onClose }: BookingModalProps) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  if (!vehicle) return null;

  const totalDays = startDate && endDate ? Math.max(1, differenceInDays(endDate, startDate)) : 0;
  const totalPrice = totalDays * vehicle.price;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!startDate || !endDate || !name || !email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Booking Confirmed!",
      description: `Your ${vehicle.name} has been booked successfully.`,
    });

    setTimeout(() => {
      setIsSuccess(false);
      setStartDate(undefined);
      setEndDate(undefined);
      setName("");
      setEmail("");
      setPhone("");
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success">
              <Check className="h-8 w-8 text-success-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Booking Confirmed!</h3>
            <p className="mt-2 text-center text-muted-foreground">
              Your {vehicle.name} has been reserved.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Book {vehicle.name}</DialogTitle>
              <DialogDescription>
                Complete the form below to reserve this vehicle.
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-center gap-4 rounded-lg bg-secondary/50 p-4">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="h-20 w-28 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-semibold">{vehicle.name}</h4>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  {vehicle.rating} · {vehicle.category}
                </div>
                <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {vehicle.location}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !startDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !endDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        disabled={(date) => date < (startDate || new Date())}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 234 567 890"
                  required
                />
              </div>

              {totalDays > 0 && (
                <div className="rounded-lg bg-secondary/50 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      ₹{vehicle.price.toLocaleString('en-IN')} × {totalDays} days
                    </span>
                    <span className="font-medium">₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold text-primary">₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                variant="hero"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Confirm Booking"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
