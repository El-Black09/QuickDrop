import { Restaurant } from "@/types";

export const restaurants: Restaurant[] = [
  {
    id: "restaurant-1",
    name: "Chicken House",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    rating: 4.8,
    deliveryTime: "25-35 min",
    category: "Poulet • Burgers",
    isOpen: true,
  },

  {
    id: "restaurant-2",
    name: "Pizza House",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    rating: 4.7,
    deliveryTime: "20-30 min",
    category: "Pizza • Italienne",
    isOpen: true,
  },

  {
    id: "restaurant-3",
    name: "Green Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    rating: 4.9,
    deliveryTime: "15-25 min",
    category: "Healthy • Salades",
    isOpen: true,
  },

  {
    id: "restaurant-4",
    name: "Sweet Corner",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    rating: 4.6,
    deliveryTime: "20-30 min",
    category: "Desserts",
    isOpen: false,
  },
];
