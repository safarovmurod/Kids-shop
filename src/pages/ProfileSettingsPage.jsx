import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useOutletContext } from "react-router";

export default function ProfileSettingsPage() {
  const { user, login } = useOutletContext();

  const [name, setName] = useState(user?.name || "Анна");
  const [email, setEmail] = useState(user?.email || "annaanananana@gmail.com");
  const [phone, setPhone] = useState(user?.phone || "+7 919 919 99 99");
  const [address, setAddress] = useState(
    user?.address || "Москва, ул. Московская 25-45",
  );
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [isSaved, setIsSaved] = useState(false);

  // Хондани сурат аз файл (Base64)
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Функцияи сабткунии ҳамаи маълумот
  const handleSaveProfile = (e) => {
    e.preventDefault();

    const updatedUserData = {
      id: user?.id || Date.now(),
      name,
      email,
      phone,
      address,
      avatar,
    };

    // Обновить кардани context ва localStorage
    login(updatedUserData);

    // Нишон додани паёми сабт шуд
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

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
        component="form"
        onSubmit={handleSaveProfile}
        sx={{
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Аватар ва боргирии сурат */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Box sx={{ position: "relative" }}>
            <Avatar
              src={avatar}
              sx={{
                width: 64,
                height: 64,
                backgroundColor: "#EBF6FC",
                color: "#7FC9F0",
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              {name ? name[0].toUpperCase() : "А"}
            </Avatar>

            <IconButton
              component="label"
              sx={{
                position: "absolute",
                bottom: -4,
                right: -4,
                backgroundColor: "#7FC9F0",
                color: "#FFFFFF",
                padding: "4px",
                "&:hover": { backgroundColor: "#68B7DE" },
              }}
            >
              <PhotoCameraIcon sx={{ fontSize: "14px" }} />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </IconButton>
          </Box>

          <Box>
            <Typography
              sx={{ fontSize: "15px", color: "#2B5674", fontWeight: 600 }}
            >
              {name}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#A9C4D2" }}>
              {email}
            </Typography>
          </Box>
        </Box>

        {/* Имя */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            borderBottom: "1px solid #F0F4F7",
            pb: "8px",
          }}
        >
          <Typography sx={{ fontSize: "12px", color: "#A9C4D2" }}>
            Имя
          </Typography>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              "& .MuiInputBase-input": {
                fontSize: "14px",
                color: "#2B5674",
                fontWeight: 500,
                padding: 0,
              },
            }}
          />
        </Box>

        {/* Телефон */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            borderBottom: "1px solid #F0F4F7",
            pb: "8px",
          }}
        >
          <Typography sx={{ fontSize: "12px", color: "#A9C4D2" }}>
            Телефон
          </Typography>
          <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Добавить телефон"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              "& .MuiInputBase-input": {
                fontSize: "13px",
                color: "#2B5674",
                padding: 0,
              },
            }}
          />
        </Box>

        {/* Адреса доставки */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            borderBottom: "1px solid #F0F4F7",
            pb: "8px",
          }}
        >
          <Typography sx={{ fontSize: "12px", color: "#A9C4D2" }}>
            Адреса доставки
          </Typography>
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              "& .MuiInputBase-input": {
                fontSize: "13px",
                color: "#2B5674",
                fontWeight: 500,
                padding: 0,
              },
            }}
          />
        </Box>

        {/* Тугма ва паёми муваффақият */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Button
            type="submit"
            variant="contained"
            disableElevation
            sx={{
              height: "40px",
              px: "28px",
              borderRadius: "10px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: "13px",
              textTransform: "none",
              fontWeight: 500,
              "&:hover": { backgroundColor: "#68B7DE" },
            }}
          >
            Сохранить изменения
          </Button>

          {isSaved && (
            <Typography sx={{ fontSize: "12px", color: "#4CAF50" }}>
              Сохранено!
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
