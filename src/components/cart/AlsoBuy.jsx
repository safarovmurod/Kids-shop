import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ProductCard from "../detskaya-mebel/ProductCard";
import Arrows from "../home/Arrows";
import { fetchProductsByEndpoint } from "../detskaya-mebel/api";

export default function AlsoBuy() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  async function get() {
    const data = await fetchProductsByEndpoint("aksessuary");
    setProducts(data);
  }

  useEffect(() => {
    get();
  }, []);

  const start = (page - 1) * 2;
  const current = products.slice(start, start + 2);

  return (
    <Box sx={{ width: "100%", marginTop: { xs: "50px", lg: "80px" } }}>
      <Typography
        sx={{
          marginBottom: { xs: "24px", lg: "40px" },
          color: "#2B5674",
          fontSize: { xs: "24px", lg: "28px" },
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        С этим покупают
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(2, 1fr)" },
          gap: { xs: "12px", lg: "24px" },
        }}
      >
        {current.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>

      <Arrows
        onPrev={() => setPage(page > 1 ? page - 1 : 1)}
        onNext={() => setPage(start + 2 < products.length ? page + 1 : page)}
        disabledPrev={page === 1}
        disabledNext={start + 2 >= products.length}
      />
    </Box>
  );
}
