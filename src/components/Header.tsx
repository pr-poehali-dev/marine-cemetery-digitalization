import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Icon name="Map" className="text-blue-500" size={32} />
            <div>
              <h1 className="text-xl font-bold text-black">
                Память Владивостока{" "}
              </h1>
              <p className="text-sm text-gray-600">Владивосток</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#map"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Карта
            </a>
            <a
              href="#search"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Поиск
            </a>
            <a
              href="#register"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Регистрация
            </a>
            <a
              href="#excursions"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Экскурсии
            </a>
          </nav>

          <Button
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            <Icon name="Phone" size={16} className="mr-2" />
            Контакты
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
