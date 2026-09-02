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
  Close as CloseIcon,
  Search,
  ShoppingCartOutlined,
  PersonOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router";
import logo from "../assets/images/logo.png";
import AuthModal from "./AuthModal";
import UserMenuModal from "./UserMenuModal";
import CatalogDropdown from "./CatalogDropdown"; // Фарёд кардани компоненти алоҳида

export default function Header({ user, onLogin, onLogout }) {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [openCatalog, setOpenCatalog] = useState(false);

  const handleProfileClick = () => {
    setOpenUserModal((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        position: "relative",
        zIndex: 1000,
      }}
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

        {/* Тугмаи Каталог */}
        <Button
          onClick={() => setOpenCatalog((prev) => !prev)}
          endIcon={
            openCatalog ? (
              <CloseIcon sx={{ fontSize: "16px" }} />
            ) : (
              <MenuIcon sx={{ fontSize: "16px" }} />
            )
          }
          sx={{
            display: { xs: "none", lg: "inline-flex" },
            height: "36px",
            px: "16px",
            borderRadius: "18px",
            backgroundColor: openCatalog ? "#52B4E8" : "#7FC9F0",
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

        {/* Профиль ё Вход */}
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
              src={user.avatar}
              sx={{
                width: 36,
                height: 36,
                backgroundColor: "#EBF6FC",
                color: "#7FC9F0",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              {user.fullName.slice(0, 1).toUpperCase()}
            </Avatar>
            <Typography
              component={NavLink}
              to="/profile-settings"
              onClick={(event) => {
                event.stopPropagation();
                setOpenUserModal(false);
              }}
              sx={{ color: "#446B80", fontSize: "13px", fontWeight: 500 }}
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

        <IconButton
          aria-label={user ? "Личный кабинет" : "Войти в личный кабинет"}
          onClick={() => {
            if (user) setOpenUserModal((prev) => !prev);
            else setOpenAuthModal((prev) => !prev);
          }}
          sx={{ display: { xs: "inline-flex", lg: "none" }, color: "#7FC9F0" }}
        >
          {user ? <Avatar src={user.avatar}>{user.fullName.slice(0, 1)}</Avatar> : <PersonOutlined />}
        </IconButton>

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
          <Box
            component={NavLink}
            to="/wholesale"
            sx={{
              color: "#446B80",
              fontSize: "13px",
              textDecoration: "none",
              "&.active": { color: "#7FC9F0" },
            }}
          >
            Оптовым клиентам
          </Box>
          <Box
            component={NavLink}
            to="/returns"
            sx={{
              color: "#446B80",
              fontSize: "13px",
              textDecoration: "none",
              "&.active": { color: "#7FC9F0" },
            }}
          >
            Возврат
          </Box>
          <Box
            component={NavLink}
            to="/delivery"
            sx={{
              color: "#446B80",
              fontSize: "13px",
              textDecoration: "none",
              "&.active": { color: "#7FC9F0" },
            }}
          >
            Оплата и доставка
          </Box>
          <Box
            component={NavLink}
            to="/contacts"
            sx={{
              color: "#446B80",
              fontSize: "13px",
              textDecoration: "none",
              "&.active": { color: "#7FC9F0" },
            }}
          >
            Контакты
          </Box>
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

      {/* Фарёд кардани компоненти Каталог */}
      {openCatalog && <CatalogDropdown onClose={() => setOpenCatalog(false)} />}

      {/* Модалки */}
      <AuthModal
        open={openAuthModal}
        onClose={() => setOpenAuthModal(false)}
        onLogin={onLogin}
      />
      <UserMenuModal
        open={openUserModal}
        onClose={() => setOpenUserModal(false)}
        user={user}
        onLogout={onLogout}
      />
    </Box>
  );
}
