import React from "react";
import { Box, Typography, Grid, Button, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const favoriteProducts = [
  {
    id: 1,
    title: "Коляска Riko Basic, Польша",
    price: "52 000 ₽",
    image: "https://via.placeholder.com/180",
  },
  {
    id: 2,
    title: "Постельное белье Forest Sky (3 предмета)",
    price: "2 000 ₽",
    image: "https://via.placeholder.com/180",
  },
];

export default function FavoritesPage() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: "40px",
        pb: "80px",
      }}
    >
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#2B5674",
          marginBottom: "32px",
        }}
      >
        Мое избранное
      </Typography>

      <Grid container spacing={3}>
        {favoriteProducts.map((prod) => (
          <Grid item xs={12} sm={6} md={3} key={prod.id}>
            <Box
              sx={{
                border: "1px solid #F0F4F7",
                borderRadius: "16px",
                padding: "20px",
                position: "relative",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 8px 24px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  color: "#52A5E0",
                }}
              >
                <FavoriteIcon sx={{ fontSize: "20px", color: "#7FC9F0" }} />
              </IconButton>

              <Box
                component="img"
                src={prod.image}
                alt={prod.title}
                sx={{
                  width: "140px",
                  height: "140px",
                  objectFit: "contain",
                  marginBottom: "16px",
                }}
              />

              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#2B5674",
                  textAlign: "center",
                  marginBottom: "8px",
                  minHeight: "36px",
                }}
              >
                {prod.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#52A5E0",
                  marginBottom: "16px",
                }}
              >
                {prod.price}
              </Typography>

              <Button
                fullWidth
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: "#7FC9F0",
                  color: "#FFFFFF",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: "13px",
                  marginBottom: "8px",
                  padding: "6px 0",
                  "&:hover": { backgroundColor: "#68B7DE" },
                }}
              >
                В корзину
              </Button>

              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#7FC9F0",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Купить в один клик
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
