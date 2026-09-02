import { useReducer } from "react";
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

const inputStyle = {
  marginTop: "16px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    fontSize: "14px",
    color: "#446B80",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };

    case "setPros":
      return { ...state, pros: action.payload };

    case "setCons":
      return { ...state, cons: action.payload };

    case "setComment":
      return { ...state, comment: action.payload };

    case "sent":
      return { ...state, sent: action.payload };

    case "clear":
      return { name: "", pros: "", cons: "", comment: "", sent: false };

    default:
      return state;
  }
}

const initialState = {
  name: "",
  pros: "",
  cons: "",
  comment: "",
  sent: false,
};

export default function ReviewDialog({ open, onClose, onSend }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSend() {
    onSend({
      id: Date.now(),
      author: state.name,
      pros: state.pros,
      cons: state.cons,
      comment: state.comment,
      rating: 5,
      date: new Date().toLocaleDateString("ru-RU"),
    });

    dispatch({ type: "sent", payload: true });

    setTimeout(() => {
      dispatch({ type: "clear" });
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
      {state.sent ? (
        <SentMessage />
      ) : (
        <Box>
          <DialogTitle
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              padding: "20px",
            }}
          >
            <Typography
              sx={{ color: "#446B80", fontSize: "17px", fontWeight: 600 }}
            >
              Напишите отзыв о нашем товаре
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
              label="Ваше имя*"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "setName", payload: e.target.value })
              }
              sx={inputStyle}
            />

            <TextField
              fullWidth
              multiline
              rows={2}
              label="Достоинства"
              value={state.pros}
              onChange={(e) =>
                dispatch({ type: "setPros", payload: e.target.value })
              }
              sx={inputStyle}
            />

            <TextField
              fullWidth
              multiline
              rows={2}
              label="Недостатки"
              value={state.cons}
              onChange={(e) =>
                dispatch({ type: "setCons", payload: e.target.value })
              }
              sx={inputStyle}
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Комментарий"
              value={state.comment}
              onChange={(e) =>
                dispatch({ type: "setComment", payload: e.target.value })
              }
              sx={inputStyle}
            />

            <Button
              onClick={handleSend}
              fullWidth
              sx={{
                height: "46px",
                marginTop: "20px",
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
