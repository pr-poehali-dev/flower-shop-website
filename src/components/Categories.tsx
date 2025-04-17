import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "1",
    name: "Розы",
    description: "Классические и элегантные",
    icon: "🌹",
    color: "bg-floral-pink/10",
    link: "/roses",
  },
  {
    id: "2",
    name: "Тюльпаны",
    description: "Символ весны и нежности",
    icon: "🌷",
    color: "bg-floral-lightgreen/10",
    link: "/tulips",
  },
  {
    id: "3",
    name: "Букеты",
    description: "Авторские композиции",
    icon: "💐",
    color: "bg-floral-lavender/10",
    link: "/bouquets",
  },
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Категории цветов</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className={`${category.color} border-none`}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-medium mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                <Button 
                  variant="outline" 
                  className="border-current hover:bg-background/10 hover:text-current"
                  asChild
                >
                  <a href={category.link}>Смотреть все</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;