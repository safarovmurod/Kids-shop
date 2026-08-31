import { Box, Typography } from "@mui/material"
import CategoryCard from "./CategoryCard"

export default function Categories({ items = [] }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "34px", lg: "70px" },
      }}
    >
      <Typography
        sx={{
          color: "#446B80",
          fontSize: { xs: "19px", lg: "34px" },
          fontWeight: 400,
          lineHeight: { xs: "26px", lg: "44px" },
          textAlign: "center",
        }}
      >
        Популярные категории
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" },
          gap: { xs: "14px", lg: "20px" },
          mt: { xs: "18px", lg: "34px" },
        }}
      >
        {items.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  )
}
