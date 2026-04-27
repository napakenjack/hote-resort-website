import { useEffect } from 'react';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';

export function ContactsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ivory pb-24">
      {/* Hero */}
      <div className="relative pt-32 pb-20 px-4 bg-charcoal text-center overflow-hidden">
        <div className="relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Контакты</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">Мы всегда на связи, чтобы сделать ваше пребывание идеальным.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-3xl mb-8">Наши контакты</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start gap-4">
                  <div className="w-12 h-12 bg-beige text-gold rounded-full flex items-center justify-center"><Phone /></div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Телефон / WhatsApp</p>
                    <a href="tel:+77000000000" className="text-charcoal font-medium text-lg block hover:text-gold transition-colors">+7 (700) 000-00-00</a>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start gap-4">
                  <div className="w-12 h-12 bg-beige text-gold rounded-full flex items-center justify-center"><Mail /></div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Email</p>
                    <a href="mailto:info@grandhotel.kz" className="text-charcoal font-medium text-lg block hover:text-gold transition-colors">info@grandhotel.kz</a>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start gap-4 sm:col-span-2">
                  <div className="w-12 h-12 bg-beige text-gold rounded-full flex items-center justify-center"><MapPin /></div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Адрес</p>
                    <p className="text-charcoal font-medium text-lg">г. Астана, ул. Достык, 1</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-8">Часто задаваемые вопросы</h2>
              <div className="space-y-4">
                {[
                  { q: 'Во сколько заезд и выезд?', a: 'Заезд после 14:00, выезд до 12:00.' },
                  { q: 'Возможен ли ранний заезд?', a: 'Да, при наличии свободных номеров (может взиматься доп. плата).' },
                  { q: 'Есть ли у вас парковка?', a: 'Да, для гостей отеля предоставляется бесплатная охраняемая парковка.' },
                  { q: 'Разрешено ли проживание с животными?', a: 'К сожалению, проживание с домашними животными не предусмотрено.' },
                ].map((faq, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                    <p className="font-bold text-charcoal mb-2">{faq.q}</p>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 h-fit sticky top-32">
            <h2 className="font-serif text-3xl mb-8">Напишите нам</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Сообщение отправлено!'); }}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Ваше имя</label>
                <input type="text" required className="w-full bg-beige border border-transparent rounded-lg px-4 py-3 text-charcoal outline-none focus:border-gold transition-colors" placeholder="Иван Иванов" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Телефон</label>
                <input type="tel" required className="w-full bg-beige border border-transparent rounded-lg px-4 py-3 text-charcoal outline-none focus:border-gold transition-colors" placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Email</label>
                <input type="email" required className="w-full bg-beige border border-transparent rounded-lg px-4 py-3 text-charcoal outline-none focus:border-gold transition-colors" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Сообщение</label>
                <textarea required rows={4} className="w-full bg-beige border border-transparent rounded-lg px-4 py-3 text-charcoal outline-none focus:border-gold transition-colors resize-none" placeholder="Чем мы можем вам помочь?"></textarea>
              </div>
              <button type="submit" className="w-full bg-charcoal hover:bg-gold text-white px-8 py-4 rounded-lg uppercase tracking-widest text-sm font-semibold transition-colors mt-4">
                Отправить
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
