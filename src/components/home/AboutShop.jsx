import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import num1 from "../../assets/images/num1.png";
import num2 from "../../assets/images/num2.png";
import num3 from "../../assets/images/num3.png";
import num4 from "../../assets/images/num4.png";
import cybex from "../../assets/images/brand-cybex.png";
import erbesi from "../../assets/images/brand-erbesi.png";
const brends = [
  {
    id: 1,
    image: cybex,
  },
  {
    id: 2,
    image: erbesi,
  },
  {
    id: 3,
    image: cybex,
  },
  {
    id: 4,
    image: erbesi,
  },
  {
    id: 5,
    image: cybex,
  },
  {
    id: 6,
    image: erbesi,
  },
];

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
        Карапуз - это онлайн гипермаркет товаров для детей. С нами вырастают
        поколения!
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" },
          gap: { xs: "12px", lg: "20px" },
          mt: { xs: "20px", lg: "36px" },
        }}
      >
        <Box
          sx={{
            height: { xs: "140px", lg: "150px" },
            p: { xs: "14px", lg: "20px" },
            borderRadius: "6px",
            border: "1px solid #DFF2FB",
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            component="img"
            src={num1}
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
            Все товары для детей в одном месте
          </Typography>
        </Box>
        <Box
          sx={{
            height: { xs: "140px", lg: "150px" },
            p: { xs: "14px", lg: "20px" },
            borderRadius: "6px",
            border: "1px solid #DFF2FB",
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            component="img"
            src={num2}
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
            Цены ниже, чем у конкурентов
          </Typography>
        </Box>
        <Box
          sx={{
            height: { xs: "140px", lg: "150px" },
            p: { xs: "14px", lg: "20px" },
            borderRadius: "6px",
            border: "1px solid #DFF2FB",
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Box
            component="img"
            src={num3}
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
            Официальные дилеры лучших мировых производителей
          </Typography>
        </Box>
        <Box
          sx={{
            height: { xs: "140px", lg: "150px" },
            p: { xs: "14px", lg: "20px" },
            borderRadius: "6px",
            border: "1px solid #DFF2FB",
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src={num4}
            sx={{ width: "44px", height: "44px", display: "block" }}
          />

          <Typography
            sx={{
              mt: { xs: "14px", lg: "20px" },
              color: "#446B80",
              fontSize: { xs: "10px", lg: "11px" },
              lineHeight: { xs: "15px", lg: "17px" },
              textAlign: "center",
            }}
          >
            Собственное эко-производство
          </Typography>
        </Box>
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
          {brends.map((item) => (
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
  );
}
