import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
          Цифровая инвентаризация
          <span className="block text-blue-500">Морского кладбища</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Современная система учета и поиска захоронений с интерактивной картой,
          полной базой данных и возможностью записи на экскурсии
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            <Icon name="Search" size={20} className="mr-2" />
            Найти захоронение
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-black text-black hover:bg-gray-50"
          >
            <Icon name="MapPin" size={20} className="mr-2" />
            Открыть карту
          </Button>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Map" size={24} className="text-blue-500" />
            </div>
            <h3 className="font-semibold text-black mb-2">
              Интерактивная карта
            </h3>
            <p className="text-gray-600 text-sm">
              Точное расположение участков и дорожек
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Database" size={24} className="text-blue-500" />
            </div>
            <h3 className="font-semibold text-black mb-2">База данных</h3>
            <p className="text-gray-600 text-sm">
              Полная информация о захоронениях
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Search" size={24} className="text-blue-500" />
            </div>
            <h3 className="font-semibold text-black mb-2">Быстрый поиск</h3>
            <p className="text-gray-600 text-sm">
              Поиск по имени, датам, участкам
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" size={24} className="text-blue-500" />
            </div>
            <h3 className="font-semibold text-black mb-2">Экскурсии</h3>
            <p className="text-gray-600 text-sm">
              Запись на тематические экскурсии
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
