import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { NavLink, useParams } from "react-router";
import { fetchProductById } from "../components/detskaya-mebel/api";
import ProductInfo from "../components/product/ProductInfo";
import ProductCharacteristics from "../components/product/ProductCharacteristics";
import SimilarProducts from "../components/detskaya-mebel/SimilarProducts";

export default function ProductPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  async function get() {
    setLoading(true);
    const data = await fetchProductById(id);
    setItem(data);
    setLoading(false);
  }

  useEffect(() => {
    get();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "400px",
        }}
      >
        <CircularProgress sx={{ color: "#7FC9F0" }} />
      </Box>
    );
  }

  if (!item) {
    return (
      <Typography
        sx={{
          paddingTop: "60px",
          paddingBottom: "60px",
          color: "#446B80",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        Товар не найден
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1240px",
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
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        <Typography
          component={NavLink}
          to="/"
          sx={{ color: "#A9B7C0", fontSize: "11px", textDecoration: "none" }}
        >
          Главная
        </Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: "11px" }}>/</Typography>

        <Typography
          component={NavLink}
          to="/detskaya-mebel"
          sx={{ color: "#A9B7C0", fontSize: "11px", textDecoration: "none" }}
        >
          Детская мебель
        </Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: "11px" }}>/</Typography>

        <Typography sx={{ color: "#446B80", fontSize: "11px" }}>
          {item.name}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: "24px", lg: "60px" },
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: { xs: "320px", lg: "480px" },
            borderRadius: "12px",
            border: "1px solid #F0F4F7",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Box
            component="img"
            src={item.image}
            alt={item.name}
            sx={{
              maxWidth: "80%",
              maxHeight: "80%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>

        <ProductInfo item={item} />
      </Box>

      <ProductCharacteristics item={item} />

      <SimilarProducts />
    </Box>
  );
}
