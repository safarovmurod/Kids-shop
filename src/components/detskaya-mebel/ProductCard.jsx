import { Box, Typography, Button, Card, CardMedia } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ProductCard({ item, index, navigate }) {
  const productId = item.id || index + 1;
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "12px",
        border: "1px solid #F0F4F7",
        p: "16px",
        position: "relative",
      }}
    >
      <FavoriteBorderIcon
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "#A9C4D2",
          cursor: "pointer",
        }}
      />
      <Box>
        <CardMedia
          component="img"
          height="160"
          image={item.image || "https://via.placeholder.com/200"}
          sx={{ borderRadius: "8px", objectFit: "cover", mb: "12px" }}
        />
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 500,
            color: "#446B80",
            mb: "8px",
            height: "40px",
            overflow: "hidden",
          }}
        >
          {item.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            gap: "8px",
            mb: "12px",
          }}
        >
          <Typography
            sx={{ fontSize: "15px", fontWeight: 700, color: "#7FC9F0" }}
          >
            {item.price} ₽
          </Typography>
          {item.oldPrice && (
            <Typography
              sx={{
                fontSize: "12px",
                color: "#A9C4D2",
                textDecoration: "line-through",
              }}
            >
              {item.oldPrice} ₽
            </Typography>
          )}
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7FC9F0",
            color: "#FFFFFF",
            fontSize: "12px",
            textTransform: "none",
            borderRadius: "6px",
            boxShadow: "none",
            "&:hover": { backgroundColor: "#52B4E8" },
          }}
        >
          В корзину
        </Button>
        <Button
          onClick={() => navigate(`/product/${productId}`)}
          sx={{
            color: "#7FC9F0",
            fontSize: "11px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: "underline",
            },
          }}
        >
          Купить в один клик
        </Button>
      </Box>
    </Card>
  );
}
