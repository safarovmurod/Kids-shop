import { Box, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";
import axios from "axios";

const api = "https://swagger-wheat.vercel.app/api/categories";
export default function Categories() {
  const [data, setData] = useState([]);

  async function get() {
    try {
      const { data } = await axios.get(api);
      setData(data.data || []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

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
          fontSize: { xs: "19px", lg: "34px" },
          fontWeight: 400,
          lineHeight: { xs: "26px", lg: "44px" },
          textAlign: "center",
        }}
      >
        Популярные категории
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" },
          gap: { xs: "14px", lg: "20px" },
          mt: { xs: "18px", lg: "34px" },
        }}
      >
        {data.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
}
