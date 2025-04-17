import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Flower, Users, Star, MapPin } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Заголовок */}
        <section className="bg-muted/30 py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">О нас</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Цветочная студия с любовью к природе и искусству. Мы создаём уникальные цветочные композиции для любого случая.
            </p>
          </div>
        </section>

        {/* История компании */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6">Наша история</h2>
                <p className="mb-4">
                  Наша цветочная студия была основана в 2015 году группой энтузиастов, объединенных любовью к флористике и желанием создавать настоящие произведения искусства из цветов.
                </p>
                <p className="mb-4">
                  За годы работы мы выросли из небольшого магазинчика в полноценную студию с собственным производством и командой профессиональных флористов, которые постоянно совершенствуют свое мастерство.
                </p>
                <p>
                  Мы гордимся тем, что каждый букет, собранный нашими мастерами, несет в себе индивидуальность, красоту и положительные эмоции, которые мы вкладываем в нашу работу.
                </p>
              </div>
              <div className="bg-muted/30 p-8 rounded-lg">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Наша команда за работой"
                    className="object-cover w-full h-full" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Наши ценности */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Любовь к делу</h3>
                <p className="text-muted-foreground">
                  Мы вкладываем душу в каждый созданный нами букет, потому что по-настоящему любим свою работу.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Flower className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Качество и свежесть</h3>
                <p className="text-muted-foreground">
                  Мы тщательно отбираем цветы для наших букетов, гарантируя их свежесть и долговечность.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Индивидуальный подход</h3>
                <p className="text-muted-foreground">
                  Мы внимательно слушаем пожелания каждого клиента, чтобы создать идеальный букет для любого случая.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Команда */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Наша команда</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img
                    src="/placeholder.svg"
                    alt="Флорист"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-medium">Екатерина</h3>
                <p className="text-primary">Главный флорист</p>
              </div>
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img
                    src="/placeholder.svg"
                    alt="Флорист"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-medium">Александр</h3>
                <p className="text-primary">Креативный директор</p>
              </div>
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img
                    src="/placeholder.svg"
                    alt="Флорист"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-medium">Мария</h3>
                <p className="text-primary">Флорист-дизайнер</p>
              </div>
            </div>
          </div>
        </section>

        {/* Наш адрес */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Наше расположение</h2>
            <div className="max-w-3xl mx-auto">
              <div className="mb-6 flex gap-3 items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
                <address className="not-italic text-lg">
                  г. Москва, ул. Цветочная, д. 123
                </address>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Карта расположения"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;