import { Box, Typography, Button } from "@mui/material"
import catFurniture from "../../assets/images/cat-furniture.png"
import catStrollers from "../../assets/images/cat-strollers.png"
import catCarseats from "../../assets/images/cat-carseats.png"

export default function Categories() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "30px", lg: "70px" },
      }}
    >
      <Typography
        sx={{
          color: "#446B80",
          fontSize: { xs: "18px", lg: "34px" },
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Популярные категории
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: "14px", lg: "20px" },
          mt: { xs: "18px", lg: "34px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
            height: { xs: "140px", lg: "175px" },
            px: { xs: "14px", lg: "20px" },
            borderRadius: "6px",
            backgroundColor: "#F3DBD7",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Typography
              sx={{ color: "#446B80", fontSize: { xs: "13px", lg: "15px" }, fontWeight: 700, lineHeight: "20px" }}
            >
              Детская мебель
            </Typography>

            <Typography
              sx={{ mt: "10px", color: "#8FA6B3", fontSize: { xs: "10px", lg: "11px" }, lineHeight: "16px" }}
            >
              Baby Expert, Baby Italia и др.
            </Typography>

            <Button
              sx={{
                width: "88px",
                height: "28px",
                mt: { xs: "12px", lg: "18px" },
                borderRadius: "4px",
                border: "1px solid #DCDCDC",
                backgroundColor: "#FFFFFF",
                color: "#446B80",
                fontSize: "10px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#FFFFFF" },
              }}
            >
              Смотреть
            </Button>
          </Box>

          <Box
            component="img"
            src={catFurniture}
            sx={{ width: "46%", height: { xs: "100px", lg: "130px" }, display: "block" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
            height: { xs: "140px", lg: "175px" },
            px: { xs: "14px", lg: "20px" },
            borderRadius: "6px",
            backgroundColor: "#FDF6EF",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Typography
              sx={{ color: "#446B80", fontSize: { xs: "13px", lg: "15px" }, fontWeight: 700, lineHeight: "20px" }}
            >
              Коляски
            </Typography>

            <Typography
              sx={{ mt: "10px", color: "#8FA6B3", fontSize: { xs: "10px", lg: "11px" }, lineHeight: "16px" }}
            >
              Cybex, mima, moon, Hartan и др.
            </Typography>

            <Button
              sx={{
                width: "88px",
                height: "28px",
                mt: { xs: "12px", lg: "18px" },
                borderRadius: "4px",
                border: "1px solid #DCDCDC",
                backgroundColor: "#FFFFFF",
                color: "#446B80",
                fontSize: "10px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#FFFFFF" },
              }}
            >
              Смотреть
            </Button>
          </Box>

          <Box
            component="img"
            src={catStrollers}
            sx={{ width: "46%", height: { xs: "100px", lg: "130px" }, display: "block" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
            height: { xs: "140px", lg: "175px" },
            px: { xs: "14px", lg: "20px" },
            borderRadius: "6px",
            backgroundColor: "#E5F4FC",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Typography
              sx={{ color: "#446B80", fontSize: { xs: "13px", lg: "15px" }, fontWeight: 700, lineHeight: "20px" }}
            >
              Детские автокресла
            </Typography>

            <Typography
              sx={{ mt: "10px", color: "#8FA6B3", fontSize: { xs: "10px", lg: "11px" }, lineHeight: "16px" }}
            >
              Welldon, HB, Cybex и др.
            </Typography>

            <Button
              sx={{
                width: "88px",
                height: "28px",
                mt: { xs: "12px", lg: "18px" },
                borderRadius: "4px",
                border: "1px solid #DCDCDC",
                backgroundColor: "#FFFFFF",
                color: "#446B80",
                fontSize: "10px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#FFFFFF" },
              }}
            >
              Смотреть
            </Button>
          </Box>

          <Box
            component="img"
            src={catCarseats}
            sx={{ width: "46%", height: { xs: "100px", lg: "130px" }, display: "block" }}
          />
        </Box>
      </Box>
    </Box>
  )
}
