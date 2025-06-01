import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const SearchSection = () => {
  const [searchResults] = useState([
    {
      id: 2,
      name: "Иванов Петр Сергеевич",
      birthYear: 1945,
      deathYear: 2020,
      burialDate: "15.03.2020",
      plot: "A-127",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Смирнова Анна Ивановна",
      birthYear: 1952,
      deathYear: 2021,
      burialDate: "08.07.2021",
      plot: "B-89",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
  ]);

  return (
    <section id="search" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Поиск захоронений
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Найдите место захоронения по имени, дате или номеру участка
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <Input
                placeholder="ФИО покойного"
                className="border-gray-300 focus:border-blue-500"
              />
              <Input
                placeholder="Год рождения"
                type="number"
                className="border-gray-300 focus:border-blue-500"
              />
              <Select>
                <SelectTrigger className="border-gray-300 focus:border-blue-500">
                  <SelectValue placeholder="Участок" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Участок A</SelectItem>
                  <SelectItem value="b">Участок B</SelectItem>
                  <SelectItem value="c">Участок C</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                <Icon name="Search" size={16} className="mr-2" />
                Найти
              </Button>
            </div>
          </Card>

          <div className="space-y-4">
            {searchResults.map((result) => (
              <Card
                key={result.id}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={result.photo}
                    alt={result.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black">
                      {result.name}
                    </h3>
                    <p className="text-gray-600">
                      {result.birthYear} - {result.deathYear} гг.
                      <span className="mx-2">•</span>
                      Захоронен: {result.burialDate}
                    </p>
                    <p className="text-blue-500 font-medium">
                      Участок: {result.plot}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="MapPin" size={16} className="mr-1" />
                      На карте
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Info" size={16} className="mr-1" />
                      Детали
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Найдено 2 из 1,892 записей</p>
            <Button variant="outline" className="border-blue-500 text-blue-500">
              Показать больше результатов
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
