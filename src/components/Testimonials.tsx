import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Анна Сергеева",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Очень довольна сервисом! Букет был доставлен вовремя и выглядел даже лучше, чем на фото. Цветы свежие и простояли больше недели.",
  },
  {
    id: "2",
    name: "Дмитрий Иванов",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Заказывал букет на день рождения жены. Доставка была точно в указанное время, цветы свежие и красивые. Рекомендую!",
  },
  {
    id: "3",
    name: "Екатерина Петрова",
    avatar: "/placeholder.svg",
    rating: 4,
    text: "Хороший выбор цветов и композиций. Приятно удивил сервис и качество. Буду заказывать снова.",
  },
  {
    id: "4",
    name: "Мария Козлова",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Третий раз заказываю букеты в этом магазине и всегда остаюсь довольна. Цветы держатся долго, а композиции всегда оригинальные.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          Отзывы наших клиентов
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground flex-grow mb-4">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-6">
            <CarouselPrevious className="static relative transform-none w-10 h-10" />
            <CarouselNext className="static relative transform-none w-10 h-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;