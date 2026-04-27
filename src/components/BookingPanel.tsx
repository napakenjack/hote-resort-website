import { Calendar, Users, Home } from 'lucide-react';

interface BookingPanelProps {
  compact?: boolean;
}

export function BookingPanel({ compact = false }: BookingPanelProps) {
  return (
    <div className={`bg-white rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.1)] p-[15px_25px] w-full max-w-[900px] mx-auto ${compact ? '' : '-mt-10 relative z-20'}`}>
      <form className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_180px] gap-[15px] items-stretch min-h-[60px]">
        
        <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r border-sand pr-[15px] pb-3 md:pb-0">
          <label className="text-[10px] uppercase font-bold text-brown-soft tracking-[0.5px] mb-1">Дата заезда</label>
          <div className="flex items-center gap-2">
            <Calendar className="text-gold" size={16} />
            <input 
              type="text" 
              placeholder="12 Октября, 2023" 
              className="bg-transparent border-none outline-none text-charcoal text-[14px] font-semibold w-full"
              onFocus={(e) => (e.target.type = 'date')} // simple fallback
              onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r border-sand pr-[15px] pb-3 md:pb-0">
          <label className="text-[10px] uppercase font-bold text-brown-soft tracking-[0.5px] mb-1">Дата выезда</label>
          <div className="flex items-center gap-2">
            <Calendar className="text-gold" size={16} />
            <input 
              type="text" 
              placeholder="15 Октября, 2023" 
              className="bg-transparent border-none outline-none text-charcoal text-[14px] font-semibold w-full"
              onFocus={(e) => (e.target.type = 'date')} // simple fallback
              onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r border-sand pr-[15px] pb-3 md:pb-0">
          <label className="text-[10px] uppercase font-bold text-brown-soft tracking-[0.5px] mb-1">Гости</label>
          <div className="flex items-center gap-2">
            <Users className="text-gold" size={16} />
            <select className="bg-transparent border-none outline-none text-charcoal text-[14px] font-semibold w-full cursor-pointer">
              <option value="1">1 Взрослый</option>
              <option value="2">2 Взрослых, 1 Ребенок</option>
              <option value="3">3 Взрослых</option>
              <option value="4">Больше гостей</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col justify-center pb-3 md:pb-0">
          <label className="text-[10px] uppercase font-bold text-brown-soft tracking-[0.5px] mb-1">Тип номера</label>
          <div className="flex items-center gap-2">
            <Home className="text-gold" size={16} />
            <select className="bg-transparent border-none outline-none text-charcoal text-[14px] font-semibold w-full cursor-pointer">
              <option value="">Делюкс с видом</option>
              <option value="standard">Стандартный</option>
              <option value="superior">Улучшенный</option>
              <option value="suite">Люкс</option>
            </select>
          </div>
        </div>

        <button 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            alert('Поиск номеров...');
          }}
          className="bg-charcoal text-white hover:bg-gold transition-colors rounded uppercase text-[12px] font-bold h-full min-h-[48px] w-full"
        >
          Проверить наличие
        </button>
      </form>
    </div>
  );
}
