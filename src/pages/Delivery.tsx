import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Clock, CreditCard, MapPin, Banknote } from "lucide-react";

const DeliveryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Заголовок */}
        <section className="bg-muted/30 py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Доставка и оплата</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Мы доставляем букеты по всему городу быстро и бережно. Узнайте больше о нашей службе доставки и способах оплаты.
            </p>
          </div>
        </section>

        {/* Основная информация */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Доставка */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Truck className="h-6 w-6 text-primary" />
                  Информация о доставке
                </h2>
                <div className="space-y-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Стандартная доставка</h3>
                    <p className="mb-2">Доставка в течение дня с 10:00 до 20:00</p>
                    <p className="text-xl font-semibold text-primary">300 ₽</p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Экспресс-доставка</h3>
                    <p className="mb-2">Доставка в течение 2 часов после оформления заказа</p>
                    <p className="text-xl font-semibold text-primary">500 ₽</p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Бесплатная доставка</h3>
                    <p className="mb-2">При заказе на сумму от 5000 ₽</p>
                    <p className="text-xl font-semibold text-primary">0 ₽</p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-medium mb-2">Зона доставки</h3>
                  <div className="flex gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <p>
                      Мы доставляем букеты по всей Москве и ближайшему Подмосковью в пределах 10 км от МКАД.
                      Для доставки в отдаленные районы возможна дополнительная плата.
                    </p>
                  </div>
                </div>
              </div>

              {/* Оплата */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                  Способы оплаты
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3 p-4 border rounded-lg">
                    <CreditCard className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">Банковской картой</h3>
                      <p className="text-muted-foreground">Visa, MasterCard, МИР</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-4 border rounded-lg">
                    <Banknote className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">Наличными</h3>
                      <p className="text-muted-foreground">При получении заказа</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-floral-pink/10 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Время работы службы доставки</h3>
                  <div className="flex gap-2 mb-3">
                    <Clock className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">Пн-Пт: 8:00 - 22:00</p>
                      <p className="font-medium">Сб-Вс: 9:00 - 21:00</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Для срочных заказов в нерабочее время, пожалуйста, свяжитесь с нами по телефону.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Часто задаваемые вопросы</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Как отследить свой заказ?</h3>
                <p className="text-muted-foreground">
                  После оформления заказа вы получите уникальный номер для отслеживания. Также наш курьер свяжется с вами перед доставкой.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Что делать, если получателя нет дома?</h3>
                <p className="text-muted-foreground">
                  Если получателя нет дома, курьер свяжется с ним по телефону. Букет может быть оставлен соседям или на рецепции (для офисов) по согласованию с заказчиком.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Можно ли изменить адрес доставки после оформления заказа?</h3>
                <p className="text-muted-foreground">
                  Да, вы можете изменить адрес доставки, связавшись с нами по телефону не позднее чем за 3 часа до планируемого времени доставки.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DeliveryPage;