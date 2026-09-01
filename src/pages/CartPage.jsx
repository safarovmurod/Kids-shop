import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Grid,
} from "@mui/material";
import {
  FavoriteBorder as FavoriteBorderIcon,
  DeleteOutline as DeleteOutlineIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";

const initialCartItems = [
  {
    id: 1,
    title:
      "Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING",
    price: 152000,
    count: 1,
    image: "https://via.placeholder.com/100",
    inStock: true,
  },
  {
    id: 2,
    title:
      "Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING",
    price: 152000,
    count: 1,
    image: "https://via.placeholder.com/100",
    inStock: true,
  },
  {
    id: 3,
    title:
      "Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING",
    price: 152000,
    count: 1,
    image: "https://via.placeholder.com/100",
    inStock: true,
  },
];

const recommendedProducts = [
  {
    id: 101,
    title: "Постельное белье Forest Sky (3 предмета)",
    price: 2000,
    image: "https://via.placeholder.com/180",
  },
  {
    id: 102,
    title: "Кроватка Riko Basic, Польша",
    price: 52000,
    image: "https://via.placeholder.com/180",
  },
  {
    id: 103,
    title: "Коляска Riko Basic, Польша",
    price: 12000,
    image: "https://via.placeholder.com/180",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newCount = item.count + delta;
          return newCount > 0 ? { ...item, count: newCount } : item;
        }
        return item;
      }),
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCount = cartItems.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0,
  );

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Заголовок */}
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#2B5674",
          marginBottom: "32px",
        }}
      >
        В корзине {totalCount} товара
      </Typography>

      {/* Верхняя секция: Корзина + Итого блок */}
      <Grid container spacing={4} sx={{ marginBottom: "80px" }}>
        {/* Список товаров */}
        <Grid item xs={12} md={8}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {cartItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 0",
                  borderBottom: "1px solid #EAEAEA",
                  gap: "16px",
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{ width: "90px", height: "90px", objectFit: "contain" }}
                />

                <Box sx={{ flexGrow: 1, maxWidth: "320px" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#708090",
                      lineHeight: 1.4,
                      marginBottom: "8px",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#52A5E0",
                      fontWeight: 500,
                    }}
                  >
                    В наличии
                  </Typography>
                </Box>

                {/* Счётчик */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid #B2CAD6",
                    borderRadius: "12px",
                    padding: "4px 12px",
                    width: "90px",
                  }}
                >
                  <Button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    sx={{
                      minWidth: "auto",
                      padding: 0,
                      color: "#52A5E0",
                      fontSize: "18px",
                    }}
                  >
                    −
                  </Button>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#2B5674",
                      fontWeight: 500,
                    }}
                  >
                    {item.count}
                  </Typography>
                  <Button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    sx={{
                      minWidth: "auto",
                      padding: 0,
                      color: "#52A5E0",
                      fontSize: "18px",
                    }}
                  >
                    +
                  </Button>
                </Box>

                {/* Цена */}
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#52A5E0",
                    minWidth: "110px",
                    textAlign: "right",
                  }}
                >
                  {(item.price * item.count).toLocaleString("ru-RU")} ₽
                </Typography>

                {/* Иконки */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <IconButton sx={{ padding: 0, color: "#B2CAD6" }}>
                    <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => handleRemove(item.id)}
                    sx={{ padding: 0, color: "#B2CAD6" }}
                  >
                    <DeleteOutlineIcon sx={{ fontSize: "20px" }} />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Правый блок: Расчёт */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid #EAEAEA",
              borderRadius: "16px",
              padding: "24px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                color: "#708090",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              🚚 154 ₽ Доставка
            </Typography>

            {/* Промокод */}
            <Box sx={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
              <TextField
                placeholder="Промокод"
                size="small"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                sx={{
                  flexGrow: 1,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    fontSize: "13px",
                  },
                }}
              />
              <Button
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: "#52A5E0",
                  color: "#FFFFFF",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: "13px",
                  padding: "0 16px",
                  "&:hover": { backgroundColor: "#4193CB" },
                }}
              >
                Применить
              </Button>
            </Box>

            {/* Статьи расчёта */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <Typography sx={{ fontSize: "14px", color: "#708090" }}>
                Количество ({totalCount})
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "#708090", fontWeight: 500 }}
              >
                {totalPrice.toLocaleString("ru-RU")} ₽
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <Typography sx={{ fontSize: "14px", color: "#708090" }}>
                Скидка
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "#708090", fontWeight: 500 }}
              >
                0 ₽
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <Typography
                sx={{ fontSize: "18px", fontWeight: 700, color: "#2B5674" }}
              >
                Итого
              </Typography>
              <Typography
                sx={{ fontSize: "20px", fontWeight: 700, color: "#2B5674" }}
              >
                {totalPrice.toLocaleString("ru-RU")} ₽
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: "#52A5E0",
                color: "#FFFFFF",
                borderRadius: "10px",
                padding: "12px 0",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#4193CB" },
              }}
            >
              Перейти к оформлению
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Нижняя секция: "С этим покупают" */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#2B5674",
            marginBottom: "40px",
          }}
        >
          С этим покупают
        </Typography>

        <Grid container spacing={3} sx={{ marginBottom: "32px" }}>
          {recommendedProducts.map((prod) => (
            <Grid item xs={12} sm={4} key={prod.id}>
              <Box
                sx={{
                  border: "1px solid #F0F0F0",
                  borderRadius: "16px",
                  padding: "20px",
                  position: "relative",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    color: "#52A5E0",
                  }}
                >
                  <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
                </IconButton>

                <Box
                  component="img"
                  src={prod.image}
                  alt={prod.title}
                  sx={{
                    width: "160px",
                    height: "160px",
                    objectFit: "contain",
                    marginBottom: "16px",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#2B5674",
                    textAlign: "center",
                    marginBottom: "12px",
                    minHeight: "38px",
                  }}
                >
                  {prod.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#52A5E0",
                    marginBottom: "16px",
                  }}
                >
                  {prod.price.toLocaleString("ru-RU")} ₽
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  disableElevation
                  sx={{
                    backgroundColor: "#52A5E0",
                    color: "#FFFFFF",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: "13px",
                    marginBottom: "8px",
                    padding: "8px 0",
                    "&:hover": { backgroundColor: "#4193CB" },
                  }}
                >
                  В корзину
                </Button>

                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#52A5E0",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Купить в один клик
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Навигация слайдера */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <IconButton
            sx={{
              border: "1.5px solid #2B5674",
              color: "#2B5674",
              width: "40px",
              height: "40px",
            }}
          >
            <ArrowBackIcon sx={{ fontSize: "20px" }} />
          </IconButton>
          <IconButton
            sx={{
              border: "1.5px solid #2B5674",
              color: "#2B5674",
              width: "40px",
              height: "40px",
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: "20px" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
