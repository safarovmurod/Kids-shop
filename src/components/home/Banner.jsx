import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
import baby from "../../assets/images/baby-suit.png";
import background from "../../assets/images/banner-background.svg";

export default function Banner() {
  // Тугмаи баннер ба каталоги либос мегузарад.
  const navigate = useNavigate();

  return (
    <Box
      data-aos="fade-up"
      sx={{
        width: "100%",
        marginTop: { xs: "60px", lg: "110px" },
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 28px #0000000A",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          minHeight: { xs: "auto", lg: "400px" },
          width: "100%",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: { xs: "16px", lg: "20px" },
          paddingRight: { xs: "16px", lg: "20px" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: { xs: "100%", lg: "620px" },
            paddingTop: { xs: "28px", lg: "0px" },
          }}
        >
          <Typography
            sx={{
              color: "#446B80",
              fontSize: { xs: "30px", lg: "46px" },
              fontWeight: 400,
              lineHeight: { xs: "40px", lg: "56px" },
            }}
          >
            Все детские костюмы
            <br />с акцией 10%
          </Typography>
          <Button
            onClick={() => navigate("/catalog/odezhda")}
            sx={{
              width: "180px",
              height: "38px",
              marginTop: "32px",
              borderRadius: "8px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: "12px",
              textTransform: "none",
              whiteSpace: "nowrap",
              "&:hover": { backgroundColor: "#68B7DE" },
            }}
          >
            Смотреть костюмы
          </Button>
        </Box>
        <Box
          sx={{
            position: { xs: "relative", lg: "absolute" },
            right: { xs: "auto", lg: "0px" },
            bottom: "0px",
            width: { xs: "100%", lg: "790px" },
            height: { xs: "340px", sm: "420px", lg: "475px" },
            marginTop: { xs: "20px", lg: "0px" },
            backgroundImage: `url("${background}")`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={baby}
            alt="Малыш в тёплом костюме с ушками"
            sx={{
              position: "absolute",
              right: { xs: "10px", lg: "125px" },
              bottom: "-38px",
              height: { xs: "345px", sm: "425px", lg: "460px" },
              width: "auto",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
