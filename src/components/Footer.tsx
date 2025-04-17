import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Колонка 1: О магазине */}
          <div>
            <h3 className="text-lg font-semibold mb-4">🌸 ЦветыСчастья</h3>
            <p className="text-muted-foreground mb-4">
              Цветочный магазин с любовью к деталям. Создаем уникальные букеты
              для любого события.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Колонка 2: Информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition">
                  О нас
                </a>
              </li>
              <li>
                <a href="/delivery" className="text-muted-foreground hover:text-primary transition">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="/care" className="text-muted-foreground hover:text-primary transition">
                  Уход за цветами
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-primary transition">
                  Часто задаваемые вопросы
                </a>
              </li>
              <li>
                <a href="/contacts" className="text-muted-foreground hover:text-primary transition">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+78001234567" className="text-muted-foreground hover:text-primary transition">
                  8 (800) 123-45-67
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@flowers.ru" className="text-muted-foreground hover:text-primary transition">
                  info@flowers.ru
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">
                  г. Москва, ул. Цветочная, д. 7
                </span>
              </li>
            </ul>
          </div>

          {/* Колонка 4: Рассылка */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Подпишитесь на рассылку</h3>
            <p className="text-muted-foreground mb-4">
              Будьте в курсе новинок и специальных предложений
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="max-w-[220px]"
              />
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© 2024 ЦветыСчастья. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;