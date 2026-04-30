import { useEffect, useState } from 'react';
import { Clock, MapPin, X } from 'lucide-react';

interface MenuItem {
  title: string;
  img: string;
  time: string;
  items: string[];
}

export function CafePage() {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menus: MenuItem[] = [
    { 
      title: 'Завтраки', 
      img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a82666?auto=format&fit=crop&q=80&w=600', 
      time: '08:00 - 12:00',
      items: [
        'Сырники с домашним вареньем и сметаной',
        'Омлет с сыром и томатами',
        'Яичница-глазунья с беконом и тостами',
        'Овсяная каша на молоке со свежими ягодами',
        'Французский тост с кленовым сиропом'
      ]
    },
    { 
      title: 'Кофе и напитки', 
      img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600', 
      time: 'Весь день',
      items: [
        'Эспрессо / Двойной эспрессо',
        'Американо',
        'Капучино',
        'Латте / Флэт Уайт',
        'Авторские чаи (Ягодный, Облепиховый, Имбирный)',
        'Свежевыжатые соки'
      ]
    }
  ];

  return (
    <div className="bg-ivory pb-24">
      {/* Hero */}
      <div className="relative pt-32 pb-20 px-4 bg-charcoal text-center overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000')] opacity-30 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80"></div>
        <div className="relative z-10 max-w-3xl mx-auto mt-16">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 uppercase tracking-wider scale-y-110">Кофейня ALSUN</h1>
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-8">Свежий кофе & Завтраки</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-t-3xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl text-charcoal">Уютная кофейня при отеле</h2>
              <p className="text-[#666] leading-relaxed text-[13px]">
                Начните утро с идеальной чашки кофе и горячих завтраков. Наша кофейня — это комфортное место для работы, отдыха и неспешных бесед. Мы предлагаем свежие блюда и авторские напитки в теплой и дружелюбной атмосфере.
              </p>
              <div className="flex flex-col gap-4 text-charcoal">
                <div className="flex items-center gap-4">
                  <Clock className="text-gold" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.5px] text-brown-soft font-bold">Время работы</p>
                    <p className="text-[14px]">Ежедневно 08:00 – 22:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-gold" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.5px] text-brown-soft font-bold">Расположение</p>
                    <p className="text-[14px]">1 этаж отеля ALSUN HOTEL</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" alt="Cafe" className="rounded w-full h-[300px] object-cover" />
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800" alt="Breakfast" className="rounded w-full h-[300px] object-cover mt-12" />
            </div>
          </div>
        </div>

        {/* Menu Highlights */}
        <div className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold tracking-[1px] uppercase text-gold mb-4">Наше меню</h2>
            <h3 className="font-serif text-4xl text-charcoal">Что мы предлагаем</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {menus.map(item => (
              <div 
                key={item.title} 
                onClick={() => setSelectedMenu(item)}
                className="group relative overflow-hidden rounded aspect-[4/3] border border-sand cursor-pointer shadow-sm hover:shadow-xl transition-all"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent flex flex-col justify-end p-8">
                  <h4 className="font-serif text-[32px] text-white mb-2">{item.title}</h4>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-gold text-[12px] tracking-[1px] uppercase font-bold">{item.time}</p>
                    <span className="text-white/80 text-[11px] uppercase tracking-[1px] font-bold">Смотреть меню &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-charcoal text-white rounded p-12 text-center my-12 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center"></div>
           <div className="relative z-10">
             <h3 className="font-serif text-4xl mb-6">Ждём вас в гости</h3>
             <p className="text-white/80 max-w-2xl mx-auto mb-10 text-[13px]">Свежий кофе, вкусные завтраки и уютная атмосфера каждый день.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-[15px]">
                <a href="https://wa.me/77000000000" className="bg-gold hover:bg-gold-hover text-white px-6 py-3 rounded uppercase text-[13px] font-bold transition-colors">
                  Написать в WhatsApp
                </a>
             </div>
           </div>
        </div>
      </div>

      {/* Pop-up Modal */}
      {selectedMenu && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={() => setSelectedMenu(null)}
          ></div>
          <div className="bg-ivory rounded-lg w-full max-w-md overflow-hidden shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-300">
            <div className="h-40 relative">
               <img src={selectedMenu.img} alt={selectedMenu.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-charcoal/40"></div>
               <button 
                onClick={() => setSelectedMenu(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
               >
                 <X size={20} />
               </button>
               <h3 className="absolute bottom-4 left-6 font-serif text-3xl text-white">{selectedMenu.title}</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {selectedMenu.items.map((menuItem, i) => (
                  <li key={i} className="flex justify-between items-center text-charcoal border-b border-sand/50 pb-3 last:border-0 last:pb-0">
                    <span className="text-[14px]">{menuItem}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center border-t border-sand pt-6">
                 <p className="text-[11px] text-brown-soft uppercase tracking-[1px] font-bold mb-2">ПОЛНОЕ МЕНЮ И ЦЕНЫ</p>
                 <a href="https://wa.me/77000000000" className="inline-block text-gold hover:text-gold-hover text-[13px] font-bold border-b border-gold pb-1 transition-colors">Уточнить в WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
