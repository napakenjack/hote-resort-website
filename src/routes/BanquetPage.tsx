import { useEffect } from 'react';
import { Users, Music, Video, Star } from 'lucide-react';

export function BanquetPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ivory pb-24">
      {/* Hero */}
      <div className="relative pt-32 pb-20 px-4 bg-charcoal text-center overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000')] opacity-30 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80"></div>
        <div className="relative z-10 max-w-3xl mx-auto mt-16">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 uppercase tracking-wider scale-y-110">Банкетный зал</h1>
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-8">Идеальное место для ваших торжеств</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="font-serif text-4xl text-charcoal mb-6">Создаем незабываемые моменты</h2>
            <p className="text-gray-600 leading-relaxed max-w-lg mb-8">
              Роскошный банкетный зал нашего отеля — это идеальное пространство для проведения масштабных мероприятий: свадеб, юбилеев, корпоративных вечеров и презентаций. Элегантный интерьер, современное оснащение и безупречный сервис гарантируют успех вашего события.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-beige p-6 rounded-xl flex flex-col items-center text-center">
                <Users className="text-gold mb-3" size={32} />
                <span className="font-serif text-2xl text-charcoal mb-1">До 250</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Гостей</span>
              </div>
              <div className="bg-beige p-6 rounded-xl flex flex-col items-center text-center">
                <Star className="text-gold mb-3" size={32} />
                <span className="font-serif text-2xl text-charcoal mb-1">Премиум</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Обслуживание</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800" alt="Banquet" className="w-full h-full object-cover rounded-2xl" />
             <div className="flex flex-col gap-4">
               <img src="https://images.unsplash.com/photo-1522030299830-16b8d3d049d5?auto=format&fit=crop&q=80&w=800" alt="Banquet Detail" className="w-full h-[200px] object-cover rounded-2xl" />
               <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" alt="Banquet Detail" className="w-full h-[250px] object-cover rounded-2xl" />
             </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-3xl p-12 shadow-sm mb-24">
          <h3 className="font-serif text-3xl text-center mb-12">Оснащение зала</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center shrink-0">
                <Music className="text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-2">Звуковое оборудование</h4>
                <p className="text-sm text-gray-600">Профессиональный клубный звук, микрофоны, пульт звукорежиссера.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center shrink-0">
                <Star className="text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-2">Световое оформление</h4>
                <p className="text-sm text-gray-600">Динамический свет, архитектурная подсветка, генераторы дыма.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center shrink-0">
                <Video className="text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-2">Видео оборудование</h4>
                <p className="text-sm text-gray-600">Огромный LED экран высокой четкости, плазменные панели по периметру.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-beige rounded-3xl p-12 text-center relative overflow-hidden text-charcoal border border-gold/20">
           <div className="relative z-10">
             <h3 className="font-serif text-4xl mb-6">Планируете мероприятие?</h3>
             <p className="text-gray-600 max-w-2xl mx-auto mb-10">Оставьте заявку, и наш менеджер свяжется с вами для обсуждения деталей, меню и просмотра зала.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://wa.me/77000000000" className="bg-charcoal hover:bg-charcoal/90 text-white px-8 py-4 rounded-full uppercase tracking-widest text-sm font-semibold transition-colors">
                  Написать в WhatsApp
                </a>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
