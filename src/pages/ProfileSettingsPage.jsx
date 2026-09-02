import { useContext, useReducer } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { AppContext } from "../context/AppContext";
import { saveUser, getAvatarUrl } from "../api/api";

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };

    case "setPhone":
      return { ...state, phone: action.payload };

    case "setEmail":
      return { ...state, email: action.payload };

    case "setAddress":
      return { ...state, address: action.payload };

    case "setAvatar":
      return { ...state, avatar: action.payload };

    case "setLoading":
      return { ...state, loading: action.payload };

    case "saved":
      return { ...state, saved: action.payload };

    default:
      return state;
  }
}

export default function ProfileSettingsPage() {
  const { state: appState, login } = useContext(AppContext);

  const user = appState.user;

  const [state, dispatch] = useReducer(reducer, {
    name: user ? user.fullName : "",
    phone: user ? user.tel : "",
    email: user ? user.email : "",
    address: user ? user.address : "",
    avatar: null,
    loading: false,
    saved: false,
  });

  async function handleSave() {
    dispatch({ type: "setLoading", payload: true });

    // Ҳамон POST /api/users, вале бо id — маълумот нав карда мешавад
    const answer = await saveUser({
      id: user ? user.id : "",
      fullName: state.name,
      tel: state.phone,
      email: state.email,
      address: state.address,
      avatar: state.avatar,
    });

    dispatch({ type: "setLoading", payload: false });

    if (answer) {
      login(answer);
      dispatch({ type: "saved", payload: true });
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
          marginBottom: { xs: "30px", lg: "32px" },
          color: "#2B5674",
          fontSize: { xs: "34px", lg: "32px" },
          fontWeight: 700,
        }}
      >
        Личные данные
      </Typography>

      <Box
        sx={{
          maxWidth: "480px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Box sx={{ position: "relative" }}>
            <Avatar
              src={user && user.id ? getAvatarUrl(user.id) : ""}
              sx={{
                width: { xs: 72, lg: 64 },
                height: { xs: 72, lg: 64 },
                backgroundColor: "#EBF6FC",
                color: "#7FC9F0",
                fontSize: "26px",
                fontWeight: 600,
              }}
            >
              {state.name ? state.name[0].toUpperCase() : "А"}
            </Avatar>

            <IconButton
              component="label"
              sx={{
                position: "absolute",
                right: "-6px",
                bottom: "-6px",
                padding: "6px",
                backgroundColor: "#7FC9F0",
                color: "#FFFFFF",
                "&:hover": { backgroundColor: "#68B7DE" },
              }}
            >
              <PhotoCamera sx={{ fontSize: "16px" }} />

              <Box
                component="input"
                type="file"
                accept="image/*"
                hidden
                onChange={(e) =>
                  dispatch({ type: "setAvatar", payload: e.target.files[0] })
                }
              />
            </IconButton>
          </Box>

          <Typography
            sx={{
              color: "#7FC9F0",
              fontSize: { xs: "17px", lg: "15px" },
              wordBreak: "break-all",
            }}
          >
            {state.email}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <Typography
            sx={{ color: "#8EABC0", fontSize: { xs: "17px", lg: "14px" } }}
          >
            Имя
          </Typography>

          <TextField
            variant="standard"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "setName", payload: e.target.value })
            }
            sx={{
              width: "220px",
              "& .MuiInputBase-input": {
                color: "#2B5674",
                fontSize: { xs: "17px", lg: "14px" },
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <Typography
            sx={{ color: "#8EABC0", fontSize: { xs: "17px", lg: "14px" } }}
          >
            Телефон
          </Typography>

          <TextField
            variant="standard"
            placeholder="Добавить"
            value={state.phone}
            onChange={(e) =>
              dispatch({ type: "setPhone", payload: e.target.value })
            }
            sx={{
              width: "220px",
              "& .MuiInputBase-input": {
                color: "#2B5674",
                fontSize: { xs: "17px", lg: "14px" },
              },
            }}
          />
        </Box>

        <Divider sx={{ borderColor: "#F0F4F7" }} />

        <Box>
          <Typography
            sx={{
              marginBottom: "10px",
              color: "#8EABC0",
              fontSize: { xs: "17px", lg: "14px" },
            }}
          >
            Адреса доставки
          </Typography>

          <TextField
            fullWidth
            variant="standard"
            placeholder="Добавить адрес"
            value={state.address}
            onChange={(e) =>
              dispatch({ type: "setAddress", payload: e.target.value })
            }
            sx={{
              "& .MuiInputBase-input": {
                color: "#2B5674",
                fontSize: { xs: "17px", lg: "14px" },
              },
            }}
          />
        </Box>

        <Button
          onClick={handleSave}
          disabled={state.loading}
          sx={{
            width: { xs: "100%", lg: "260px" },
            height: { xs: "52px", lg: "44px" },
            borderRadius: "10px",
            backgroundColor: "#7FC9F0",
            color: "#FFFFFF",
            fontSize: { xs: "16px", lg: "14px" },
            fontWeight: 500,
            textTransform: "none",
            "&:hover": { backgroundColor: "#68B7DE" },
          }}
        >
          {state.loading ? "Сохраняем..." : "Сохранить изменения"}
        </Button>

        {state.saved && (
          <Typography sx={{ color: "#4CAF50", fontSize: "14px" }}>
            Сохранено!
          </Typography>
        )}
      </Box>
    </Box>
  );
}
