import { Box, Stack, Typography, IconButton } from "@mui/material"
import { ArrowBack, ArrowForward } from "@mui/icons-material"
import num1 from "../../assets/images/num1.png"
import num2 from "../../assets/images/num2.png"
import num3 from "../../assets/images/num3.png"
import num4 from "../../assets/images/num4.png"
import brandCybex from "../../assets/images/brand-cybex.png"
import brandErbesi from "../../assets/images/brand-erbesi.png"

export default function AboutShop() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "30px", lg: "70px" },
        pb: { xs: "30px", lg: "60px" },
      }}
    >
      <Typography
        sx={{
          color: "#446B80",
          fontSize: { xs: "15px", lg: "26px" },
          fontWeight: 500,
          lineHeight: { xs: "22px", lg: "38px" },
          textAlign: "center",
        }}
      >
        Карапуз - это онлайн гипермаркет товаров для детей. С нами вырастают поколения!
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" },
          gap: { xs: "12px", lg: "20px" },
          mt: { xs: "20px", lg: "36px" },
        }}
      >
        <Box
          sx={{
            height: { xs: "140px", lg: "150px" },
            p: { xs: "14px", lg: "20px" },
            borderRadius: "6px",
            border: "1px solid #E5F4FC",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Box component="img" src={num1} sx={{ width: "48px", height: "48px", display: "block" }} />

          <Typography
            sx={{ mt: { xs: "14px", lg: "20px" }, color: "#446B80", fontSize: { xs: "10px", lg: "12px" }, lineHeight: "17px" }}
          >
            Все товары для детей в одном месте
          </Typography>
        </Box>

        <Box
          sx={{
            height: { xs: "140px", lg: "150px" },
            p: { xs: "14px", lg: "20px" },
            borderRadius: "6px",
            border: "1px solid #E5F4FC",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Box component="img" src={num2} sx={{ width: "48px", height: "48px", display: "block" }} />

          <Typography
            sx={{ mt: { xs: "14px", lg: "20px" }, color: "#446B80", fontSize: { xs: "10px", lg: "12px" }, lineHeight: "17px" }}
          >
            Цены ниже, чем у конкурентов
          </Typography>
        </Box>

        <Box
          sx={{
            height: { xs: "140px", lg: "150px" },
            p: { xs: "14px", lg: "20px" },
            borderRadius: "6px",
            border: "1px solid #E5F4FC",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Box component="img" src={num3} sx={{ width: "48px", height: "48px", display: "block" }} />

          <Typography
            sx={{ mt: { xs: "14px", lg: "20px" }, color: "#446B80", fontSize: { xs: "10px", lg: "12px" }, lineHeight: "17px" }}
          >
            Официальные дилеры лучших мировых производителей
          </Typography>
        </Box>

        <Box
          sx={{
            height: { xs: "140px", lg: "150px" },
            p: { xs: "14px", lg: "20px" },
            borderRadius: "6px",
            border: "1px solid #E5F4FC",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Box component="img" src={num4} sx={{ width: "48px", height: "48px", display: "block" }} />

          <Typography
            sx={{ mt: { xs: "14px", lg: "20px" }, color: "#446B80", fontSize: { xs: "10px", lg: "12px" }, lineHeight: "17px" }}
          >
            Собственное эко-производство
          </Typography>
        </Box>
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: { xs: "24px", lg: "40px" } }}
      >
        <IconButton
          sx={{
            display: { xs: "none", lg: "inline-flex" },
            width: "32px",
            height: "32px",
            border: "1px solid #446B80",
            color: "#446B80",
          }}
        >
          <ArrowBack sx={{ fontSize: "16px" }} />
        </IconButton>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          sx={{ width: { xs: "100%", lg: "88%" } }}
        >
          <Box component="img" src={brandCybex} sx={{ width: { xs: "80px", lg: "120px" }, height: { xs: "22px", lg: "30px" }, display: "block" }} />

          <Box component="img" src={brandErbesi} sx={{ width: { xs: "70px", lg: "100px" }, height: { xs: "22px", lg: "30px" }, display: "block" }} />

          <Box component="img" src={brandCybex} sx={{ width: { xs: "80px", lg: "120px" }, height: { xs: "22px", lg: "30px" }, display: "block" }} />

          <Box component="img" src={brandErbesi} sx={{ display: { xs: "none", lg: "block" }, width: "100px", height: "30px" }} />

          <Box component="img" src={brandCybex} sx={{ display: { xs: "none", lg: "block" }, width: "120px", height: "30px" }} />
        </Stack>

        <IconButton
          sx={{
            display: { xs: "none", lg: "inline-flex" },
            width: "32px",
            height: "32px",
            border: "1px solid #446B80",
            color: "#446B80",
          }}
        >
          <ArrowForward sx={{ fontSize: "16px" }} />
        </IconButton>
      </Stack>

      <Stack direction="row" justifyContent="center" gap="14px" sx={{ display: { xs: "flex", lg: "none" }, mt: "18px" }}>
        <IconButton sx={{ width: "32px", height: "32px", border: "1px solid #446B80", color: "#446B80" }}>
          <ArrowBack sx={{ fontSize: "16px" }} />
        </IconButton>

        <IconButton sx={{ width: "32px", height: "32px", border: "1px solid #446B80", color: "#446B80" }}>
          <ArrowForward sx={{ fontSize: "16px" }} />
        </IconButton>
      </Stack>
    </Box>
  )
}
