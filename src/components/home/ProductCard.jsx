import { Box, Typography, Button, IconButton } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

export default function ProductCard({ item }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        minHeight: { xs: "280px", lg: "330px" },
        px: { xs: "12px", lg: "16px" },
        pt: { xs: "14px", lg: "18px" },
        pb: { xs: "14px", lg: "18px" },
        borderRadius: "8px",
        border: "1px solid #F1F1F1",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: "12px",
          left: "12px",
          px: "6px",
          py: "2px",
          borderRadius: "3px",
          backgroundColor: "#DFF2FB",
          color: "#7FC9F0",
          fontSize: "9px",
          fontWeight: 600,
        }}
      >
        NEW
      </Typography>

      <IconButton
        sx={{
          position: "absolute",
          top: "6px",
          right: "6px",
          color: "#7FC9F0",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <FavoriteBorder sx={{ fontSize: "18px" }} />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: { xs: "120px", lg: "145px" },
          mt: "14px",
        }}
      >
        <Box
          component="img"
          src={item.image}
          sx={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
        />
      </Box>

      <Typography
        sx={{
          width: "100%",
          mt: { xs: "10px", lg: "14px" },
          color: "#446B80",
          fontSize: { xs: "10px", lg: "12px" },
          fontWeight: 500,
          lineHeight: { xs: "14px", lg: "16px" },
          textAlign: "center",
          minHeight: { xs: "28px", lg: "32px" },
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {item.name || item.title}
      </Typography>

      <Typography
        sx={{
          mt: { xs: "6px", lg: "8px" },
          color: "#7FC9F0",
          fontSize: { xs: "14px", lg: "16px" },
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        {item.price} ₽
      </Typography>

      <Button
        sx={{
          width: { xs: "90px", lg: "110px" },
          height: { xs: "26px", lg: "30px" },
          mt: { xs: "10px", lg: "12px" },
          borderRadius: "4px",
          backgroundColor: "#7FC9F0",
          color: "#FFFFFF",
          fontSize: { xs: "10px", lg: "11px" },
          textTransform: "none",
          "&:hover": { backgroundColor: "#7FC9F0" },
        }}
      >
        В корзину
      </Button>

      <Typography
        sx={{
          mt: { xs: "6px", lg: "8px" },
          color: "#7FC9F0",
          fontSize: { xs: "9px", lg: "10px" },
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        Купить в один клик
      </Typography>
    </Box>
  );
}
