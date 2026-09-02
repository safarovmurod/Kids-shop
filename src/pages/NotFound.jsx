import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        minHeight: "60vh",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <Typography
        sx={{
          color: "#7FC9F0",
          fontSize: { xs: "70px", lg: "90px" },
          fontWeight: 700,
        }}
      >
        404
      </Typography>

      <Typography
        sx={{
          color: "#446B80",
          fontSize: { xs: "20px", lg: "22px" },
          textAlign: "center",
        }}
      >
        Такой страницы не существует
      </Typography>

      <Button
        component={NavLink}
        to="/"
        sx={{
          width: { xs: "100%", lg: "220px" },
          height: "48px",
          marginTop: "10px",
          borderRadius: "10px",
          backgroundColor: "#7FC9F0",
          color: "#FFFFFF",
          fontSize: "15px",
          textTransform: "none",
          "&:hover": { backgroundColor: "#68B7DE" },
        }}
      >
        На главную
      </Button>
    </Box>
  );
}
