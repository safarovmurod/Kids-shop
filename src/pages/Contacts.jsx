import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router";
import ContactInfo from "../components/contacts/ContactInfo";
import ContactForm from "../components/contacts/ContactForm";

export default function Contacts() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: { xs: "16px", lg: "20px" },
        paddingRight: { xs: "16px", lg: "20px" },
        paddingTop: { xs: "20px", lg: "30px" },
        paddingBottom: { xs: "40px", lg: "60px" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        <Typography
          component={NavLink}
          to="/"
          sx={{ color: "#A9B7C0", fontSize: "11px", textDecoration: "none" }}
        >
          Главная
        </Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: "11px" }}>/</Typography>

        <Typography sx={{ color: "#446B80", fontSize: "11px" }}>
          Контакты
        </Typography>
      </Box>

      <Typography
        sx={{
          marginBottom: { xs: "34px", lg: "36px" },
          color: "#446B80",
          fontSize: { xs: "34px", lg: "34px" },
          fontWeight: 600,
        }}
      >
        Контакты
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1.2fr" },
          gap: { xs: "40px", lg: "60px" },
          marginBottom: "40px",
        }}
      >
        <ContactInfo />

        <ContactForm />
      </Box>

      <Box
        sx={{
          width: "100%",
          height: { xs: "280px", lg: "400px" },
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #E5EEF3",
        }}
      >
        <Box
          component="iframe"
          src="https://yandex.ru/map-widget/v1/?ll=47.505000%2C42.978000&z=16&pt=47.505000%2C42.978000%2Cpm2rdm"
          title="Яндекс Карта"
          sx={{ width: "100%", height: "100%", border: 0, display: "block" }}
        />
      </Box>
    </Box>
  );
}
