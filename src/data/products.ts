import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "product-1",
    restaurantId: "restaurant-1",
    name: "Classic Burger",
    description: "Steak haché, salade, tomate et sauce maison.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    price: 2500,
    category: "Burger",
    isPopular: true,
  },

  {
    id: "product-2",
    restaurantId: "restaurant-1",
    name: "Chicken Burger",
    description: "Poulet croustillant, salade et sauce spéciale.",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
    price: 3000,
    category: "Burger",
    isPopular: true,
  },

  {
    id: "product-3",
    restaurantId: "restaurant-2",
    name: "Margherita",
    description: "Tomate, mozzarella et basilic frais.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    price: 4000,
    category: "Pizza",
    isPopular: true,
  },

  {
    id: "product-4",
    restaurantId: "restaurant-3",
    name: "Healthy Bowl",
    description: "Légumes frais, avocat, quinoa et poulet.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    price: 3500,
    category: "Healthy",
    isPopular: true,
  },
];