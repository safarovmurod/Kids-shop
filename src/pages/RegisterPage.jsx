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
import axios from "axios";
import { api } from "../data/data";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    height: { xs: "64px", lg: "52px" },
    borderRadius: "12px",
    fontSize: { xs: "17px", lg: "14px" },
    color: "#2B5674",
  },
};

// Reducer қиматҳои input, розигӣ, loading ва error-и регистрацияро якҷо идора мекунад.
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

    case "setPhone":
      return { ...state, phone: action.payload };

    case "setLoading":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
}

const initialState = {
  name: "",
  phone: "",
  email: "",
  password: "",
  repeat: "",
  agree: false,
  error: "",
  loading: false,
};

export default function RegisterPage() {
  const { login } = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  // Password-и такрорӣ ва розигиро месанҷад, баъд аккаунтро дар API месозад.
  async function handleSubmit(event) {
    event.preventDefault();
    if (state.password !== state.repeat) {
      dispatch({ type: "setError", payload: "Пароли не совпадают" });
      return;
    }

    if (!state.agree) {
      dispatch({ type: "setError", payload: "Подтвердите согласие" });
      return;
    }

    dispatch({ type: "setError", payload: "" });
    dispatch({ type: "setLoading", payload: true });

    // Майдонҳои регистрация дар FormData ҷамъ мешаванд; номи field бояд ба API мувофиқ бошад.
    const formData = new FormData();
    formData.append("fullName", state.name.trim());
    formData.append("tel", state.phone);
    formData.append("email", state.email.trim());
    formData.append("password", state.password);

    try {
      const { data } = await axios.post(api + "/users", formData);
      // Баъди registration user-ро login карда ба Home мегузарад.
      login(data.data.user, data.data.token);
      navigate("/");
    } catch (error) {
      dispatch({
        type: "setError",
        payload:
          error.response?.data.message || "Не удалось зарегистрироваться",
      });
    } finally {
      dispatch({ type: "setLoading", payload: false });
    }
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
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: { xs: "100%", lg: "420px" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: "16px", lg: "14px" },
        }}
      >
        <TextField
          fullWidth
          required
          label="Имя"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "setName", payload: e.target.value })
          }
          sx={inputStyle}
        />

        <TextField
          fullWidth
          placeholder="Телефон"
          value={state.phone}
          onChange={(e) =>
            dispatch({ type: "setPhone", payload: e.target.value })
          }
          sx={inputStyle}
        />

        <TextField
          fullWidth
          required
          type="email"
          autoComplete="email"
          placeholder="Электронный адрес"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "setEmail", payload: e.target.value })
          }
          sx={inputStyle}
        />

        <TextField
          fullWidth
          required
          autoComplete="new-password"
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
          required
          autoComplete="new-password"
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
          type="submit"
          disabled={state.loading}
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
          {state.loading ? "Отправляем..." : "Зарегистрироваться"}
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
