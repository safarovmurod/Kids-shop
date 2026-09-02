import { useContext } from "react";
import { Box, Typography, Button, Card, CardMedia, IconButton } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { AppContext } from "../../context/AppContext";

export default function ProductCard({ item }) {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const isFavorite = state.favorites.find((el) => el.id === item.id);

  function handleAdd() {
    dispatch({
      type: "add",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      },
    });
  }

  function handleFavorite() {
    dispatch({
      type: "favorite",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      },
    });
  }

  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: { xs: "12px", lg: "16px" },
        borderRadius: "12px",
        border: "1px solid #F0F4F7",
      }}
    >
      <IconButton
        onClick={handleFavorite}
        sx={{
          position: "absolute",
          top: "8px",
          right: "8px",
          color: "#7FC9F0",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        {isFavorite ? (
          <Favorite sx={{ fontSize: "20px" }} />
        ) : (
          <FavoriteBorder sx={{ fontSize: "20px" }} />
        )}
      </IconButton>

      <Box onClick={() => navigate(`/product/${item.id}`)} sx={{ cursor: "pointer" }}>
        <CardMedia
          component="img"
          image={item.image}
          alt={item.name}
          sx={{
            width: "100%",
            height: { xs: "140px", lg: "170px" },
            marginTop: "16px",
            marginBottom: "12px",
            borderRadius: "8px",
            objectFit: "contain",
          }}
        />

        <Typography
          sx={{
            marginBottom: "8px",
            color: "#446B80",
            fontSize: { xs: "12px", lg: "13px" },
            fontWeight: 500,
            lineHeight: "18px",
            minHeight: "36px",
          }}
        >
          {item.name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <Typography
            sx={{
              color: "#7FC9F0",
              fontSize: { xs: "16px", lg: "17px" },
              fontWeight: 700,
            }}
          >
            {item.price.toLocaleString("ru-RU")} ₽
          </Typography>

          {item.oldPrice && (
            <Typography
              sx={{
                color: "#A9C4D2",
                fontSize: "13px",
                textDecoration: "line-through",
              }}
            >
              {item.oldPrice.toLocaleString("ru-RU")} ₽
            </Typography>
          )}
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Button
          onClick={handleAdd}
          sx={{
            height: { xs: "40px", lg: "36px" },
            borderRadius: "8px",
            backgroundColor: "#7FC9F0",
            color: "#FFFFFF",
            fontSize: { xs: "14px", lg: "13px" },
            textTransform: "none",
            "&:hover": { backgroundColor: "#52B4E8" },
          }}
        >
          В корзину
        </Button>

        <Button
          onClick={handleAdd}
          sx={{
            color: "#7FC9F0",
            fontSize: { xs: "13px", lg: "12px" },
            textTransform: "none",
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          Купить в один клик
        </Button>
      </Box>
    </Card>
  );
}
