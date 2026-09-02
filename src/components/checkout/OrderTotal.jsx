import { useContext } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { NavLink } from "react-router";
import { AppContext } from "../../context/AppContext";

export default function OrderTotal({ state, dispatch }) {
  const { state: appState } = useContext(AppContext);

  let totalCount = 0;
  let totalPrice = 0;

  appState.cart.forEach((el) => {
    totalCount = totalCount + el.count;
    totalPrice = totalPrice + el.price * el.count;
  });

  const delivery = state.delivery === "tk" ? 120 : 0;

  return (
    <Box
      sx={{
        padding: { xs: "20px", lg: "24px" },
        borderRadius: "16px",
        border: "1px solid #EAEAEA",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{ color: "#2B5674", fontSize: "17px", fontWeight: 700 }}
        >
          Ваш заказ
        </Typography>

        <Box
          component={NavLink}
          to="/cart"
          sx={{ color: "#7FC9F0", fontSize: "14px", textDecoration: "none" }}
        >
          Изменить
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        <TextField
          placeholder="Промокод"
          size="small"
          value={state.promo}
          onChange={(e) =>
            dispatch({ type: "setPromo", payload: e.target.value })
          }
          sx={{
            flexGrow: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              fontSize: "14px",
            },
          }}
        />

        <Button
          sx={{
            paddingLeft: "20px",
            paddingRight: "20px",
            borderRadius: "8px",
            backgroundColor: "#7FC9F0",
            color: "#FFFFFF",
            fontSize: "14px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#68B7DE" },
          }}
        >
          Применить
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <Typography sx={{ color: "#708090", fontSize: "14px" }}>
          Количество ({totalCount})
        </Typography>

        <Typography
          sx={{ color: "#708090", fontSize: "14px", fontWeight: 500 }}
        >
          {totalPrice.toLocaleString("ru-RU")} ₽
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <Typography sx={{ color: "#708090", fontSize: "14px" }}>
          Доставка
        </Typography>

        <Typography
          sx={{ color: "#708090", fontSize: "14px", fontWeight: 500 }}
        >
          {delivery} ₽
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "16px",
          borderBottom: "1px solid #EAEAEA",
        }}
      >
        <Typography sx={{ color: "#708090", fontSize: "14px" }}>
          Скидка
        </Typography>

        <Typography
          sx={{ color: "#708090", fontSize: "14px", fontWeight: 500 }}
        >
          0 ₽
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <Typography
          sx={{ color: "#2B5674", fontSize: "18px", fontWeight: 700 }}
        >
          Итого
        </Typography>

        <Typography
          sx={{ color: "#2B5674", fontSize: "20px", fontWeight: 700 }}
        >
          {(totalPrice + delivery).toLocaleString("ru-RU")} ₽
        </Typography>
      </Box>
    </Box>
  );
}
