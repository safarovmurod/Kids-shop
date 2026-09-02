import { useState } from "react";
import { Box, Typography, Fade } from "@mui/material";
import { NavLink, useParams } from "react-router";
import { categories, getCategory } from "../data/data";

export default function CatalogDropdown({ onClose }) {
  const { category } = useParams();

  // Агар корбар дар ягон категория бошад, ҳамон категория кушода меистад
  const current = getCategory(category);
  const [activeCategory, setActiveCategory] = useState(current || categories[0]);

  return (
    <Fade in={true} timeout={250}>
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
            <Box
              key={el.id}
              onMouseEnter={() => setActiveCategory(el)}
              onClick={() => setActiveCategory(el)}
              sx={{
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
            </Box>
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
    </Fade>
  );
}
