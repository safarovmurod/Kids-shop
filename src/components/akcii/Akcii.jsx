import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router";
import axios from "axios";

const api = "https://swagger-wheat.vercel.app/api/akcii";

export default function Akcii() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function getAkcii() {
    try {
      setLoading(true);
      const { data } = await axios.get(api);
      const list = Array.isArray(data) ? data : data.data || [];
      setItems(list);
    } catch (error) {
      console.error("Ошибка при получении акций:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAkcii();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "20px", lg: "30px" },
        pb: { xs: "34px", lg: "60px" },
      }}
    >
      {/* Breadcrumbs */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Typography
          component={NavLink}
          to="/"
          sx={{
            color: "#A9B7C0",
            fontSize: { xs: "10px", lg: "11px" },
            textDecoration: "none",
            "&:hover": { color: "#7FC9F0" },
          }}
        >
          Главная
        </Typography>

        <Typography
          sx={{ color: "#A9B7C0", fontSize: { xs: "10px", lg: "11px" } }}
        >
          /
        </Typography>

        <Typography
          sx={{ color: "#446B80", fontSize: { xs: "10px", lg: "11px" } }}
        >
          Акции
        </Typography>
      </Box>

      {/* Заголовок */}
      <Typography
        sx={{
          mt: { xs: "10px", lg: "14px" },
          color: "#446B80",
          fontSize: { xs: "22px", lg: "34px" },
          fontWeight: 400,
          lineHeight: { xs: "30px", lg: "44px" },
        }}
      >
        Акции
      </Typography>

      {/* Сетка акций (2 колонки) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
          columnGap: { xs: "0px", lg: "20px" },
          rowGap: { xs: "26px", lg: "32px" },
          mt: { xs: "18px", lg: "26px" },
        }}
      >
        {items.map((item, index) => {
          const id = item.id || item._id || index + 1;
          const title =
            item.name ||
            item.title ||
            "Вкусные скидки до -25% на все детское питание";
          const image =
            item.image ||
            item.img ||
            "https://swagger-wheat.vercel.app/assets/products/tovar-nedeli-nuovita-day-offer-1.jpg";
          const date = item.date || item.createdAt || "25.05.2020";

          return (
            <Box
              key={id}
              onClick={() => navigate(`/akcii/${id}`)}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                cursor: "pointer",
                backgroundColor: "#FFFFFF",
                "&:hover img": { transform: "scale(1.02)" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "160px", lg: "240px" },
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  mt: { xs: "12px", lg: "16px" },
                  color: "#A9B7C0",
                  fontSize: "11px",
                  lineHeight: "15px",
                }}
              >
                {date}
              </Typography>

              <Typography
                sx={{
                  mt: { xs: "6px", lg: "10px" },
                  color: "#446B80",
                  fontSize: { xs: "13px", lg: "15px" },
                  fontWeight: 500,
                  lineHeight: { xs: "18px", lg: "22px" },
                  "&:hover": { color: "#7FC9F0" },
                }}
              >
                {title}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* Кнопка Показать еще */}
      <Button
        disabled={loading}
        sx={{
          display: "flex",
          mx: "auto",
          width: { xs: "100%", lg: "220px" },
          height: "40px",
          mt: "40px",
          borderRadius: "20px",
          border: "1px solid #7FC9F0",
          backgroundColor: "#FFFFFF",
          color: "#7FC9F0",
          fontSize: "13px",
          textTransform: "none",
          fontWeight: 500,
          "&:hover": { backgroundColor: "#7FC9F0", color: "#FFFFFF" },
        }}
      >
        Показать еще
      </Button>
    </Box>
  );
}
