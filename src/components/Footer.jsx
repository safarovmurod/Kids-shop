import { Box, Stack, Typography } from "@mui/material"
import logo from "../assets/images/logo.png"
import instagram from "../assets/icons/instagram.svg"
import whatsapp from "../assets/icons/whatsapp.svg"
import vk from "../assets/icons/vk.svg"
import facebook from "../assets/icons/facebook.svg"

export default function Footer() {
  return (
    <Box sx={{ width: "100%", pt: { xs: "30px", lg: "40px" }, pb: "20px", backgroundColor: "#FCF6F5" }}>
      <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", px: { xs: "16px", lg: "20px" } }}>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          gap={{ xs: "24px", lg: "40px" }}
        >
          <Stack direction="row" alignItems="center" gap="12px" sx={{ display: { xs: "none", lg: "flex" } }}>
            <Box component="img" src={logo} sx={{ width: "48px", height: "48px", display: "block" }} />

            <Typography sx={{ color: "#446B80", fontSize: "11px", lineHeight: "15px" }}>
              Онлайн гипермаркет<br />товаров для детей
            </Typography>
          </Stack>

          <Stack direction="row" gap={{ xs: "40px", lg: "60px" }}>
            <Stack gap="10px">
              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>О нас</Typography>

              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Акции</Typography>

              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Блог</Typography>

              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Контакты</Typography>
            </Stack>

            <Stack gap="10px">
              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Оптовым клиентам</Typography>

              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Оплата и доставка</Typography>

              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Возврат</Typography>
            </Stack>
          </Stack>

          <Stack gap="14px">
            <Typography sx={{ color: "#446B80", fontSize: "13px" }}>Мы в социальных сетях</Typography>

            <Stack direction="row" gap="14px">
              <Box component="img" src={instagram} sx={{ width: "26px", height: "26px", display: "block" }} />

              <Box component="img" src={whatsapp} sx={{ width: "26px", height: "26px", display: "block" }} />

              <Box component="img" src={vk} sx={{ width: "26px", height: "26px", display: "block" }} />

              <Box component="img" src={facebook} sx={{ width: "26px", height: "26px", display: "block" }} />
            </Stack>
          </Stack>
        </Stack>

        <Box sx={{ width: "100%", height: "1px", mt: { xs: "24px", lg: "30px" }, backgroundColor: "#EDE3E1" }} />

        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          gap="10px"
          sx={{ pt: "16px" }}
        >
          <Typography sx={{ color: "#A9B7C0", fontSize: "12px" }}>© 2020 karapuz05.ru</Typography>

          <Typography sx={{ display: { xs: "none", lg: "block" }, color: "#A9B7C0", fontSize: "12px" }}>
            Пользовательское соглашение / политика конфиденциальности
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}
