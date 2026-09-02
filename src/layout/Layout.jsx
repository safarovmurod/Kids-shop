import { Suspense } from "react";
import { Outlet } from "react-router";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartDialog from "../components/CartDialog";
import { AppProvider } from "../context/AppContext";

export default function Layout() {
  return (
    <AppProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />

        <Box component="main" sx={{ flex: 1 }}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Box>

        <Footer />

        <CartDialog />
      </Box>
    </AppProvider>
  );
}
