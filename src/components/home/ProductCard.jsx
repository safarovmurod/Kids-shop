import { Box, Typography, Button, IconButton } from "@mui/material"
import { FavoriteBorder } from "@mui/icons-material"

export default function ProductCard({ item }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: { xs: "250px", lg: "290px" },
        px: { xs: "10px", lg: "14px" },
        pt: { xs: "10px", lg: "14px" },
        pb: { xs: "10px", lg: "14px" },
        borderRadius: "6px",
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
            px: "6px",
            py: "2px",
            borderRadius: "3px",
            backgroundColor: "#DFF2FB",
            color: "#7FC9F0",
            fontSize: "8px",
            lineHeight: "12px",
          }}
        >
          NEW
        </Typography>
      )}

      <IconButton
        sx={{
          position: "absolute",
          top: { xs: "2px", lg: "5px" },
          right: { xs: "2px", lg: "5px" },
          color: "#7FC9F0",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <FavoriteBorder sx={{ fontSize: "16px" }} />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: { xs: "105px", lg: "130px" },
          mt: { xs: "18px", lg: "20px" },
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
          fontSize: { xs: "9px", lg: "11px" },
          lineHeight: { xs: "13px", lg: "15px" },
          textAlign: "center",
        }}
      >
        {item.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          gap: "6px",
          width: "100%",
          mt: { xs: "8px", lg: "10px" },
        }}
      >
        <Typography sx={{ color: "#7FC9F0", fontSize: { xs: "12px", lg: "14px" } }}>
          {item.price} ₽
        </Typography>

        {item.oldPrice && (
          <Typography
            sx={{
              color: "#A9B7C0",
              fontSize: { xs: "9px", lg: "10px" },
              textDecoration: "line-through",
            }}
          >
            {item.oldPrice} ₽
          </Typography>
        )}
      </Box>

      <Button
        sx={{
          width: { xs: "100%", lg: "104px" },
          height: { xs: "28px", lg: "26px" },
          mt: "auto",
          borderRadius: "4px",
          backgroundColor: "#7FC9F0",
          color: "#FFFFFF",
          fontSize: { xs: "10px", lg: "10px" },
          textTransform: "none",
          "&:hover": { backgroundColor: "#7FC9F0" },
        }}
      >
        В корзину
      </Button>

      <Typography
        sx={{
          width: "100%",
          mt: { xs: "8px", lg: "10px" },
          color: "#7FC9F0",
          fontSize: { xs: "9px", lg: "10px" },
          textAlign: "center",
        }}
      >
        Купить в один клик
      </Typography>
    </Box>
  )
}
