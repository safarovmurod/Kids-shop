import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import Arrows from "../home/Arrows";
import { fetchProductsByEndpoint } from "./api";

export default function SimilarProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  async function get() {
    const data = await fetchProductsByEndpoint("krovatki");
    setProducts(data);
  }

  useEffect(() => {
    get();
  }, []);

  const start = (page - 1) * 3;
  const current = products.slice(start, start + 3);

  return (
    <Box sx={{ width: "100%", marginTop: { xs: "50px", lg: "80px" } }}>
      <Typography
        sx={{
          marginBottom: { xs: "20px", lg: "30px" },
          color: "#446B80",
          fontSize: { xs: "22px", lg: "24px" },
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        Похожие товары
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" },
          gap: { xs: "12px", lg: "24px" },
        }}
      >
        {current.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>

      <Arrows
        onPrev={() => setPage(page > 1 ? page - 1 : 1)}
        onNext={() => setPage(start + 3 < products.length ? page + 1 : page)}
        disabledPrev={page === 1}
        disabledNext={start + 3 >= products.length}
      />
    </Box>
  );
}
