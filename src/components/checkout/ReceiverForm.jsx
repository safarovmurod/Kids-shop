import { Box, Typography, TextField } from "@mui/material";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    height: "52px",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#446B80",
  },
};

// Input-ҳои controlled: value аз state меояд, onChange қимати навро ба reducer-и CheckoutPage медиҳад.
export default function ReceiverForm({ state, dispatch }) {
  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "14px",
          color: "#2B5674",
          fontSize: { xs: "17px", lg: "16px" },
          fontWeight: 600,
        }}
      >
        Адрес получателя
      </Typography>

      <TextField
        fullWidth
        placeholder="Фамилия и имя по паспорту*"
        value={state.name}
        onChange={(e) => dispatch({ type: "setName", payload: e.target.value })}
        sx={inputStyle}
      />

      <Typography
        sx={{
          marginTop: "6px",
          marginBottom: "16px",
          color: "#8FA6B3",
          fontSize: "12px",
        }}
      >
        Это может потребоваться при получении заказа
      </Typography>

      <TextField
        fullWidth
        placeholder="Электронная почта"
        value={state.email}
        onChange={(e) => dispatch({ type: "setEmail", payload: e.target.value })}
        sx={{ ...inputStyle, marginBottom: "16px" }}
      />

      <TextField
        fullWidth
        placeholder="Телефон"
        value={state.phone}
        onChange={(e) => dispatch({ type: "setPhone", payload: e.target.value })}
        sx={inputStyle}
      />

      <Typography
        sx={{
          marginTop: "6px",
          color: "#8FA6B3",
          fontSize: "12px",
          lineHeight: "18px",
        }}
      >
        На телефон отправляется оповещение о статусе заказа или о его получении
      </Typography>
    </Box>
  );
}
