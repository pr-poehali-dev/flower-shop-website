import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log({ name, email, message });
    // Сброс формы после отправки
    setName("");
    setEmail("");
    setMessage("");
    // Можно добавить уведомление об успешной отправке
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Заголовок */}
        <section className="bg-muted/30 py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Контакты</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Мы всегда рады вашим вопросам и предложениям. Свяжитесь с нами удобным для вас способом.
            </p>
          </div>
        </section>

        {/* Основной контент */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Информация о контактах */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Телефон</h3>
                      <p className="text-muted-foreground mb-1">Мы отвечаем на звонки каждый день с 9:00 до 20:00</p>
                      <a href="tel:+71234567890" className="text-primary hover:underline">+7 (123) 456-78-90</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Электронная почта</h3>
                      <p className="text-muted-foreground mb-1">Отправьте нам сообщение, и мы ответим в течение 24 часов</p>
                      <a href="mailto:info@flower-studio.ru" className="text-primary hover:underline">info@flower-studio.ru</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Адрес</h3>
                      <p className="text-muted-foreground mb-1">Приходите к нам в гости</p>
                      <address className="not-italic">г. Москва, ул. Цветочная, д. 123</address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-full">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Режим работы</h3>
                      <p className="text-muted-foreground mb-1">Мы открыты для вас</p>
                      <p>Пн-Пт: 9:00 - 20:00</p>
                      <p>Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Форма обратной связи */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1">Ваше имя</label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Введите ваше имя" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1">Электронная почта</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Введите вашу почту" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1">Сообщение</label>
                    <Textarea 
                      id="message" 
                      placeholder="Напишите ваше сообщение" 
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Карта */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6 text-center">Как нас найти</h2>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
              <img 
                src="/placeholder.svg" 
                alt="Карта расположения"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;