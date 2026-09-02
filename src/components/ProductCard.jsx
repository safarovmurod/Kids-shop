import { useContext } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";

export default function ProductCard({ item }) {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const isFavorite = state.favorites.find((el) => el.id === item.id);

  const product = {
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
  };

  function handleOpen() {
    navigate(`/product/${item.id}`);
  }

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: { xs: "12px", lg: "16px" },
        paddingRight: { xs: "12px", lg: "16px" },
        paddingTop: { xs: "14px", lg: "18px" },
        paddingBottom: { xs: "14px", lg: "18px" },
        borderRadius: "12px",
        border: "1px solid #F0F4F7",
        backgroundColor: "#FFFFFF",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0px 12px 28px rgba(127, 201, 240, 0.25)",
        },
        "&:hover .card-image": { transform: "scale(1.06)" },
      }}
    >
      {item.isNew && (
        <Typography
          sx={{
            position: "absolute",
            top: "14px",
            left: "14px",
            paddingLeft: "8px",
            paddingRight: "8px",
            paddingTop: "3px",
            paddingBottom: "3px",
            borderRadius: "4px",
            backgroundColor: "#DFF2FB",
            color: "#7FC9F0",
            fontSize: "10px",
            fontWeight: 600,
          }}
        >
          NEW
        </Typography>
      )}

      <IconButton
        onClick={() => dispatch({ type: "favorite", payload: product })}
        sx={{
          position: "absolute",
          top: "8px",
          right: "8px",
          color: "#7FC9F0",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        {isFavorite ? (
          <Favorite sx={{ fontSize: "22px" }} />
        ) : (
          <FavoriteBorder sx={{ fontSize: "22px" }} />
        )}
      </IconButton>

      <Box onClick={handleOpen} sx={{ cursor: "pointer" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: { xs: "150px", lg: "180px" },
            marginTop: "24px",
          }}
        >
          <Box
            component="img"
            className="card-image"
            src={item.image}
            alt={item.name}
            sx={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              display: "block",
              transition: "transform 0.35s ease",
            }}
          />
        </Box>

        <Typography
          sx={{
            marginTop: "14px",
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
            marginTop: "10px",
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginTop: "14px",
        }}
      >
        <Button
          onClick={() => dispatch({ type: "add", payload: product })}
          sx={{
            height: { xs: "40px", lg: "38px" },
            borderRadius: "8px",
            backgroundColor: "#7FC9F0",
            color: "#FFFFFF",
            fontSize: { xs: "14px", lg: "13px" },
            textTransform: "none",
            transition: "background-color 0.25s ease",
            "&:hover": { backgroundColor: "#52B4E8" },
          }}
        >
          В корзину
        </Button>

        <Typography
          onClick={handleOpen}
          sx={{
            color: "#7FC9F0",
            fontSize: { xs: "13px", lg: "12px" },
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Купить в один клик
        </Typography>
      </Box>
    </Box>
  );
}
