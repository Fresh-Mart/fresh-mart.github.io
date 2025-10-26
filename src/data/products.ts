import apples from "@/assets/products/apples.jpg";
import bananas from "@/assets/products/bananas.jpg";
import oranges from "@/assets/products/oranges.jpg";
import strawberries from "@/assets/products/strawberries.jpg";
import grapes from "@/assets/products/grapes.jpg";
import broccoli from "@/assets/products/broccoli.jpg";
import spinach from "@/assets/products/spinach.jpg";
import peppers from "@/assets/products/peppers.jpg";
import potatoes from "@/assets/products/potatoes.jpg";
import productVegetables from "@/assets/product-vegetables.jpg";
import chicken from "@/assets/products/chicken.jpg";
import salmon from "@/assets/products/salmon.jpg";
import shrimp from "@/assets/products/shrimp.jpg";
import beef from "@/assets/products/beef.jpg";
import productMeat from "@/assets/product-meat.jpg";
import milk from "@/assets/products/milk.jpg";
import cheese from "@/assets/products/cheese.jpg";
import yogurt from "@/assets/products/yogurt.jpg";
import eggs from "@/assets/products/eggs.jpg";
import productDairy from "@/assets/product-dairy.jpg";
import bread from "@/assets/products/bread.jpg";
import croissant from "@/assets/products/croissant.jpg";
import muffins from "@/assets/products/muffins.jpg";
import chips from "@/assets/products/chips.jpg";
import cookies from "@/assets/products/cookies.jpg";
import nuts from "@/assets/products/nuts.jpg";
import chocolate from "@/assets/products/chocolate.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: string;
  rating?: number;
  category: string;
  inStock?: boolean;
}

export const products: Product[] = [
  // Fruits
  {
    id: "fruits-1",
    name: "Fresh Red Apples",
    price: 4.99,
    originalPrice: 6.99,
    image: apples,
    discount: "Save 29%",
    rating: 4.8,
    category: "fruits",
  },
  {
    id: "fruits-2",
    name: "Organic Bananas",
    price: 3.49,
    image: bananas,
    rating: 4.7,
    category: "fruits",
  },
  {
    id: "fruits-3",
    name: "Sweet Oranges",
    price: 5.99,
    originalPrice: 7.99,
    image: oranges,
    discount: "Save 25%",
    rating: 4.6,
    category: "fruits",
  },
  {
    id: "fruits-4",
    name: "Fresh Strawberries",
    price: 6.99,
    image: strawberries,
    rating: 4.9,
    category: "fruits",
  },
  {
    id: "fruits-5",
    name: "Green Grapes",
    price: 7.49,
    originalPrice: 9.99,
    image: grapes,
    discount: "Save 25%",
    rating: 4.5,
    category: "fruits",
  },

  // Vegetables
  {
    id: "vegetables-1",
    name: "Fresh Broccoli",
    price: 3.99,
    image: broccoli,
    rating: 4.6,
    category: "vegetables",
  },
  {
    id: "vegetables-2",
    name: "Organic Spinach",
    price: 4.49,
    originalPrice: 5.99,
    image: spinach,
    discount: "Save 25%",
    rating: 4.7,
    category: "vegetables",
  },
  {
    id: "vegetables-3",
    name: "Red Bell Peppers",
    price: 5.99,
    image: peppers,
    rating: 4.5,
    category: "vegetables",
  },
  {
    id: "vegetables-4",
    name: "Fresh Potatoes",
    price: 2.99,
    image: potatoes,
    rating: 4.4,
    category: "vegetables",
  },
  {
    id: "vegetables-5",
    name: "Mixed Vegetables Pack",
    price: 12.99,
    originalPrice: 19.99,
    image: productVegetables,
    discount: "Save 35%",
    rating: 4.8,
    category: "vegetables",
  },

  // Meat & Seafood
  {
    id: "meat-1",
    name: "Fresh Chicken Breast",
    price: 12.99,
    image: chicken,
    rating: 4.7,
    category: "meat",
  },
  {
    id: "meat-2",
    name: "Premium Salmon Fillet",
    price: 18.99,
    originalPrice: 24.99,
    image: salmon,
    discount: "Save 24%",
    rating: 4.9,
    category: "meat",
  },
  {
    id: "meat-3",
    name: "Fresh Shrimp",
    price: 16.99,
    image: shrimp,
    rating: 4.6,
    category: "meat",
  },
  {
    id: "meat-4",
    name: "Ground Beef",
    price: 14.99,
    originalPrice: 18.99,
    image: beef,
    discount: "Save 21%",
    rating: 4.5,
    category: "meat",
  },
  {
    id: "meat-5",
    name: "Premium Meat Selection",
    price: 25.99,
    originalPrice: 32.99,
    image: productMeat,
    discount: "Save 21%",
    rating: 4.8,
    category: "meat",
  },

  // Dairy & Eggs
  {
    id: "dairy-1",
    name: "Fresh Milk",
    price: 4.99,
    image: milk,
    rating: 4.8,
    category: "dairy",
  },
  {
    id: "dairy-2",
    name: "Cheddar Cheese",
    price: 7.99,
    originalPrice: 9.99,
    image: cheese,
    discount: "Save 20%",
    rating: 4.7,
    category: "dairy",
  },
  {
    id: "dairy-3",
    name: "Greek Yogurt",
    price: 5.49,
    image: yogurt,
    rating: 4.6,
    category: "dairy",
  },
  {
    id: "dairy-4",
    name: "Fresh Eggs (Dozen)",
    price: 6.99,
    image: eggs,
    rating: 4.9,
    category: "dairy",
  },
  {
    id: "dairy-5",
    name: "Premium Dairy Collection",
    price: 18.99,
    originalPrice: 24.99,
    image: productDairy,
    discount: "Save 24%",
    rating: 4.8,
    category: "dairy",
  },

  // Bakery
  {
    id: "bakery-1",
    name: "Fresh Bread Loaf",
    price: 3.99,
    image: bread,
    rating: 4.7,
    category: "bakery",
  },
  {
    id: "bakery-2",
    name: "Butter Croissants",
    price: 5.99,
    originalPrice: 7.99,
    image: croissant,
    discount: "Save 25%",
    rating: 4.8,
    category: "bakery",
  },
  {
    id: "bakery-3",
    name: "Chocolate Muffins",
    price: 6.49,
    image: muffins,
    rating: 4.6,
    category: "bakery",
  },

  // Snacks
  {
    id: "snacks-1",
    name: "Potato Chips",
    price: 3.49,
    image: chips,
    rating: 4.5,
    category: "snacks",
  },
  {
    id: "snacks-2",
    name: "Chocolate Cookies",
    price: 4.99,
    originalPrice: 6.99,
    image: cookies,
    discount: "Save 29%",
    rating: 4.7,
    category: "snacks",
  },
  {
    id: "snacks-3",
    name: "Mixed Nuts",
    price: 8.99,
    image: nuts,
    rating: 4.8,
    category: "snacks",
  },
  {
    id: "snacks-4",
    name: "Chocolate Bars",
    price: 2.99,
    image: chocolate,
    rating: 4.6,
    category: "snacks",
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export const getCategoryInfo = (slug: string) => {
  const categoryMap: Record<string, { name: string; description: string }> = {
    fruits: {
      name: "Fresh Fruits",
      description: "Fresh, organic fruits delivered daily",
    },
    vegetables: {
      name: "Vegetables",
      description: "Farm-fresh vegetables for healthy living",
    },
    meat: {
      name: "Meat & Seafood",
      description: "Premium quality meat and fresh seafood",
    },
    dairy: {
      name: "Dairy & Eggs",
      description: "Fresh dairy products and farm eggs",
    },
    bakery: {
      name: "Bakery",
      description: "Freshly baked goods every day",
    },
    snacks: {
      name: "Snacks",
      description: "Delicious snacks for every occasion",
    },
  };

  return categoryMap[slug] || { name: "Category", description: "Browse our products" };
};
