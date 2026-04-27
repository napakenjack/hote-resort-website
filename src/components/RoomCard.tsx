import { Link } from 'react-router-dom';
import { Wifi, Tv, Coffee, Wind, Users, Square } from 'lucide-react';
import { Room } from '../data/rooms';

export function RoomCard({ room }: { room: Room }) {
  return (
    <div className="bg-white group rounded-lg overflow-hidden border border-sand flex flex-col h-full hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <img 
          src={room.images[0]} 
          alt={room.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {room.tags.length > 0 && (
          <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
            {room.tags.map(tag => (
              <span key={tag} className="bg-white/90 text-[10px] text-charcoal px-2 py-1 rounded font-bold uppercase tracking-[0.5px]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="bg-[#F3F1ED] text-brown-soft px-2 py-1 rounded text-[12px] font-semibold inline-block w-fit mb-3">
          ★ {room.rating} · {room.reviews} отзывов
        </div>
        
        <h4 className="font-serif text-[18px] mb-[10px] text-charcoal">{room.name}</h4>
        
        <p className="text-[#666] text-[13px] leading-[1.6] mb-4 flex-grow">{room.description}</p>
        
        {/* Features Row */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-4">
          <div className="flex items-center gap-2 text-[#666] text-[12px]">
            <Square size={14} className="text-gold" />
            <span>{room.size} м&sup2;</span>
          </div>
          <div className="flex items-center gap-2 text-[#666] text-[12px]">
            <Users size={14} className="text-gold" />
            <span>До {room.capacity} гостей</span>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-4"></div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-[10px] text-brown-soft uppercase font-bold tracking-[0.5px] block mb-1">за ночь от</span>
            <span className="text-[16px] font-bold text-gold">{room.price.toLocaleString('ru-RU')} &#8376;</span>
          </div>
          <Link 
            to={`/rooms/${room.slug}`} 
            className="border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors px-4 py-2 rounded text-[12px] font-bold uppercase"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}
