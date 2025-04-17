import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlowerCard, { FlowerCardProps } from "@/components/FlowerCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, Filter } from "lucide-react";

// Моковые данные для страницы роз
const rosesData: FlowerCardProps[] = [
  {
    id: "1",
    name: "Красные розы (25 шт)",
    price: 5500,
    imageUrl: "/placeholder.svg",
    isBestseller: true
  },
  {
    id: "2",
    name: "Белые розы (15 шт)",
    price: 4200,
    imageUrl: "/placeholder.svg",
    discountPrice: 3800
  },
  {
    id: "3",
    name: "Розовые розы (11 шт)",
    price: 3200,
    imageUrl: "/placeholder.svg"
  },
  {
    id: "4",
    name: "Коралловые розы (7 шт)",
    price: 2100,
    imageUrl: "/placeholder.svg",
    isNew: true
  },
  {
    id: "5",
    name: "Микс букет из роз (19 шт)",
    price: 4900,
    imageUrl: "/placeholder.svg"
  },
  {
    id: "6",
    name: "Синие розы (5 шт)",
    price: 2500,
    imageUrl: "/placeholder.svg",
    isNew: true
  },
  {
    id: "7",
    name: "Кремовые розы (101 шт)",
    price: 16900,
    imageUrl: "/placeholder.svg",
    discountPrice: 15900,
    isBestseller: true
  },
  {
    id: "8",
    name: "Желтые розы (9 шт)",
    price: 2900,
    imageUrl: "/placeholder.svg"
  }
];

const RosesPage = () => {
  const [priceRange, setPriceRange] = useState<number[]>([1000, 10000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    onlyNew: false,
    onlyDiscount: false,
    onlyBestseller: false
  });

  // Фильтрация роз на основе установленных фильтров
  const filteredRoses = rosesData.filter(rose => {
    // Проверка по поисковому запросу
    if (searchQuery && !rose.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Проверка по диапазону цен
    const priceToCheck = rose.discountPrice || rose.price;
    if (priceToCheck < priceRange[0] || priceToCheck > priceRange[1]) {
      return false;
    }
    
    // Проверка по флагам
    if (filters.onlyNew && !rose.isNew) {
      return false;
    }
    
    if (filters.onlyDiscount && !rose.discountPrice) {
      return false;
    }
    
    if (filters.onlyBestseller && !rose.isBestseller) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-8">
        {/* Заголовок */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Розы</h1>
          <p className="text-muted-foreground">
            Изысканные и благородные розы различных сортов и оттенков. Выберите идеальный букет для особого случая или любимого человека.
          </p>
        </section>

        {/* Фильтры и поиск */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Input 
                placeholder="Поиск по названию" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            </div>
            
            <div>
              <Select defaultValue="popularity">
                <SelectTrigger>
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">По популярности</SelectItem>
                  <SelectItem value="priceAsc">По возрастанию цены</SelectItem>
                  <SelectItem value="priceDesc">По убыванию цены</SelectItem>
                  <SelectItem value="newest">Сначала новинки</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative">
              <Select>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <span>Фильтры</span>
                </SelectTrigger>
                <SelectContent className="w-[300px]">
                  <div className="p-4 space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Цена</h3>
                      <div className="space-y-4">
                        <Slider 
                          defaultValue={[1000, 10000]} 
                          max={20000} 
                          min={0} 
                          step={100} 
                          value={priceRange}
                          onValueChange={setPriceRange}
                        />
                        <div className="flex justify-between text-sm">
                          <span>{priceRange[0]} ₽</span>
                          <span>{priceRange[1]} ₽</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="new" 
                          checked={filters.onlyNew}
                          onCheckedChange={(checked) => 
                            setFilters({...filters, onlyNew: checked === true})
                          }
                        />
                        <Label htmlFor="new">Только новинки</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="discount" 
                          checked={filters.onlyDiscount}
                          onCheckedChange={(checked) => 
                            setFilters({...filters, onlyDiscount: checked === true})
                          }
                        />
                        <Label htmlFor="discount">Со скидкой</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="bestseller" 
                          checked={filters.onlyBestseller}
                          onCheckedChange={(checked) => 
                            setFilters({...filters, onlyBestseller: checked === true})
                          }
                        />
                        <Label htmlFor="bestseller">Хиты продаж</Label>
                      </div>
                    </div>
                  </div>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Список роз */}
        <section>
          {filteredRoses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredRoses.map(rose => (
                <FlowerCard key={rose.id} {...rose} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">По вашему запросу ничего не найдено</h3>
              <p className="text-muted-foreground">Попробуйте изменить параметры фильтрации или поиска</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RosesPage;