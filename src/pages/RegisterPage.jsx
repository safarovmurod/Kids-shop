import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate, useOutletContext } from "react-router";
import axios from "axios";

const api = "https://swagger-wheat.vercel.app/api/users";

export default function RegisterPage() {
  const { login } = useOutletContext();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!agree) return;
    setError("");
    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }
    const formData = new FormData();
    formData.append("fullName", name.trim());
    formData.append("email", email.trim());
    formData.append("password", password);
    setLoading(true);
    try {
      const { data } = await axios.post(api, formData);
      login(data.data.user, data.data.token);
      navigate("/");
    } catch (error) {
      setError(error.response?.data.message || "Не удалось зарегистрироваться. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: "40px",
        pb: "80px",
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          color: "#2B5674",
          marginBottom: "28px",
          letterSpacing: "-0.2px",
        }}
      >
        Регистрация
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "10px",
              color: "#9BB3C1",
              marginBottom: "4px",
              lineHeight: 1,
            }}
          >
            Имя
          </Typography>
          <TextField
            fullWidth
            value={name}
            required
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "40px",
                borderRadius: "10px",
                fontSize: "13px",
                color: "#2B5674",
                backgroundColor: "#FFFFFF",
                "& fieldset": { borderColor: "#E5EEF3", borderWidth: "1px" },
                "&:hover fieldset": { borderColor: "#7FC9F0" },
                "&.Mui-focused fieldset": {
                  borderColor: "#7FC9F0",
                  borderWidth: "1px",
                },
              },
            }}
          />
        </Box>

        <TextField
          fullWidth
          value={email}
          required
          type="email"
          autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Электронный адрес"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "40px",
              borderRadius: "10px",
              fontSize: "13px",
              color: "#2B5674",
              backgroundColor: "#FFFFFF",
              "& fieldset": { borderColor: "#E5EEF3", borderWidth: "1px" },
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
          required
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "40px",
              borderRadius: "10px",
              fontSize: "13px",
              color: "#2B5674",
              backgroundColor: "#FFFFFF",
              "& fieldset": { borderColor: "#E5EEF3", borderWidth: "1px" },
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
          placeholder="Повторите пароль"
          required
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "40px",
              borderRadius: "10px",
              fontSize: "13px",
              color: "#2B5674",
              backgroundColor: "#FFFFFF",
              "& fieldset": { borderColor: "#E5EEF3", borderWidth: "1px" },
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

        <Box sx={{ width: "130px" }}>
          <TextField
            fullWidth
            placeholder="Вставить каптчу"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "36px",
                borderRadius: "8px",
                fontSize: "11px",
                color: "#2B5674",
                backgroundColor: "#FFFFFF",
                "& fieldset": { borderColor: "#E5EEF3", borderWidth: "1px" },
                "&:hover fieldset": { borderColor: "#7FC9F0" },
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#A9C4D2",
                opacity: 1,
              },
            }}
          />
        </Box>

        <FormControlLabel
          control={
            <Checkbox
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              sx={{
                padding: "4px",
                color: "#CBE1ED",
                "&.Mui-checked": { color: "#7FC9F0" },
                "& .MuiSvgIcon-root": { fontSize: "18px" },
              }}
            />
          }
          label={
            <Typography
              sx={{ fontSize: "11px", color: "#8EABC0", lineHeight: 1.3 }}
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
          sx={{
            alignItems: "flex-start",
            margin: "4px 0 8px 0",
            gap: "6px",
          }}
        />

        {error && (
          <Typography role="alert" sx={{ color: "#D32F2F", fontSize: "12px" }}>
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          disableElevation
          disabled={!agree || loading}
          sx={{
            height: "38px",
            width: "fit-content",
            px: "22px",
            borderRadius: "10px",
            backgroundColor: "#7FC9F0",
            color: "#FFFFFF",
            fontSize: "12px",
            textTransform: "none",
            fontWeight: 500,
            boxShadow: "none",
            "&:hover": { backgroundColor: "#68B7DE", boxShadow: "none" },
            "&.Mui-disabled": {
              backgroundColor: "#E5EEF3",
              color: "#FFFFFF",
            },
          }}
        >
          {loading ? "Регистрация..." : "Зарегистрироваться"}
        </Button>
      </Box>
    </Box>
  );
}
