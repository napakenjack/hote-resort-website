export interface Room {
  id: string;
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  price: number;
  size: string;
  capacity: number;
  bedType: string;
  view: string;
  amenities: string[];
  tags: string[];
  rating: number;
  reviews: number;
  images: string[];
}

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Стандартный номер',
    slug: 'standard',
    description: 'Уютный номер для комфортного проживания одного или двух гостей. Подходит для коротких поездок, командировок и отдыха.',
    fullDescription: 'Наш стандартный номер предлагает все необходимое для расслабляющего отдыха. Современный дизайн, удобная кровать и продуманные детали создают атмосферу уюта. В номере есть рабочая зона, что делает его отличным выбором для командировок.',
    price: 25000,
    size: '20–24',
    capacity: 2,
    bedType: '1 двуспальная или 2 односпальные',
    view: 'Вид на город',
    amenities: ['Wi-Fi', 'TV', 'Душ', 'Кондиционер', 'Завтрак по запросу'],
    tags: ['Популярный'],
    rating: 4.8,
    reviews: 128,
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1600&h=900',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800&h=600'
    ]
  },
  {
    id: '2',
    name: 'Улучшенный номер',
    slug: 'superior',
    description: 'Просторный номер с более комфортной зоной отдыха, современным интерьером и дополнительными удобствами.',
    fullDescription: 'Улучшенный номер отличается увеличенной площадью и панорамными окнами. Элегантный интерьер в теплых тонах, премиальное постельное белье и расширенный набор косметических принадлежностей.',
    price: 32000,
    size: '26–30',
    capacity: 2,
    bedType: '1 двуспальная кровать',
    view: 'Вид на город',
    amenities: ['Wi-Fi', 'TV', 'Душ', 'Кондиционер', 'Мини-холодильник', 'Рабочая зона'],
    tags: ['Бесплатная отмена'],
    rating: 4.9,
    reviews: 86,
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1600&h=900',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800&h=600'
    ]
  },
  {
    id: '3',
    name: 'Люкс',
    slug: 'suite',
    description: 'Комфортный номер повышенной категории с просторной зоной отдыха, улучшенной мебелью и уютной атмосферой для длительного проживания.',
    fullDescription: 'Номер Люкс превзойдет ваши ожидания. Пространство разделено на изысканную зону отдыха и приватную спальню. Гостям предоставляется улучшенный сервис и комфорт.',
    price: 45000,
    size: '35–45',
    capacity: 3,
    bedType: '1 большая двуспальная кровать',
    view: 'Панорамный вид',
    amenities: ['Wi-Fi', 'TV', 'Душ', 'Кондиционер', 'Мини-холодильник', 'Зона отдыха', 'Халаты и тапочки'],
    tags: ['Премиум'],
    rating: 5.0,
    reviews: 34,
    images: [
      'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=1600&h=900',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800&h=600'
    ]
  }
];
