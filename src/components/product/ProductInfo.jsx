import { useContext, useReducer } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import {
  FavoriteBorder,
  Favorite,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { AppContext } from "../../context/AppContext";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      if (state > 1) {
        return state - 1;
      }

      return state;

    default:
      return state;
  }
}

export default function ProductInfo({ item }) {
  const { state, dispatch } = useContext(AppContext);
  const [count, countDispatch] = useReducer(reducer, 1);
  const navigate = useNavigate();

  const isFavorite = state.favorites.find((el) => el.id === item.id);

  const product = {
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
  };

  function handleAdd() {
    // Маҳсулот ба шумораи интихобшуда ба корзина илова мешавад
    for (let i = 0; i < count; i++) {
      dispatch({ type: "add", payload: product });
    }
  }

  function handleBuy() {
    handleAdd();
    navigate("/checkout");
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <Typography
          sx={{
            color: "#446B80",
            fontSize: { xs: "22px", lg: "24px" },
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          {item.name}
        </Typography>

        <IconButton
          onClick={() => dispatch({ type: "favorite", payload: product })}
          sx={{ padding: 0, color: "#7FC9F0" }}
        >
          {isFavorite ? (
            <Favorite sx={{ fontSize: "26px" }} />
          ) : (
            <FavoriteBorder sx={{ fontSize: "26px" }} />
          )}
        </IconButton>
      </Box>

      <Typography
        sx={{
          marginTop: "16px",
          color: "#52A5E0",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        В наличии
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          gap: "12px",
          marginTop: "16px",
        }}
      >
        <Typography
          sx={{
            color: "#7FC9F0",
            fontSize: { xs: "28px", lg: "30px" },
            fontWeight: 700,
          }}
        >
          {item.price.toLocaleString("ru-RU")} ₽
        </Typography>

        {item.oldPrice && (
          <Typography
            sx={{
              color: "#A9B7C0",
              fontSize: "18px",
              textDecoration: "line-through",
            }}
          >
            {item.oldPrice.toLocaleString("ru-RU")} ₽
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "130px",
          height: "48px",
          marginTop: "24px",
          paddingLeft: "12px",
          paddingRight: "12px",
          borderRadius: "12px",
          border: "1px solid #B2CAD6",
        }}
      >
        <IconButton
          onClick={() => countDispatch({ type: "decrement" })}
          sx={{ padding: 0, color: "#52A5E0" }}
        >
          <RemoveIcon sx={{ fontSize: "20px" }} />
        </IconButton>

        <Typography
          sx={{ color: "#2B5674", fontSize: "16px", fontWeight: 500 }}
        >
          {count}
        </Typography>

        <IconButton
          onClick={() => countDispatch({ type: "increment" })}
          sx={{ padding: 0, color: "#52A5E0" }}
        >
          <AddIcon sx={{ fontSize: "20px" }} />
        </IconButton>
      </Box>

      <Button
        onClick={handleAdd}
        sx={{
          width: { xs: "100%", lg: "260px" },
          height: { xs: "56px", lg: "50px" },
          marginTop: "24px",
          borderRadius: "10px",
          backgroundColor: "#7FC9F0",
          color: "#FFFFFF",
          fontSize: { xs: "18px", lg: "15px" },
          fontWeight: 600,
          textTransform: "none",
          "&:hover": { backgroundColor: "#68B7DE" },
        }}
      >
        В корзину
      </Button>

      <Typography
        onClick={handleBuy}
        sx={{
          width: { xs: "100%", lg: "260px" },
          marginTop: "16px",
          color: "#7FC9F0",
          fontSize: { xs: "16px", lg: "14px" },
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        Купить в один клик
      </Typography>
    </Box>
  );
}
