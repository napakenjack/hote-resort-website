import { useEffect } from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

export function RestaurantPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ivory pb-24">
      {/* Hero */}
      <div className="relative pt-32 pb-20 px-4 bg-charcoal text-center overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=2000')] opacity-30 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80"></div>
        <div className="relative z-10 max-w-3xl mx-auto mt-16">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 uppercase tracking-wider scale-y-110">Grand Restaurant</h1>
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-8">Авторская кухня & Панорамный вид</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-t-3xl shadow-2xl p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl text-charcoal">Искусство вкуса</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Наш ресторан предлагает уникальное гастрономическое путешествие, где классические рецепты встречаются с современными кулинарными техниками. Изысканный интерьер, безупречный сервис и потрясающий вид на город создают идеальную атмосферу.
              </p>
              <div className="flex flex-col gap-4 text-charcoal">
                <div className="flex items-center gap-4">
                  <Clock className="text-gold" />
                  <div>
                    <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">Время работы</p>
                    <p>Ежедневно 07:00 – 00:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-gold" />
                  <div>
                    <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">Расположение</p>
                    <p>1 этаж отеля</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800" alt="Food" className="rounded-2xl w-full h-[300px] object-cover" />
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" alt="Food" className="rounded-2xl w-full h-[300px] object-cover mt-12" />
            </div>
          </div>
        </div>

        {/* Menu Highlights */}
        <div className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gold mb-4">Меню</h2>
            <h3 className="font-serif text-4xl text-charcoal">Наши направления</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Завтраки', img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a82666?auto=format&fit=crop&q=80&w=600', time: '07:00 - 11:00' },
              { title: 'Основное меню', img: 'https://images.unsplash.com/photo-1544025162-83b3e8e7a0d4?auto=format&fit=crop&q=80&w=600', time: '12:00 - 00:00' },
              { title: 'Десерты', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600', time: 'Весь день' },
              { title: 'Бар', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600', time: 'Круглосуточно' },
            ].map(item => (
              <div key={item.title} className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent flex flex-col justify-end p-6">
                  <h4 className="font-serif text-2xl text-white mb-1">{item.title}</h4>
                  <p className="text-gold text-sm tracking-widest uppercase">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-charcoal text-white rounded-3xl p-12 text-center my-12 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center"></div>
           <div className="relative z-10">
             <h3 className="font-serif text-4xl mb-6">Забронировать стол</h3>
             <p className="text-white/80 max-w-2xl mx-auto mb-10">Проведите идеальный вечер в кругу близких. Рекомендуем бронировать столик заранее.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:+77000000000" className="bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded-full uppercase tracking-widest text-sm font-semibold transition-colors flex justify-center items-center gap-2">
                  <Phone size={18} /> Позвонить
                </a>
                <a href="https://wa.me/77000000000" className="bg-white hover:bg-gray-100 text-charcoal px-8 py-4 rounded-full uppercase tracking-widest text-sm font-semibold transition-colors">
                  Написать в WhatsApp
                </a>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
