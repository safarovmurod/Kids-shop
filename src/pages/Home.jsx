import { Box } from "@mui/material";
import Hero from "../components/home/Hero";
import WideCard from "../components/home/WideCard";
import Categories from "../components/home/Categories";
import NewProducts from "../components/home/NewProducts";
import Banner from "../components/home/Banner";

// import PopularProducts from "../components/home/PopularProducts";
import AboutShop from "../components/home/AboutShop";

export default function Home() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#FFFFFF" }}>
      <Hero />
      <WideCard />
      <Categories />
      <NewProducts />
      <Banner />
      <NewProducts isAkcii={"Выгодное предложение"} />
      <NewProducts isAkcii={"Популярные товары"} />
      <AboutShop />
    </Box>
  );
}
