import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  InputBase,
  Avatar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search,
  ShoppingCartOutlined,
  PersonOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router";
import logo from "../assets/images/logo.png";
import AuthModal from "./AuthModal";
import UserMenuModal from "./UserMenuModal";

export default function Header({ user, onLogin, onLogout }) {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [openUserModal, setOpenUserModal] = useState(false);

  const handleProfileClick = () => {
    setOpenUserModal((prev) => !prev);
  };

  return (
    <Box
      sx={{ width: "100%", backgroundColor: "#FFFFFF", position: "relative" }}
    >
      {/* Верхняя строка Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "10px", lg: "24px" },
          width: "100%",
          maxWidth: "1200px",
          height: { xs: "56px", lg: "72px" },
          mx: "auto",
          px: { xs: "16px", lg: "20px" },
        }}
      >
        <Box
          component={NavLink}
          to="/"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            component="img"
            src={logo}
            sx={{
              width: { xs: "36px", lg: "48px" },
              height: { xs: "36px", lg: "48px" },
              display: "block",
            }}
          />
        </Box>

        <Typography
          sx={{
            display: { xs: "block", lg: "none" },
            color: "#446B80",
            fontSize: "9px",
            lineHeight: "12px",
          }}
        >
          Онлайн гипермаркет
          <br />
          товаров для детей
        </Typography>

        <Button
          endIcon={<MenuIcon sx={{ fontSize: "16px" }} />}
          sx={{
            display: { xs: "none", lg: "inline-flex" },
            height: "36px",
            px: "16px",
            borderRadius: "18px",
            backgroundColor: "#7FC9F0",
            color: "#FFFFFF",
            fontSize: "13px",
            textTransform: "none",
            whiteSpace: "nowrap",
            "&:hover": { backgroundColor: "#68B7DE" },
          }}
        >
          Каталог товаров
        </Button>

        {/* Поле поиска */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            height: { xs: "34px", lg: "36px" },
            pl: "12px",
            borderRadius: "18px",
            border: "1px solid #E5EEF3",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Search sx={{ fontSize: "18px", color: "#A9C4D2" }} />

          <InputBase
            placeholder="Я хочу купить..."
            sx={{ flexGrow: 1, ml: "8px", fontSize: "13px", color: "#446B80" }}
          />

          <Button
            sx={{
              display: { xs: "none", lg: "inline-flex" },
              height: "36px",
              px: "22px",
              borderRadius: "18px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: "13px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#68B7DE" },
            }}
          >
            Найти
          </Button>
        </Box>

        {/* Профиль ё кнопка Вход */}
        {user ? (
          <Box
            onClick={handleProfileClick}
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: "#EBF6FC",
                color: "#7FC9F0",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {user.name ? user.name[0].toUpperCase() : "А"}
            </Avatar>
            <Typography
              sx={{
                color: "#446B80",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              Личный кабинет
            </Typography>
          </Box>
        ) : (
          <Button
            onClick={() => setOpenAuthModal((prev) => !prev)}
            startIcon={<PersonOutlined sx={{ fontSize: "18px" }} />}
            sx={{
              display: { xs: "none", lg: "inline-flex" },
              color: "#446B80",
              fontSize: "13px",
              textTransform: "none",
              whiteSpace: "nowrap",
            }}
          >
            Войти в личный кабинет
          </Button>
        )}

        <Button
          component={NavLink}
          to="/cart"
          startIcon={<ShoppingCartOutlined sx={{ fontSize: "18px" }} />}
          sx={{
            display: { xs: "none", lg: "inline-flex" },
            color: "#446B80",
            fontSize: "13px",
            textTransform: "none",
          }}
        >
          Корзина
        </Button>

        <IconButton
          component={NavLink}
          to="/cart"
          sx={{ display: { xs: "inline-flex", lg: "none" }, color: "#446B80" }}
        >
          <ShoppingCartOutlined sx={{ fontSize: "20px" }} />
        </IconButton>
      </Box>

      {/* Нижняя строка Header */}
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          height: "44px",
          mx: "auto",
          px: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <Typography
            sx={{ color: "#446B80", fontSize: "9px", lineHeight: "12px" }}
          >
            Онлайн гипермаркет
            <br />
            товаров для детей
          </Typography>

          <Box
            component={NavLink}
            to="/akcii"
            sx={{
              color: "#446B80",
              fontSize: "13px",
              textDecoration: "none",
              "&.active": { color: "#7FC9F0" },
            }}
          >
            Акции
          </Box>

          <Box
            component={NavLink}
            to="/about"
            sx={{
              color: "#446B80",
              fontSize: "13px",
              textDecoration: "none",
              "&.active": { color: "#7FC9F0" },
            }}
          >
            О нас
          </Box>

          <Box
            component={NavLink}
            to="/blog"
            sx={{
              color: "#446B80",
              fontSize: "13px",
              textDecoration: "none",
              "&.active": { color: "#7FC9F0" },
            }}
          >
            Блог
          </Box>

          <Typography
            sx={{ color: "#446B80", fontSize: "13px", cursor: "pointer" }}
          >
            Оптовым клиентам
          </Typography>

          <Typography
            sx={{ color: "#446B80", fontSize: "13px", cursor: "pointer" }}
          >
            Возврат
          </Typography>

          <Typography
            sx={{ color: "#446B80", fontSize: "13px", cursor: "pointer" }}
          >
            Оплата и доставка
          </Typography>

          <Typography
            sx={{ color: "#446B80", fontSize: "13px", cursor: "pointer" }}
          >
            Контакты
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <LocationOnOutlined sx={{ fontSize: "16px", color: "#A9C4D2" }} />

          <Typography sx={{ color: "#446B80", fontSize: "13px" }}>
            Город:
          </Typography>

          <Typography
            sx={{ color: "#7FC9F0", fontSize: "13px", cursor: "pointer" }}
          >
            Москва
          </Typography>
        </Box>
      </Box>

      {/* Модалка Входа */}
      <AuthModal
        open={openAuthModal}
        onClose={() => setOpenAuthModal(false)}
        onLogin={onLogin}
      />

      {/* Модалка Меню Личного Кабинета */}
      <UserMenuModal
        open={openUserModal}
        onClose={() => setOpenUserModal(false)}
        user={user}
        onLogout={onLogout}
      />
    </Box>
  );
}
