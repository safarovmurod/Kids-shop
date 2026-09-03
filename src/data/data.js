import productCybex from "../assets/images/product-cybex-priam.png";

export const api = "https://swagger-wheat.vercel.app/api";

// Ҳамаи категорияҳо ва зеркатегорияҳо аз LINKS.md
export const categories = [
  {
    id: 1,
    name: "Акции",
    slug: "akcii",
    subcategories: [
      { id: 11, name: "Скидки недели", slug: "skidki-nedeli" },
      { id: 12, name: "Распродажа остатков", slug: "rasprodazha-ostatkov" },
      { id: 13, name: "Наборы к выписке", slug: "nabory-k-vypiske" },
    ],
  },
  {
    id: 2,
    name: "Детская мебель",
    slug: "detskaya-mebel",
    subcategories: [
      { id: 21, name: "Кроватки", slug: "krovatki" },
      { id: 22, name: "Колыбели", slug: "kolybeli" },
      { id: 23, name: "Люльки", slug: "lyulki" },
      { id: 24, name: "Пеленальные комоды", slug: "pelenalnye-komody" },
      { id: 25, name: "Шкафы", slug: "shkafy" },
      { id: 26, name: "Аксессуары", slug: "aksessuary" },
    ],
  },
  {
    id: 3,
    name: "Коляски",
    slug: "kolyaski",
    subcategories: [
      { id: 31, name: "Прогулочные", slug: "progulochnye" },
      { id: 32, name: "Трансформеры", slug: "transformery" },
      { id: 33, name: "Для двойни", slug: "dlya-dvoyni" },
    ],
  },
  {
    id: 4,
    name: "Автокресла",
    slug: "avtokresla",
    subcategories: [
      { id: 41, name: "Группа 0+", slug: "gruppa-0-plus" },
      { id: 42, name: "Группа 1", slug: "gruppa-1" },
      { id: 43, name: "Группа 2-3", slug: "gruppa-2-3" },
      { id: 44, name: "Группа 0+/1", slug: "gruppa-0-1" },
      { id: 45, name: "Бустеры", slug: "bustery" },
      { id: 46, name: "Аксессуары", slug: "aksessuary-avtokresla" },
    ],
  },
  {
    id: 5,
    name: "Одежда",
    slug: "odezhda",
    subcategories: [
      { id: 51, name: "Для новорождённых", slug: "dlya-novorozhdennyh" },
      { id: 52, name: "Мальчикам", slug: "malchikam" },
      { id: 53, name: "Девочкам", slug: "devochkam" },
    ],
  },
  {
    id: 6,
    name: "Кормление",
    slug: "kormlenie",
    subcategories: [
      { id: 61, name: "Бутылочки", slug: "butylochki" },
      { id: 62, name: "Соски и пустышки", slug: "soski-pustyshki" },
      { id: 63, name: "Молокоотсосы", slug: "molokootsosy" },
      { id: 64, name: "Стульчики для кормления", slug: "stulchiki" },
      { id: 65, name: "Детская посуда", slug: "detskaya-posuda" },
      { id: 66, name: "Детское питание", slug: "detskoe-pitanie" },
    ],
  },
  {
    id: 7,
    name: "Гигиена и уход",
    slug: "gigiena-i-uhod",
    subcategories: [
      { id: 71, name: "Подгузники", slug: "podguzniki" },
      { id: 72, name: "Купание", slug: "kupanie" },
      { id: 73, name: "Уход за кожей", slug: "uhod-za-kozhey" },
      { id: 74, name: "Полотенца и халаты", slug: "polotenca-halaty" },
      { id: 75, name: "Аптечка и градусники", slug: "aptechka-gradusniki" },
      { id: 76, name: "Стрижка и маникюр", slug: "strizhka-manikur" },
    ],
  },
  {
    id: 8,
    name: "Умные игрушки",
    slug: "umnye-igrushki",
    subcategories: [
      { id: 81, name: "Развивающие", slug: "razvivayushchie" },
      { id: 82, name: "Конструкторы", slug: "konstruktory" },
      { id: 83, name: "Музыкальные", slug: "muzykalnye" },
      { id: 84, name: "Интерактивные", slug: "interaktivnye" },
      { id: 85, name: "Обучающие планшеты", slug: "obuchayushchie-planshety" },
      { id: 86, name: "Мягкие игрушки", slug: "myagkie-igrushki" },
    ],
  },
];

export const menuLinks = [
  { id: 1, name: "Акции", path: "/catalog/akcii" },
  { id: 2, name: "О нас", path: "/about" },
  { id: 3, name: "Блог", path: "/blog" },
  { id: 4, name: "Оптовым клиентам", path: "/wholesale" },
  { id: 5, name: "Возврат", path: "/returns" },
  { id: 6, name: "Оплата и доставка", path: "/delivery" },
  { id: 7, name: "Контакты", path: "/contacts" },
];

export const userMenuLinks = [
  { id: 1, name: "Мои заказы", path: "/orders" },
  { id: 2, name: "Мое избранное", path: "/favorites" },
  { id: 3, name: "Личные данные", path: "/profile-settings" },
];

export const transportCompanies = [
  "СДЭК",
  "Деловые линии",
  "Мега Транс",
  "ТРАДО",
];

export const sortOptions = [
  { value: "popularity", name: "популярности" },
  { value: "price", name: "цене" },
  { value: "rating", name: "рейтингу" },
  { value: "name", name: "названию" },
  { value: "discount", name: "скидке" },
];

export const promoCodes = [
  { id: 1, code: "KARAPUZ10", percent: 10 },
  { id: 2, code: "BABY5", percent: 5 },
];

// Аз рӯи промокод маблағи тахфифро мебарорад
export function getDiscount(promo, total) {
  const found = promoCodes.find((el) => el.code === promo.toUpperCase());

  if (!found) {
    return 0;
  }

  return Math.round((total * found.percent) / 100);
}

// Аз category-ҳои маҳаллӣ object-и мувофиқи slug-и URL-ро меёбад.
export function getCategory(slug) {
  return categories.find((el) => el.slug === slug);
}

// Дар дохили category subcategory-и мувофиқи slug-ро меёбад.
export function getSubcategory(category, slug) {
  if (!category) {
    return null;
  }

  return category.subcategories.find((el) => el.slug === slug);
}


export const orders = [
  {
    id: 1,
    number: "№5454647",
    status: "Получен",
    statusColor: "#4CAF50",
    name: "Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING",
    count: "1 шт.",
    image: productCybex,
    orderDate: "21.05.2020",
    paymentMethod: "Картой онлайн",
    price: "152 000 ₽",
    deliveryMethod: "Транспортной компанией",
    address: "Москва, ул. Московская 25-45",
    recipient: "Анна Москва, +7 919 919 99 99",
    deliveryDate: "с 25 мая",
    deliveryCost: "Бесплатно",
  },
  {
    id: 2,
    number: "№5454648",
    status: "Отменен",
    statusColor: "#E53935",
    name: "Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING",
    count: "1 шт.",
    image: productCybex,
    orderDate: "21.05.2020",
    paymentMethod: "Картой онлайн",
    price: "152 000 ₽",
    deliveryMethod: "Транспортной компанией",
    address: "Москва, ул. Московская 25-45",
    recipient: "Анна Москва, +7 919 919 99 99",
    deliveryDate: "с 25 мая",
    deliveryCost: "Бесплатно",
  },
  {
    id: 3,
    number: "№5454649",
    status: "В пути",
    statusColor: "#52A5E0",
    name: "Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING",
    count: "1 шт.",
    image: productCybex,
    orderDate: "21.05.2020",
    paymentMethod: "Картой онлайн",
    price: "152 000 ₽",
    deliveryMethod: "Транспортной компанией",
    address: "Москва, ул. Московская 25-45",
    recipient: "Анна Москва, +7 919 919 99 99",
    deliveryDate: "с 25 мая",
    deliveryCost: "Бесплатно",
  },
];
