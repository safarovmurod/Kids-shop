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
          gap: { xs: "18px", lg: "30px" },
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: "16px", lg: "20px" },
          pt: { xs: "26px", lg: "50px" },
          pb: { xs: "26px", lg: "40px" },
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
              fontSize: { xs: "22px", lg: "40px" },
              fontWeight: 400,
              lineHeight: { xs: "30px", lg: "52px" },
            }}
          >
            Все самое необходимое для вашего ребенка
          </Typography>

          <Typography
            sx={{
              mt: { xs: "14px", lg: "26px" },
              color: "#8FA6B3",
              fontSize: { xs: "12px", lg: "14px" },
              lineHeight: { xs: "18px", lg: "21px" },
            }}
          >
            Посмотрите нашу новую подборку<br />для ухода за вашим ребенком
          </Typography>

          <Button
            sx={{
              width: { xs: "100%", lg: "108px" },
              height: { xs: "36px", lg: "32px" },
              mt: { xs: "18px", lg: "30px" },
              borderRadius: "16px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: "11px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#7FC9F0" },
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
            height: { xs: "250px", lg: "400px" },
          }}
        >
          <Box
            component="img"
            src={hero}
            sx={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
          />
        </Box>
      </Box>
    </Box>
  )
}
