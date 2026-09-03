import { Box, Typography } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import { NavLink } from "react-router";
import { menuLinks } from "../data/data";

export default function HeaderNav({ onNavigate }) {
  return (
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1200px",
        height: "44px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "28px" }}>
        <Typography
          sx={{ color: "#446B80", fontSize: "9px", lineHeight: "12px" }}
        >
          Онлайн гипермаркет
          <br />
          товаров для детей
        </Typography>

        {menuLinks.map((el) => (
          <Box
            key={el.id}
            component={NavLink}
            to={el.path}
            onClick={onNavigate}
            sx={{
              position: "relative",
              paddingTop: "12px",
              paddingBottom: "12px",
              color: "#446B80",
              fontSize: "13px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "color 0.25s ease",
              // Хатчаи зери матн ҳангоми ховер ва саҳифаи фаъол
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "6px",
                width: "0%",
                height: "2px",
                borderRadius: "2px",
                backgroundColor: "#7FC9F0",
                transition: "width 0.25s ease",
              },
              "&:hover": { color: "#7FC9F0" },
              "&:hover::after": { width: "100%" },
              "&.active": { color: "#7FC9F0", fontWeight: 600 },
              "&.active::after": { width: "100%" },
            }}
          >
            {el.name}
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <LocationOnOutlined sx={{ fontSize: "16px", color: "#A9C4D2" }} />

        <Typography sx={{ color: "#446B80", fontSize: "13px" }}>
          Город:
        </Typography>

        <Typography
          sx={{ color: "#7FC9F0", fontSize: "13px", cursor: "pointer" }}
        >
          Москва
        </Typography>
      </Box>
    </Box>
  );
}
