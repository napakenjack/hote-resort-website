import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { rooms } from '../data/rooms';
import { RoomCard } from '../components/RoomCard';
import { Check, Star, Wind, Wifi, Tv, Coffee } from 'lucide-react';

export function RoomDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const room = rooms.find(r => r.slug === slug) || rooms[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const otherRooms = rooms.filter(r => r.id !== room.id).slice(0, 3);

  return (
    <div className="bg-ivory pb-24 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation back */}
        <div className="mb-8">
          <Link to="/rooms" className="text-xs uppercase tracking-widest text-charcoal/60 hover:text-gold transition-colors block">
            &larr; Назад к номерам
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl">
                <img src={room.images[0]} alt={room.name} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {room.images.slice(1).map((img, i) => (
                  <div key={i} className="aspect-[16/9] overflow-hidden rounded-2xl">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Main Info */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-wrap gap-2 mb-4">
                {room.tags.map(tag => (
                  <span key={tag} className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">{room.name}</h1>
              
              <div className="flex items-center gap-4 text-sm text-charcoal/70 mb-8 border-b border-gray-100 pb-8">
                <div className="flex items-center gap-1 text-gold"><Star size={18} fill="currentColor" /> {room.rating}</div>
                <span>&bull;</span>
                <span>{room.reviews} отзывов</span>
                <span>&bull;</span>
                <span>{room.size} м&sup2;</span>
                <span>&bull;</span>
                <span>До {room.capacity} гостей</span>
              </div>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>{room.fullDescription}</p>
              </div>
            </div>

            {/* Quick Facts */}
            <div>
              <h3 className="font-serif text-3xl mb-8">Характеристики</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-beige p-6 rounded-2xl">
                   <p className="text-xs uppercase tracking-widest text-charcoal/50 mb-2">Площадь</p>
                   <p className="font-medium text-charcoal">{room.size} м&sup2;</p>
                </div>
                <div className="bg-beige p-6 rounded-2xl">
                   <p className="text-xs uppercase tracking-widest text-charcoal/50 mb-2">Вместимость</p>
                   <p className="font-medium text-charcoal">До {room.capacity} гостей</p>
                </div>
                <div className="bg-beige p-6 rounded-2xl">
                   <p className="text-xs uppercase tracking-widest text-charcoal/50 mb-2">Кровать</p>
                   <p className="font-medium text-charcoal">{room.bedType}</p>
                </div>
                <div className="bg-beige p-6 rounded-2xl">
                   <p className="text-xs uppercase tracking-widest text-charcoal/50 mb-2">Вид</p>
                   <p className="font-medium text-charcoal">{room.view}</p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="font-serif text-3xl mb-8">Удобства в номере</h3>
              <div className="grid grid-cols-2 gap-4">
                {room.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                      <Check size={16} />
                    </div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Policies */}
            <div>
              <h3 className="font-serif text-3xl mb-8">Правила размещения</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-4"><span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></span> Заезд: после 14:00</li>
                <li className="flex items-start gap-4"><span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></span> Выезд: до 12:00</li>
                <li className="flex items-start gap-4"><span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></span> Бесплатная отмена за 24 часа до заезда</li>
                <li className="flex items-start gap-4"><span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></span> Курение в номерах строго запрещено</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-charcoal text-white rounded-2xl p-8 shadow-2xl">
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Стоимость</p>
                <div className="flex items-end gap-2">
                  <span className="font-serif text-4xl text-gold">{room.price.toLocaleString('ru-RU')} &#8376;</span>
                  <span className="text-white/60 mb-1">/ ночь</span>
                </div>
              </div>

              <form className="space-y-4 mb-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/70">Заезд</label>
                  <input type="date" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:border-gold" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/70">Выезд</label>
                  <input type="date" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:border-gold" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/70">Гости</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:border-gold appearance-none">
                    <option value="1" className="text-charcoal">1 Гость</option>
                    <option value="2" className="text-charcoal">2 Гостя</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded-lg uppercase tracking-widest text-sm font-semibold transition-colors mt-4">
                  Забронировать
                </button>
              </form>

              <div className="pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-white/60 mb-4">Нужна помощь с бронированием?</p>
                <a href="https://wa.me/77000000000" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors uppercase text-xs tracking-widest font-semibold">
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Rooms */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <h3 className="font-serif text-4xl text-charcoal mb-12">Похожие номера</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherRooms.map(r => (
            <RoomCard key={r.id} room={r} />
          ))}
        </div>
      </div>
    </div>
  );
}
