import { useContext, useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Avatar,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ShoppingCartOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router";
import logo from "../assets/images/logo.png";
import AuthModal from "./AuthModal";
import CatalogDropdown from "./CatalogDropdown";
import HeaderNav from "./HeaderNav";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import { AppContext } from "../context/AppContext";

export default function Header() {
  const { state } = useContext(AppContext);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [openCatalog, setOpenCatalog] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const navigate = useNavigate();

  const user = state.user;
  let cartCount = 0;

  state.cart.forEach((el) => {
    cartCount = cartCount + el.count;
  });

  return (
    <Box
      onMouseLeave={() => setOpenCatalog(false)}
      sx={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        position: "relative",
        zIndex: 1000,
      }}
    >
      {/* Сатри болоии Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "10px", lg: "24px" },
          width: "100%",
          maxWidth: "1200px",
          height: { xs: "60px", lg: "72px" },
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: { xs: "16px", lg: "20px" },
          paddingRight: { xs: "16px", lg: "20px" },
        }}
      >
        {/* Бургер танҳо дар телефон */}
        <IconButton
          onClick={() => setOpenMobileMenu(true)}
          sx={{
            display: { xs: "inline-flex", lg: "none" },
            padding: 0,
            color: "#7FC9F0",
          }}
        >
          <MenuIcon sx={{ fontSize: "28px" }} />
        </IconButton>

        <Box
          component={NavLink}
          to="/"
          sx={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Box
            component="img"
            src={logo}
            alt="Карапуз"
            sx={{
              width: { xs: "40px", lg: "48px" },
              height: { xs: "40px", lg: "48px" },
              display: "block",
            }}
          />

          <Typography
            sx={{
              display: { xs: "block", lg: "none" },
              color: "#446B80",
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "15px",
            }}
          >
            Онлайн гипермаркет
            <br />
            товаров для детей
          </Typography>
        </Box>

        {/* Тугмаи Каталог танҳо дар ПК */}
        <Button
          onMouseEnter={() => setOpenCatalog(true)}
          onClick={() => setOpenCatalog(!openCatalog)}
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
            paddingLeft: "16px",
            paddingRight: "16px",
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

        <SearchBar />

        {user ? (
          <Box
            onClick={() => navigate("/profile-settings")}
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <Avatar
              sx={{
                width: 36,
                height: 36,
                backgroundColor: "#EBF6FC",
                color: "#7FC9F0",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              {user.fullName ? user.fullName[0].toUpperCase() : "А"}
            </Avatar>

            <Typography
              sx={{ color: "#446B80", fontSize: "13px", fontWeight: 500 }}
            >
              Личный кабинет
            </Typography>
          </Box>
        ) : (
          <Button
            onClick={() => setOpenAuthModal(true)}
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

        {/* Корзина: дар телефон танҳо иконка, дар ПК бо матн */}
        <IconButton
          onClick={() => navigate("/cart")}
          sx={{
            display: { xs: "inline-flex", lg: "none" },
            padding: 0,
            color: "#7FC9F0",
          }}
        >
          <Badge
            badgeContent={cartCount}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#7FC9F0",
                color: "#FFFFFF",
                fontSize: "10px",
              },
            }}
          >
            <ShoppingCartOutlined sx={{ fontSize: "30px" }} />
          </Badge>
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
            whiteSpace: "nowrap",
          }}
        >
          Корзина {cartCount > 0 ? `(${cartCount})` : ""}
        </Button>
      </Box>

      <SearchBar mobile />

      <HeaderNav />

      {openCatalog && <CatalogDropdown onClose={() => setOpenCatalog(false)} />}

      <MobileMenu
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
        onOpenAuth={() => setOpenAuthModal(true)}
      />

      <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
    </Box>
  );
}
