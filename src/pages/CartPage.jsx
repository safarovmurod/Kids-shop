import { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router";
import CartItem from "../components/cart/CartItem";
import CartTotal from "../components/cart/CartTotal";
import AlsoBuy from "../components/cart/AlsoBuy";
import { AppContext } from "../context/AppContext";

export default function CartPage() {
  const { state } = useContext(AppContext);

  let totalCount = 0;

  state.cart.forEach((el) => {
    totalCount = totalCount + el.count;
  });

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
          marginBottom: { xs: "10px", lg: "32px" },
          color: "#2B5674",
          fontSize: { xs: "28px", lg: "32px" },
          fontWeight: 700,
        }}
      >
        В корзине {totalCount} товара
      </Typography>

      {state.cart.length === 0 ? (
        <Box sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
          <Typography sx={{ color: "#708090", fontSize: "15px" }}>
            Корзина пока пустая
          </Typography>

          <Button
            component={NavLink}
            to="/detskaya-mebel"
            sx={{
              width: { xs: "100%", lg: "220px" },
              height: "44px",
              marginTop: "20px",
              borderRadius: "10px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: "15px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#68B7DE" },
            }}
          >
            Перейти в каталог
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 380px" },
            gap: { xs: "24px", lg: "40px" },
            alignItems: "start",
          }}
        >
          <Box>
            {state.cart.map((el) => (
              <CartItem key={el.id} item={el} />
            ))}
          </Box>

          <CartTotal />
        </Box>
      )}

      <AlsoBuy />
    </Box>
  );
}
