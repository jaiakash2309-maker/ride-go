export interface Vehicle {
  id: string;
  name: string;
  type: 'car' | 'bike';
  category: string;
  price: number;
  image: string;
  location: string;
  available: boolean;
  rating: number;
  reviews: number;
  features: string[];
  seats?: number;
  engine?: string;
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Sport Ninja 650',
    type: 'bike',
    category: 'Sport',
    price: 75,
    image: '/bike-sport.jpg',
    location: 'Downtown',
    available: true,
    rating: 4.8,
    reviews: 124,
    features: ['ABS', 'LED Lights', 'Digital Display'],
    engine: '650cc',
  },
  {
    id: '2',
    name: 'Luxury SUV X5',
    type: 'car',
    category: 'SUV',
    price: 120,
    image: '/car-suv.jpg',
    location: 'Airport',
    available: true,
    rating: 4.9,
    reviews: 89,
    features: ['GPS', 'Bluetooth', 'Leather Seats', 'Sunroof'],
    seats: 7,
  },
  {
    id: '3',
    name: 'Tesla Model S',
    type: 'car',
    category: 'Sedan',
    price: 150,
    image: '/car-sedan.jpg',
    location: 'City Center',
    available: true,
    rating: 4.9,
    reviews: 156,
    features: ['Autopilot', 'Electric', 'Premium Sound'],
    seats: 5,
  },
  {
    id: '4',
    name: 'Classic Cruiser',
    type: 'bike',
    category: 'Cruiser',
    price: 85,
    image: '/bike-cruiser.jpg',
    location: 'Beach Area',
    available: false,
    rating: 4.7,
    reviews: 67,
    features: ['Chrome Finish', 'Leather Saddle', 'V-Twin Engine'],
    engine: '1200cc',
  },
  {
    id: '5',
    name: 'Sports Coupe GT',
    type: 'car',
    category: 'Sports',
    price: 200,
    image: '/car-coupe.jpg',
    location: 'Downtown',
    available: true,
    rating: 4.8,
    reviews: 42,
    features: ['Sport Mode', 'Carbon Fiber', 'Racing Seats'],
    seats: 2,
  },
  {
    id: '6',
    name: 'Adventure Touring',
    type: 'bike',
    category: 'Touring',
    price: 95,
    image: '/bike-sport.jpg',
    location: 'Mountain View',
    available: true,
    rating: 4.6,
    reviews: 78,
    features: ['Panniers', 'Heated Grips', 'GPS'],
    engine: '800cc',
  },
];
