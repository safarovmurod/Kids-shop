import { Box } from "@mui/material";
import Hero from "../components/home/Hero";
import WideCard from "../components/home/WideCard";
import Categories from "../components/home/Categories";
import NewProducts from "../components/home/NewProducts";
import Banner from "../components/home/Banner";
import AboutShop from "../components/home/AboutShop";

export default function Home() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#FFFFFF" }}>
      <Hero />
      <WideCard />
      <Categories />
      <NewProducts title="Новинки" />
      <Banner />
      <NewProducts title="Выгодное предложение" />
      <NewProducts title="Популярные товары" />
      <AboutShop />
    </Box>
  );
}
