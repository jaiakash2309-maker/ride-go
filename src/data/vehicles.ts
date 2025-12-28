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
    name: 'Royal Enfield Classic 350',
    type: 'bike',
    category: 'Cruiser',
    price: 1500,
    image: '/bike-cruiser.jpg',
    location: 'Mumbai',
    available: true,
    rating: 4.8,
    reviews: 245,
    features: ['ABS', 'Fuel Injection', 'Digital Console'],
    engine: '349cc',
  },
  {
    id: '2',
    name: 'Mahindra XUV700',
    type: 'car',
    category: 'SUV',
    price: 4500,
    image: '/car-suv.jpg',
    location: 'Delhi',
    available: true,
    rating: 4.9,
    reviews: 189,
    features: ['ADAS', 'Sunroof', 'Leather Seats', 'GPS'],
    seats: 7,
  },
  {
    id: '3',
    name: 'Tata Nexon EV',
    type: 'car',
    category: 'Electric SUV',
    price: 3500,
    image: '/car-sedan.jpg',
    location: 'Bangalore',
    available: true,
    rating: 4.7,
    reviews: 156,
    features: ['Electric', 'Fast Charging', 'Connected Car'],
    seats: 5,
  },
  {
    id: '4',
    name: 'KTM Duke 390',
    type: 'bike',
    category: 'Sport',
    price: 2000,
    image: '/bike-sport.jpg',
    location: 'Pune',
    available: false,
    rating: 4.8,
    reviews: 312,
    features: ['TFT Display', 'Quickshifter', 'LED Lights'],
    engine: '373cc',
  },
  {
    id: '5',
    name: 'Maruti Swift Dzire',
    type: 'car',
    category: 'Sedan',
    price: 2000,
    image: '/car-coupe.jpg',
    location: 'Chennai',
    available: true,
    rating: 4.5,
    reviews: 423,
    features: ['AC', 'Power Steering', 'Bluetooth'],
    seats: 5,
  },
  {
    id: '6',
    name: 'Bajaj Pulsar NS200',
    type: 'bike',
    category: 'Sport',
    price: 1200,
    image: '/bike-sport.jpg',
    location: 'Hyderabad',
    available: true,
    rating: 4.6,
    reviews: 278,
    features: ['Perimeter Frame', 'Mono Shock', 'ABS'],
    engine: '199cc',
  },
  {
    id: '7',
    name: 'Hyundai Creta',
    type: 'car',
    category: 'SUV',
    price: 3800,
    image: '/car-suv.jpg',
    location: 'Mumbai',
    available: true,
    rating: 4.8,
    reviews: 567,
    features: ['Panoramic Sunroof', 'Ventilated Seats', 'ADAS'],
    seats: 5,
  },
  {
    id: '8',
    name: 'Honda Activa 6G',
    type: 'bike',
    category: 'Scooter',
    price: 500,
    image: '/bike-cruiser.jpg',
    location: 'Kolkata',
    available: true,
    rating: 4.4,
    reviews: 834,
    features: ['Silent Start', 'LED Headlamp', 'USB Charging'],
    engine: '109cc',
  },
];
