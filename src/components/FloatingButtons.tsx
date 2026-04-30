import { Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-[10px]">
      <a
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[45px] h-[45px] bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-[#1464cc] transition-colors group relative"
        title="Facebook"
      >
        <Facebook size={20} />
      </a>

      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[45px] h-[45px] bg-[#E1306C] rounded-full flex items-center justify-center text-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-[#c2285a] transition-colors group relative"
        title="Instagram"
      >
        <Instagram size={20} />
      </a>

      <a
        href="https://wa.me/77000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[45px] h-[45px] bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-[#20bd5a] transition-colors group relative"
        title="WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
      
      <a
        href="tel:+77000000000"
        className="w-[45px] h-[45px] bg-gold rounded-full flex items-center justify-center text-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-gold-hover transition-colors group relative"
        title="Позвонить"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}
