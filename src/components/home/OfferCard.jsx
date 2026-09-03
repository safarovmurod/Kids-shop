import { useContext } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { AppContext } from "../../context/AppContext";

export default function OfferCard({ item }) {
  const { state, dispatch } = useContext(AppContext);

  const isFavorite = state.favorites.find((el) => el.id === item.id);

  // Маҳсулоти аксиявиро ба корзина меандозад ва popup-ро назди тугмаи пахшшуда мекушояд.
  function handleAdd(event) {
    dispatch({
      type: "add",
      anchorEl: event.currentTarget,
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      },
    });
  }

  // Пахши дил ҳамин маҳсулотро ба избранное илова ё аз он удал мекунад.
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
      data-aos="fade-up"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: "10px", lg: "16px" },
        width: "100%",
        minHeight: { xs: "auto", lg: "280px" },
        paddingLeft: { xs: "16px", lg: "30px" },
        paddingRight: { xs: "16px", lg: "30px" },
        paddingTop: { xs: "30px", lg: "32px" },
        paddingBottom: { xs: "24px", lg: "32px" },
        borderRadius: "6px",
        border: "1px solid #F7F7F7",
        boxShadow: "0px 4px 24px #00000008",
        "&:hover": {
          borderColor: "#7FC9F0",
          boxShadow: "0px 6px 24px #446B8014",
        },
        backgroundColor: "#FFFFFF",
      }}
    >
      <IconButton
        onClick={handleFavorite}
        aria-label={
          isFavorite ? "Убрать из избранного" : "Добавить в избранное"
        }
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
          width: { xs: "100%", lg: "58%" },
          minWidth: "0px",
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

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginTop: "24px",
          }}
        >
          <Button
            onClick={handleAdd}
            sx={{
              width: { xs: "100%", lg: "110px" },
              height: { xs: "44px", lg: "34px" },
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

          <Button
            onClick={handleAdd}
            sx={{
              padding: "0px",
              textTransform: "none",
              whiteSpace: "nowrap",
              "&:hover": { color: "#446B80", backgroundColor: "transparent" },
              color: "#7FC9F0",
              fontSize: { xs: "15px", lg: "12px" },
              cursor: "pointer",
            }}
          >
            Купить в один клик
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          order: { xs: 1, lg: 2 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "100%", lg: "38%" },
          height: { xs: "230px", lg: "210px" },
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
