import { useState, useEffect } from "react";
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
import axios from "axios";

const api = "https://swagger-wheat.vercel.app/api/users";

export default function ProfileSettingsPage() {
  const { user, token, login } = useOutletContext();

  const [name, setName] = useState(user?.fullName || "");
  const [phone, setPhone] = useState(user?.tel || "");
  const [address, setAddress] = useState(user?.address || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [avatarFile, setAvatarFile] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setName(user?.fullName || "");
    setPhone(user?.tel || "");
    setAddress(user?.address || "");
    setAvatar(user?.avatar || "");
    setAvatarFile(null);
  }, [user]);

  // Хондани сурат аз файл (Base64)
  function handleAvatarChange(event) {
    const file = event.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleSaveProfile(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", name.trim());
    formData.append("tel", phone);
    formData.append("address", address);
    if (avatarFile) formData.append("avatar", avatarFile);
    setError("");
    setIsSaved(false);
    setLoading(true);
    try {
      const { data } = await axios.post(`${api}/${user.id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      login(data.data);
      setIsSaved(true);
    } catch (error) {
      setError(error.response?.data.message || "Не удалось сохранить изменения.");
    } finally {
      setLoading(false);
    }
  }

  if (!user) {
    return (
      <Box sx={{ padding: "40px 20px", textAlign: "center" }}>
        <Typography>Войдите в аккаунт через кнопку входа вверху страницы.</Typography>
      </Box>
    );
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
              {name.slice(0, 1).toUpperCase()}
            </Avatar>

            <IconButton
              component="label"
              aria-label="Загрузить фото"
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
              <Box
                component="input"
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
              {user.email}
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
            required
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

        {error && (
          <Typography role="alert" sx={{ color: "#D32F2F", fontSize: "12px" }}>
            {error}
          </Typography>
        )}
        {/* Тугма ва паёми муваффақият */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Button
            type="submit"
            disabled={loading}
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
            {loading ? "Сохранение..." : "Сохранить изменения"}
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
