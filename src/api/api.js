import axios from "axios";
import { api } from "../data/data";

// Ҳамаи ссылкаҳо дар як ҷо: як case — як ссылка
export function getUrl(type, options) {
  // Агар page/pageSize дода нашаванд, request аз саҳифаи 1 бо 20 сабт оғоз мешавад.
  const page = options.page || 1;
  const size = options.pageSize || 20;

  switch (type) {
    case "category":
      return `${api}/${options.category}?page=${page}&pageSize=${size}`;

    case "subcategory":
      return `${api}/${options.category}/${options.subcategory}?page=${page}&pageSize=${size}`;

    case "product":
      return `${api}/products/${options.id}`;

    case "reviews":
      return `${api}/products/${options.id}/reviews`;

    // encodeURIComponent матни search-ро барои URL бехатар мекунад, аз ҷумла фосила ва ҳарфҳои тоҷикӣ.
    case "search":
      return `${api}/products/search?search=${encodeURIComponent(options.search)}&page=${page}&pageSize=${size}`;

    case "products":
      return `${api}/products?page=${page}&pageSize=${size}`;

    case "categories":
      return `${api}/categories`;

    case "blog":
      return `${api}/blog?page=${page}&pageSize=${size}`;

    case "blogItem":
      return `${api}/blog/${options.id}`;

    case "promotions":
      return `${api}/promotions?page=${page}&pageSize=${size}`;

    case "promotion":
      return `${api}/promotions/${options.id}`;

    default:
      return `${api}/products?page=${page}&pageSize=${size}`;
  }
}

// Як GET барои ҳамаи саҳифаҳо. Ҷавоб бо конверт бармегардад:
// { data, page, pageSize, total, totalPages }
export async function getData(type, options = {}) {
  try {
    // await то омадани response интизор мешавад; data ин body-и ҷавоби API аст.
    const { data } = await axios.get(getUrl(type, options));
    return data;
  } catch (error) {
    console.error(error);
    return { data: null, total: 0, totalPages: 1 };
  }
}

// Рӯйхат ҳамеша массив бармегардонад
export async function getList(type, options = {}) {
  const answer = await getData(type, options);

  return {
    list: Array.isArray(answer.data) ? answer.data : [],
    total: answer.total || 0,
    totalPages: answer.totalPages || 1,
  };
}

// Сабти корбар: ҳам барои регистрация, ҳам барои маълумоти шахсӣ
export async function saveUser(form) {
  try {
    // FormData майдонҳо ва File-и avatar-ро дар як multipart request мефиристад.
    const formData = new FormData();

    formData.append("fullName", form.fullName);
    formData.append("tel", form.tel);
    formData.append("email", form.email);
    formData.append("address", form.address);

    if (form.id) {
      formData.append("id", form.id);
    }

    if (form.avatar) {
      formData.append("avatar", form.avatar);
    }

    const { data } = await axios.post(`${api}/users`, formData);
    return data.data || data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// URL-и avatar-ро аз id месозад; browser суратро аз ҳамин endpoint мегирад.
export function getAvatarUrl(id) {
  return `${api}/users/${id}/avatar`;
}
