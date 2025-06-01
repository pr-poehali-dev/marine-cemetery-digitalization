import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const ExcursionBooking = () => {
  const [selectedTour, setSelectedTour] = useState("");

  const tours = [
    {
      id: "history",
      name: "Историческая экскурсия",
      duration: "2 часа",
      price: "Бесплатно",
      description: "Обзорная экскурсия по историческим участкам кладбища",
      schedule: ["10:00", "14:00", "16:00"],
    },
    {
      id: "military",
      name: "Военно-мемориальная",
      duration: "1.5 часа",
      price: "Бесплатно",
      description: "Посещение захоронений военных моряков и героев",
      schedule: ["11:00", "15:00"],
    },
    {
      id: "architecture",
      name: "Архитектурная экскурсия",
      duration: "2.5 часа",
      price: "500 ₽",
      description: "Памятники и мемориальная архитектура кладбища",
      schedule: ["13:00"],
    },
  ];

  return (
    <section id="excursions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Экскурсии по кладбищу
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с историей и архитектурой Морского кладбища в
            сопровождении гида
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {tours.map((tour) => (
              <Card
                key={tour.id}
                className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                  selectedTour === tour.id
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : ""
                }`}
                onClick={() => setSelectedTour(tour.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {tour.name}
                    </h3>
                    <p className="text-gray-600 mb-3">{tour.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Wallet" size={16} />
                        <span>{tour.price}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedTour === tour.id
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedTour === tour.id && (
                      <Icon name="Check" size={14} className="text-white" />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-black mb-2">
                    Доступное время:
                  </p>
                  <div className="flex gap-2">
                    {tour.schedule.map((time) => (
                      <span
                        key={time}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <Card className="p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-black mb-6">
                Запись на экскурсию
              </h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-black font-medium">
                    Ваше имя
                  </Label>
                  <Input
                    id="name"
                    placeholder="Иван Петров"
                    className="mt-2 border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-black font-medium">
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+7 (999) 123-45-67"
                    className="mt-2 border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div>
                  <Label htmlFor="date" className="text-black font-medium">
                    Дата экскурсии
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    className="mt-2 border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div>
                  <Label htmlFor="time" className="text-black font-medium">
                    Время
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-2 border-gray-300 focus:border-blue-500">
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="13:00">13:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="people" className="text-black font-medium">
                    Количество человек
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-2 border-gray-300 focus:border-blue-500">
                      <SelectValue placeholder="Выберите количество" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 человек</SelectItem>
                      <SelectItem value="2">2 человека</SelectItem>
                      <SelectItem value="3-5">3-5 человек</SelectItem>
                      <SelectItem value="6-10">6-10 человек</SelectItem>
                      <SelectItem value="group">
                        Группа (10+ человек)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white"
                disabled={!selectedTour}
              >
                <Icon name="Calendar" size={16} className="mr-2" />
                Записаться на экскурсию
              </Button>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <Icon name="Info" size={16} className="inline mr-1" />
                  Экскурсии проводятся ежедневно кроме понедельника. Группы до
                  15 человек.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcursionBooking;
