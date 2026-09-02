import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function AkciiCard({ item }) {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/akcii/${item.slug}`)}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        cursor: "pointer",
      }}
    >
      <Box
        component="img"
        src={item.image}
        alt={item.title}
        sx={{
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
        sx={{
          marginTop: "10px",
          color: "#446B80",
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
