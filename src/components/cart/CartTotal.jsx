import { useContext, useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { LocalShippingOutlined } from "@mui/icons-material";
import { NavLink } from "react-router";
import { AppContext } from "../../context/AppContext";
import { getDiscount } from "../../data/data";

export default function CartTotal() {
  const { state } = useContext(AppContext);
  const [promo, setPromo] = useState("");
  const [applied, setApplied] = useState("");

  let totalCount = 0;
  let totalPrice = 0;

  state.cart.forEach((el) => {
    totalCount = totalCount + el.count;
    totalPrice = totalPrice + el.price * el.count;
  });

  const discount = getDiscount(applied, totalPrice);

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
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <LocalShippingOutlined sx={{ fontSize: "22px", color: "#7FC9F0" }} />

        <Typography sx={{ color: "#446B80", fontSize: "14px" }}>
          154 ₽ Доставка
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        <TextField
          placeholder="Промокод"
          size="small"
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
          sx={{
            flexGrow: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              fontSize: "14px",
            },
          }}
        />

        <Button
          onClick={() => setApplied(promo)}
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
          marginBottom: "14px",
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
          {discount.toLocaleString("ru-RU")} ₽
        </Typography>
      </Box>

      {applied && discount === 0 && (
        <Typography
          sx={{ marginTop: "8px", color: "#E53935", fontSize: "13px" }}
        >
          Промокод не найден
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "16px",
          marginBottom: "24px",
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
          {(totalPrice - discount).toLocaleString("ru-RU")} ₽
        </Typography>
      </Box>

      <Button
        component={NavLink}
        to="/checkout"
        fullWidth
        sx={{
          height: "48px",
          borderRadius: "10px",
          backgroundColor: "#7FC9F0",
          color: "#FFFFFF",
          fontSize: "15px",
          fontWeight: 600,
          textTransform: "none",
          "&:hover": { backgroundColor: "#68B7DE" },
        }}
      >
        Перейти к оформлению
      </Button>
    </Box>
  );
}
