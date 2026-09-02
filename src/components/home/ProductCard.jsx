import { useContext } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
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
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        minHeight: { xs: "300px", lg: "330px" },
        paddingLeft: { xs: "12px", lg: "16px" },
        paddingRight: { xs: "12px", lg: "16px" },
        paddingTop: { xs: "14px", lg: "18px" },
        paddingBottom: { xs: "14px", lg: "18px" },
        borderRadius: "8px",
        border: "1px solid #F1F1F1",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: "12px",
          left: "12px",
          paddingLeft: "8px",
          paddingRight: "8px",
          paddingTop: "3px",
          paddingBottom: "3px",
          borderRadius: "3px",
          backgroundColor: "#DFF2FB",
          color: "#7FC9F0",
          fontSize: "9px",
          fontWeight: 600,
        }}
      >
        NEW
      </Typography>

      <IconButton
        onClick={handleFavorite}
        sx={{
          position: "absolute",
          top: "6px",
          right: "6px",
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

      <Box
        onClick={() => navigate(`/product/${item.id}`)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: { xs: "120px", lg: "145px" },
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.name}
          sx={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
        />
      </Box>

      <Typography
        onClick={() => navigate(`/product/${item.id}`)}
        sx={{
          width: "100%",
          marginTop: { xs: "10px", lg: "14px" },
          cursor: "pointer",
          color: "#446B80",
          fontSize: { xs: "12px", lg: "13px" },
          fontWeight: 500,
          lineHeight: { xs: "16px", lg: "18px" },
          textAlign: "center",
          minHeight: { xs: "32px", lg: "36px" },
        }}
      >
        {item.name}
      </Typography>

      <Typography
        sx={{
          marginTop: { xs: "8px", lg: "10px" },
          color: "#7FC9F0",
          fontSize: { xs: "16px", lg: "18px" },
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        {item.price.toLocaleString("ru-RU")} ₽
      </Typography>

      {item.oldPrice && (
        <Typography
          sx={{
            marginTop: "4px",
            color: "#A9B7C0",
            fontSize: { xs: "13px", lg: "14px" },
            textDecoration: "line-through",
            textAlign: "center",
          }}
        >
          {item.oldPrice.toLocaleString("ru-RU")} ₽
        </Typography>
      )}

      <Button
        onClick={handleAdd}
        sx={{
          width: "100%",
          height: { xs: "38px", lg: "34px" },
          marginTop: { xs: "12px", lg: "14px" },
          borderRadius: "8px",
          backgroundColor: "#7FC9F0",
          color: "#FFFFFF",
          fontSize: { xs: "14px", lg: "12px" },
          textTransform: "none",
          "&:hover": { backgroundColor: "#68B7DE" },
        }}
      >
        В корзину
      </Button>

      <Typography
        onClick={handleAdd}
        sx={{
          marginTop: { xs: "10px", lg: "8px" },
          color: "#7FC9F0",
          fontSize: { xs: "13px", lg: "11px" },
          lineHeight: "17px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        Купить в один клик
      </Typography>
    </Box>
  );
}
