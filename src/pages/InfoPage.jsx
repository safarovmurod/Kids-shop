import { Box, Typography, Button } from "@mui/material";
import { NavLink, useLocation } from "react-router";
import { menuLinks } from "../data/data";

export default function InfoPage() {
  const location = useLocation();

  const page = menuLinks.find((el) => el.path === location.pathname);

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
        paddingBottom: { xs: "60px", lg: "100px" },
      }}
    >
      <Typography
        sx={{
          marginBottom: "20px",
          color: "#446B80",
          fontSize: { xs: "34px", lg: "34px" },
          fontWeight: 600,
        }}
      >
        {page ? page.name : "Раздел"}
      </Typography>

      <Typography
        sx={{
          color: "#8FA6B3",
          fontSize: { xs: "17px", lg: "15px" },
          lineHeight: 1.6,
        }}
      >
        Этот раздел скоро появится.
      </Typography>

      <Button
        component={NavLink}
        to="/catalog/detskaya-mebel"
        sx={{
          width: { xs: "100%", lg: "220px" },
          height: "48px",
          marginTop: "30px",
          borderRadius: "10px",
          backgroundColor: "#7FC9F0",
          color: "#FFFFFF",
          fontSize: "15px",
          textTransform: "none",
          "&:hover": { backgroundColor: "#68B7DE" },
        }}
      >
        Перейти в каталог
      </Button>
    </Box>
  );
}
