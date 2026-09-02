import { useContext } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Close as CloseIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";

export default function CartDialog() {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const item = state.dialogItem;

  if (!item) {
    return null;
  }

  // Шумораи ҳамин маҳсулот дар корзина
  const cartItem = state.cart.find((el) => el.id === item.id);
  const count = cartItem ? cartItem.count : 1;

  function handleClose() {
    dispatch({ type: "closeDialog" });
  }

  function handleGoToCart() {
    dispatch({ type: "closeDialog" });
    navigate("/cart");
  }

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
      slotProps={{
        paper: {
          sx: {
            borderRadius: "16px",
            margin: "16px",
            width: { xs: "100%", md: "420px" },
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          padding: "20px 20px 10px 20px",
        }}
      >
        <Typography
          sx={{
            color: "#2B5674",
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 600,
          }}
        >
          Товар добавлен в корзину
        </Typography>

        <IconButton onClick={handleClose} sx={{ padding: 0, color: "#2B5674" }}>
          <CloseIcon sx={{ fontSize: "20px" }} />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ padding: "10px 20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "12px", md: "16px" },
          }}
        >
          <Box
            component="img"
            src={item.image}
            alt={item.name}
            sx={{
              width: { xs: "64px", md: "80px" },
              height: { xs: "64px", md: "80px" },
              objectFit: "contain",
              flexShrink: 0,
            }}
          />

          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                color: "#708090",
                fontSize: { xs: "10px", md: "11px" },
                lineHeight: 1.4,
                marginBottom: "8px",
              }}
            >
              {item.name}
            </Typography>

            <Typography
              sx={{
                color: "#52A5E0",
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 700,
              }}
            >
              {item.price.toLocaleString("ru-RU")} ₽
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "110px",
            marginTop: "16px",
            padding: "2px 10px",
            borderRadius: "12px",
            border: "1px solid #B2CAD6",
          }}
        >
          <IconButton
            onClick={() => dispatch({ type: "decrement", payload: item.id })}
            sx={{ padding: 0, color: "#52A5E0" }}
          >
            <RemoveIcon sx={{ fontSize: "18px" }} />
          </IconButton>

          <Typography
            sx={{ color: "#2B5674", fontSize: "14px", fontWeight: 500 }}
          >
            {count}
          </Typography>

          <IconButton
            onClick={() => dispatch({ type: "increment", payload: item.id })}
            sx={{ padding: 0, color: "#52A5E0" }}
          >
            <AddIcon sx={{ fontSize: "18px" }} />
          </IconButton>
        </Box>
      </DialogContent>

      <DialogActions sx={{ padding: "10px 20px 20px 20px" }}>
        <Button
          onClick={handleGoToCart}
          fullWidth
          sx={{
            height: "42px",
            borderRadius: "10px",
            border: "1px solid #2B5674",
            backgroundColor: "#FFFFFF",
            color: "#2B5674",
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "none",
            "&:hover": { backgroundColor: "#F3F8FB" },
          }}
        >
          Перейти в корзину
        </Button>
      </DialogActions>
    </Dialog>
  );
}
