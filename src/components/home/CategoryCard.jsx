import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const colors = ["#F8E5E2", "#FAF4EC", "#E9F4FB"];

export default function CategoryCard({ item, index }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: "12px", lg: "16px" },
        width: "100%",
        height: { xs: "230px", lg: "210px" },
        padding: { xs: "20px", lg: "24px" },
        borderRadius: "8px",
        backgroundColor: colors[index],
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0px 12px 28px rgba(0, 0, 0, 0.08)",
        },
        "&:hover .cat-image": { transform: "scale(1.07)" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "52%",
          height: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#3B637B",
              fontSize: { xs: "22px", lg: "18px" },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {item.name}
          </Typography>

          <Typography
            sx={{
              marginTop: { xs: "12px", lg: "10px" },
              color: "#7E96A6",
              fontSize: { xs: "16px", lg: "11px" },
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.description}
          </Typography>
        </Box>

        <Button
          onClick={() => navigate(`/catalog/${item.slug}`)}
          sx={{
            width: { xs: "130px", lg: "86px" },
            height: { xs: "44px", lg: "28px" },
            borderRadius: { xs: "10px", lg: "4px" },
            border: "1px solid #C4D3DC",
            backgroundColor: "#FFFFFF",
            color: "#3B637B",
            fontSize: { xs: "16px", lg: "11px" },
            textTransform: "none",
            "&:hover": { backgroundColor: "#FFFFFF" },
          }}
        >
          Смотреть
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "45%",
          height: "100%",
        }}
      >
        <Box
          component="img"
          className="cat-image"
          src={item.image}
          alt={item.name}
          sx={{
            transition: "transform 0.35s ease",
            maxWidth: "100%",
            maxHeight: { xs: "170px", lg: "140px" },
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
}
