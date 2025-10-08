import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #8B0000 0%, #2F2F4F 50%, #1a1a1a 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)',
        }}></div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block mb-6 p-6 bg-primary/20 rounded-lg border-4 border-secondary">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-full"></div>
                <div className="absolute inset-2 bg-primary rounded-full flex items-center justify-center border-4 border-secondary">
                  <Icon name="Star" size={48} className="text-secondary" />
                </div>
              </div>
              <div className="text-secondary text-2xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
                117 РОБМПрГ
              </div>
            </div>

            <h1 
              className="text-6xl md:text-8xl font-bold text-white leading-tight mb-6"
              style={{ 
                fontFamily: 'Oswald, sans-serif',
                textShadow: '4px 4px 8px rgba(0,0,0,0.8), 0 0 20px rgba(139,0,0,0.5)'
              }}
            >
              ВСТУПАЙ В ДОЛГ
              <br />
              <span className="text-secondary">117 РОБМПрГ</span>
            </h1>

            <div className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              <p className="mb-4 font-semibold">Служи Родине с честью и достоинством</p>
              <p className="text-lg">Стань частью элитного подразделения морской пехоты</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <Card className="bg-card/80 backdrop-blur-sm border-2 border-secondary/30 p-6 hover:border-secondary transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center border-2 border-secondary">
                    <Icon name="Shield" size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    ЗАЩИТА РОДИНЫ
                  </h3>
                  <p className="text-muted-foreground">
                    Почётный долг защитника Отечества
                  </p>
                </div>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-2 border-secondary/30 p-6 hover:border-secondary transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center border-2 border-secondary">
                    <Icon name="Award" size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    ПРОФЕССИОНАЛИЗМ
                  </h3>
                  <p className="text-muted-foreground">
                    Элитная подготовка и обучение
                  </p>
                </div>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-2 border-secondary/30 p-6 hover:border-secondary transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center border-2 border-secondary">
                    <Icon name="Users" size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    БРАТСТВО
                  </h3>
                  <p className="text-muted-foreground">
                    Сплочённый коллектив боевых товарищей
                  </p>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-6 border-4 border-secondary shadow-2xl transition-all hover:scale-105"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                ПОДАТЬ ЗАЯВКУ
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-4 border-secondary text-secondary hover:bg-secondary hover:text-accent-foreground font-bold text-xl px-12 py-6 shadow-2xl transition-all hover:scale-105"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                УЗНАТЬ БОЛЬШЕ
              </Button>
            </div>

            <div className="mt-16 pt-8 border-t-2 border-secondary/30">
              <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} className="text-secondary" />
                  <span>Военкомат г. Москва</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} className="text-secondary" />
                  <span>8-800-XXX-XX-XX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} className="text-secondary" />
                  <span>recruit@117robmprg.ru</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index