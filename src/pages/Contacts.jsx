import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { NavLink } from "react-router";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправленные данные:", formData);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "20px", lg: "30px" },
        pb: { xs: "34px", lg: "60px" },
      }}
    >
      {/* Breadcrumbs */}
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "8px", mb: "16px" }}
      >
        <Typography
          component={NavLink}
          to="/"
          sx={{
            color: "#A9B7C0",
            fontSize: "11px",
            textDecoration: "none",
            "&:hover": { color: "#7FC9F0" },
          }}
        >
          Главная
        </Typography>
        <Typography sx={{ color: "#A9B7C0", fontSize: "11px" }}>/</Typography>
        <Typography sx={{ color: "#446B80", fontSize: "11px" }}>
          Контакты
        </Typography>
      </Box>

      {/* Заголовок */}
      <Typography
        sx={{
          color: "#446B80",
          fontSize: { xs: "24px", lg: "34px" },
          fontWeight: 600,
          mb: { xs: "24px", lg: "36px" },
        }}
      >
        Контакты
      </Typography>

      {/* Сетка: Данные контакта ва Форма */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1.2fr" },
          gap: { xs: "30px", lg: "60px" },
          mb: "40px",
        }}
      >
        {/* Левая колонка: Информация */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box>
            <Typography
              sx={{
                color: "#446B80",
                fontWeight: 600,
                fontSize: "15px",
                mb: "6px",
              }}
            >
              Адрес
            </Typography>
            <Typography sx={{ color: "#8FA6B3", fontSize: "13px" }}>
              Республика Дагестан, г. Махачкала, улица Батырая 108
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#446B80",
                fontWeight: 600,
                fontSize: "15px",
                mb: "6px",
              }}
            >
              Телефон
            </Typography>
            <Typography sx={{ color: "#8FA6B3", fontSize: "13px" }}>
              +7 872 278 08 58
            </Typography>
            <Typography sx={{ color: "#8FA6B3", fontSize: "13px" }}>
              +7 988 799 93 27
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#446B80",
                fontWeight: 600,
                fontSize: "15px",
                mb: "6px",
              }}
            >
              Электронный адрес
            </Typography>
            <Typography sx={{ color: "#8FA6B3", fontSize: "13px" }}>
              karapuz_108@mail.ru
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#446B80",
                fontWeight: 600,
                fontSize: "15px",
                mb: "10px",
              }}
            >
              Мы в социальных сетях
            </Typography>
            <Box sx={{ display: "flex", gap: "12px", color: "#7FC9F0" }}>
              <InstagramIcon
                sx={{ cursor: "pointer", "&:hover": { opacity: 0.8 } }}
              />
              <WhatsAppIcon
                sx={{ cursor: "pointer", "&:hover": { opacity: 0.8 } }}
              />
              <FacebookIcon
                sx={{ cursor: "pointer", "&:hover": { opacity: 0.8 } }}
              />
            </Box>
          </Box>
        </Box>

        {/* Правая колонка: Форма связи */}
        <Box component="form" onSubmit={handleSubmit}>
          <Typography
            sx={{
              color: "#446B80",
              fontWeight: 600,
              fontSize: { xs: "16px", lg: "18px" },
              mb: "20px",
            }}
          >
            Напишите нам, и мы ответим на все Ваши вопросы
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "16px",
              mb: "16px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <TextField
              fullWidth
              placeholder="Имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
              size="small"
              sx={{
                backgroundColor: "#F9FBFD",
                borderRadius: "4px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#E5EEF3",
                },
              }}
            />
            <TextField
              fullWidth
              placeholder="Телефон"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              size="small"
              sx={{
                backgroundColor: "#F9FBFD",
                borderRadius: "4px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#E5EEF3",
                },
              }}
            />
          </Box>

          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Сообщение"
            name="message"
            value={formData.message}
            onChange={handleChange}
            sx={{
              backgroundColor: "#F9FBFD",
              borderRadius: "4px",
              mb: "16px",
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "#E5EEF3" },
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.agree}
                onChange={handleChange}
                name="agree"
                size="small"
                sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" } }}
              />
            }
            label={
              <Typography sx={{ fontSize: "11px", color: "#A9B7C0" }}>
                Соглашение на обработку данных и пользовательское соглашение
              </Typography>
            }
            sx={{ mb: "20px" }}
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              height: "44px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "none",
              borderRadius: "4px",
              "&:hover": { backgroundColor: "#52B4E8" },
            }}
          >
            Отправить
          </Button>
        </Box>
      </Box>

      {/* Яндекс Карта (без внешних зависимостей) */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "280px", lg: "400px" },
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #E5EEF3",
        }}
      >
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=47.505000%2C42.978000&z=16&pt=47.505000%2C42.978000%2Cpm2rdm"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Яндекс Карта"
          style={{ border: 0 }}
        />
      </Box>
    </Box>
  );
}
