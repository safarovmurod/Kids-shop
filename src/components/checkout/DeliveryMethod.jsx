import { Box, Typography, Button } from "@mui/material";
import { transportCompanies } from "../../data/data";

const deliveryCards = [
  {
    id: "tk",
    name: "Транспортной компанией",
    text: "СДЭК, Деловые линии, Мега Транс, ТРАДО",
    price: "Цена зависит от выбора ТК",
  },
  {
    id: "pochta",
    name: "Почтой",
    text: "В ближайшее отделение Почты России",
    price: "Бесплатно",
  },
  {
    id: "pickup",
    name: "Самовывоз",
    text: "В пункте выдачи",
    price: "Бесплатно",
  },
];

export default function DeliveryMethod({ state, dispatch }) {
  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "14px",
          color: "#2B5674",
          fontSize: { xs: "17px", lg: "16px" },
          fontWeight: 600,
        }}
      >
        Способ получения
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" },
          gap: "14px",
        }}
      >
        {deliveryCards.map((el) => (
          <Box
            key={el.id}
            onClick={() => dispatch({ type: "setDelivery", payload: el.id })}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "110px",
              padding: "16px",
              borderRadius: "8px",
              border:
                state.delivery === el.id
                  ? "1.5px solid #7FC9F0"
                  : "1px solid #EAEAEA",
              backgroundColor: "#FFFFFF",
              cursor: "pointer",
            }}
          >
            <Box>
              <Typography
                sx={{
                  marginBottom: "6px",
                  color: "#2B5674",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {el.name}
              </Typography>

              <Typography
                sx={{ color: "#8FA6B3", fontSize: "12px", lineHeight: "18px" }}
              >
                {el.text}
              </Typography>
            </Box>

            <Typography
              sx={{
                marginTop: "10px",
                color: "#7FC9F0",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              {el.price}
            </Typography>
          </Box>
        ))}
      </Box>

      {state.delivery === "tk" && (
        <Box sx={{ marginTop: "30px" }}>
          <Typography
            sx={{
              marginBottom: "14px",
              color: "#2B5674",
              fontSize: { xs: "17px", lg: "16px" },
              fontWeight: 600,
            }}
          >
            Выбор транспортной компании
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            {transportCompanies.map((el) => (
              <Button
                key={el}
                onClick={() => dispatch({ type: "setCompany", payload: el })}
                sx={{
                  height: "38px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  borderRadius: "19px",
                  border:
                    state.company === el
                      ? "1px solid #7FC9F0"
                      : "1px solid #EAEAEA",
                  backgroundColor: state.company === el ? "#F0F8FD" : "#FFFFFF",
                  color: state.company === el ? "#7FC9F0" : "#446B80",
                  fontSize: "13px",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#F0F8FD" },
                }}
              >
                {el}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Typography sx={{ color: "#8FA6B3", fontSize: "14px" }}>
              Стоимость доставки:
            </Typography>

            <Typography
              sx={{ color: "#2B5674", fontSize: "14px", fontWeight: 600 }}
            >
              120 ₽
            </Typography>
          </Box>

          <Typography
            sx={{
              marginBottom: "6px",
              color: "#7FC9F0",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            Выбрать пункт выдачи заказа
          </Typography>

          <Typography sx={{ color: "#7FC9F0", fontSize: "13px" }}>
            СДЭК, Ул. Набережная 11-12
          </Typography>
        </Box>
      )}
    </Box>
  );
}
