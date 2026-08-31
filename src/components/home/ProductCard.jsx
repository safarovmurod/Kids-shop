import { Box, Stack, Typography, Button, IconButton } from "@mui/material"
import { FavoriteBorder } from "@mui/icons-material"

export default function ProductCard({ item }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        p: { xs: "10px", lg: "14px" },
        borderRadius: "8px",
        border: "1px solid #F1F1F1",
        backgroundColor: "#FFFFFF",
      }}
    >
      {item.isNew && (
        <Typography
          sx={{
            position: "absolute",
            top: { xs: "10px", lg: "14px" },
            left: { xs: "10px", lg: "14px" },
            px: "8px",
            py: "2px",
            borderRadius: "4px",
            backgroundColor: "#E5F4FC",
            color: "#7FC9F0",
            fontSize: "9px",
          }}
        >
          NEW
        </Typography>
      )}

      <IconButton
        sx={{
          position: "absolute",
          top: { xs: "4px", lg: "8px" },
          right: { xs: "4px", lg: "8px" },
          color: "#7FC9F0",
        }}
      >
        <FavoriteBorder sx={{ fontSize: "18px" }} />
      </IconButton>

      <Box
        component="img"
        src={item.image}
        sx={{
          maxWidth: "100%",
          height: { xs: "120px", lg: "160px" },
          mt: { xs: "22px", lg: "26px" },
          mx: "auto",
          display: "block",
        }}
      />

      <Typography
        sx={{
          mt: "12px",
          color: "#446B80",
          fontSize: { xs: "10px", lg: "12px" },
          lineHeight: "15px",
          textAlign: "center",
        }}
      >
        {item.title}
      </Typography>

      <Stack direction="row" alignItems="center" justifyContent="center" gap="6px" sx={{ mt: "8px" }}>
        <Typography sx={{ color: "#7FC9F0", fontSize: { xs: "13px", lg: "15px" } }}>
          {item.price} ₽
        </Typography>

        {item.oldPrice && (
          <Typography
            sx={{ color: "#A9B7C0", fontSize: { xs: "10px", lg: "11px" }, textDecoration: "line-through" }}
          >
            {item.oldPrice} ₽
          </Typography>
        )}
      </Stack>

      <Button
        sx={{
          width: "100%",
          height: { xs: "30px", lg: "32px" },
          mt: "10px",
          borderRadius: "16px",
          backgroundColor: "#7FC9F0",
          color: "#FFFFFF",
          fontSize: { xs: "11px", lg: "12px" },
          textTransform: "none",
          "&:hover": { backgroundColor: "#7FC9F0" },
        }}
      >
        В корзину
      </Button>

      <Typography
        sx={{
          mt: "8px",
          color: "#7FC9F0",
          fontSize: { xs: "10px", lg: "11px" },
          textAlign: "center",
        }}
      >
        Купить в один клик
      </Typography>
    </Box>
  )
}
