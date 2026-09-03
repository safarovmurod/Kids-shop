import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ProductCard from "../ProductCard";
import Arrows from "./Arrows";
import { getList } from "../../api/api";

export default function NewProducts({ title }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Барои ҳар page 4 product мегирад ва totalPages-ро барои ҳудуди тирчаҳо нигоҳ медорад.
  async function get() {
    const answer = await getList("products", { page, pageSize: 4 });
    setData(answer.list);
    setTotalPages(answer.totalPages);
  }

  // Тирчаҳо page-ро иваз мекунанд ва product-ҳои нав аз API гирифта мешаванд.
  useEffect(() => {
    get();
  }, [page]);

  return (
    <Box
      data-aos="fade-up"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: { xs: "16px", lg: "20px" },
        paddingRight: { xs: "16px", lg: "20px" },
        paddingTop: { xs: "50px", lg: "70px" },
      }}
    >
      <Typography
        sx={{
          color: "#446B80",
          fontSize: { xs: "30px", lg: "34px" },
          fontWeight: 400,
          lineHeight: { xs: "40px", lg: "44px" },
          textAlign: "center",
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" },
          gap: { xs: "12px", lg: "20px" },
          marginTop: { xs: "26px", lg: "34px" },
        }}
      >
        {data.map((el) => (
          <ProductCard key={el.id} item={el} />
        ))}
      </Box>

      <Arrows
        onPrev={() => setPage(page > 1 ? page - 1 : 1)}
        onNext={() => setPage(page < totalPages ? page + 1 : page)}
        disabledPrev={page === 1}
        disabledNext={page >= totalPages}
      />
    </Box>
  );
}
