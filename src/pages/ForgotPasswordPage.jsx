import { useReducer } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    height: { xs: "64px", lg: "52px" },
    borderRadius: "12px",
    fontSize: { xs: "17px", lg: "14px" },
    color: "#2B5674",
  },
};

const buttonStyle = {
  height: { xs: "62px", lg: "50px" },
  borderRadius: "12px",
  backgroundColor: "#7FC9F0",
  color: "#FFFFFF",
  fontSize: { xs: "20px", lg: "15px" },
  fontWeight: 500,
  textTransform: "none",
  "&:hover": { backgroundColor: "#68B7DE" },
};

function reducer(state, action) {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };

    case "setPassword":
      return { ...state, password: action.payload };

    case "setRepeat":
      return { ...state, repeat: action.payload };

    case "setStep":
      return { ...state, step: action.payload };

    case "setError":
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

const initialState = {
  step: 1,
  email: "",
  password: "",
  repeat: "",
  error: "",
};

export default function ForgotPasswordPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  function handleSendEmail() {
    if (!state.email) {
      dispatch({ type: "setError", payload: "Введите электронный адрес" });
      return;
    }

    dispatch({ type: "setError", payload: "" });
    dispatch({ type: "setStep", payload: 2 });
  }

  function handleSavePassword() {
    if (state.password !== state.repeat) {
      dispatch({ type: "setError", payload: "Пароли не совпадают" });
      return;
    }

    dispatch({ type: "setError", payload: "" });
    dispatch({ type: "setStep", payload: 3 });
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
        paddingBottom: { xs: "60px", lg: "80px" },
      }}
    >
      <Typography
        sx={{
          marginBottom: { xs: "30px", lg: "28px" },
          color: "#2B5674",
          fontSize: { xs: "34px", lg: "30px" },
          fontWeight: 600,
          lineHeight: 1.3,
        }}
      >
        Восстановление пароля
      </Typography>

      <Box
        sx={{
          maxWidth: { xs: "100%", lg: "420px" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: "20px", lg: "16px" },
        }}
      >
        {state.step === 1 && (
          <>
            <TextField
              fullWidth
              placeholder="Ваш электронный адрес"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "setEmail", payload: e.target.value })
              }
              sx={inputStyle}
            />

            <Button onClick={handleSendEmail} fullWidth sx={buttonStyle}>
              Восстановить пароль
            </Button>
          </>
        )}

        {state.step === 2 && (
          <>
            <TextField
              fullWidth
              type="password"
              placeholder="Новый пароль"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "setPassword", payload: e.target.value })
              }
              sx={inputStyle}
            />

            <TextField
              fullWidth
              type="password"
              placeholder="Повторите новый пароль"
              value={state.repeat}
              onChange={(e) =>
                dispatch({ type: "setRepeat", payload: e.target.value })
              }
              sx={inputStyle}
            />

            <Button
              onClick={handleSavePassword}
              sx={{ ...buttonStyle, width: { xs: "60%", lg: "200px" } }}
            >
              Сохранить
            </Button>
          </>
        )}

        {state.step === 3 && (
          <>
            <Typography
              sx={{
                color: "#446B80",
                fontSize: { xs: "18px", lg: "15px" },
                lineHeight: 1.6,
              }}
            >
              Пароль успешно изменен
            </Typography>

            <Button
              onClick={() => navigate("/")}
              sx={{ ...buttonStyle, width: { xs: "100%", lg: "200px" } }}
            >
              На главную
            </Button>
          </>
        )}

        {state.error && (
          <Typography sx={{ color: "#E53935", fontSize: "14px" }}>
            {state.error}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
