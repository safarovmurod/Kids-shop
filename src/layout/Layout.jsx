import { useState, useEffect, Suspense } from "react";
import { Outlet } from "react-router";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  // Аз localStorage хондани маълумоти корбар
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

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
          <Outlet context={{ user, login, logout }} />
        </Suspense>
      </Box>

      <Footer />
    </Box>
  );
}
