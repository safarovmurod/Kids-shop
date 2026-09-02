import { useContext, useReducer } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate, NavLink } from "react-router";
import { AppContext } from "../context/AppContext";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    height: { xs: "64px", lg: "52px" },
    borderRadius: "12px",
    fontSize: { xs: "17px", lg: "14px" },
    color: "#2B5674",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };

    case "setEmail":
      return { ...state, email: action.payload };

    case "setPassword":
      return { ...state, password: action.payload };

    case "setRepeat":
      return { ...state, repeat: action.payload };

    case "setAgree":
      return { ...state, agree: action.payload };

    case "setError":
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

const initialState = {
  name: "",
  email: "",
  password: "",
  repeat: "",
  agree: false,
  error: "",
};

export default function RegisterPage() {
  const { login } = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  function handleSubmit() {
    if (state.password !== state.repeat) {
      dispatch({ type: "setError", payload: "Пароли не совпадают" });
      return;
    }

    if (!state.agree) {
      dispatch({ type: "setError", payload: "Подтвердите согласие" });
      return;
    }

    login({
      id: Date.now(),
      name: state.name,
      email: state.email,
    });

    navigate("/");
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
      <Typography
        sx={{
          marginBottom: { xs: "30px", lg: "28px" },
          color: "#2B5674",
          fontSize: { xs: "34px", lg: "30px" },
          fontWeight: 600,
        }}
      >
        Регистрация
      </Typography>

      <Box
        sx={{
          maxWidth: { xs: "100%", lg: "420px" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: "16px", lg: "14px" },
        }}
      >
        <TextField
          fullWidth
          label="Имя"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "setName", payload: e.target.value })
          }
          sx={inputStyle}
        />

        <TextField
          fullWidth
          placeholder="Электронный адрес"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "setEmail", payload: e.target.value })
          }
          sx={inputStyle}
        />

        <TextField
          fullWidth
          type="password"
          placeholder="Пароль"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "setPassword", payload: e.target.value })
          }
          sx={inputStyle}
        />

        <TextField
          fullWidth
          type="password"
          placeholder="Повторите пароль"
          value={state.repeat}
          onChange={(e) =>
            dispatch({ type: "setRepeat", payload: e.target.value })
          }
          sx={inputStyle}
        />

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
                color: "#2B5674",
                fontSize: { xs: "16px", lg: "13px" },
                lineHeight: 1.5,
              }}
            >
              Согласие с{" "}
              <Box component="span" sx={{ color: "#7FC9F0" }}>
                пользовательским соглашением
              </Box>{" "}
              и{" "}
              <Box component="span" sx={{ color: "#7FC9F0" }}>
                политикой конфиденциальности
              </Box>
            </Typography>
          }
          sx={{ alignItems: "flex-start", marginTop: "10px" }}
        />

        {state.error && (
          <Typography sx={{ color: "#E53935", fontSize: "14px" }}>
            {state.error}
          </Typography>
        )}

        <Button
          onClick={handleSubmit}
          sx={{
            width: "100%",
            height: { xs: "62px", lg: "50px" },
            borderRadius: "12px",
            backgroundColor: "#7FC9F0",
            color: "#FFFFFF",
            fontSize: { xs: "20px", lg: "15px" },
            fontWeight: 500,
            textTransform: "none",
            "&:hover": { backgroundColor: "#68B7DE" },
          }}
        >
          Зарегистрироваться
        </Button>

        <Typography
          component={NavLink}
          to="/forgot-password"
          sx={{
            color: "#7FC9F0",
            fontSize: { xs: "16px", lg: "13px" },
            textDecoration: "none",
          }}
        >
          Забыли пароль?
        </Typography>
      </Box>
    </Box>
  );
}
