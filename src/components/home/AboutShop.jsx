import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Arrows from "./Arrows";
import num1 from "../../assets/images/num1.png";
import num2 from "../../assets/images/num2.png";
import num3 from "../../assets/images/num3.png";
import num4 from "../../assets/images/num4.png";
import cybex from "../../assets/images/brand-cybex.png";
import erbesi from "../../assets/images/brand-erbesi.png";

const advantages = [
  { id: 1, image: num1, text: "Все товары для детей в одном месте" },
  { id: 2, image: num2, text: "Цены ниже, чем у конкурентов" },
  { id: 3, image: num3, text: "Официальные дилеры мировых производителей" },
  { id: 4, image: num4, text: "Собственное эко-производство" },
];

const brands = [
  { id: 1, image: cybex },
  { id: 2, image: erbesi },
  { id: 3, image: cybex },
  { id: 4, image: erbesi },
  { id: 5, image: cybex },
  { id: 6, image: erbesi },
];

export default function AboutShop() {
  const [page, setPage] = useState(1);

  // Тирчаҳо page-ро иваз мекунанд; slice ҳар дафъа 3 брендро аз array интихоб мекунад.
  const start = (page - 1) * 3;
  const current = brands.slice(start, start + 3);

  return (
    <Box
      data-aos="fade-up"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: { xs: "16px", lg: "20px" },
        paddingRight: { xs: "16px", lg: "20px" },
        paddingTop: { xs: "50px", lg: "70px" },
        paddingBottom: { xs: "40px", lg: "60px" },
      }}
    >
      <Typography
        sx={{
          color: "#446B80",
          fontSize: { xs: "30px", lg: "26px" },
          fontWeight: 400,
          lineHeight: { xs: "40px", lg: "38px" },
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
          gap: { xs: "20px", lg: "20px" },
          marginTop: { xs: "34px", lg: "36px" },
        }}
      >
        {advantages.map((el) => (
          <Box
            key={el.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: { xs: "auto", lg: "150px" },
              padding: { xs: "0px", lg: "20px" },
              borderRadius: "6px",
              border: { xs: "none", lg: "1px solid #DFF2FB" },
              backgroundColor: "#FFFFFF",
            }}
          >
            <Box
              component="img"
              src={el.image}
              alt={el.text}
              sx={{
                width: { xs: "64px", lg: "44px" },
                height: { xs: "64px", lg: "44px" },
                display: "block",
              }}
            />

            <Typography
              sx={{
                marginTop: { xs: "16px", lg: "20px" },
                color: "#446B80",
                fontSize: { xs: "16px", lg: "11px" },
                lineHeight: { xs: "24px", lg: "17px" },
                textAlign: "center",
              }}
            >
              {el.text}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: { xs: "10px", lg: "20px" },
          width: "100%",
          marginTop: { xs: "40px", lg: "50px" },
        }}
      >
        {current.map((el) => (
          <Box
            key={el.id}
            component="img"
            src={el.image}
            alt="Бренд"
            sx={{
              width: { xs: "90px", lg: "115px" },
              height: { xs: "26px", lg: "30px" },
              display: "block",
            }}
          />
        ))}
      </Box>

      <Arrows
        onPrev={() => setPage(page > 1 ? page - 1 : 1)}
        onNext={() => setPage(start + 3 < brands.length ? page + 1 : page)}
        disabledPrev={page === 1}
        disabledNext={start + 3 >= brands.length}
      />
    </Box>
  );
}
