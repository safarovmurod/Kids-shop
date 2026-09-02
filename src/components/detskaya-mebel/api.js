import axios from "axios";

export const fetchProductsByEndpoint = async (endpoint) => {
  let url = "";
  switch (endpoint) {
    case "krovatki":
      url = "https://swagger-wheat.vercel.app/api/detskaya-mebel/krovatki";
      break;
    case "kolybeli":
      url = "https://swagger-wheat.vercel.app/api/detskaya-mebel/kolybeli";
      break;
    case "lyulki":
      url = "https://swagger-wheat.vercel.app/api/detskaya-mebel/lyulki";
      break;
    case "pelenalnye-komody":
      url =
        "https://swagger-wheat.vercel.app/api/detskaya-mebel/pelenalnye-komody";
      break;
    case "shkafy":
      url = "https://swagger-wheat.vercel.app/api/detskaya-mebel/shkafy";
      break;
    case "aksessuary":
      url = "https://swagger-wheat.vercel.app/api/detskaya-mebel/aksessuary";
      break;
    default:
      url = "https://swagger-wheat.vercel.app/api/detskaya-mebel/krovatki";
  }

  const res = await axios.get(url);
  return Array.isArray(res.data) ? res.data : res.data.data || [];
};
