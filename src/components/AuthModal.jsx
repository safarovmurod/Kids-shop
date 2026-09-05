import { useContext, useState } from "react";
import { Box, Typography, Button, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router";
import { AppContext } from "../context/AppContext";

export default function AuthModal({ open, onClose }) {
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!open) {
    return null;
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    // Пароль ҳар хел бошад ҳам мешавад — сервер логин надорад
    login({
      id: Date.now(),
      fullName: email.split("@")[0],
      email: email,
      tel: "",
      address: "",
    });

    // Танҳо диалогро мепӯшем — корбар дар ҳамон саҳифа мемонад
    onClose();
  }

  return (
    <Box
      sx={{
        position: "absolute",
        top: "79px",
        right: { xs: "16px", lg: "18.49%" },
        width: "346px",
        height: "350px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.16)",
        borderRadius: "12px",
        padding: "24px 28px",
        boxSizing: "border-box",
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Сарлавҳа ва кнопкаи Закрыть */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 500,
            color: "#7FC9F0",
            fontFamily: "sans-serif",
          }}
        >
          Вход
        </Typography>
        <IconButton onClick={onClose} sx={{ padding: 0, color: "#7FC9F0" }}>
          <CloseIcon sx={{ fontSize: "20px" }} />
        </IconButton>
      </Box>

      {/* Формаи инпутҳо */}
      <Box
        component="form"
        id="login-form"
        onSubmit={handleLoginSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        <TextField
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Электронный адрес"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "44px",
              borderRadius: "10px",
              fontSize: "13px",
              color: "#446B80",
              backgroundColor: "#FFFFFF",
              "& fieldset": { borderColor: "#E5EEF3" },
              "&:hover fieldset": { borderColor: "#7FC9F0" },
              "&.Mui-focused fieldset": {
                borderColor: "#7FC9F0",
                borderWidth: "1px",
              },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#A9C4D2",
              opacity: 1,
            },
          }}
        />
        <TextField
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "44px",
              borderRadius: "10px",
              fontSize: "13px",
              color: "#446B80",
              backgroundColor: "#FFFFFF",
              "& fieldset": { borderColor: "#E5EEF3" },
              "&:hover fieldset": { borderColor: "#7FC9F0" },
              "&.Mui-focused fieldset": {
                borderColor: "#7FC9F0",
                borderWidth: "1px",
              },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#A9C4D2",
              opacity: 1,
            },
          }}
        />
      </Box>

      {/* Кнопка ва Ссылкаҳо */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Тугмаи Войти бо фаъолсозии логин */}
          <Button
            type="submit"
            form="login-form"
            variant="contained"
            disableElevation
            sx={{
              height: "40px",
              px: "32px",
              borderRadius: "10px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: "13px",
              textTransform: "none",
              fontWeight: 500,
              "&:hover": { backgroundColor: "#68B7DE" },
            }}
          >
            Войти
          </Button>

          <Typography
            component={NavLink}
            to="/forgot-password"
            onClick={onClose}
            sx={{
              fontSize: "12px",
              color: "#7FC9F0",
              cursor: "pointer",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Забыли пароль?
          </Typography>
        </Box>

        {/* Ссылка ба /register */}
        <Box
          component={NavLink}
          to="/register"
          onClick={onClose}
          sx={{
            fontSize: "12px",
            color: "#446B80",
            textAlign: "center",
            mt: "4px",
            textDecoration: "none",
            display: "block",
            "&:hover": { color: "#7FC9F0", textDecoration: "underline" },
          }}
        >
          Нет аккаунта?{" "}
          <Box component="span" sx={{ color: "#7FC9F0" }}>
            Зарегистрироваться
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
