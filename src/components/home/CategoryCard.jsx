import { Box, Typography, Button } from "@mui/material";

export default function CategoryCard({ item, index }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: "12px", lg: "16px" },
        width: "100%",
        height: { xs: "170px", lg: "210px" },
        p: { xs: "16px", lg: "24px" },
        borderRadius: "8px",
        backgroundColor:
          item.color ||
          (index === 0
            ? "#F8E5E2"
            : index === 1
            ? "#FAF4EC"
            : "#E9F4FB"),
      }}
    >
      <Box
        sx={{
          width: "52%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#3B637B",
              fontSize: { xs: "14px", lg: "18px" },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {item.name || item.title}
          </Typography>

          <Typography
            sx={{
              mt: { xs: "6px", lg: "10px" },
              color: "#7E96A6",
              fontSize: { xs: "10px", lg: "11px" },
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.description || item.text}
          </Typography>
        </Box>

        <Button
          sx={{
            width: "86px",
            height: "28px",
            borderRadius: "4px",
            border: "1px solid #C4D3DC",
            backgroundColor: "#FFFFFF",
            color: "#3B637B",
            fontSize: "11px",
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
          src={item.image}
          sx={{ maxWidth: "100%", maxHeight: { xs: "110px", lg: "140px" }, display: "block" }}
        />
      </Box>
    </Box>
  );
}
