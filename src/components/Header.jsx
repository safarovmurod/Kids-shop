import { Box, Stack, Typography, Button, IconButton } from "@mui/material"
import { Menu, Close } from "@mui/icons-material"
import { NavLink } from "react-router"
import { useState } from "react"
const navLinks = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Careers", path: "/careers" },
  { id: 3, label: "About", path: "/about" },
  { id: 4, label: "Security", path: "/security" },
]

const linkStyle = {
  textDecoration: "none",
  padding: "10px 20px",
  borderRadius: "100px",
  color: "#99999B",
  fontSize: "14px",
  whiteSpace: "nowrap",
  "&.active": {
    backgroundColor: "#262626",
    color: "#FFFFFF",
  },
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Box sx={{ position: "relative", width: "100%", px: { xs: "16px", lg: "40px" }, backgroundColor: "#1C1C1C" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1280px",
          height: { xs: "64px", lg: "80px" },
          mx: "auto",
        }}
      >
        <Stack direction="row" alignItems="center" gap="10px">
          <Typography sx={{ color: "#FFFFFF", fontSize: "20px", fontWeight: 600 }}>
            YourBank
          </Typography>
        </Stack>

        <Stack direction="row" gap="8px" sx={{ display: { xs: "none", lg: "flex" } }}>
          {navLinks.map((item) => (
            <Box
              key={item.id}
              component={NavLink}
              to={item.path}
              end={item.path === "/"}
              sx={linkStyle}
            >
              {item.label}
            </Box>
          ))}
        </Stack>

        <Stack direction="row" alignItems="center" gap="20px">
          <Button href="mailto:hello@yourbank.com" sx={{ display: { xs: "none", lg: "block" }, color: "#FFFFFF", fontSize: "14px", textTransform: "none" }}>
            Sign Up
          </Button>
          <Button
            href="mailto:hello@yourbank.com?subject=Login"
            sx={{
              height: "44px",
              px: "28px",
              borderRadius: "100px",
              backgroundColor: "#CAFF33",
              color: "#1C1C1C",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "none",
              whiteSpace: "nowrap",
              "&:hover": { backgroundColor: "#CAFF33" },
            }}
          >
            Login
          </Button>
          <IconButton
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            sx={{ display: { xs: "inline-flex", lg: "none" }, color: "#FFFFFF" }}
          >
            {menuOpen ? <Close /> : <Menu />}
          </IconButton>
        </Stack>
      </Box>
      {menuOpen && (
        <Stack gap="8px" sx={{ display: { xs: "flex", lg: "none" }, pb: "16px" }}>
          {navLinks.map((item) => (
            <Box
              key={item.id}
              component={NavLink}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setMenuOpen(false)}
              sx={{ ...linkStyle, px: "16px", py: "12px" }}
            >
              {item.label}
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  )
}