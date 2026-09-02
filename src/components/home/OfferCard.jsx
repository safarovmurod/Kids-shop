import { useContext } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { AppContext } from "../../context/AppContext";

export default function OfferCard({ item }) {
  const { state, dispatch } = useContext(AppContext);

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
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: "10px", lg: "16px" },
        width: "100%",
        height: { xs: "auto", lg: "360px" },
        paddingLeft: { xs: "16px", lg: "30px" },
        paddingRight: { xs: "16px", lg: "30px" },
        paddingTop: { xs: "30px", lg: "0px" },
        paddingBottom: { xs: "24px", lg: "0px" },
        borderRadius: "6px",
        border: "1px solid #F1F1F1",
        backgroundColor: "#FFFFFF",
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

      <Box
        sx={{
          order: { xs: 2, lg: 1 },
          width: { xs: "100%", lg: "52%" },
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        <Typography
          sx={{
            color: "#446B80",
            fontSize: { xs: "15px", lg: "14px" },
            fontWeight: 500,
            lineHeight: { xs: "22px", lg: "22px" },
          }}
        >
          {item.name}
        </Typography>

        <Typography
          sx={{
            marginTop: { xs: "18px", lg: "16px" },
            color: "#7FC9F0",
            fontSize: { xs: "20px", lg: "18px" },
            fontWeight: 600,
          }}
        >
          {item.price.toLocaleString("ru-RU")} ₽
        </Typography>

        <Button
          onClick={handleAdd}
          sx={{
            width: { xs: "100%", lg: "110px" },
            height: { xs: "44px", lg: "34px" },
            marginTop: { xs: "18px", lg: "24px" },
            borderRadius: "8px",
            backgroundColor: "#7FC9F0",
            color: "#FFFFFF",
            fontSize: { xs: "16px", lg: "12px" },
            textTransform: "none",
            "&:hover": { backgroundColor: "#68B7DE" },
          }}
        >
          В корзину
        </Button>

        <Typography
          onClick={handleAdd}
          sx={{
            marginTop: { xs: "14px", lg: "12px" },
            color: "#7FC9F0",
            fontSize: { xs: "15px", lg: "12px" },
            cursor: "pointer",
          }}
        >
          Купить в один клик
        </Typography>
      </Box>

      <Box
        sx={{
          order: { xs: 1, lg: 2 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "100%", lg: "291px" },
          height: { xs: "230px", lg: "291px" },
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.name}
          sx={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
        />
      </Box>
    </Box>
  );
}
