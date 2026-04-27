import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Главная', path: '/' },
  { name: 'Номера', path: '/rooms' },
  { name: 'Ресторан', path: '/restaurant' },
  { name: 'Банкет', path: '/banquet' },
  { name: 'СПА', path: '/spa' },
  { name: 'Новости', path: '/news' },
  { name: 'Контакты', path: '/contacts' },
  { name: 'Гид', path: '/guide' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="sticky top-0 w-full z-50 transition-all duration-300 bg-ivory/95 backdrop-blur-sm border-b border-sand flex items-center justify-between h-[80px] px-6 lg:px-10"
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-sans font-bold text-2xl tracking-[2px] uppercase text-charcoal">
            GRAND OASIS
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
        className={`fixed inset-0 bg-charcoal text-white z-40 flex flex-col pt-24 px-6 gap-6 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden pointer-events-${isOpen ? 'auto' : 'none'}`}
      >
        {/* We place the close button inside the menu to avoid clicking issues */}
        <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
           <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-serif tracking-widest transition-colors ${
              location.pathname === link.path ? 'text-gold' : 'text-white/80'
            }`}
          >
            {link.name}
          </Link>
        ))}
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
