import { useContext, useReducer } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { AppContext } from "../context/AppContext";

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };

    case "setPhone":
      return { ...state, phone: action.payload };

    case "setAddress":
      return { ...state, address: action.payload };

    case "setPassword":
      return { ...state, password: action.payload };

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
    name: user ? user.name : "",
    phone: user ? user.phone : "",
    address: user ? user.address : "",
    password: "",
    saved: false,
  });

  function handleSave() {
    login({
      id: user ? user.id : Date.now(),
      name: state.name,
      email: user ? user.email : "",
      phone: state.phone,
      address: state.address,
    });

    // Пароль дар localStorage нигоҳ дошта намешавад
    dispatch({ type: "setPassword", payload: "" });
    dispatch({ type: "saved", payload: true });
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
          <Avatar
            sx={{
              width: { xs: 64, lg: 56 },
              height: { xs: 64, lg: 56 },
              backgroundColor: "#EBF6FC",
              color: "#7FC9F0",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            {state.name ? state.name[0].toUpperCase() : "А"}
          </Avatar>

          <Typography
            sx={{
              color: "#7FC9F0",
              fontSize: { xs: "17px", lg: "15px" },
              wordBreak: "break-all",
            }}
          >
            {user ? user.email : ""}
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

        <Divider sx={{ borderColor: "#F0F4F7" }} />

        <Box>
          <Typography
            sx={{
              marginBottom: "10px",
              color: "#8EABC0",
              fontSize: { xs: "17px", lg: "14px" },
            }}
          >
            Пароль
          </Typography>

          <TextField
            fullWidth
            type="password"
            placeholder="************"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "setPassword", payload: e.target.value })
            }
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "56px",
                borderRadius: "10px",
                fontSize: { xs: "17px", lg: "14px" },
                color: "#2B5674",
              },
            }}
          />
        </Box>

        <Button
          onClick={handleSave}
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
          Сохранить изменения
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
