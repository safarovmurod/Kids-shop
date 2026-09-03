import { useContext, useReducer } from "react";
import {
  Box,
  Typography,
  Button,
  Radio,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router";
import PaymentCard from "../components/payment/PaymentCard";
import PaymentStatusDialog from "../components/payment/PaymentStatusDialog";
import { AppContext } from "../context/AppContext";

// Reducer қиматҳои корти demo ва ҳолатҳои processing/success-ро идора мекунад.
function reducer(state, action) {
  switch (action.type) {
    case "setNumber":
      return { ...state, number: action.payload };

    case "setExpiry":
      return { ...state, expiry: action.payload };

    case "setCvc":
      return { ...state, cvc: action.payload };

    case "setSaveCard":
      return { ...state, saveCard: action.payload };

    case "processing":
      return { ...state, processing: true };

    case "success":
      return { ...state, success: true };

    default:
      return state;
  }
}

const initialState = {
  number: "",
  expiry: "",
  cvc: "",
  saveCard: false,
  processing: false,
  success: false,
};

export default function PaymentPage() {
  const { state: appState, dispatch: appDispatch } = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  // Маблағи маҳсулотро бо price × count ҷамъ мекунад; дар ин саҳифа delivery ва discount ба ҳисоб дохил нестанд.
  let totalPrice = 0;

  appState.cart.forEach((el) => {
    totalPrice = totalPrice + el.price * el.count;
  });

  // Ин payment demo аст: баъди 2 сония success, тозакунии корзина ва баъд гузариш ба Home.
  // Ба банк ё payment API request намеравад ва пул гирифта намешавад.
  function handlePay() {
    dispatch({ type: "processing" });

    setTimeout(() => {
      dispatch({ type: "success" });
      appDispatch({ type: "clear" });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    }, 2000);
  }

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
          marginBottom: "28px",
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

        <Box
          component={NavLink}
          to="/checkout"
          sx={{ color: "#8FA6B3", fontSize: "12px", textDecoration: "none" }}
        >
          Оформление заказа
        </Box>

        <Typography sx={{ color: "#8FA6B3", fontSize: "12px" }}>›</Typography>

        <Typography
          sx={{ color: "#446B80", fontSize: "12px", fontWeight: 500 }}
        >
          Оплата
        </Typography>
      </Box>

      <Typography
        sx={{
          marginBottom: "20px",
          color: "#8FA6B3",
          fontSize: { xs: "18px", lg: "14px" },
        }}
      >
        Заказ №123214155AAS
      </Typography>

      <Typography
        sx={{
          marginBottom: "10px",
          color: "#2B5674",
          fontSize: { xs: "26px", lg: "24px" },
          fontWeight: 700,
        }}
      >
        Итого к оплате
      </Typography>

      <Typography
        sx={{
          marginBottom: "28px",
          color: "#2B5674",
          fontSize: { xs: "26px", lg: "26px" },
          fontWeight: 700,
        }}
      >
        {totalPrice.toLocaleString("ru-RU")} ₽
      </Typography>

      <FormControlLabel
        control={
          <Radio
            checked
            sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" } }}
          />
        }
        label={
          <Typography
            sx={{
              color: "#446B80",
              fontSize: { xs: "18px", lg: "14px" },
              fontWeight: 500,
            }}
          >
            Новая карта
          </Typography>
        }
        sx={{ marginBottom: "20px" }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: "16px", md: "40px" },
          marginBottom: "24px",
        }}
      >
        <PaymentCard state={state} dispatch={dispatch} />

        <Box sx={{ maxWidth: "340px" }}>
          <Typography
            sx={{
              marginBottom: "12px",
              color: "#2B5674",
              fontSize: { xs: "11px", md: "14px" },
              fontWeight: 700,
            }}
          >
            19:55 на оплату заказа
          </Typography>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <LockOutlined sx={{ fontSize: "14px", color: "#8FA6B3" }} />

            <Box>
              <Typography
                sx={{
                  marginBottom: "6px",
                  color: "#8FA6B3",
                  fontSize: { xs: "9px", md: "11px" },
                  lineHeight: 1.4,
                }}
              >
                Интернет-платежи защищены сертификатом TLS и протоколом 3D
                Secure.
              </Typography>

              <Typography
                sx={{
                  color: "#8FA6B3",
                  fontSize: { xs: "9px", md: "11px" },
                  lineHeight: 1.4,
                }}
              >
                Яндекс не передаёт сторонним лицам платёжные данные, в том числе
                данные карты.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <FormControlLabel
        control={
          <Checkbox
            checked={state.saveCard}
            onChange={(e) =>
              dispatch({ type: "setSaveCard", payload: e.target.checked })
            }
            sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" } }}
          />
        }
        label={
          <Typography
            sx={{ color: "#446B80", fontSize: { xs: "15px", lg: "13px" } }}
          >
            Сохранить карту для будущих покупок
          </Typography>
        }
        sx={{ marginBottom: "24px" }}
      />

      <Button
        onClick={handlePay}
        sx={{
          display: "block",
          width: { xs: "100%", md: "380px" },
          height: { xs: "56px", md: "46px" },
          borderRadius: "12px",
          backgroundColor: "#7FC9F0",
          color: "#FFFFFF",
          fontSize: { xs: "18px", md: "14px" },
          fontWeight: 600,
          textTransform: "none",
          "&:hover": { backgroundColor: "#68B7DE" },
        }}
      >
        Оплатить
      </Button>

      <PaymentStatusDialog open={state.processing} success={state.success} />
    </Box>
  );
}
