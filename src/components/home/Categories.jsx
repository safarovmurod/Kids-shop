import { Box, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";
import { getList } from "../../api/api";

export default function Categories() {
  const [data, setData] = useState([]);

  // Category-ҳоро аз API мегирад ва akcii-ро аз ин рӯйхат хориҷ мекунад.
  async function get() {
    const answer = await getList("categories");
    setData(answer.list.filter((el) => el.slug !== "akcii"));
  }

  // Ҳангоми аввалин кушодани component category-ҳо бор мешаванд.
  useEffect(() => {
    get();
  }, []);

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
        Популярные категории
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" },
          gap: { xs: "18px", lg: "20px" },
          marginTop: { xs: "26px", lg: "34px" },
        }}
      >
        {data.slice(0, 3).map((item, index) => (
          <CategoryCard key={item.id} item={item} index={index} />
        ))}
      </Box>
    </Box>
  );
}
