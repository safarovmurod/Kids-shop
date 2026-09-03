import { Box, Typography } from "@mui/material";
import Stars from "./Stars";

export default function ProductHead({ item, reviewCount }) {
  return (
    <Box>
      <Typography
        sx={{
          display: { xs: "none", lg: "block" },
          marginBottom: "8px",
          color: "#A9C4D2",
          fontSize: "13px",
        }}
      >
        Артикул {item.article}
      </Typography>

      <Typography
        sx={{
          color: "#446B80",
          fontSize: { xs: "26px", lg: "24px" },
          fontWeight: 600,
          lineHeight: 1.35,
        }}
      >
        {item.name}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "14px",
        }}
      >
        <Stars rating={item.rating} size="22px" />

        <Typography
          sx={{ color: "#8FA6B3", fontSize: { xs: "17px", lg: "14px" } }}
        >
          {reviewCount === 0 ? "Нет отзывов" : `Отзывов: ${reviewCount}`}
        </Typography>
      </Box>

      <Typography
        sx={{
          display: { xs: "block", lg: "none" },
          marginTop: "12px",
          color: "#A9C4D2",
          fontSize: "17px",
        }}
      >
        Артикул {item.article}
      </Typography>
    </Box>
  );
}
