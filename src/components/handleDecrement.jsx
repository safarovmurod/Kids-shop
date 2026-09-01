import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Close as CloseIcon, Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";

export default function CartModal({ onClose, onGoToCart, item }) {
  const [count, setCount] = useState(1);

  // Fallback данные, если пропсы не переданы
  const product = item || {
    title:
      "Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING",
    price: "152 000 ₽",
    image: "https://via.placeholder.com/80", // Замените на путь к вашему изображению
  };

  const handleDecrement = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "420px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)",
        padding: "20px 24px 24px 24px",
        boxSizing: "border-box",
        fontFamily: "sans-serif",
      }}
    >
      {/* Шапка: Заголовок и кнопка закрытия */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#2B5674",
          }}
        >
          Товар добавлен в корзину
        </Typography>

        <IconButton
          onClick={onClose}
          sx={{
            padding: 0,
            color: "#2B5674",
            "&:hover": { backgroundColor: "transparent", opacity: 0.7 },
          }}
        >
          <CloseIcon sx={{ fontSize: "20px" }} />
        </IconButton>
      </Box>

      {/* Основной контент карточки */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        {/* Изображение товара */}
        <Box
          component="img"
          src={product.image}
          alt={product.title}
          sx={{
            width: "70px",
            height: "70px",
            objectFit: "contain",
            flexShrink: 0,
          }}
        />

        {/* Название и цена */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            sx={{
              fontSize: "11px",
              color: "#708090",
              lineHeight: 1.35,
              marginBottom: "8px",
              fontWeight: 400,
              textTransform: "uppercase",
            }}
          >
            {product.title}
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#52A5E0",
            }}
          >
            {product.price}
          </Typography>
        </Box>

        {/* Счётчик количества (- 1 +) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #B2CAD6",
            borderRadius: "12px",
            padding: "4px 8px",
            minWidth: "85px",
            boxSizing: "border-box",
          }}
        >
          <IconButton
            onClick={handleDecrement}
            size="small"
            sx={{
              padding: 0,
              color: "#52A5E0",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <RemoveIcon sx={{ fontSize: "16px" }} />
          </IconButton>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#2B5674",
              userSelect: "none",
            }}
          >
            {count}
          </Typography>

          <IconButton
            onClick={handleIncrement}
            size="small"
            sx={{
              padding: 0,
              color: "#52A5E0",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <AddIcon sx={{ fontSize: "16px" }} />
          </IconButton>
        </Box>
      </Box>

      {/* Кнопка "Перейти в корзину" */}
      <Button
        fullWidth
        onClick={onGoToCart}
        sx={{
          border: "1px solid #2B5674",
          borderRadius: "10px",
          padding: "10px 0",
          color: "#2B5674",
          fontSize: "14px",
          fontWeight: 500,
          textTransform: "none",
          backgroundColor: "#ffffff",
          "&:hover": {
            backgroundColor: "rgba(43, 86, 116, 0.04)",
            borderColor: "#2B5674",
          },
        }}
      >
        Перейти в корзину
      </Button>
    </Box>
  );
}
