import { Box, Typography, Divider } from "@mui/material";

function Row({ name, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "16px",
      }}
    >
      <Typography sx={{ color: "#8EABC0", fontSize: "13px" }}>
        {name}
      </Typography>

      <Typography
        sx={{ color: "#2B5674", fontSize: "13px", textAlign: "right" }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default function OrderCard({ item }) {
  return (
    <Box
      sx={{
        padding: { xs: "20px", lg: "24px" },
        borderRadius: "16px",
        border: "1px solid #F0F4F7",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography
        sx={{ marginBottom: "6px", color: "#A9C4D2", fontSize: "13px" }}
      >
        Заказ {item.number}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Box
          sx={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: item.statusColor,
          }}
        />

        <Typography
          sx={{ color: "#2B5674", fontSize: "14px", fontWeight: 600 }}
        >
          {item.status}
        </Typography>
      </Box>

      <Divider
        sx={{
          marginTop: "16px",
          marginBottom: "20px",
          borderColor: "#F0F4F7",
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.name}
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
              marginBottom: "6px",
              color: "#708090",
              fontSize: "12px",
              lineHeight: 1.5,
            }}
          >
            {item.name}
          </Typography>

          <Typography sx={{ color: "#A9C4D2", fontSize: "12px" }}>
            {item.count}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Row name="Дата оформления" value={item.orderDate} />
        <Row name="Способ оплаты" value={item.paymentMethod} />
        <Row name="Сумма заказа" value={item.price} />
        <Row name="Способ получения" value={item.deliveryMethod} />
        <Row name="Адрес доставки" value={item.address} />
        <Row name="Получатель" value={item.recipient} />
        <Row name="Дата доставки" value={item.deliveryDate} />
        <Row name="Стоимость доставки" value={item.deliveryCost} />
      </Box>
    </Box>
  );
}
