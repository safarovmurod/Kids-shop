import { Box, Typography } from "@mui/material";
import OrderCard from "../components/orders/OrderCard";
import { orders } from "../data/data";

// orders маълумоти demo аз data.js аст; ин саҳифа ҳоло заказҳоро аз API намегирад.
export default function MyOrdersPage() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: { xs: "16px", lg: "20px" },
        paddingRight: { xs: "16px", lg: "20px" },
        paddingTop: { xs: "20px", lg: "40px" },
        paddingBottom: { xs: "40px", lg: "80px" },
      }}
    >
      <Typography
        sx={{
          marginBottom: { xs: "26px", lg: "32px" },
          color: "#2B5674",
          fontSize: { xs: "34px", lg: "32px" },
          fontWeight: 700,
        }}
      >
        Мои заказы
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: "16px", lg: "24px" },
        }}
      >
        {orders.map((el) => (
          <OrderCard key={el.id} item={el} />
        ))}
      </Box>
    </Box>
  );
}
