import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export function NewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const news = [
    {
      title: 'Новое меню завтраков в нашем ресторане',
      date: '15 Сентября 2026',
      category: 'Ресторан',
      img: 'https://plus.unsplash.com/premium_photo-1723600945524-ac4d8ada5989?q=80&w=1280&auto=format&fit=crop',
      excerpt: 'Шеф-повар обновил меню завтраков. Теперь для гостей доступен расширенный выбор блюд здорового питания, свежей выпечки и авторских десертов.'
    },
    {
      title: 'Открытие обновленного СПА комплекса',
      date: '02 Октября 2026',
      category: 'СПА',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
      excerpt: 'Мы рады сообщить об открытии обновленной СПА-зоны. Теперь к вашим услугам новый хаммам, расширенная зона релаксации и новые программы ухода.'
    },
    {
      title: 'Специальное предложение для молодоженов',
      date: '10 Ноября 2026',
      category: 'Акции',
      img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
      excerpt: 'Бронируйте банкетный зал для вашей свадьбы и получите комплиментарную ночь в Люксе для молодоженов, а также специальные цены для гостей.'
    }
  ];

  return (
    <div className="bg-ivory pb-24">
      <div className="relative pt-32 pb-20 px-4 bg-charcoal text-center overflow-hidden">
        <div className="relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Новости и Акции</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">Будьте в курсе последних событий и специальных предложений нашего отеля.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {['Все новости', 'Акции', 'Отель', 'Ресторан', 'СПА'].map((filter, i) => (
             <button key={filter} className={`text-sm px-6 py-2.5 rounded-full uppercase tracking-widest font-semibold transition-colors border ${i === 0 ? 'bg-charcoal text-white border-charcoal' : 'border-gray-300 text-gray-500 hover:border-charcoal hover:text-charcoal'}`}>
               {filter}
             </button>
          ))}
        </div>

        {/* Highlighted */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row mb-16 group cursor-pointer hover:shadow-lg transition-all">
          <div className="md:w-1/2 relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1542314831-c6a4d14d8379?auto=format&fit=crop&q=80&w=1200" alt="News" className="w-full h-full object-cover min-h-[300px] transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
             <span className="text-gold text-xs uppercase tracking-widest font-bold mb-4 block">Отель &bull; 01 Декабря 2026</span>
             <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4 group-hover:text-gold transition-colors">Grand Hotel получил награду "Лучший бутик-отель года"</h2>
             <p className="text-gray-600 mb-8 leading-relaxed">
               Мы невероятно гордимся тем, что усилия нашей команды были высоко оценены. Эта награда — подтверждение нашего стремления к безупречному сервису и комфорту каждого гостя.
             </p>
             <div className="mt-auto">
               <span className="inline-flex items-center gap-2 text-charcoal text-sm uppercase tracking-widest font-semibold">Читать полностью <ArrowRight size={16} /></span>
             </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                 <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                 <span className="text-gold text-xs uppercase tracking-widest font-bold mb-3 block">{item.category} &bull; {item.date}</span>
                 <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                 <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3">{item.excerpt}</p>
                 <span className="inline-flex items-center gap-2 text-charcoal text-xs uppercase tracking-widest font-semibold mt-auto">Читать <ArrowRight size={14} /></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
