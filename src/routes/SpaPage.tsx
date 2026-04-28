import { useEffect } from 'react';

export function SpaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Классический массаж',
      duration: '60 мин',
      price: '25 000 ₸',
      desc: 'Глубокая проработка мышц, снятие напряжения и восстановление тонуса.',
      img: 'https://plus.unsplash.com/premium_photo-1661407350987-9e9319ac11e6?q=80&w=1470&auto=format&fit=crop'
    },
    {
      title: 'Стоун-терапия',
      duration: '90 мин',
      price: '35 000 ₸',
      desc: 'Расслабление теплыми камнями для гармонизации энергии.',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Уход за лицом',
      duration: '60 мин',
      price: '30 000 ₸',
      desc: 'Премиальная косметика, увлажнение и лифтинг эффект.',
      img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'SPA-программа для двоих',
      duration: '120 мин',
      price: '85 000 ₸',
      desc: 'Романтическая атмосфера, совместные процедуры и отдых.',
      img: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-ivory pb-24">
      {/* Hero */}
      <div className="relative pt-32 pb-20 px-4 bg-charcoal text-center overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000')] opacity-40 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80"></div>
        <div className="relative z-10 max-w-3xl mx-auto mt-16">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 uppercase tracking-wider scale-y-110">SPA & Wellness</h1>
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-8">Гармония души и тела</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
           <h2 className="font-serif text-4xl text-charcoal mb-6">Ваш личный оазис</h2>
           <p className="text-gray-600 leading-relaxed text-lg">
             Оставьте за порогом суету и напряжение. В нашем SPA-комплексе вас ждут эксклюзивные программы ухода, профессиональные терапевты и атмосфера абсолютного спокойствия. Восстановите силы в хаммаме, расслабьтесь в сауне или доверьтесь рукам наших мастеров массажа.
           </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map(s => (
            <div key={s.title} className="bg-white rounded-3xl p-6 flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-50">
              <img src={s.img} alt={s.title} className="w-full sm:w-48 h-48 object-cover rounded-2xl shrink-0" />
              <div className="flex flex-col flex-grow">
                 <h3 className="font-serif text-2xl text-charcoal mb-2">{s.title}</h3>
                 <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
                 <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                   <div>
                     <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">{s.duration}</span>
                     <span className="font-serif text-xl text-gold">{s.price}</span>
                   </div>
                   <a href="https://wa.me/77000000000" className="text-xs uppercase tracking-widest bg-beige hover:bg-gold hover:text-white px-6 py-2 rounded-full transition-colors font-semibold">
                     Записаться
                   </a>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Preview */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gold mb-4">SPA в объективе</h2>
            <h3 className="font-serif text-4xl text-charcoal">Наш Instagram</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400&h=400',
              'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=400&h=400',
              'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400&h=400',
              'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=400&h=400',
              'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400&h=400',
              'https://plus.unsplash.com/premium_photo-1663100126765-1ad02ca4ff69?q=80&w=1470&auto=format&fit=crop'
            ].map((img, i) => (
              <div key={i} className="relative aspect-square group overflow-hidden bg-gray-100 cursor-pointer rounded-xl">
                <img src={img} alt="SPA Instagram" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                   <p className="text-white text-xs block mb-2 line-clamp-2">Атмосфера расслабления и обновления в нашем SPA-центре 🌿✨ #spa #wellness</p>
                   <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                   </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#" className="inline-block border border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-3 rounded-full uppercase tracking-wider text-xs font-semibold transition-colors">
              Смотреть больше в Instagram
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-charcoal rounded-3xl p-12 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center"></div>
           <div className="relative z-10">
             <h3 className="font-serif text-4xl mb-6">Подарите себе отдых</h3>
             <p className="text-white/70 max-w-2xl mx-auto mb-10">Мы поможем подобрать идеальную SPA-программу именно для вас.</p>
             <a href="https://wa.me/77000000000" className="bg-gold hover:bg-gold-hover text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm font-semibold transition-colors inline-block shadow-lg">
               Связаться с нами
             </a>
           </div>
        </div>

      </div>
    </div>
  );
}
