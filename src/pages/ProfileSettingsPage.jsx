import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useOutletContext } from "react-router";

export default function ProfileSettingsPage() {
  const { user } = useOutletContext();
  const email = user?.email || "annaanananana@gmail.com";
  const [name, setName] = useState(user?.name || "Анна");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("Москва, ул. Московская 25-45");

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
          fontSize: "28px",
          fontWeight: 700,
          color: "#2B5674",
          marginBottom: "32px",
        }}
      >
        Личные данные
      </Typography>

      <Box
        sx={{
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Аватар ва Email */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Avatar
            sx={{
              width: 52,
              height: 52,
              backgroundColor: "#EBF6FC",
              color: "#7FC9F0",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            {name ? name[0].toUpperCase() : "А"}
          </Avatar>
          <Typography
            sx={{
              fontSize: "15px",
              color: "#2B5674",
              fontWeight: 500,
            }}
          >
            {email}
          </Typography>
        </Box>

        {/* Имя */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            borderBottom: "1px solid #F0F4F7",
            pb: "12px",
          }}
        >
          <Typography sx={{ fontSize: "12px", color: "#A9C4D2" }}>
            Имя
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Typography
              sx={{ fontSize: "14px", color: "#2B5674", fontWeight: 500 }}
            >
              {name}
            </Typography>
            <IconButton size="small" sx={{ padding: 0, color: "#7FC9F0" }}>
              <EditOutlinedIcon sx={{ fontSize: "16px" }} />
            </IconButton>
          </Box>
        </Box>

        {/* Телефон */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            borderBottom: "1px solid #F0F4F7",
            pb: "12px",
          }}
        >
          <Typography sx={{ fontSize: "12px", color: "#A9C4D2" }}>
            Телефон
          </Typography>
          <Typography
            onClick={() => setPhone("+7 919 919 99 99")}
            sx={{
              fontSize: "13px",
              color: "#7FC9F0",
              cursor: "pointer",
              width: "fit-content",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {phone || "Добавить"}
          </Typography>
        </Box>

        {/* Адреса доставки */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            borderBottom: "1px solid #F0F4F7",
            pb: "12px",
          }}
        >
          <Typography sx={{ fontSize: "12px", color: "#A9C4D2" }}>
            Адреса доставки
          </Typography>
          <Typography
            sx={{ fontSize: "13px", color: "#2B5674", fontWeight: 500 }}
          >
            {address}
          </Typography>
        </Box>

        {/* Пароль */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography sx={{ fontSize: "12px", color: "#A9C4D2" }}>
            Пароль
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <TextField
              type="password"
              defaultValue="123456789"
              variant="outlined"
              size="small"
              sx={{
                width: "220px",
                "& .MuiOutlinedInput-root": {
                  height: "38px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  backgroundColor: "#FFFFFF",
                  "& fieldset": { borderColor: "#E5EEF3" },
                },
              }}
            />
            <Typography
              sx={{
                fontSize: "13px",
                color: "#7FC9F0",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Изменить
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
