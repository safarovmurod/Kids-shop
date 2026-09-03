import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { AppContext } from "../context/AppContext";

export default function FavoritesPage() {
  const { state } = useContext(AppContext);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: { xs: "16px", lg: "20px" },
        paddingRight: { xs: "16px", lg: "20px" },
        paddingTop: { xs: "20px", lg: "40px" },
        paddingBottom: { xs: "40px", lg: "80px" },
      }}
    >
      <Typography
        sx={{
          marginBottom: { xs: "26px", lg: "32px" },
          color: "#2B5674",
          fontSize: { xs: "34px", lg: "32px" },
          fontWeight: 700,
        }}
      >
        Мое избранное
      </Typography>

      {state.favorites.length === 0 ? (
        <Typography sx={{ color: "#708090", fontSize: "15px" }}>
          Вы пока ничего не добавили в избранное
        </Typography>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" },
            gap: { xs: "12px", lg: "24px" },
          }}
        >
          {state.favorites.map((el) => (
            <ProductCard key={el.id} item={el} />
          ))}
        </Box>
      )}
    </Box>
  );
}
