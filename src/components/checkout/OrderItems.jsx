import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { AppContext } from "../../context/AppContext";

export default function OrderItems() {
  const { state } = useContext(AppContext);

  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "16px",
          color: "#2B5674",
          fontSize: { xs: "17px", lg: "16px" },
          fontWeight: 600,
        }}
      >
        Состав заказа
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {state.cart.map((el) => (
          <Box
            key={el.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid #EAEAEA",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Box
              component="img"
              src={el.image}
              alt={el.name}
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
                  color: "#446B80",
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "19px",
                }}
              >
                {el.name}
              </Typography>

              <Typography sx={{ color: "#8FA6B3", fontSize: "12px" }}>
                {el.count} шт
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
