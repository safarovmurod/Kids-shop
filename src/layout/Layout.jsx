import { Outlet } from "react-router"
import { Box } from "@mui/material"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#1C1C1C" }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  )
}