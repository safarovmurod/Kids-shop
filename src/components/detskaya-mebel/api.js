import axios from "axios";
import { apiMebel, subCategories } from "../../data/data";

export async function fetchProductsByEndpoint(endpoint) {
  try {
    const { data } = await axios.get(`${apiMebel}/${endpoint}`);
    return Array.isArray(data) ? data : data.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

// API маҳсулотро аз рӯи id намедиҳад, барои ҳамин аз рӯи зеркатегорияҳо меҷӯем
export async function fetchProductById(id) {
  for (const sub of subCategories) {
    const list = await fetchProductsByEndpoint(sub.endpoint);
    const found = list.find((el) => String(el.id) === String(id));

    if (found) {
      return found;
    }
  }

  return null;
}
