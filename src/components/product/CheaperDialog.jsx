import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import SentMessage from "./SentMessage";

export default function CheaperDialog({ open, onClose }) {
  const [link, setLink] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  // Demo: паёми success нишон медиҳад, баъди 1.5 сония input-ҳоро тоза ва dialog-ро мепӯшонад; request нест.
  function handleSend() {
    setSent(true);

    setTimeout(() => {
      setSent(false);
      setLink("");
      setPhone("");
      onClose();
    }, 1500);
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      slotProps={{ paper: { sx: { borderRadius: "12px" } } }}
    >
      {sent ? (
        <SentMessage />
      ) : (
        <Box>
          <DialogTitle
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <Typography
              sx={{ color: "#446B80", fontSize: "17px", fontWeight: 600 }}
            >
              Нашли дешевле?
            </Typography>

            <IconButton
              onClick={onClose}
              sx={{ padding: 0, color: "#A9C4D2" }}
            >
              <CloseIcon sx={{ fontSize: "20px" }} />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ padding: "0px 20px 20px 20px" }}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Ссылка на товар*"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              sx={{
                marginTop: "6px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "#446B80",
                },
              }}
            />

            <TextField
              fullWidth
              label="Ваш телефон*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{
                marginTop: "16px",
                "& .MuiOutlinedInput-root": {
                  height: "52px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "#446B80",
                },
              }}
            />

            <Typography
              sx={{
                marginTop: "16px",
                marginBottom: "20px",
                color: "#A9C4D2",
                fontSize: "13px",
                lineHeight: 1.5,
              }}
            >
              Мы проверим информацию и свяжемся с Вами
            </Typography>

            <Button
              onClick={handleSend}
              fullWidth
              sx={{
                height: "46px",
                borderRadius: "8px",
                backgroundColor: "#7FC9F0",
                color: "#FFFFFF",
                fontSize: "15px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#68B7DE" },
              }}
            >
              Отправить
            </Button>
          </DialogContent>
        </Box>
      )}
    </Dialog>
  );
}
