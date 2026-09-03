import { Box, Typography } from "@mui/material";
import { Instagram, WhatsApp, Facebook } from "@mui/icons-material";

export default function ContactInfo() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "26px" }}>
      <Box>
        <Typography
          sx={{
            marginBottom: "10px",
            color: "#446B80",
            fontSize: { xs: "22px", lg: "16px" },
            fontWeight: 600,
          }}
        >
          Адрес
        </Typography>

        <Typography
          sx={{
            color: "#8FA6B3",
            fontSize: { xs: "17px", lg: "14px" },
            lineHeight: 1.6,
          }}
        >
          Республика Дагестан, г Махачкала, улица Батырая 108
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            marginBottom: "10px",
            color: "#446B80",
            fontSize: { xs: "22px", lg: "16px" },
            fontWeight: 600,
          }}
        >
          Телефон
        </Typography>

        <Typography
          sx={{
            marginBottom: "8px",
            color: "#8FA6B3",
            fontSize: { xs: "17px", lg: "14px" },
          }}
        >
          + 7 872 278 08 58
        </Typography>

        <Typography
          sx={{ color: "#8FA6B3", fontSize: { xs: "17px", lg: "14px" } }}
        >
          +7 988 799 93 27
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            marginBottom: "10px",
            color: "#446B80",
            fontSize: { xs: "22px", lg: "16px" },
            fontWeight: 600,
          }}
        >
          Электронный адрес
        </Typography>

        <Typography
          sx={{ color: "#8FA6B3", fontSize: { xs: "17px", lg: "14px" } }}
        >
          karapuz_108@mail.ru
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            marginBottom: "14px",
            color: "#446B80",
            fontSize: { xs: "22px", lg: "16px" },
            fontWeight: 600,
          }}
        >
          Instagram и Whatsapp
        </Typography>

        <Box sx={{ display: "flex", gap: "16px", color: "#7FC9F0" }}>
          <Instagram sx={{ fontSize: { xs: "34px", lg: "26px" } }} />
          <WhatsApp sx={{ fontSize: { xs: "34px", lg: "26px" } }} />
          <Facebook sx={{ fontSize: { xs: "34px", lg: "26px" } }} />
        </Box>
      </Box>
    </Box>
  );
}
