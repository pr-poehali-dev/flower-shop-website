import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface FlowerCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  discountPrice?: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

const FlowerCard = ({
  id,
  name,
  price,
  imageUrl,
  discountPrice,
  isNew = false,
  isBestseller = false,
}: FlowerCardProps) => {
  return (
    <Card className="overflow-hidden group">
      <div className="relative overflow-hidden">
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-primary">Новинка</Badge>
          )}
          {isBestseller && (
            <Badge className="bg-accent">Хит продаж</Badge>
          )}
          {discountPrice && (
            <Badge className="bg-secondary">Скидка</Badge>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white"
        >
          <Heart className="w-5 h-5" />
        </Button>
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center gap-2">
          {discountPrice ? (
            <>
              <span className="text-lg font-bold">{discountPrice} ₽</span>
              <span className="text-sm text-muted-foreground line-through">{price} ₽</span>
            </>
          ) : (
            <span className="text-lg font-bold">{price} ₽</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <ShoppingCart className="w-4 h-4" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FlowerCard;