import { useState, Suspense } from "react";
import { Outlet } from "react-router";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  function login(userData, userToken) {
    setUser(userData);
    if (userToken) setToken(userToken);
  }

  function logout() {
    setUser(null);
    setToken("");
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Пропси user ва овардани он ба Header */}
      <Header user={user} onLogin={login} onLogout={logout} />

      <Box component="main" sx={{ flex: 1 }}>
        <Suspense fallback={null}>
          <Outlet context={{ user, token, login, logout }} />
        </Suspense>
      </Box>

      <Footer />
    </Box>
  );
}
