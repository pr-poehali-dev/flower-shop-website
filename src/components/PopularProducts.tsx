import { Button } from "@/components/ui/button";
import FlowerCard from "./FlowerCard";

const flowers = [
  {
    id: "1",
    name: "Букет из 25 красных роз",
    price: 5500,
    discountPrice: 4900,
    imageUrl: "/placeholder.svg",
    isNew: false,
    isBestseller: true,
  },
  {
    id: "2",
    name: "Букет из тюльпанов",
    price: 3200,
    imageUrl: "/placeholder.svg",
    isNew: false,
    isBestseller: false,
  },
  {
    id: "3",
    name: "Микс из весенних цветов",
    price: 4800,
    discountPrice: 4200,
    imageUrl: "/placeholder.svg",
    isNew: true,
    isBestseller: false,
  },
  {
    id: "4",
    name: "Нежные пионы",
    price: 6200,
    imageUrl: "/placeholder.svg",
    isNew: false,
    isBestseller: true,
  },
  {
    id: "5",
    name: "Букет с герберами",
    price: 3900,
    imageUrl: "/placeholder.svg",
    isNew: false,
    isBestseller: false,
  },
  {
    id: "6",
    name: "Ромашки в корзине",
    price: 2800,
    imageUrl: "/placeholder.svg",
    isNew: true,
    isBestseller: false,
  },
];

const PopularProducts = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Популярные букеты</h2>
            <p className="text-muted-foreground mt-2">
              Наш выбор свежих и красивых букетов, которые понравятся всем
            </p>
          </div>
          <Button variant="outline">Смотреть все</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {flowers.slice(0, 6).map((flower) => (
            <FlowerCard key={flower.id} {...flower} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;