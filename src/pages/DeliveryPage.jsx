import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { NavLink, useSearchParams } from "react-router";
import { paymentSections, deliverySections } from "../data/delivery";

export default function DeliveryPage() {
  const [searchParams] = useSearchParams();
  const [tab, setTab] = useState(searchParams.get("tab") || "payment");

  const sections = tab === "payment" ? paymentSections : deliverySections;

  const half = sections.filter((el) => el.half);
  const full = sections.filter((el) => !el.half);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: { xs: "16px", lg: "20px" },
        paddingRight: { xs: "16px", lg: "20px" },
        paddingTop: "20px",
        paddingBottom: { xs: "40px", lg: "80px" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Typography
          component={NavLink}
          to="/cart"
          sx={{ color: "#A9B7C0", fontSize: "12px", textDecoration: "none" }}
        >
          Корзина
        </Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: "12px" }}>›</Typography>

        <Typography sx={{ color: "#446B80", fontSize: "12px" }}>
          Оплата и доставка
        </Typography>
      </Box>

      <Typography
        sx={{
          marginBottom: "26px",
          color: "#446B80",
          fontSize: { xs: "34px", lg: "34px" },
          fontWeight: 600,
        }}
      >
        Оплата и доставка
      </Typography>

      <Box sx={{ display: "flex", gap: "16px", marginBottom: "40px" }}>
        <Button
          onClick={() => setTab("payment")}
          sx={{
            height: { xs: "58px", lg: "40px" },
            paddingLeft: "28px",
            paddingRight: "28px",
            borderRadius: "10px",
            border:
              tab === "payment" ? "1px solid #7FC9F0" : "1px solid #E5EEF3",
            color: "#446B80",
            fontSize: { xs: "20px", lg: "14px" },
            textTransform: "none",
          }}
        >
          Оплата
        </Button>

        <Button
          onClick={() => setTab("delivery")}
          sx={{
            height: { xs: "58px", lg: "40px" },
            paddingLeft: "28px",
            paddingRight: "28px",
            borderRadius: "10px",
            border:
              tab === "delivery" ? "1px solid #7FC9F0" : "1px solid #E5EEF3",
            color: "#446B80",
            fontSize: { xs: "20px", lg: "14px" },
            textTransform: "none",
          }}
        >
          Доставка
        </Button>
      </Box>

      {half.length > 0 && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: "34px", lg: "60px" },
            paddingBottom: "34px",
            borderBottom: "1px solid #F0F4F7",
          }}
        >
          {half.map((el) => (
            <Section key={el.id} item={el} />
          ))}
        </Box>
      )}

      {full.map((el) => (
        <Box
          key={el.id}
          sx={{
            paddingTop: "34px",
            paddingBottom: "34px",
            borderBottom: "1px solid #F0F4F7",
          }}
        >
          <Section item={el} />
        </Box>
      ))}
    </Box>
  );
}

function Section({ item }) {
  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "20px",
          color: "#446B80",
          fontSize: { xs: "24px", lg: "18px" },
          fontWeight: 700,
          lineHeight: 1.4,
        }}
      >
        {item.title}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {item.items.map((text) => (
          <Typography
            key={text}
            sx={{
              color: "#8FA6B3",
              fontSize: { xs: "17px", lg: "14px" },
              lineHeight: 1.7,
              whiteSpace: "pre-line",
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
