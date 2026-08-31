import { Outlet } from "react-router"
import { Box } from "@mui/material"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout() {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  )
}
