import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: string;
  rating?: number;
  inStock?: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  discount,
  rating = 4.5,
  inStock = true,
}: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden shadow-card transition-all hover:shadow-hover">
      {discount && (
        <Badge className="absolute left-2 top-2 z-10 bg-deal text-deal-foreground">
          {discount}
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
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="mb-2 line-clamp-2 text-sm font-medium">{name}</h3>

        <div className="mb-2 flex items-center space-x-1 text-xs text-muted-foreground">
          <span className="text-secondary">★</span>
          <span>{rating}</span>
        </div>

        <div className="mb-3 flex items-center space-x-2">
          <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <Button className="w-full" disabled={!inStock}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          {inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
