import { useState, useEffect } from 'react';
import { X, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FloatingNews() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className={`fixed bottom-5 right-5 z-50 max-w-sm w-[calc(100%-40px)] transition-all duration-700 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.15)] border border-sand p-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-gold"></div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-[#666] hover:text-charcoal transition-colors z-10"
        >
          <X size={16} />
        </button>
        <div className="flex items-start gap-4">
          <div className="bg-gold/10 p-2 rounded-full text-gold shrink-0 mt-0.5">
            <Bell size={18} />
          </div>
          <div>
             <h4 className="font-serif font-bold text-charcoal text-[16px] mb-1 pr-6">Специальное предложение</h4>
             <p className="text-[#666] text-[12px] leading-relaxed mb-3">
               При бронировании номера Люкс от 2 ночей — получаете сеанс в фито-бочке и завтраки в подарок!
             </p>
             <Link onClick={() => setIsVisible(false)} to="/rooms" className="text-[12px] font-bold text-gold uppercase tracking-[1px] hover:text-charcoal transition-colors inline-block">
               Забронировать номер &rarr;
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
