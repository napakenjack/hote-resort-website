import { useEffect } from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { BookingPanel } from '../components/BookingPanel';
import { RoomCard } from '../components/RoomCard';
import { rooms } from '../data/rooms';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Bed, Sparkles, MapPin } from 'lucide-react';

export function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredRooms = rooms.slice(0, 3);

  return (
    <div className="bg-ivory pb-20">
      <HeroCarousel />
      
      <div className="relative px-4 sm:px-6 lg:px-8">
        <BookingPanel />
      </div>

      {/* Intro Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542314831-c6a4d14d8379?auto=format&fit=crop&q=80&w=1200" 
              alt="Hotel Exterior" 
              className="rounded-t-full w-full h-[600px] object-cover shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            />
            <div className="absolute -bottom-8 -right-8 bg-charcoal text-white p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
              <span className="font-serif text-3xl text-gold mb-1">5</span>
              <span className="text-xs uppercase tracking-widest leading-tight">Звезд<br/>Уюта</span>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gold">О нас</h2>
            <h3 className="font-serif text-4xl leading-snug text-charcoal">
              Идеальное место для отдыха в центре событий
            </h3>
            <p className="text-gray-600 leading-relaxed">
              ALSUN HOTEL сочетает в себе элегантность и современные технологии комфорта. Мы расположены в Астане, обеспечивая гостям уютную атмосферу и высокий уровень сервиса.
            </p>
            <p className="text-[#666] leading-relaxed text-[13px]">
              К вашим услугам светлые номера, кофейня со свежими завтраками и массажный кабинет с фитобочкой, где каждая деталь продумана для вашего отдыха.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex flex-col">
                <span className="font-serif text-3xl text-charcoal mb-2">40+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Комфортных номеров</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl text-charcoal mb-2">24/7</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Обслуживание гостей</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="bg-beige py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-gold mb-4">Наши номера</h2>
              <h3 className="font-serif text-4xl text-charcoal">Выбор для вашего комфорта</h3>
            </div>
            <Link to="/rooms" className="hidden md:inline-flex items-center gap-2 text-charcoal hover:text-gold uppercase tracking-widest text-xs font-semibold transition-colors mt-6 md:mt-0">
              Посмотреть все <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/rooms" className="inline-flex flex-col items-center gap-2 text-charcoal hover:text-gold uppercase tracking-widest text-sm font-semibold transition-colors">
              Посмотреть все номера
              <div className="h-px w-12 bg-charcoal"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* Cafe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-[10px] uppercase font-bold tracking-[1px] text-gold mb-2">Кофейня и завтраки</h2>
            <h3 className="font-serif text-4xl text-charcoal">Свежий кофе каждый день</h3>
            <p className="text-[#666] leading-relaxed text-[13px]">
              Начните утро с идеальной чашки кофе и горячих завтраков. Наша уютная кофейня при отеле — это комфортное место для отдыха, встреч и работы. Мы предлагаем свежую выпечку и легкие блюда.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link to="/cafe" className="inline-block border border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-6 py-3 rounded uppercase text-[12px] font-bold transition-colors text-center">
                Посмотреть кофейню
              </Link>
              <a href="https://wa.me/77000000000" className="inline-block bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded uppercase text-[12px] font-bold transition-colors text-center">
                 Написать в WhatsApp
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" alt="Cafe" className="w-full h-[500px] object-cover rounded shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-sand" />
          </div>
        </div>

        {/* Massage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1200" alt="SPA" className="w-full h-[500px] object-cover rounded shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-sand" />
          </div>
          <div className="space-y-6">
            <h2 className="text-[10px] uppercase font-bold tracking-[1px] text-gold mb-2">СПА</h2>
            <h3 className="font-serif text-4xl text-charcoal">Восстановление и покой</h3>
            <p className="text-[#666] leading-relaxed text-[13px]">
              Расслабляющий массаж, фито-бочка и пилинг для снятия усталости и восстановления после дороги. Погрузитесь в атмосферу спокойствия и гармонии в нашем СПА.
            </p>
            <div className="pt-4 flex gap-4">
              <Link to="/spa" className="inline-block border border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-6 py-3 rounded uppercase text-[12px] font-bold transition-colors">
                Смотреть СПА
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gold mb-4">Социальные сети</h2>
            <h3 className="font-serif text-4xl text-charcoal">Мы в Instagram</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400&h=400',
              'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=400&h=400',
              'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400&h=400',
              'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=400&h=400'
            ].map((img, i) => (
              <div key={i} className="relative aspect-square group overflow-hidden bg-gray-100 cursor-pointer">
                <img src={img} alt="Instagram" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                   </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="https://instagram.com/" className="inline-block border border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-3 rounded uppercase text-[12px] font-bold transition-colors">
              Смотреть Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="mt-12">
        <div className="bg-charcoal text-white py-24 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Готовы забронировать номер?</h2>
            <p className="text-white/80 mb-10 text-lg">
              Свяжитесь с нами напрямую для получения лучших тарифов и особых условий проживания.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/77000000000" className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded uppercase text-[13px] font-bold transition-colors shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                Написать в WhatsApp
              </a>
              <a href="tel:+77000000000" className="bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded uppercase text-[13px] font-bold transition-colors shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
