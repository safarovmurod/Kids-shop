import { useReducer } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { NavLink } from "react-router";
import SentMessage from "../components/product/SentMessage";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    height: { xs: "64px", lg: "52px" },
    borderRadius: "10px",
    fontSize: { xs: "17px", lg: "14px" },
    color: "#446B80",
  },
};

// Reducer маълумоти форма ва sent-ро нигоҳ медорад; onChange қиматро бо action.payload мефиристад.
function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };

    case "setPhone":
      return { ...state, phone: action.payload };

    case "setEmail":
      return { ...state, email: action.payload };

    case "setCity":
      return { ...state, city: action.payload };

    case "setAgree":
      return { ...state, agree: action.payload };

    case "sent":
      return { ...state, sent: action.payload };

    default:
      return state;
  }
}

const initialState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  agree: false,
  sent: false,
};

export default function WholesalePage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Ҳоло танҳо паёми муваффақиятро мекушояд; маълумоти форма ба сервер фиристода намешавад.
  function handleSend() {
    dispatch({ type: "sent", payload: true });
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
        paddingTop: "20px",
        paddingBottom: { xs: "40px", lg: "80px" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Typography
          component={NavLink}
          to="/"
          sx={{ color: "#A9B7C0", fontSize: "12px", textDecoration: "none" }}
        >
          Главная
        </Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: "12px" }}>›</Typography>

        <Typography sx={{ color: "#446B80", fontSize: "12px" }}>
          Оптовым клиентам
        </Typography>
      </Box>

      <Typography
        sx={{
          marginBottom: "30px",
          color: "#446B80",
          fontSize: { xs: "34px", lg: "34px" },
          fontWeight: 600,
        }}
      >
        Оптовым клиентам
      </Typography>

      {state.sent ? (
        <SentMessage />
      ) : (
        <Box sx={{ maxWidth: { xs: "100%", lg: "420px" } }}>
          <Typography
            sx={{
              marginBottom: "26px",
              color: "#446B80",
              fontSize: { xs: "24px", lg: "17px" },
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            Заполните форму и мы отправим Вам выгодные условия партнерства
          </Typography>

          <Box
            sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <TextField
              fullWidth
              label="Имя*"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "setName", payload: e.target.value })
              }
              sx={inputStyle}
            />

            <TextField
              fullWidth
              label="Телефон*"
              value={state.phone}
              onChange={(e) =>
                dispatch({ type: "setPhone", payload: e.target.value })
              }
              sx={inputStyle}
            />

            <TextField
              fullWidth
              label="Электронный адрес*"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "setEmail", payload: e.target.value })
              }
              sx={inputStyle}
            />

            <TextField
              fullWidth
              label="Город*"
              value={state.city}
              onChange={(e) =>
                dispatch({ type: "setCity", payload: e.target.value })
              }
              sx={inputStyle}
            />
          </Box>

          <Button
            sx={{
              height: "48px",
              marginTop: "16px",
              paddingLeft: "20px",
              paddingRight: "20px",
              borderRadius: "10px",
              border: "1px solid #E5EEF3",
              color: "#446B80",
              fontSize: "14px",
              textTransform: "none",
            }}
          >
            Вставить капчу
          </Button>

          <FormControlLabel
            control={
              <Checkbox
                checked={state.agree}
                onChange={(e) =>
                  dispatch({ type: "setAgree", payload: e.target.checked })
                }
                sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" } }}
              />
            }
            label={
              <Typography
                sx={{
                  color: "#8FA6B3",
                  fontSize: { xs: "15px", lg: "13px" },
                  lineHeight: 1.5,
                }}
              >
                Соглашение на обработку данных и пользовательское соглашение
              </Typography>
            }
            sx={{
              alignItems: "flex-start",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />

          <Button
            onClick={handleSend}
            fullWidth
            sx={{
              height: { xs: "62px", lg: "50px" },
              borderRadius: "10px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: { xs: "20px", lg: "15px" },
              textTransform: "none",
              "&:hover": { backgroundColor: "#68B7DE" },
            }}
          >
            Отправить
          </Button>
        </Box>
      )}
    </Box>
  );
}
