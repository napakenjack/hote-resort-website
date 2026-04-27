import { useEffect } from 'react';
import { rooms } from '../data/rooms';
import { RoomCard } from '../components/RoomCard';
import { BookingPanel } from '../components/BookingPanel';

export function RoomsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ivory pb-24">
      {/* Page Hero */}
      <div className="relative pt-32 pb-20 px-4 bg-charcoal text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-c6a4d14d8379?auto=format&fit=crop&q=80&w=2000')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Номера</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg mb-12">
            От классических стандартных номеров до роскошного президентского люкса — выберите идеальное пространство для вашего отдыха.
          </p>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <BookingPanel />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        {/* Filters placeholder */}
        <div className="flex flex-wrap gap-4 mb-12 pb-6 border-b border-gray-200">
          <span className="text-xs font-semibold uppercase tracking-widest text-charcoal/50 pr-4 my-auto block">Фильтры:</span>
          {['По умолчанию', 'Сначала дешевле', 'Сначала дороже', 'С завтраком'].map(filter => (
             <button key={filter} className="text-sm px-4 py-2 border border-charcoal/20 rounded-full hover:border-gold hover:text-gold transition-colors text-charcoal">
               {filter}
             </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
}
