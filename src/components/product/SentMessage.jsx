import { Box, Typography } from "@mui/material";
import { CheckCircleOutlined } from "@mui/icons-material";

export default function SentMessage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <CheckCircleOutlined sx={{ fontSize: "64px", color: "#7FC9F0" }} />

      <Typography
        sx={{ color: "#446B80", fontSize: "20px", fontWeight: 500 }}
      >
        Отправлено
      </Typography>
    </Box>
  );
}
