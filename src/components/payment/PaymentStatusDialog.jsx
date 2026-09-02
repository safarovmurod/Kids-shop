import { Box, Typography, Dialog, CircularProgress } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

export default function PaymentStatusDialog({ open, success }) {
  return (
    <Dialog
      open={open}
      slotProps={{
        paper: {
          sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            minWidth: "280px",
            padding: "48px 40px",
            borderRadius: "20px",
          },
        },
      }}
    >
      {success ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CheckCircle sx={{ fontSize: "70px", color: "#4CAF50" }} />

          <Typography
            sx={{ color: "#2B5674", fontSize: "18px", fontWeight: 700 }}
          >
            Оплата прошла успешно!
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CircularProgress sx={{ color: "#7FC9F0" }} size={64} />

          <Typography
            sx={{ color: "#2B5674", fontSize: "16px", fontWeight: 600 }}
          >
            Обработка платежа...
          </Typography>
        </Box>
      )}
    </Dialog>
  );
}
