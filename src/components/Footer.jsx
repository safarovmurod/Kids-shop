import { Box, Typography } from "@mui/material"
import logo from "../assets/images/logo.png"
import instagram from "../assets/icons/instagram.svg"
import whatsapp from "../assets/icons/whatsapp.svg"
import vk from "../assets/icons/vk.svg"
import facebook from "../assets/icons/facebook.svg"

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        pt: { xs: "30px", lg: "40px" },
        pb: "20px",
        borderTop: "1px solid #EDEEEF",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", px: { xs: "16px", lg: "20px" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            gap: { xs: "24px", lg: "40px" },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Box component="img" src={logo} sx={{ width: "48px", height: "48px", display: "block" }} />

            <Typography sx={{ color: "#446B80", fontSize: "11px", lineHeight: "15px" }}>
              Онлайн гипермаркет<br />товаров для детей
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: { xs: "40px", lg: "60px" } }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>О нас</Typography>

              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Акции</Typography>

              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Блог</Typography>

              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Контакты</Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Оптовым клиентам</Typography>

              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Оплата и доставка</Typography>

              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Возврат</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Мы в социальных сетях</Typography>

            <Box sx={{ display: "flex", gap: "14px" }}>
              <Box component="img" src={instagram} sx={{ width: "26px", height: "26px", display: "block" }} />

              <Box component="img" src={whatsapp} sx={{ width: "26px", height: "26px", display: "block" }} />

              <Box component="img" src={vk} sx={{ width: "26px", height: "26px", display: "block" }} />

              <Box component="img" src={facebook} sx={{ width: "26px", height: "26px", display: "block" }} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            gap: "10px",
            pt: { xs: "24px", lg: "34px" },
          }}
        >
          <Typography sx={{ color: "#A9B7C0", fontSize: "12px" }}>© 2020 karapuz05.ru</Typography>

          <Typography sx={{ display: { xs: "none", lg: "block" }, color: "#A9B7C0", fontSize: "12px" }}>
            Пользовательское соглашение / политика конфиденциальности
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
