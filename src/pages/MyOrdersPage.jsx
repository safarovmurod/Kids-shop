import React from "react";
import { Box, Typography, Grid, Card, Divider } from "@mui/material";

const ordersData = [
  {
    id: "№5454647",
    status: "Получен",
    statusColor: "#4CAF50", // зеленый
    title:
      "Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING",
    count: "1 шт.",
    image: "https://via.placeholder.com/80",
    orderDate: "21.05.2020",
    paymentMethod: "Картой онлайн",
    price: "152 000 ₽",
    deliveryMethod: "Транспортной компанией",
    address: "Москва, ул. Московская 25-45",
    recipient: "Анна Москва, +7 919 919 99 99",
    deliveryDate: "с 25 мая",
    comment: "",
    deliveryCost: "Бесплатно",
  },
  {
    id: "№5454647",
    status: "Отменен",
    statusColor: "#E53935", // красный
    title:
      "Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING",
    count: "1 шт.",
    image: "https://via.placeholder.com/80",
    orderDate: "21.05.2020",
    paymentMethod: "Картой онлайн",
    price: "152 000 ₽",
    deliveryMethod: "Транспортной компанией",
    address: "Москва, ул. Московская 25-45",
    recipient: "Анна Москва, +7 919 919 99 99",
    deliveryDate: "с 25 мая",
    comment: "",
    deliveryCost: "Бесплатно",
  },
  {
    id: "№5454647",
    status: "В пути",
    statusColor: "#52A5E0", // голубой
    title:
      "Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING",
    count: "1 шт.",
    image: "https://via.placeholder.com/80",
    orderDate: "21.05.2020",
    paymentMethod: "Картой онлайн",
    price: "152 000 ₽",
    deliveryMethod: "Транспортной компанией",
    address: "Москва, ул. Московская 25-45",
    recipient: "Анна Москва, +7 919 919 99 99",
    deliveryDate: "с 25 мая",
    comment: "",
    deliveryCost: "Бесплатно",
  },
];

export default function MyOrdersPage() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: "40px",
        pb: "80px",
      }}
    >
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#2B5674",
          marginBottom: "32px",
        }}
      >
        Мои заказы
      </Typography>

      <Grid container spacing={3}>
        {ordersData.map((order, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              elevation={0}
              sx={{
                borderRadius: "16px",
                border: "1px solid #F0F4F7",
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.04)",
                padding: "24px",
                backgroundColor: "#FFFFFF",
              }}
            >
              {/* Шапка карточки: Заказ № ва Статус */}
              <Box sx={{ marginBottom: "16px" }}>
                <Typography
                  sx={{ fontSize: "12px", color: "#A9C4D2", mb: "4px" }}
                >
                  Заказ {order.id}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: order.statusColor,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#2B5674",
                    }}
                  >
                    {order.status}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ borderColor: "#F0F4F7", marginBottom: "20px" }} />

              {/* Товар */}
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                }}
              >
                <Box
                  component="img"
                  src={order.image}
                  alt={order.title}
                  sx={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: "#708090",
                      lineHeight: 1.4,
                      marginBottom: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    {order.title}
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#A9C4D2" }}>
                    {order.count}
                  </Typography>
                </Box>
              </Box>

              {/* Детали заказа */}
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                {/* Дата оформления */}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: "12px", color: "#8EABC0" }}>
                    Дата оформления
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#2B5674" }}>
                    {order.orderDate}
                  </Typography>
                </Box>

                {/* Способ оплаты */}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: "12px", color: "#8EABC0" }}>
                    Способ оплаты
                  </Typography>
                  <Typography
                    sx={{ fontSize: "12px", color: "#2B5674", fontWeight: 600 }}
                  >
                    {order.price}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#8EABC0",
                    mt: "-6px",
                  }}
                >
                  {order.paymentMethod}
                </Typography>

                {/* Способ получения */}
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#8EABC0",
                    fontWeight: 600,
                    mt: "6px",
                  }}
                >
                  Способ получения
                </Typography>
                <Typography
                  sx={{ fontSize: "12px", color: "#8EABC0", mt: "-6px" }}
                >
                  {order.deliveryMethod}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: "12px", color: "#8EABC0" }}>
                    Адрес доставки
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#2B5674",
                      textAlign: "right",
                    }}
                  >
                    {order.address}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: "12px", color: "#8EABC0" }}>
                    Получатель
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#2B5674",
                      textAlign: "right",
                    }}
                  >
                    {order.recipient}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: "12px", color: "#8EABC0" }}>
                    Дата доставки
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#2B5674" }}>
                    {order.deliveryDate}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: "12px", color: "#8EABC0" }}>
                    Стоимость доставки
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#52A5E0" }}>
                    {order.deliveryCost}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
