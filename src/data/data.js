import productCybex from "../assets/images/product-cybex-priam.png";

export const apiAkcii = "https://swagger-wheat.vercel.app/api/akcii";
export const apiBlog = "https://swagger-wheat.vercel.app/api/blog";
export const apiMebel = "https://swagger-wheat.vercel.app/api/detskaya-mebel";

export const menuLinks = [
  { id: 1, name: "Каталог товаров", path: "/detskaya-mebel" },
  { id: 2, name: "Акции", path: "/akcii" },
  { id: 3, name: "О нас", path: "/about" },
  { id: 4, name: "Блог", path: "/blog" },
  { id: 5, name: "Оптовым клиентам", path: "/wholesale" },
  { id: 6, name: "Оплата и доставка", path: "/delivery" },
  { id: 7, name: "Возврат", path: "/returns" },
  { id: 8, name: "Контакты", path: "/contacts" },
];

export const userMenuLinks = [
  { id: 1, name: "Мои заказы", path: "/orders" },
  { id: 2, name: "Мое избранное", path: "/favorites" },
  { id: 3, name: "Личные данные", path: "/profile-settings" },
];

export const catalogCategories = [
  {
    id: 1,
    name: "Акции",
    path: "/akcii",
    subcategories: ["Скидки недели", "Товары дня"],
  },
  {
    id: 2,
    name: "Детская мебель",
    path: "/detskaya-mebel",
    subcategories: [
      "Кроватки",
      "Колыбели",
      "Люльки",
      "Пеленальные комоды",
      "Шкафы",
      "Аксессуары",
    ],
  },
  {
    id: 3,
    name: "Коляски",
    path: "/catalog/kolyaski",
    subcategories: ["Прогулочные коляски", "Коляски 2 в 1", "Коляски 3 в 1"],
  },
  {
    id: 4,
    name: "Автокресла",
    path: "/catalog/avtokresla",
    subcategories: ["Группа 0+ (0-13 кг)", "Группа 1-2-3 (9-36 кг)", "Бустеры"],
  },
  {
    id: 5,
    name: "Одежда",
    path: "/catalog/odezhda",
    subcategories: ["Для новорожденных", "Верхняя одежда", "Головные уборы"],
  },
  {
    id: 6,
    name: "Кормление",
    path: "/catalog/kormlenie",
    subcategories: ["Стульчики для кормления", "Посуда", "Стерилизаторы"],
  },
  {
    id: 7,
    name: "Гигиена и уход",
    path: "/catalog/gigiena",
    subcategories: ["Подгузники", "Косметика", "Ванночки"],
  },
  {
    id: 8,
    name: "Умные игрушки",
    path: "/catalog/igrushki",
    subcategories: ["Развивающие центры", "Конструкторы", "Мягкие игрушки"],
  },
];

export const subCategories = [
  { name: "Кроватки", endpoint: "krovatki" },
  { name: "Колыбели", endpoint: "kolybeli" },
  { name: "Люльки", endpoint: "lyulki" },
  { name: "Пеленальные комоды", endpoint: "pelenalnye-komody" },
  { name: "Шкафы", endpoint: "shkafy" },
  { name: "Аксессуары", endpoint: "aksessuary" },
];

export const transportCompanies = ["СДЭК", "Деловые линии", "Мега Транс", "ТРАДО"];

export const sortOptions = [
  { value: "by popularity", name: "популярности" },
  { value: "by price", name: "цене" },
  { value: "by rating", name: "рейтингу" },
  { value: "by name", name: "названию" },
  { value: "by discount", name: "скидке" },
];

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
