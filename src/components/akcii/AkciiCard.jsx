import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function AkciiCard({ item }) {
  // Пахши карточка route-и акцияро бо slug мекушояд.
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/akcii/${item.slug}`)}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        cursor: "pointer",
        "&:hover .akcii-image": { transform: "scale(1.04)" },
        "&:hover .akcii-title": { color: "#7FC9F0" },
      }}
    >
      <Box
        component="img"
        className="akcii-image"
        src={item.image}
        alt={item.title}
        sx={{
          transition: "transform 0.35s ease",
          width: "100%",
          height: { xs: "150px", lg: "240px" },
          borderRadius: "8px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <Typography
        sx={{
          marginTop: { xs: "14px", lg: "16px" },
          color: "#A9B7C0",
          fontSize: { xs: "16px", lg: "12px" },
        }}
      >
        {item.date}
      </Typography>

      <Typography
        className="akcii-title"
        sx={{
          marginTop: "10px",
          color: "#446B80",
          transition: "color 0.25s ease",
          fontSize: { xs: "18px", lg: "15px" },
          fontWeight: 500,
          lineHeight: { xs: "26px", lg: "22px" },
        }}
      >
        {item.title}
      </Typography>
    </Box>
  );
}
