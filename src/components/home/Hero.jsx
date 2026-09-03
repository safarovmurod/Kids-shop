import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
import hero from "../../assets/images/hero.png";
import circle from "../../assets/images/circle.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", backgroundColor: "#FCF6F5" }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: { xs: "16px", lg: "20px" },
          paddingRight: { xs: "16px", lg: "20px" },
          paddingTop: { xs: "32px", lg: "12px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "510px" },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            component="h1"
            sx={{
              color: "#446B80",
              fontSize: { xs: "32px", lg: "48px" },
              fontWeight: 400,
              lineHeight: { xs: "40px", lg: "58px" },
            }}
          >
            Все самое необходимое для вашего ребенка
          </Typography>
          <Typography
            sx={{
              marginTop: { xs: "20px", lg: "28px" },
              color: "#8FA6B3",
              fontSize: "16px",
              lineHeight: "22px",
            }}
          >
            Посмотрите нашу новую подборку
            <br />
            для ухода за вашим ребенком
          </Typography>
          <Button
            onClick={() => navigate("/catalog/detskaya-mebel")}
            sx={{
              width: "110px",
              height: "36px",
              marginTop: "28px",
              borderRadius: "8px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: "12px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#68B7DE" },
            }}
          >
            Смотреть
          </Button>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", lg: "650px" },
            height: { xs: "340px", sm: "450px", lg: "550px" },
            marginTop: { xs: "24px", lg: "0px" },
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src={hero}
            alt="Мама с малышом"
            sx={{
              position: "absolute",
              right: "0px",
              bottom: "0px",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "right bottom",
            }}
          />
          <Box
            component="img"
            src={circle}
            alt=""
            sx={{
              position: "absolute",
              left: { xs: "0px", lg: "-195px" },
              top: "30px",
              width: "36px",
              height: "36px",
              opacity: 1,
            }}
          />
          <Box
            component="img"
            src={circle}
            alt=""
            sx={{
              position: "absolute",
              left: "25%",
              top: "30px",
              width: "18px",
              height: "18px",
              opacity: 1,
            }}
          />
          <Box
            component="img"
            src={circle}
            alt=""
            sx={{
              position: "absolute",
              left: "0px",
              top: "135px",
              width: "18px",
              height: "18px",
              opacity: 1,
            }}
          />
          <Box
            component="img"
            src={circle}
            alt=""
            sx={{
              position: "absolute",
              left: { xs: "0px", lg: "-100px" },
              bottom: "75px",
              width: "54px",
              height: "54px",
              opacity: 1,
            }}
          />
          <Box
            component="img"
            src={circle}
            alt=""
            sx={{
              position: "absolute",
              left: "22%",
              bottom: "8px",
              width: "18px",
              height: "18px",
              opacity: 1,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
