import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ProductCard from "../ProductCard";
import Arrows from "../home/Arrows";
import { getList } from "../../api/api";

export default function AlsoBuy({ items, title }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  async function get() {
    const answer = await getList("products", { pageSize: 12 });
    setProducts(answer.list);
  }

  useEffect(() => {
    // Агар маҳсулоти шабеҳ дода шуда бошад, запрос лозим нест
    if (items && items.length > 0) {
      setProducts(items);
      return;
    }

    get();
  }, [items]);

  const start = (page - 1) * 4;
  const current = products.slice(start, start + 4);

  return (
    <Box sx={{ width: "100%", marginTop: { xs: "50px", lg: "80px" } }}>
      <Typography
        sx={{
          marginBottom: { xs: "24px", lg: "40px" },
          color: "#2B5674",
          fontSize: { xs: "26px", lg: "30px" },
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        {title || "С этим покупают"}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" },
          gap: { xs: "12px", lg: "24px" },
        }}
      >
        {current.map((el) => (
          <ProductCard key={el.id} item={el} />
        ))}
      </Box>

      <Arrows
        onPrev={() => setPage(page > 1 ? page - 1 : 1)}
        onNext={() => setPage(start + 4 < products.length ? page + 1 : page)}
        disabledPrev={page === 1}
        disabledNext={start + 4 >= products.length}
      />
    </Box>
  );
}
