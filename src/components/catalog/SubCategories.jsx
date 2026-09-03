import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function SubCategories({ category, activeSlug }) {
  // Пахши category ё subcategory URL-ро иваз мекунад ва CatalogPage рӯйхати мувофиқро мегирад.
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", lg: "column" },
        flexWrap: { xs: "wrap", lg: "nowrap" },
        gap: { xs: "8px", lg: "12px" },
      }}
    >
      <Typography
        onClick={() => navigate(`/catalog/${category.slug}`)}
        sx={{
          paddingTop: { xs: "8px", lg: "0px" },
          paddingBottom: { xs: "8px", lg: "0px" },
          paddingLeft: { xs: "14px", lg: "0px" },
          paddingRight: { xs: "14px", lg: "0px" },
          borderRadius: { xs: "16px", lg: "0px" },
          border: { xs: "1px solid #E5EEF3", lg: "none" },
          color: !activeSlug ? "#7FC9F0" : "#446B80",
          fontSize: "13px",
          fontWeight: !activeSlug ? 600 : 400,
          cursor: "pointer",
        }}
      >
        Все товары
      </Typography>

      {category.subcategories.map((el) => (
        <Typography
          key={el.id}
          onClick={() => navigate(`/catalog/${category.slug}/${el.slug}`)}
          sx={{
            paddingTop: { xs: "8px", lg: "0px" },
            paddingBottom: { xs: "8px", lg: "0px" },
            paddingLeft: { xs: "14px", lg: "0px" },
            paddingRight: { xs: "14px", lg: "0px" },
            borderRadius: { xs: "16px", lg: "0px" },
            border: { xs: "1px solid #E5EEF3", lg: "none" },
            color: activeSlug === el.slug ? "#7FC9F0" : "#446B80",
            fontSize: "13px",
            fontWeight: activeSlug === el.slug ? 600 : 400,
            cursor: "pointer",
          }}
        >
          {el.name}
        </Typography>
      ))}
    </Box>
  );
}
