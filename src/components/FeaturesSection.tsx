import { Flower, Truck, Clock, RefreshCcw } from "lucide-react";

const features = [
  {
    icon: <Flower className="h-10 w-10 text-primary" />,
    title: "Свежие цветы",
    description: "Мы закупаем цветы напрямую у проверенных поставщиков ежедневно",
  },
  {
    icon: <Truck className="h-10 w-10 text-secondary" />,
    title: "Быстрая доставка",
    description: "Доставляем букеты в течение 2 часов по всему городу",
  },
  {
    icon: <Clock className="h-10 w-10 text-accent" />,
    title: "Работаем 24/7",
    description: "Принимаем заказы круглосуточно, без выходных",
  },
  {
    icon: <RefreshCcw className="h-10 w-10 text-floral-lightgreen" />,
    title: "Гарантия свежести",
    description: "Если цветы увянут раньше времени, мы заменим букет бесплатно",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg">
              <div className="mb-4 p-3 rounded-full bg-background shadow-sm">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;