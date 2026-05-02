import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Главная', path: '/' },
  { name: 'Номера', path: '/rooms' },
  { name: 'Кофейня', path: '/cafe' },
  { name: 'СПА', path: '/spa' },
  { name: 'Контакты', path: '/contacts' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-300 flex items-center justify-between h-[80px] px-6 lg:px-10 border-b ${
        scrolled || isOpen ? 'bg-ivory border-sand shadow-sm' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-sans font-bold text-2xl tracking-[2px] uppercase text-charcoal">
            ALSUN HOTEL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[20px]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[13px] tracking-[1px] uppercase font-medium transition-colors hover:text-gold relative pb-1 ${
                location.pathname === link.path 
                  ? 'text-charcoal after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gold'
                  : 'text-charcoal'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-3 ml-4 border-l border-sand pl-4">
             <a href="https://wa.me/77000000000" aria-label="WhatsApp" className="text-charcoal hover:text-[#25D366] transition-colors"><MessageCircle size={18} /></a>
             <a href="https://instagram.com/" aria-label="Instagram" className="text-charcoal hover:text-[#E1306C] transition-colors"><Instagram size={18} /></a>
             <a href="https://facebook.com/" aria-label="Facebook" className="text-charcoal hover:text-[#1877F2] transition-colors"><Facebook size={18} /></a>
          </div>

          <Link
            to="/rooms"
            className="ml-4 bg-gold hover:bg-gold-hover text-white px-6 py-3 rounded text-[13px] font-bold uppercase transition-colors"
          >
            Забронировать
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="text-charcoal" />
          ) : (
            <Menu className="text-charcoal" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`fixed inset-0 bg-ivory text-charcoal z-[100] flex flex-col pt-24 px-6 gap-6 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        } md:hidden`}
      >
        {/* Close button inside menu */}
        <button 
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-charcoal/5 transition-colors" 
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
           <X size={32} strokeWidth={1} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-serif tracking-widest transition-colors ${
              location.pathname === link.path ? 'text-gold' : 'text-charcoal/80'
            }`}
          >
            {link.name}
          </Link>
        ))}
        
        <div className="flex items-center gap-6 mt-4">
           <a href="https://wa.me/77000000000" aria-label="WhatsApp" className="text-charcoal hover:text-[#25D366] transition-colors"><MessageCircle size={24} /></a>
           <a href="https://instagram.com/" aria-label="Instagram" className="text-charcoal hover:text-[#E1306C] transition-colors"><Instagram size={24} /></a>
           <a href="https://facebook.com/" aria-label="Facebook" className="text-charcoal hover:text-[#1877F2] transition-colors"><Facebook size={24} /></a>
        </div>

        <Link
          to="/rooms"
          onClick={() => setIsOpen(false)}
          className="mt-6 px-8 py-4 bg-gold text-white text-center rounded-sm text-lg tracking-widest uppercase"
        >
          Забронировать
        </Link>
      </div>
    </header>
  );
}
