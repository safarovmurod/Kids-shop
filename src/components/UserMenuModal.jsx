import { Box, Typography, Avatar, Divider } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router";

export default function UserMenuModal({ open, onClose, user, onLogout }) {
  if (!open || !user) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        top: "79px",
        right: { xs: "16px", lg: "18.49%" },
        width: "280px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.16)",
        borderRadius: "12px",
        padding: "20px",
        boxSizing: "border-box",
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Avatar
          sx={{
            width: 40,
            height: 40,
            backgroundColor: "#EBF6FC",
            color: "#7FC9F0",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          {user.name ? user.name[0].toUpperCase() : "А"}
        </Avatar>
        <Box sx={{ overflow: "hidden" }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#2B5674",
              lineHeight: 1.2,
            }}
          >
            {user.name || "Анна"}
          </Typography>
          <Typography
            sx={{
              fontSize: "11px",
              color: "#A9C4D2",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              mt: "2px",
            }}
          >
            {user.email || "annannnanana@gmail.com"}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#F0F4F7", my: "4px" }} />

      {/* Мои заказы */}
      <Box
        component={NavLink}
        to="/orders"
        onClick={onClose}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          color: "#446B80",
          textDecoration: "none",
          py: "4px",
          "&:hover": { color: "#7FC9F0" },
        }}
      >
        <Inventory2OutlinedIcon sx={{ fontSize: "18px", color: "#7FC9F0" }} />
        <Typography sx={{ fontSize: "13px" }}>Мои заказы</Typography>
      </Box>

      {/* Мое избранное */}
      <Box
        component={NavLink}
        to="/favorites"
        onClick={onClose}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          color: "#446B80",
          textDecoration: "none",
          py: "4px",
          "&:hover": { color: "#7FC9F0" },
        }}
      >
        <FavoriteBorderIcon sx={{ fontSize: "18px", color: "#7FC9F0" }} />
        <Typography sx={{ fontSize: "13px" }}>Мое избранное</Typography>
      </Box>

      <Divider sx={{ borderColor: "#F0F4F7", my: "4px" }} />

      {/* Настройки личных данных */}
      <Box
        component={NavLink}
        to="/profile-settings"
        onClick={onClose}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          color: "#446B80",
          textDecoration: "none",
          py: "4px",
          "&:hover": { color: "#7FC9F0" },
        }}
      >
        <SettingsOutlinedIcon sx={{ fontSize: "18px", color: "#7FC9F0" }} />
        <Typography sx={{ fontSize: "13px" }}>
          Настройки личных данных
        </Typography>
      </Box>

      {/* Выйти */}
      <Box
        onClick={() => {
          onLogout();
          onClose();
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          color: "#446B80",
          cursor: "pointer",
          py: "4px",
          "&:hover": { color: "#FF6B6B" },
        }}
      >
        <LogoutIcon sx={{ fontSize: "18px", color: "#7FC9F0" }} />
        <Typography sx={{ fontSize: "13px" }}>Выйти</Typography>
      </Box>
    </Box>
  );
}
