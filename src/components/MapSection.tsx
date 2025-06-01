import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MapSection = () => {
  const plots = [
    { id: "A1", x: 20, y: 30, occupied: true },
    { id: "A2", x: 30, y: 30, occupied: false },
    { id: "B1", x: 20, y: 50, occupied: true },
    { id: "B2", x: 30, y: 50, occupied: true },
    { id: "C1", x: 50, y: 30, occupied: false },
    { id: "C2", x: 60, y: 30, occupied: true },
  ];

  return (
    <section id="map" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Интерактивная карта кладбища
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Точное расположение участков, дорожек и инфраструктуры с
            возможностью детального просмотра
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6 h-96">
              <div className="relative w-full h-full bg-gray-50 rounded-lg overflow-hidden">
                {/* Дорожки */}
                <div className="absolute inset-0">
                  <div className="absolute bg-gray-300 h-2 w-full top-1/4"></div>
                  <div className="absolute bg-gray-300 h-2 w-full top-3/4"></div>
                  <div className="absolute bg-gray-300 w-2 h-full left-1/3"></div>
                  <div className="absolute bg-gray-300 w-2 h-full right-1/3"></div>
                </div>

                {/* Участки */}
                {plots.map((plot) => (
                  <div
                    key={plot.id}
                    className={`absolute w-12 h-12 rounded cursor-pointer transition-all hover:scale-110 ${
                      plot.occupied
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-200 hover:bg-gray-300 border-2 border-dashed border-gray-400"
                    }`}
                    style={{ left: `${plot.x}%`, top: `${plot.y}%` }}
                    title={`Участок ${plot.id} - ${plot.occupied ? "Занят" : "Свободен"}`}
                  >
                    <div className="flex items-center justify-center h-full text-xs font-bold text-white">
                      {plot.id}
                    </div>
                  </div>
                ))}

                {/* Инфраструктура */}
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <Icon name="Trees" size={16} className="text-white" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <Icon name="Home" size={16} className="text-white" />
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="p-4">
              <h3 className="font-semibold text-black mb-3">Легенда карты</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span>Занятые участки</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-200 border-2 border-dashed border-gray-400 rounded"></div>
                  <span>Свободные участки</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 bg-gray-300"></div>
                  <span>Дорожки</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span>Зеленые зоны</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span>Административные здания</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold text-black mb-3">Статистика</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Всего участков:</span>
                  <span className="font-semibold">2,456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Занято:</span>
                  <span className="font-semibold text-blue-500">1,892</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Свободно:</span>
                  <span className="font-semibold text-green-500">564</span>
                </div>
              </div>
            </Card>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              <Icon name="Maximize" size={16} className="mr-2" />
              Полноэкранный режим
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
