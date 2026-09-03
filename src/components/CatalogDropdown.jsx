import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { NavLink, useLocation } from "react-router";
import { categories, getCategory } from "../data/data";

export default function CatalogDropdown({ onClose }) {
  const { pathname } = useLocation();
  let category = "";
  if (pathname.startsWith("/catalog/")) category = pathname.split("/")[2];
  if (pathname.startsWith("/akcii")) category = "akcii";

  // Агар корбар дар ягон категория бошад, ҳамон категория кушода меистад
  const current = getCategory(category);
  const [activeCategory, setActiveCategory] = useState(
    current || categories[1],
  );

  return (
    <Box
      sx={{
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        width: "100%",
        maxWidth: "1200px",
        minHeight: "420px",
        borderRadius: "0 0 12px 12px",
        border: "1px solid #E5EEF3",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.15)",
        zIndex: 1100,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "320px",
          paddingTop: "16px",
          paddingBottom: "16px",
          borderBottomLeftRadius: "12px",
          backgroundColor: "#446B80",
        }}
      >
        {categories.map((el) => (
          <Button
            key={el.id}
            onClick={() => setActiveCategory(el)}
            aria-pressed={activeCategory.id === el.id}
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              borderRadius: "0px",
              paddingTop: "12px",
              paddingBottom: "12px",
              paddingLeft: "24px",
              paddingRight: "24px",
              color: activeCategory.id === el.id ? "#446B80" : "#FFFFFF",
              fontSize: "14px",
              fontWeight: activeCategory.id === el.id ? 600 : 400,
              backgroundColor:
                activeCategory.id === el.id ? "#FFFFFF" : "transparent",
              cursor: "pointer",
              transition: "background-color 0.25s ease, color 0.25s ease",
              "&:hover": {
                backgroundColor:
                  activeCategory.id === el.id
                    ? "#FFFFFF"
                    : "rgba(255, 255, 255, 0.12)",
              },
            }}
          >
            {el.name}
          </Button>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          flexGrow: 1,
          padding: "40px",
        }}
      >
        <Typography
          component={NavLink}
          to={`/catalog/${activeCategory.slug}`}
          onClick={onClose}
          sx={{
            marginBottom: "10px",
            color: "#2B5674",
            fontSize: "18px",
            fontWeight: 700,
            textDecoration: "none",
            transition: "color 0.2s ease",
            "&:hover": { color: "#7FC9F0" },
          }}
        >
          {activeCategory.name}
        </Typography>

        {activeCategory.subcategories.map((sub) => (
          <Typography
            key={sub.id}
            component={NavLink}
            to={`/catalog/${activeCategory.slug}/${sub.slug}`}
            onClick={onClose}
            sx={{
              color: "#446B80",
              fontSize: "15px",
              textDecoration: "none",
              transition: "color 0.2s ease, padding-left 0.2s ease",
              "&:hover": { color: "#7FC9F0", paddingLeft: "6px" },
            }}
          >
            {sub.name}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
