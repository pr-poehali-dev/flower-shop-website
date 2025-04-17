import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-floral-pink/20 to-floral-lavender/30 -z-10"></div>
      <div 
        className="absolute inset-0 -z-20" 
        style={{
          backgroundImage: `url('/placeholder.svg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      ></div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-primary">Цветы</span> для ваших особых моментов
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Мы создаем уникальные букеты с любовью и заботой. Доставка в течение 2 часов по всему городу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Заказать букет
            </Button>
            <Button size="lg" variant="outline">
              Каталог цветов
            </Button>
          </div>
          <div className="pt-4 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">1000+</span>
              <span className="text-sm text-muted-foreground">Довольных клиентов</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">24/7</span>
              <span className="text-sm text-muted-foreground">Работаем для вас</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">2 часа</span>
              <span className="text-sm text-muted-foreground">Время доставки</span>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute -right-20 top-0 w-[500px] h-[500px] rounded-full bg-floral-lavender/20 blur-3xl -z-10"></div>
          <img 
            src="/placeholder.svg" 
            alt="Букет цветов" 
            className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg"
            style={{ aspectRatio: '3/4', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;