import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface Procedure {
  title: string;
  img: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  price: string;
}

export function SpaPage() {
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const procedures: Procedure[] = [
    {
      title: 'Фито-бочка',
      shortDesc: 'Кедровая бочка с целебными травами для глубокого расслабления.',
      fullDesc: 'Лечебная кедровая фито-бочка оказывает мощное оздоравливающее действие на весь организм. Благодаря сочетанию горячего пара и натуральных эфирных масел, происходит глубокое очищение кожи, выведение токсинов и снятие мышечного напряжения. Отлично подходит перед массажем.',
      duration: '15-20 мин',
      price: 'по запросу',
      img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Массаж',
      shortDesc: 'Расслабляющие и восстанавливающие массажные программы.',
      fullDesc: 'Наши программы массажа направлены на полное расслабление и снятие стресса. Мы предлагаем как классический расслабляющий массаж всего тела, так и зональный массаж (спина, шея) для снятия локальных спазмов. Идеальное решение после долгого рабочего дня или перелета.',
      duration: '30 / 60 мин',
      price: 'по запросу',
      img: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Пилинг',
      shortDesc: 'Очищение и обновление кожи для придания ей сияния и мягкости.',
      fullDesc: 'Мягкий пилинг всего тела с использованием натуральных компонентов деликатно удаляет ороговевшие клетки, увлажняет и питает кожу. После процедуры кожа становится невероятно гладкой, подтянутой и бархатистой. Рекомендуется сочетать с фито-бочкой.',
      duration: '30 мин',
      price: 'по запросу',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-ivory pb-24">
      {/* Hero */}
      <div className="relative pt-32 pb-20 px-4 bg-charcoal text-center overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000')] opacity-30 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80"></div>
        <div className="relative z-10 max-w-3xl mx-auto mt-16">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 uppercase tracking-wider scale-y-110">СПА</h1>
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-8">Гармония души и тела</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <h2 className="font-serif text-4xl text-charcoal mb-6">Восстановление и релакс</h2>
           <p className="text-[#666] leading-relaxed text-[13px]">
             Оставьте за порогом суету города. В нашем СПА вы можете расслабиться в целебной фито-бочке, насладиться пилингом и восстановить тонус благодаря профессиональному массажу. Идеальное решение для перезагрузки.
           </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {procedures.map(proc => (
            <div 
              key={proc.title} 
              onClick={() => setSelectedProcedure(proc)}
              className="group cursor-pointer bg-white rounded overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-sand hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={proc.img} alt={proc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-charcoal px-4 py-2 rounded text-[12px] font-bold uppercase tracking-[1px]">Подробнее</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                 <h3 className="font-serif text-2xl text-charcoal mb-3">{proc.title}</h3>
                 <p className="text-[#666] text-[13px]">{proc.shortDesc}</p>
                 <div className="mt-auto pt-6 text-gold text-[10px] font-bold uppercase tracking-[1px]">
                   Нажмите, чтобы узнать больше
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-charcoal rounded p-12 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center"></div>
           <div className="relative z-10">
             <h3 className="font-serif text-4xl mb-6">Запишитесь на сеанс</h3>
             <p className="text-white/70 max-w-2xl mx-auto mb-10 text-[13px]">Подарите себе заслуженный отдых.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-[15px]">
               <a href="https://wa.me/77000000000" className="bg-gold hover:bg-gold-hover text-white px-6 py-3 rounded uppercase tracking-[1px] text-[13px] font-bold transition-colors shadow-lg">
                 Записаться в WhatsApp
               </a>
             </div>
           </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProcedure && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProcedure(null)}
          ></div>
          
          <div className="bg-white rounded-lg w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedProcedure(null)}
              className="absolute top-4 right-4 bg-white/50 hover:bg-white text-charcoal p-2 rounded-full transition-colors z-20 backdrop-blur-sm"
            >
              <X size={20} />
            </button>
            
            <div className="h-64 sm:h-80 relative">
              <img src={selectedProcedure.img} alt={selectedProcedure.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="p-8">
              <h3 className="font-serif text-3xl text-charcoal mb-4">{selectedProcedure.title}</h3>
              <p className="text-[14px] text-[#666] leading-relaxed mb-8">
                {selectedProcedure.fullDesc}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-sand pt-6">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-[1px] text-brown-soft mb-1">Время процедуры</div>
                  <div className="font-serif text-xl text-charcoal">{selectedProcedure.duration}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-[1px] text-brown-soft mb-1">Стоимость</div>
                  <div className="font-serif text-xl text-gold">{selectedProcedure.price}</div>
                </div>
                <a href="https://wa.me/77000000000" className="bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded uppercase text-[12px] font-bold text-center transition-colors">
                  Записаться
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
