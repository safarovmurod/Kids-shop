import { Box, Typography, Button } from "@mui/material"
import banner from "../../assets/images/banner.png"

export default function Banner() {
  return (
    <Box sx={{ width: "100%", mt: { xs: "30px", lg: "70px" }, backgroundColor: "#FCF6F5" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "16px", lg: "30px" },
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: "16px", lg: "20px" },
          py: { xs: "24px", lg: "40px" },
        }}
      >
        <Box sx={{ width: { xs: "100%", lg: "480px" }, textAlign: { xs: "center", lg: "left" } }}>
          <Typography
            sx={{
              color: "#446B80",
              fontSize: { xs: "18px", lg: "34px" },
              fontWeight: 500,
              lineHeight: { xs: "26px", lg: "46px" },
            }}
          >
            Все детские костюмы с акцией 10%
          </Typography>

          <Button
            sx={{
              width: { xs: "100%", lg: "160px" },
              height: { xs: "36px", lg: "34px" },
              mt: { xs: "16px", lg: "26px" },
              borderRadius: "4px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: { xs: "12px", lg: "11px" },
              textTransform: "none",
              "&:hover": { backgroundColor: "#7FC9F0" },
            }}
          >
            Смотреть костюмы
          </Button>
        </Box>

        <Box
          component="img"
          src={banner}
          sx={{
            width: { xs: "100%", lg: "540px" },
            height: { xs: "230px", lg: "300px" },
            display: "block",
          }}
        />
      </Box>
    </Box>
  )
}
