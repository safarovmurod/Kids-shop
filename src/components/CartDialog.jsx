import { useContext, useEffect } from "react";
import { Box, Typography, Button, IconButton, Popper, Paper, ClickAwayListener } from "@mui/material";
import { Close, Add, Remove } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";

export default function CartDialog() {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const item = state.dialogItem;
  const anchor = state.dialogAnchor;

  useEffect(() => {
    dispatch({ type: "closeDialog" });
  }, [pathname, dispatch]);

  useEffect(() => {
    if (!item) return;
    function handleKeyDown(event) {
      if (event.key === "Escape") dispatch({ type: "closeDialog" });
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [item, dispatch]);

  if (!item || !anchor?.isConnected) return null;
  const cartItem = state.cart.find((el) => el.id === item.id);
  const count = cartItem ? cartItem.count : 1;

  function handleClose() {
    dispatch({ type: "closeDialog" });
  }

  return (
    <Popper
      open
      anchorEl={anchor}
      placement="right-end"
      modifiers={[
        { name: "offset", options: { offset: [0, 10] } },
        { name: "flip", options: { fallbackPlacements: ["left-end", "top-end", "bottom-end"], padding: 12 } },
        { name: "preventOverflow", options: { padding: 12 } },
      ]}
      sx={{ zIndex: 1200, width: "360px", maxWidth: "calc(100vw - 24px)" }}
    >
      <ClickAwayListener mouseEvent="onMouseDown" touchEvent="onTouchStart" onClickAway={handleClose}>
        <Paper
          role="region"
          aria-label="Товар добавлен в корзину"
          elevation={0}
          sx={{ padding: "16px", borderRadius: "4px", border: "1px solid #E5EEF3", boxShadow: "0px 4px 20px #446B8026", backgroundColor: "#FFFFFF" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "12px" }}>
            <Typography aria-live="polite" sx={{ color: "#446B80", fontSize: "14px" }}>
              Товар добавлен в корзину
            </Typography>
            <IconButton onClick={handleClose} aria-label="Закрыть уведомление" size="small" sx={{ padding: "2px", color: "#446B80" }}>
              <Close sx={{ fontSize: "16px" }} />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box component="img" src={item.image} alt={item.name} sx={{ width: "50px", height: "64px", objectFit: "contain" }} />
            <Box sx={{ flex: 1, minWidth: "0px" }}>
              <Typography sx={{ color: "#446B80", fontSize: "11px", lineHeight: "16px" }}>{item.name}</Typography>
              <Typography sx={{ marginTop: "5px", color: "#7FC9F0", fontSize: "15px" }}>
                {item.price.toLocaleString("ru-RU")} ₽
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0, border: "1px solid #B2CAD6", borderRadius: "6px" }}>
              <IconButton aria-label="Уменьшить количество" disabled={count === 1} onClick={() => dispatch({ type: "decrement", payload: item.id })} sx={{ padding: "4px", color: "#7FC9F0" }}>
                <Remove sx={{ fontSize: "14px" }} />
              </IconButton>
              <Typography aria-live="polite" sx={{ minWidth: "20px", textAlign: "center", color: "#446B80", fontSize: "12px" }}>{count}</Typography>
              <IconButton aria-label="Увеличить количество" onClick={() => dispatch({ type: "increment", payload: item.id })} sx={{ padding: "4px", color: "#7FC9F0" }}>
                <Add sx={{ fontSize: "14px" }} />
              </IconButton>
            </Box>
          </Box>

          <Button fullWidth variant="outlined" onClick={() => { handleClose(); navigate("/cart"); }}
            sx={{ height: "32px", marginTop: "14px", borderRadius: "4px", borderColor: "#B2CAD6", color: "#446B80", fontSize: "11px", textTransform: "none" }}>
            Перейти в корзину
          </Button>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
}
