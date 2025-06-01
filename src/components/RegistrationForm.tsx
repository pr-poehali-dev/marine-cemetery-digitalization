import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const RegistrationForm = () => {
  return (
    <section id="register" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Регистрация захоронения
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Внесите полную информацию о захоронении в цифровую базу данных
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-black font-medium">
                    ФИО покойного
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Иванов Петр Сергеевич"
                    className="mt-2 border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="birthYear"
                      className="text-black font-medium"
                    >
                      Год рождения
                    </Label>
                    <Input
                      id="birthYear"
                      type="number"
                      placeholder="1945"
                      className="mt-2 border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="deathYear"
                      className="text-black font-medium"
                    >
                      Год смерти
                    </Label>
                    <Input
                      id="deathYear"
                      type="number"
                      placeholder="2020"
                      className="mt-2 border-gray-300 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="burialDate"
                    className="text-black font-medium"
                  >
                    Дата захоронения
                  </Label>
                  <Input
                    id="burialDate"
                    type="date"
                    className="mt-2 border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="plotNumber"
                    className="text-black font-medium"
                  >
                    Номер участка
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-2 border-gray-300 focus:border-blue-500">
                      <SelectValue placeholder="Выберите участок" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a1">A-1 до A-100</SelectItem>
                      <SelectItem value="b1">B-1 до B-150</SelectItem>
                      <SelectItem value="c1">C-1 до C-200</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-black font-medium">
                    Дополнительная информация
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Заслуги, военная служба, семейное положение..."
                    className="mt-2 border-gray-300 focus:border-blue-500"
                    rows={4}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="text-black font-medium">Фотография</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                    <Icon
                      name="Camera"
                      size={32}
                      className="text-gray-400 mx-auto mb-3"
                    />
                    <p className="text-gray-600 mb-2">
                      Нажмите для загрузки фото
                    </p>
                    <p className="text-sm text-gray-500">PNG, JPG до 5MB</p>
                  </div>
                </div>

                <div>
                  <Label className="text-black font-medium">
                    Координаты на карте
                  </Label>
                  <div className="mt-2 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon
                        name="MapPin"
                        size={32}
                        className="text-gray-400 mx-auto mb-2"
                      />
                      <p className="text-gray-600">
                        Укажите точное расположение
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Выбрать на карте
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Статус регистрации
                  </h4>
                  <div className="flex items-center gap-2 text-blue-700">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm">Ожидает проверки данных</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white flex-1">
                <Icon name="Save" size={16} className="mr-2" />
                Сохранить данные
              </Button>
              <Button variant="outline" className="border-gray-300">
                <Icon name="Eye" size={16} className="mr-2" />
                Предпросмотр
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
