import { Box, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import Arrows from "./Arrows";
import { useEffect, useState } from "react";
import axios from "axios";

const api = "https://swagger-wheat.vercel.app/api/detskaya-mebel";

export default function NewProducts({ isAkcii }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function get() {
    try {
      const { data } = await axios.get(`${api}?page=${page}&pageSize=4`);
      setData(data.data || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, [page]);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "34px", lg: "70px" },
      }}
    >
      <Typography
        sx={{
          color: "#446B80",
          fontSize: { xs: "22px", lg: "34px" },
          fontWeight: 400,
          lineHeight: { xs: "28px", lg: "44px" },
          textAlign: "center",
        }}
      >
        {isAkcii}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" },
          gap: { xs: "12px", lg: "20px" },
          mt: { xs: "18px", lg: "34px" },
        }}
      >
        {data.map((el) => (
          <ProductCard key={el.id} item={el} />
        ))}
      </Box>

      <Arrows
        onPrev={() => setPage((p) => (p > 1 ? p - 1 : 1))}
        onNext={() => setPage((p) => (p < totalPages ? p + 1 : p))}
        disabledPrev={page === 1}
        disabledNext={page >= totalPages}
      />
    </Box>
  );
}
