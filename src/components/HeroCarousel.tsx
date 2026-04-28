import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop',
    title: 'Комфортный отдых\nв сердце города',
    subtitle: 'Современные номера, ресторан, СПА и банкетный зал для вашего идеального пребывания.',
  },
  {
    image: 'https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?q=80&w=1374&auto=format&fit=crop',
    title: 'Изысканная кухня\nи атмосфера',
    subtitle: 'Попробуйте авторские блюда в нашем ресторане с панорамным видом.',
  },
  {
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000&h=1000',
    title: 'Восстановление\nи релакс',
    subtitle: 'Подарите себе удовольствие в нашем премиум СПА центре.',
  }
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-charcoal">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slides[current].image}
            alt="Hotel Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight whitespace-pre-line drop-shadow-lg">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[15px]">
              <Link 
                to="/rooms" 
                className="bg-white hover:bg-gray-100 text-charcoal px-6 py-3 rounded text-[13px] font-bold uppercase transition-colors"
              >
                Смотреть номера
              </Link>
              <Link 
                to="/rooms" 
                className="bg-gold hover:bg-gold-hover text-white px-6 py-3 rounded text-[13px] font-bold uppercase transition-colors"
              >
                Найти свободный номер
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-1/2 translate-y-1/2 w-full px-4 md:px-8 flex justify-between z-20 pointer-events-none">
        <button onClick={prev} className="w-12 h-12 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto">
          <ChevronLeft />
        </button>
        <button onClick={next} className="w-12 h-12 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto">
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-28 w-full flex justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? 'bg-gold w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
