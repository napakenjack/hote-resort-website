import { useEffect } from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

export function GuidePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const guideItems = [
    {
      title: 'Национальный музей Республики Казахстан',
      category: 'Достопримечательности',
      dist: '1.5 км',
      time: '20 мин пешком',
      desc: 'Один из крупнейших музеев Центральной Азии. Уникальные экспонаты истории и культуры.',
      img: 'https://images.unsplash.com/photo-1572085313466-6710de8d7eba?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Монумент Байтерек',
      category: 'Достопримечательности',
      dist: '2.0 км',
      time: '5 мин на такси',
      desc: 'Символ Астаны со смотровой площадкой, откуда открывается панорамный вид на город.',
      img: 'https://images.unsplash.com/photo-1582236371720-33b2ec62bde7?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'ТРЦ Хан Шатыр',
      category: 'Шопинг',
      dist: '3.5 км',
      time: '10 мин на такси',
      desc: 'Крупнейший торгово-развлекательный центр. Шопинг, искусственный пляж и развлечения.',
      img: 'https://images.unsplash.com/photo-1542314831-c6a4d14d8379?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Театр Оперы и Балета',
      category: 'Культура',
      dist: '1.0 км',
      time: '12 мин пешком',
      desc: 'Классические постановки и современные премьеры в великолепном здании с уникальной акустикой.',
      img: 'https://images.unsplash.com/photo-1507676184212-d0330a156f95?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-ivory pb-24">
      <div className="relative pt-32 pb-20 px-4 bg-charcoal text-center overflow-hidden">
        <div className="relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Гид по городу</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">Лучшие места рядом с отелем: достопримечательности, рестораны и маршруты.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {['Все', 'Достопримечательности', 'Шопинг', 'Рестораны', 'Культура'].map((filter, i) => (
             <button key={filter} className={`text-sm px-6 py-2.5 rounded-full uppercase tracking-widest font-semibold transition-colors border ${i === 0 ? 'bg-charcoal text-white border-charcoal' : 'border-gray-300 text-gray-500 hover:border-charcoal hover:text-charcoal'}`}>
               {filter}
             </button>
          ))}
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {guideItems.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
              <div className="sm:w-2/5 relative overflow-hidden shrink-0">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover min-h-[200px] transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                 <span className="text-gold text-xs uppercase tracking-widest font-bold mb-2 block">{item.category}</span>
                 <h3 className="font-serif text-2xl text-charcoal mb-4">{item.title}</h3>
                 
                 <div className="flex flex-col gap-2 mb-4 text-xs tracking-widest uppercase text-gray-500">
                   <div className="flex items-center gap-2">
                     <MapPin size={14} className="text-gold" /> {item.dist} от отеля
                   </div>
                   <div className="flex items-center gap-2">
                     <Clock size={14} className="text-gold" /> {item.time}
                   </div>
                 </div>

                 <p className="text-gray-500 text-sm mb-6 flex-grow">{item.desc}</p>
                 
                 <button className="inline-flex items-center gap-2 text-charcoal text-xs uppercase tracking-widest font-semibold mt-auto hover:text-gold transition-colors">
                   Подробнее <ArrowRight size={14} />
                 </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Concierge */}
        <div className="bg-beige rounded-3xl p-12 text-center border border-gold/20 relative overflow-hidden">
           <div className="relative z-10">
             <h3 className="font-serif text-3xl text-charcoal mb-4">Нужна помощь с маршрутом?</h3>
             <p className="text-gray-600 max-w-2xl mx-auto mb-8">Наш консьерж с удовольствием поможет вам спланировать идеальный день в городе, забронирует билеты или организует трансфер.</p>
             <a href="https://wa.me/77000000000" className="inline-block bg-charcoal hover:bg-gold text-white px-8 py-4 rounded-full uppercase tracking-widest text-sm font-semibold transition-colors">
               Написать администратору
             </a>
           </div>
        </div>

      </div>
    </div>
  );
}
