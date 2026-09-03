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
        minHeight: "60vh",
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingTop: "40px",
        paddingBottom: "60px",
      }}
    >
      <Typography
        sx={{
          color: "#A9C4D2",
          fontSize: { xs: "90px", lg: "130px" },
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        404
      </Typography>

      <Typography
        sx={{
          marginTop: "20px",
          color: "#446B80",
          fontSize: { xs: "26px", lg: "30px" },
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        Страница не найдена
      </Typography>

      <Typography
        sx={{
          marginTop: "16px",
          color: "#8FA6B3",
          fontSize: { xs: "16px", lg: "14px" },
          lineHeight: 1.6,
          textAlign: "center",
        }}
      >
        Мы не можем найти страницу, которую вы ищете.
        <br />
        Она может быть еще не зарегистрирована или её не существует
      </Typography>

      <Button
        component={NavLink}
        to="/"
        sx={{
          width: { xs: "100%", lg: "180px" },
          height: "46px",
          marginTop: "30px",
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
