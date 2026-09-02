import axios from "axios";
import { apiMebel } from "../../data/data";

export async function fetchProductsByEndpoint(endpoint) {
  try {
    const { data } = await axios.get(`${apiMebel}/${endpoint}`);
    return Array.isArray(data) ? data : data.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
