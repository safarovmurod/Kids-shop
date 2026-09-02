import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router";
import ProductCard from "../ProductCard";

export default function AkciiInfo({ item }) {
  // Дар як акция маҳсулот дар productDetails меояд
  const products = item.productDetails || [];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1240px",
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
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Typography
          component={NavLink}
          to="/"
          sx={{ color: "#A9B7C0", fontSize: "12px", textDecoration: "none" }}
        >
          Главная
        </Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: "12px" }}>›</Typography>

        <Typography
          component={NavLink}
          to="/akcii"
          sx={{ color: "#A9B7C0", fontSize: "12px", textDecoration: "none" }}
        >
          Акции
        </Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: "12px" }}>›</Typography>

        <Typography sx={{ color: "#446B80", fontSize: "12px" }}>
          {item.title}
        </Typography>
      </Box>

      <Box
        component="img"
        src={item.image}
        alt={item.title}
        sx={{
          width: "100%",
          maxHeight: { xs: "220px", lg: "380px" },
          borderRadius: "8px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <Typography
        sx={{
          marginTop: { xs: "20px", lg: "28px" },
          color: "#446B80",
          fontSize: { xs: "26px", lg: "30px" },
          fontWeight: 600,
          lineHeight: 1.35,
        }}
      >
        {item.title}
      </Typography>

      <Typography
        sx={{
          marginTop: "10px",
          color: "#A9B7C0",
          fontSize: { xs: "16px", lg: "12px" },
        }}
      >
        {item.date}
      </Typography>

      <Typography
        sx={{
          marginTop: { xs: "18px", lg: "24px" },
          color: "#8FA6B3",
          fontSize: { xs: "17px", lg: "14px" },
          lineHeight: 1.7,
        }}
      >
        {item.description}
      </Typography>

      {products.length > 0 && (
        <Box sx={{ marginTop: { xs: "40px", lg: "60px" } }}>
          <Typography
            sx={{
              marginBottom: "24px",
              color: "#446B80",
              fontSize: { xs: "24px", lg: "26px" },
              fontWeight: 600,
            }}
          >
            Товары по акции
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" },
              gap: { xs: "12px", lg: "24px" },
            }}
          >
            {products.map((el) => (
              <ProductCard key={el.id} item={el} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
