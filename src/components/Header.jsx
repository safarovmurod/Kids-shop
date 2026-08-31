import { Box, Typography, Button, IconButton, InputBase } from "@mui/material"
import { Menu, Search, ShoppingCartOutlined, PersonOutlined, LocationOnOutlined } from "@mui/icons-material"
import { NavLink } from "react-router"
import logo from "../assets/images/logo.png"

export default function Header() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#FFFFFF" }}>
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
        <Box component="img" src={logo} sx={{ width: { xs: "36px", lg: "48px" }, height: { xs: "36px", lg: "48px" }, display: "block" }} />

        <Typography sx={{ display: { xs: "block", lg: "none" }, color: "#446B80", fontSize: "9px", lineHeight: "12px" }}>
          Онлайн гипермаркет<br />товаров для детей
        </Typography>

        <Button
          endIcon={<Menu sx={{ fontSize: "16px" }} />}
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
            "&:hover": { backgroundColor: "#7FC9F0" },
          }}
        >
          Каталог товаров
        </Button>

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
              "&:hover": { backgroundColor: "#7FC9F0" },
            }}
          >
            Найти
          </Button>
        </Box>

        <Button
          startIcon={<PersonOutlined sx={{ fontSize: "18px" }} />}
          sx={{ display: { xs: "none", lg: "inline-flex" }, color: "#446B80", fontSize: "13px", textTransform: "none", whiteSpace: "nowrap" }}
        >
          Войти в личный кабинет
        </Button>

        <Button
          startIcon={<ShoppingCartOutlined sx={{ fontSize: "18px" }} />}
          sx={{ display: { xs: "none", lg: "inline-flex" }, color: "#446B80", fontSize: "13px", textTransform: "none" }}
        >
          Корзина
        </Button>

        <IconButton sx={{ display: { xs: "inline-flex", lg: "none" }, color: "#446B80" }}>
          <ShoppingCartOutlined sx={{ fontSize: "20px" }} />
        </IconButton>
      </Box>

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
          <Typography sx={{ color: "#446B80", fontSize: "9px", lineHeight: "12px" }}>
            Онлайн гипермаркет<br />товаров для детей
          </Typography>

          <Box component={NavLink} to="/" sx={{ color: "#446B80", fontSize: "13px", "&.active": { color: "#7FC9F0" } }}>
            Акции
          </Box>

          <Box component={NavLink} to="/about" sx={{ color: "#446B80", fontSize: "13px", "&.active": { color: "#7FC9F0" } }}>
            О нас
          </Box>

          <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Блог</Typography>

          <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Оптовым клиентам</Typography>

          <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Возврат</Typography>

          <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Оплата и доставка</Typography>

          <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Контакты</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <LocationOnOutlined sx={{ fontSize: "16px", color: "#A9C4D2" }} />

          <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Город:</Typography>

          <Typography sx={{ color: "#7FC9F0", fontSize: "13px" }}>Москва</Typography>
        </Box>
      </Box>
    </Box>
  )
}
