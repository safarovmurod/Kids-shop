import { useContext, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate, NavLink } from "react-router";
import { AppContext } from "../../context/AppContext";
import CheaperDialog from "./CheaperDialog";

export default function ProductInfo({ item }) {
  const { dispatch } = useContext(AppContext);
  const [color, setColor] = useState(0);
  const [openCheaper, setOpenCheaper] = useState(false);
  const navigate = useNavigate();

  const colors = item.colorOptions || [];

  const product = {
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
  };

  function handleAdd(event) {
    dispatch({ type: "add", payload: product, anchorEl: event.currentTarget });
  }

  function handleFastOrder() {
    dispatch({ type: "add", payload: product });
    dispatch({ type: "closeDialog" });
    navigate("/checkout");
  }

  return (
    <Box>
      {colors.length > 0 && (
        <Box sx={{ marginBottom: "20px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Typography
              sx={{ color: "#8FA6B3", fontSize: { xs: "17px", lg: "14px" } }}
            >
              Цвет товара:
            </Typography>

            <Typography
              sx={{ color: "#446B80", fontSize: { xs: "17px", lg: "14px" } }}
            >
              {colors[color]}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: "12px", marginTop: "12px" }}>
            {colors.map((el, index) => (
              <Box
                key={el}
                onClick={() => setColor(index)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "72px",
                  height: "72px",
                  padding: "6px",
                  borderRadius: "8px",
                  border:
                    color === index
                      ? "1px solid #7FC9F0"
                      : "1px solid #E5EEF3",
                  cursor: "pointer",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={el}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          gap: "14px",
          marginBottom: "24px",
        }}
      >
        <Typography
          sx={{
            color: "#446B80",
            fontSize: { xs: "34px", lg: "30px" },
            fontWeight: 600,
          }}
        >
          {item.price.toLocaleString("ru-RU")} ₽
        </Typography>

        {item.oldPrice && (
          <Typography
            sx={{
              color: "#A9B7C0",
              fontSize: { xs: "20px", lg: "18px" },
              textDecoration: "line-through",
            }}
          >
            {item.oldPrice.toLocaleString("ru-RU")} ₽
          </Typography>
        )}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <Button
          onClick={handleFastOrder}
          sx={{
            width: { xs: "auto", lg: "180px" },
            height: { xs: "62px", lg: "46px" },
            paddingLeft: { xs: "30px", lg: "0px" },
            paddingRight: { xs: "30px", lg: "0px" },
            borderRadius: "10px",
            backgroundColor: "#7FC9F0",
            color: "#FFFFFF",
            fontSize: { xs: "20px", lg: "15px" },
            textTransform: "none",
            "&:hover": { backgroundColor: "#68B7DE" },
          }}
        >
          Быстрый заказ
        </Button>

        <Typography
          onClick={handleAdd}
          sx={{
            color: "#7FC9F0",
            fontSize: { xs: "20px", lg: "15px" },
            cursor: "pointer",
          }}
        >
          В корзину
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "30px" }}>
        <Typography
          sx={{ color: "#8FA6B3", fontSize: { xs: "17px", lg: "14px" } }}
        >
          Ваш город:
        </Typography>

        <Typography
          sx={{ color: "#446B80", fontSize: { xs: "17px", lg: "14px" } }}
        >
          Москва
        </Typography>
      </Box>

      <Typography
        component={NavLink}
        to="/delivery"
        sx={{
          display: "block",
          marginTop: "10px",
          color: "#7FC9F0",
          fontSize: { xs: "17px", lg: "14px" },
          textDecoration: "none",
        }}
      >
        Подробнее о доставке
      </Typography>

      <Typography
        onClick={() => setOpenCheaper(true)}
        sx={{
          display: { xs: "none", lg: "block" },
          marginTop: "26px",
          color: "#446B80",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        Нашли дешевле?
      </Typography>

      <CheaperDialog
        open={openCheaper}
        onClose={() => setOpenCheaper(false)}
      />
    </Box>
  );
}
