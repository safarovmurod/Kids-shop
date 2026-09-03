import { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { NavLink } from "react-router";
import AkciiCard from "./AkciiCard";
import { getList } from "../../api/api";

export default function Akcii() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  async function get() {
    setLoading(true);
    const answer = await getList("promotions", { pageSize: 20 });
    setItems(answer.list);
    setLoading(false);
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: { xs: "16px", lg: "20px" },
        paddingRight: { xs: "16px", lg: "20px" },
        paddingTop: { xs: "20px", lg: "30px" },
        paddingBottom: { xs: "40px", lg: "60px" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          gap: "8px",
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

        <Typography sx={{ color: "#446B80", fontSize: "11px" }}>
          Акции
        </Typography>
      </Box>

      <Typography
        sx={{
          marginTop: { xs: "0px", lg: "14px" },
          color: "#446B80",
          fontSize: { xs: "34px", lg: "34px" },
          fontWeight: 400,
          lineHeight: { xs: "44px", lg: "44px" },
        }}
      >
        Акции
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
          columnGap: "20px",
          rowGap: { xs: "34px", lg: "32px" },
          marginTop: { xs: "26px", lg: "26px" },
        }}
      >
        {items.slice(0, visibleCount).map((el) => (
          <AkciiCard key={el.id} item={el} />
        ))}
      </Box>

      {loading && (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        >
          <CircularProgress sx={{ color: "#7FC9F0" }} />
        </Box>
      )}

      {visibleCount < items.length && (
        <Button
          onClick={() => setVisibleCount(visibleCount + 6)}
          sx={{
            display: "flex",
            width: { xs: "100%", lg: "220px" },
            height: "46px",
            marginTop: "40px",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "23px",
            border: "1px solid #7FC9F0",
            color: "#7FC9F0",
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "none",
            "&:hover": { backgroundColor: "#7FC9F0", color: "#FFFFFF" },
          }}
        >
          Показать еще
        </Button>
      )}
    </Box>
  );
}
