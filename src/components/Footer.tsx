import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-2xl tracking-widest text-gold mb-6">GRAND HOTEL</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Современные номера, изысканный ресторан, премиум СПА и банкетный зал для вашего идеального пребывания в сердце города.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-lg mb-6 uppercase tracking-widest">Навигация</h3>
            <ul className="space-y-3 text-white/80">
              <li><Link to="/rooms" className="hover:text-gold transition-colors">Номера</Link></li>
              <li><Link to="/restaurant" className="hover:text-gold transition-colors">Ресторан</Link></li>
              <li><Link to="/spa" className="hover:text-gold transition-colors">СПА</Link></li>
              <li><Link to="/banquet" className="hover:text-gold transition-colors">Банкет</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg mb-6 uppercase tracking-widest">Контакты</h3>
            <ul className="space-y-4 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold shrink-0 mt-0.5" size={18} />
                <span>г. Астана, ул. Достык, 1<br />Казахстан</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold shrink-0" size={18} />
                <a href="tel:+77000000000" className="hover:text-gold transition-colors">+7 (700) 000-00-00</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold shrink-0" size={18} />
                <a href="mailto:info@grandhotel.kz" className="hover:text-gold transition-colors">info@grandhotel.kz</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-serif text-lg mb-6 uppercase tracking-widest">Мы в соцсетях</h3>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded hover:bg-white/10 hover:border-white/40 transition-all">
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} GRAND HOTEL. Все права защищены.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link to="#" className="hover:text-white transition-colors">Правила проживания</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
