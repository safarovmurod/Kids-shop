import { Box, Typography, Button } from "@mui/material"
import hero from "../../assets/images/hero.png"

export default function Hero() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#FCF6F5" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "20px", lg: "40px" },
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: "16px", lg: "20px" },
          pt: { xs: "26px", lg: "60px" },
          pb: { xs: "0px", lg: "40px" },
        }}
      >
        <Box sx={{ width: { xs: "100%", lg: "480px" }, textAlign: { xs: "center", lg: "left" } }}>
          <Typography
            sx={{
              color: "#446B80",
              fontSize: { xs: "20px", lg: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "28px", lg: "52px" },
            }}
          >
            Все самое необходимое для вашего ребенка
          </Typography>

          <Typography
            sx={{
              mt: { xs: "14px", lg: "26px" },
              color: "#8FA6B3",
              fontSize: { xs: "12px", lg: "15px" },
              lineHeight: { xs: "18px", lg: "22px" },
            }}
          >
            Посмотрите нашу новую подборку для ухода за вашим ребенком
          </Typography>

          <Button
            sx={{
              width: { xs: "100%", lg: "140px" },
              height: { xs: "38px", lg: "40px" },
              mt: { xs: "18px", lg: "30px" },
              borderRadius: "20px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: "13px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#7FC9F0" },
            }}
          >
            Смотреть
          </Button>
        </Box>

        <Box
          component="img"
          src={hero}
          sx={{
            width: { xs: "100%", lg: "560px" },
            height: { xs: "290px", lg: "440px" },
            display: "block",
          }}
        />
      </Box>
    </Box>
  )
}
