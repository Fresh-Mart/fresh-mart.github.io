import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: string;
  rating?: number;
  inStock?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({
  product,
}: ProductCardProps) => {
  const { toast } = useToast();

  const addToCart = () => {
    // Get existing cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);

    if (existingItemIndex > -1) {
      // Increment quantity if exists
      cart[existingItemIndex].quantity += 1;
    } else {
      // Add new item with quantity 1
      cart.push({ ...product, quantity: 1 });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Dispatch event to update cart count
    window.dispatchEvent(new Event('cartUpdated'));

    // Show success toast
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group relative overflow-hidden shadow-card transition-all hover:shadow-hover">
      {product.discount && (
        <Badge className="absolute left-2 top-2 z-10 bg-deal text-deal-foreground">
          {product.discount}
        </Badge>
      )}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100"
      >
        <Heart className="h-4 w-4" />
      </Button>

      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="mb-2 line-clamp-2 text-sm font-medium">{product.name}</h3>

        <div className="mb-2 flex items-center space-x-1 text-xs text-muted-foreground">
          <span className="text-secondary">★</span>
          <span>{product.rating ?? 4.5}</span>
        </div>

        <div className="mb-3 flex items-center space-x-2">
          <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <Button className="w-full" onClick={addToCart} disabled={!product.inStock}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;