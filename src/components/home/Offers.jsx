import { Box, Typography } from "@mui/material"
import ProductCard from "./ProductCard"
import Arrows from "./Arrows"

export default function Offers({ items = [] }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "30px", lg: "70px" },
      }}
    >
      <Typography
        sx={{
          color: "#446B80",
          fontSize: { xs: "18px", lg: "34px" },
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Выгодное предложение
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" },
          gap: { xs: "12px", lg: "20px" },
          mt: { xs: "18px", lg: "34px" },
        }}
      >
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>

      <Arrows />
    </Box>
  )
}
