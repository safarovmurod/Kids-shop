import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router";
import { catalogCategories } from "../data/data";

export default function CatalogDropdown({ onClose }) {
  const [activeCategory, setActiveCategory] = useState(catalogCategories[1]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "1200px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.15)",
        display: "flex",
        minHeight: "420px",
        border: "1px solid #E5EEF3",
        borderRadius: "0 0 12px 12px",
        zIndex: 1100,
      }}
    >
      {/* Левая панель категорий */}
      <Box
        sx={{
          width: "320px",
          backgroundColor: "#446B80",
          py: "16px",
          display: "flex",
          flexDirection: "column",
          borderBottomLeftRadius: "12px",
        }}
      >
        {catalogCategories.map((cat) => {
          const isSelected = activeCategory.id === cat.id;
          return (
            <Box
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              sx={{
                px: "24px",
                py: "12px",
                cursor: "pointer",
                backgroundColor: isSelected ? "#FFFFFF" : "transparent",
                color: isSelected ? "#446B80" : "#FFFFFF",
                fontWeight: isSelected ? 600 : 400,
                fontSize: "14px",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: isSelected
                    ? "#FFFFFF"
                    : "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {cat.name}
            </Box>
          );
        })}
      </Box>

      {/* Правая панель подкатегорий */}
      <Box
        sx={{
          flexGrow: 1,
          p: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography
          component={NavLink}
          to={activeCategory.path}
          onClick={onClose}
          sx={{
            color: "#2B5674",
            fontWeight: 700,
            fontSize: "18px",
            mb: "10px",
            textDecoration: "none",
            "&:hover": { color: "#7FC9F0" },
          }}
        >
          {activeCategory.name}
        </Typography>

        {activeCategory.subcategories.map((sub) => (
          <Typography
            key={sub}
            component={NavLink}
            to={activeCategory.path}
            onClick={onClose}
            sx={{
              color: "#446B80",
              fontSize: "15px",
              textDecoration: "none",
              "&:hover": { color: "#7FC9F0", paddingLeft: "4px" },
              transition: "all 0.2s ease",
            }}
          >
            {sub}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
