import { Box } from "@mui/material"
import Hero from "../components/home/Hero"
import WideCard from "../components/home/WideCard"
import Categories from "../components/home/Categories"
import NewProducts from "../components/home/NewProducts"
import Banner from "../components/home/Banner"
import Offers from "../components/home/Offers"
import PopularProducts from "../components/home/PopularProducts"
import AboutShop from "../components/home/AboutShop"

export default function Home() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#FFFFFF" }}>
      <Hero />
      <WideCard items={[]} />
      <Categories />
      <NewProducts items={[]} />
      <Banner />
      <Offers items={[]} />
      <PopularProducts items={[]} />
      <AboutShop />
    </Box>
  )
}
