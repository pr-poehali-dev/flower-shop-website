import { ShoppingCart, Menu, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <nav className="flex flex-col gap-4 text-lg font-medium">
                <a href="/" className="hover:text-primary transition">Главная</a>
                <a href="/catalog" className="hover:text-primary transition">Каталог</a>
                <a href="/bouquets" className="hover:text-primary transition">Букеты</a>
                <a href="/delivery" className="hover:text-primary transition">Доставка</a>
                <a href="/about" className="hover:text-primary transition">О нас</a>
                <a href="/contacts" className="hover:text-primary transition">Контакты</a>
              </nav>
            </SheetContent>
          </Sheet>
          <a href="/" className="flex items-center gap-2 text-xl font-bold text-primary mr-8">
            <span>🌸 ЦветыСчастья</span>
          </a>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-primary transition px-3 py-2" href="/">
                  Главная
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-primary transition">
                  Каталог
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-floral-lavender/50 to-floral-pink/50 p-6 no-underline outline-none focus:shadow-md"
                          href="/bouquets"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Букеты на любой вкус
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Специальные предложения для особых случаев
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/roses" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Розы</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Классические, кустовые, пионовидные
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/tulips" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Тюльпаны</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Весенние цветы разных сортов
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/gerberas" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Герберы</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Яркие и солнечные цветы
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-primary transition px-3 py-2" href="/delivery">
                  Доставка
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-primary transition px-3 py-2" href="/about">
                  О нас
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-primary transition px-3 py-2" href="/contacts">
                  Контакты
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center relative">
            <Input 
              type="search" 
              placeholder="Поиск..." 
              className="w-[200px] lg:w-[300px] pr-8" 
            />
            <Search className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
          <a href="tel:+78001234567" className="hidden md:flex items-center text-sm font-medium">
            <Phone className="h-4 w-4 mr-2" />
            8 (800) 123-45-67
          </a>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;