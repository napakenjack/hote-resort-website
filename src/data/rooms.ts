export interface Room {
  id: string;
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  price: number;
  size: number;
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
    description: 'Уютный номер для комфортного отдыха одного или двух гостей. Идеален для коротких деловых поездок.',
    fullDescription: 'Наш стандартный номер предлагает все необходимое для расслабляющего отдыха. Современный дизайн, удобная кровать и продуманные детали создают атмосферу уюта. В номере есть рабочая зона, что делает его отличным выбором для командировок.',
    price: 35000,
    size: 28,
    capacity: 2,
    bedType: '1 двуспальная кровать',
    view: 'Вид на город',
    amenities: ['Wi-Fi', 'Кондиционер', 'TV', 'Душ', 'Фен'],
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
    description: 'Просторный номер с элегантным дизайном и дополнительными удобствами для вашего комфорта.',
    fullDescription: 'Улучшенный номер отличается увеличенной площадью и панорамными окнами. Элегантный интерьер в теплых тонах, премиальное постельное белье и расширенный набор косметических принадлежностей.',
    price: 45000,
    size: 35,
    capacity: 2,
    bedType: '1 большая двуспальная кровать',
    view: 'Вид на парк',
    amenities: ['Wi-Fi', 'Кондиционер', 'Завтрак', 'TV', 'Мини-бар', 'Душ', 'Сейф', 'Рабочая зона'],
    tags: ['Завтрак включен', 'Бесплатная отмена'],
    rating: 4.9,
    reviews: 86,
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1600&h=900',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800&h=600'
    ]
  },
  {
    id: '3',
    name: 'Делюкс',
    slug: 'deluxe',
    description: 'Изысканный интерьер и потрясающий вид. Идеальный выбор для романтических выходных.',
    fullDescription: 'Номер категории Делюкс создан для тех, кто ценит роскошь в каждой детали. Дизайнерская мебель, зона отдыха с мягкими креслами, кофемашина и роскошная ванная комната.',
    price: 60000,
    size: 45,
    capacity: 2,
    bedType: 'King-size кровать',
    view: 'Панорамный вид на город',
    amenities: ['Wi-Fi', 'Кондиционер', 'Завтрак', 'Smart TV', 'Мини-бар', 'Ванна', 'Халаты и тапочки', 'Room service'],
    tags: [],
    rating: 5.0,
    reviews: 42,
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1600&h=900',
      'https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&q=80&w=800&h=600'
    ]
  },
  {
    id: '4',
    name: 'Семейный номер',
    slug: 'family',
    description: 'Две светлые комнаты, объединенные общим стилем, для идеального отдыха с детьми.',
    fullDescription: 'Семейный номер предлагает максимум пространства и уединения. Две смежные спальни, два санузла и уютная гостиная зона позволят всем членам семьи чувствовать себя комфортно.',
    price: 75000,
    size: 60,
    capacity: 4,
    bedType: '1 King-size, 2 односпальные',
    view: 'Вид на внутренний сад',
    amenities: ['Wi-Fi', 'Кондиционер', 'Завтрак', '2 Smart TV', 'Мини-бар', 'Ванна и Душ', 'Сейф', 'Детские принадлежности'],
    tags: ['Для семьи'],
    rating: 4.8,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1600&h=900',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800&h=600'
    ]
  },
  {
    id: '5',
    name: 'Люкс',
    slug: 'suite',
    description: 'Просторный люкс с отдельной гостиной, спальней и премиальным сервисом.',
    fullDescription: 'Номер Люкс превзойдет ваши ожидания. Пространство разделено на изысканную гостиную для приема гостей или отдыха и приватную спальню. Гостям предоставляется доступ в представительский лаундж.',
    price: 120000,
    size: 85,
    capacity: 2,
    bedType: 'King-size кровать',
    view: 'Панорамный вид на город',
    amenities: ['Wi-Fi', 'Кондиционер', 'Завтрак', 'Smart TV', 'Мини-бар', 'Сейф', 'Рабочая зона', 'Душ', 'Ванна', 'Халаты и тапочки', 'Фен', 'Room service'],
    tags: ['Премиум'],
    rating: 5.0,
    reviews: 34,
    images: [
      'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=1600&h=900',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800&h=600'
    ]
  },
  {
    id: '6',
    name: 'Президентский люкс',
    slug: 'presidential-suite',
    description: 'Вершина роскоши и комфорта. Эксклюзивный дизайн, персональный батлер и великолепный вид.',
    fullDescription: 'Наш лучший номер. Президентский люкс включает в себя просторную гостиную с роялем, столовую на 8 персон, кабинет, роскошную спальню и большую ванную комнату с джакузи.',
    price: 350000,
    size: 150,
    capacity: 2,
    bedType: 'Super King-size кровать',
    view: 'Панорамный вид 360°',
    amenities: ['Wi-Fi', 'Кондиционер', 'Завтрак', 'Домашний кинотеатр', 'Мини-бар (премиум)', 'Сейф', 'Рабочий кабинет', 'Джакузи', 'Ванна', 'Персональный батлер', 'Room service', 'Трансфер'],
    tags: ['VIP', 'Лучший выбор'],
    rating: 5.0,
    reviews: 12,
    images: [
      'https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800&h=600'
    ]
  }
];
