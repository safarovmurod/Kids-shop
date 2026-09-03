import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const inputStyle = {
  backgroundColor: "#F9FBFD",
  "& .MuiOutlinedInput-root": {
    height: { xs: "58px", lg: "48px" },
    borderRadius: "8px",
    fontSize: { xs: "16px", lg: "14px" },
    color: "#446B80",
  },
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  // Ҳоло маълумоти форма танҳо дар console.log мебарояд; ба сервер ё почта фиристода намешавад.
  function handleSubmit() {
    console.log({ name, phone, message, agree });
  }

  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "20px",
          color: "#446B80",
          fontSize: { xs: "22px", lg: "18px" },
          fontWeight: 600,
          lineHeight: 1.4,
        }}
      >
        Напишите нам, и мы ответим на все Ваши вопросы
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <TextField
          fullWidth
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={inputStyle}
        />

        <TextField
          fullWidth
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={inputStyle}
        />
      </Box>

      <TextField
        fullWidth
        multiline
        rows={5}
        placeholder="Сообщение"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          marginBottom: "16px",
          backgroundColor: "#F9FBFD",
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            fontSize: { xs: "16px", lg: "14px" },
            color: "#446B80",
          },
        }}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" } }}
          />
        }
        label={
          <Typography
            sx={{
              color: "#A9B7C0",
              fontSize: { xs: "14px", lg: "12px" },
              lineHeight: 1.5,
            }}
          >
            Соглашение на обработку данных и пользовательское соглашение
          </Typography>
        }
        sx={{ alignItems: "flex-start", marginBottom: "20px" }}
      />

      <Button
        onClick={handleSubmit}
        fullWidth
        sx={{
          height: { xs: "58px", lg: "48px" },
          borderRadius: "8px",
          backgroundColor: "#7FC9F0",
          color: "#FFFFFF",
          fontSize: { xs: "18px", lg: "14px" },
          fontWeight: 500,
          textTransform: "none",
          "&:hover": { backgroundColor: "#52B4E8" },
        }}
      >
        Отправить
      </Button>
    </Box>
  );
}
