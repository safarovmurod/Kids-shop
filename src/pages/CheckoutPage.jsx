import { useReducer } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { NavLink } from "react-router";
import OrderItems from "../components/checkout/OrderItems";
import OrderTotal from "../components/checkout/OrderTotal";
import DeliveryMethod from "../components/checkout/DeliveryMethod";
import ReceiverForm from "../components/checkout/ReceiverForm";
import PaymentMethod from "../components/checkout/PaymentMethod";

// Input ва интихоби доставка/payment тавассути dispatch ба ҳамин state мегузаранд; ин маълумот ҳоло ба API-и заказ фиристода намешавад.
function reducer(state, action) {
  switch (action.type) {
    case "setCity":
      return { ...state, city: action.payload };

    case "setDelivery":
      return { ...state, delivery: action.payload };

    case "setCompany":
      return { ...state, company: action.payload };

    case "setName":
      return { ...state, name: action.payload };

    case "setEmail":
      return { ...state, email: action.payload };

    case "setPhone":
      return { ...state, phone: action.payload };

    case "setPayment":
      return { ...state, payment: action.payload };

    case "setComment":
      return { ...state, comment: action.payload };

    case "setSubscribe":
      return { ...state, subscribe: action.payload };

    case "setPromo":
      return { ...state, promo: action.payload };

    // Промокод танҳо баъди пахши «Применить» аз promo ба applied мегузарад.
    case "applyPromo":
      return { ...state, applied: state.promo };

    default:
      return state;
  }
}

const initialState = {
  city: "Москва",
  delivery: "tk",
  company: "СДЭК",
  name: "",
  email: "",
  phone: "",
  payment: "card",
  comment: "",
  subscribe: false,
  promo: "",
  applied: "",
};

export default function CheckoutPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <Box
          component={NavLink}
          to="/cart"
          sx={{ color: "#8FA6B3", fontSize: "12px", textDecoration: "none" }}
        >
          Корзина
        </Box>

        <Typography sx={{ color: "#8FA6B3", fontSize: "12px" }}>›</Typography>

        <Typography
          sx={{ color: "#446B80", fontSize: "12px", fontWeight: 500 }}
        >
          Оформление заказа
        </Typography>
      </Box>

      <Typography
        sx={{
          marginBottom: { xs: "24px", lg: "36px" },
          color: "#2B5674",
          fontSize: { xs: "28px", lg: "32px" },
          fontWeight: 700,
        }}
      >
        Оформление заказа
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 380px" },
          gap: { xs: "30px", lg: "40px" },
          alignItems: "start",
        }}
      >
        <OrderItems />

        <Box sx={{ gridColumn: { lg: "2" }, gridRow: { lg: "1 / 3" } }}>
          <OrderTotal state={state} dispatch={dispatch} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <Box>
            <Typography
              sx={{
                marginBottom: "12px",
                color: "#2B5674",
                fontSize: { xs: "17px", lg: "16px" },
                fontWeight: 600,
              }}
            >
              Город получателя
            </Typography>

            <TextField
              fullWidth
              label="Населенный пункт"
              value={state.city}
              onChange={(e) =>
                dispatch({ type: "setCity", payload: e.target.value })
              }
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "56px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "#446B80",
                },
              }}
            />
          </Box>

          <DeliveryMethod state={state} dispatch={dispatch} />

          <ReceiverForm state={state} dispatch={dispatch} />

          <PaymentMethod state={state} dispatch={dispatch} />

          <Box>
            <Button
              component={NavLink}
              to="/payment"
              fullWidth
              sx={{
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#7FC9F0",
                color: "#FFFFFF",
                fontSize: "15px",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": { backgroundColor: "#68B7DE" },
              }}
            >
              Перейти к оплате
            </Button>

            <Typography
              sx={{
                marginTop: "12px",
                color: "#8FA6B3",
                fontSize: "12px",
                lineHeight: "18px",
                textAlign: "center",
              }}
            >
              Нажимая кнопку «Перейти к оплате», Вы соглашаетесь с
              Пользовательским соглашением и Политикой конфиденциальности
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
