import { Box, Typography, Button } from "@mui/material"
import banner from "../../assets/images/banner.png"

export default function Banner() {
  return (
    <Box sx={{ width: "100%", mt: { xs: "34px", lg: "70px" }, backgroundColor: "#FFFFFF" }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "18px", lg: "20px" },
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: "16px", lg: "20px" },
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
              fontSize: { xs: "19px", lg: "34px" },
              fontWeight: 400,
              lineHeight: { xs: "28px", lg: "46px" },
            }}
          >
            Все детские костюмы с акцией 10%
          </Typography>

          <Button
            sx={{
              width: { xs: "100%", lg: "148px" },
              height: { xs: "34px", lg: "32px" },
              mt: { xs: "16px", lg: "26px" },
              borderRadius: "4px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: "10px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#7FC9F0" },
            }}
          >
            Смотреть костюмы
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", lg: "flex-end" },
            width: { xs: "100%", lg: "560px" },
            height: { xs: "210px", lg: "330px" },
          }}
        >
          <Box
            component="img"
            src={banner}
            sx={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
          />
        </Box>
      </Box>
    </Box>
  )
}
