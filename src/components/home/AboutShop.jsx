import { Box, Typography, IconButton } from "@mui/material"
import { ArrowBack, ArrowForward } from "@mui/icons-material"

export default function AboutShop({ items = [], brands = [] }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "34px", lg: "70px" },
        pb: { xs: "34px", lg: "60px" },
      }}
    >
      <Typography
        sx={{
          color: "#446B80",
          fontSize: { xs: "15px", lg: "26px" },
          fontWeight: 400,
          lineHeight: { xs: "23px", lg: "38px" },
          textAlign: "center",
        }}
      >
        Карапуз - это онлайн гипермаркет товаров для детей. С нами вырастают поколения!
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" },
          gap: { xs: "12px", lg: "20px" },
          mt: { xs: "20px", lg: "36px" },
        }}
      >
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              height: { xs: "140px", lg: "150px" },
              p: { xs: "14px", lg: "20px" },
              borderRadius: "6px",
              border: "1px solid #DFF2FB",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Box
              component="img"
              src={item.image}
              sx={{ width: "44px", height: "44px", display: "block" }}
            />

            <Typography
              sx={{
                mt: { xs: "14px", lg: "20px" },
                color: "#446B80",
                fontSize: { xs: "10px", lg: "11px" },
                lineHeight: { xs: "15px", lg: "17px" },
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "10px", lg: "20px" },
          width: "100%",
          mt: { xs: "24px", lg: "40px" },
        }}
      >
        <IconButton
          sx={{
            flexShrink: 0,
            width: "32px",
            height: "32px",
            border: "1px solid #446B80",
            color: "#446B80",
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <ArrowBack sx={{ fontSize: "16px" }} />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexGrow: 1,
            overflow: "hidden",
          }}
        >
          {brands.map((item) => (
            <Box
              key={item.id}
              component="img"
              src={item.image}
              sx={{
                width: { xs: "72px", lg: "115px" },
                height: { xs: "22px", lg: "30px" },
                display: "block",
              }}
            />
          ))}
        </Box>

        <IconButton
          sx={{
            flexShrink: 0,
            width: "32px",
            height: "32px",
            border: "1px solid #446B80",
            color: "#446B80",
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <ArrowForward sx={{ fontSize: "16px" }} />
        </IconButton>
      </Box>
    </Box>
  )
}
