import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
import hero from "../../assets/images/hero.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", backgroundColor: "#FCF6F5" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "18px", lg: "30px" },
          width: "100%",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: { xs: "16px", lg: "20px" },
          paddingRight: { xs: "16px", lg: "20px" },
          paddingTop: { xs: "30px", lg: "50px" },
          paddingBottom: { xs: "0px", lg: "40px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "440px" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Typography
            sx={{
              color: "#446B80",
              fontSize: { xs: "36px", lg: "40px" },
              fontWeight: 400,
              lineHeight: { xs: "46px", lg: "52px" },
            }}
          >
            Все самое необходимое для вашего ребенка
          </Typography>

          <Typography
            sx={{
              marginTop: { xs: "22px", lg: "26px" },
              color: "#8FA6B3",
              fontSize: { xs: "17px", lg: "14px" },
              lineHeight: { xs: "26px", lg: "21px" },
            }}
          >
            Посмотрите нашу новую подборку
            <br />
            для ухода за вашим ребенком
          </Typography>

          <Button
            onClick={() => navigate("/detskaya-mebel")}
            sx={{
              width: { xs: "100%", lg: "108px" },
              height: { xs: "58px", lg: "32px" },
              marginTop: { xs: "26px", lg: "30px" },
              borderRadius: { xs: "12px", lg: "16px" },
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: { xs: "20px", lg: "11px" },
              textTransform: "none",
              "&:hover": { backgroundColor: "#68B7DE" },
            }}
          >
            Смотреть
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", lg: "flex-end" },
            width: { xs: "100%", lg: "560px" },
            height: { xs: "300px", lg: "400px" },
            marginTop: { xs: "26px", lg: "0px" },
          }}
        >
          <Box
            component="img"
            src={hero}
            alt="Карапуз"
            sx={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
