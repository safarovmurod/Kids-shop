import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router";
import logo from "../assets/images/logo.png";
import instagram from "../assets/icons/instagram.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import vk from "../assets/icons/vk.svg";
import facebook from "../assets/icons/facebook.svg";

const leftLinks = [
  { id: 1, name: "О нас", path: "/about" },
  { id: 2, name: "Акции", path: "/akcii" },
  { id: 3, name: "Блог", path: "/blog" },
  { id: 4, name: "Контакты", path: "/contacts" },
];

const rightLinks = [
  { id: 1, name: "Оптовым клиентам", path: "/wholesale" },
  { id: 2, name: "Оплата и доставка", path: "/delivery" },
  { id: 3, name: "Возврат", path: "/returns" },
];

const socials = [
  { id: 1, image: instagram },
  { id: 2, image: whatsapp },
  { id: 3, image: vk },
  { id: 4, image: facebook },
];

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: { xs: "34px", lg: "40px" },
        paddingBottom: "20px",
        borderTop: "1px solid #EDEEEF",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: { xs: "16px", lg: "20px" },
          paddingRight: { xs: "16px", lg: "20px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            gap: { xs: "34px", lg: "40px" },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Карапуз"
              sx={{ width: "48px", height: "48px", display: "block" }}
            />

            <Typography
              sx={{ color: "#446B80", fontSize: "11px", lineHeight: "15px" }}
            >
              Онлайн гипермаркет
              <br />
              товаров для детей
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: { xs: "30px", lg: "60px" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "18px", lg: "10px" },
              }}
            >
              {leftLinks.map((el) => (
                <Typography
                  key={el.id}
                  component={NavLink}
                  to={el.path}
                  sx={{
                    color: "#446B80",
                    fontSize: { xs: "17px", lg: "13px" },
                    textDecoration: "none",
                  }}
                >
                  {el.name}
                </Typography>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "18px", lg: "10px" },
              }}
            >
              {rightLinks.map((el) => (
                <Typography
                  key={el.id}
                  component={NavLink}
                  to={el.path}
                  sx={{
                    color: "#446B80",
                    fontSize: { xs: "17px", lg: "13px" },
                    textDecoration: "none",
                  }}
                >
                  {el.name}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "18px", lg: "14px" },
            }}
          >
            <Typography
              sx={{
                color: "#446B80",
                fontSize: { xs: "17px", lg: "13px" },
              }}
            >
              Мы в социальных сетях
            </Typography>

            <Box sx={{ display: "flex", gap: { xs: "18px", lg: "14px" } }}>
              {socials.map((el) => (
                <Box
                  key={el.id}
                  component="img"
                  src={el.image}
                  alt="Соцсеть"
                  sx={{
                    width: { xs: "34px", lg: "26px" },
                    height: { xs: "34px", lg: "26px" },
                    display: "block",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            gap: "10px",
            paddingTop: { xs: "30px", lg: "34px" },
          }}
        >
          <Typography
            sx={{ color: "#A9B7C0", fontSize: { xs: "15px", lg: "12px" } }}
          >
            © 2020 karapuz05.ru
          </Typography>

          <Typography
            sx={{
              display: { xs: "none", lg: "block" },
              color: "#A9B7C0",
              fontSize: "12px",
            }}
          >
            Пользовательское соглашение / политика конфиденциальности
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
