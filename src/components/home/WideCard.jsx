import { Box, Stack, Typography, Button, IconButton } from "@mui/material"
import { FavoriteBorder } from "@mui/icons-material"

export default function WideCard({ items = [] }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "24px", lg: "60px" },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: "14px", lg: "24px" },
        }}
      >
        {items.slice(0, 2).map((item) => (
          <Box
            key={item.id}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: "10px", lg: "16px" },
              height: { xs: "180px", lg: "190px" },
              px: { xs: "14px", lg: "26px" },
              borderRadius: "8px",
              border: "1px solid #F1F1F1",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Box sx={{ width: "52%" }}>
              <Typography
                sx={{
                  color: "#446B80",
                  fontSize: { xs: "11px", lg: "12px" },
                  fontWeight: 500,
                  lineHeight: { xs: "17px", lg: "19px" },
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{ mt: { xs: "12px", lg: "18px" }, color: "#7FC9F0", fontSize: { xs: "14px", lg: "16px" } }}
              >
                {item.price} ₽
              </Typography>

              <Stack direction="row" alignItems="center" gap="12px" sx={{ mt: { xs: "12px", lg: "20px" } }}>
                <Button
                  sx={{
                    width: "80px",
                    height: "28px",
                    borderRadius: "4px",
                    backgroundColor: "#7FC9F0",
                    color: "#FFFFFF",
                    fontSize: "10px",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#7FC9F0" },
                  }}
                >
                  В корзину
                </Button>

                <Typography sx={{ color: "#446B80", fontSize: { xs: "10px", lg: "11px" } }}>
                  Купить в один клик
                </Typography>
              </Stack>
            </Box>

            <Box
              component="img"
              src={item.image}
              sx={{ width: "42%", height: { xs: "130px", lg: "150px" }, display: "block" }}
            />

            <IconButton sx={{ position: "absolute", top: "6px", right: "6px", color: "#7FC9F0" }}>
              <FavoriteBorder sx={{ fontSize: "18px" }} />
            </IconButton>
          </Box>
        ))}
      </Box>

      <Stack direction="row" justifyContent="center" gap="8px" sx={{ display: { xs: "flex", lg: "none" }, mt: "16px" }}>
        <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#7FC9F0" }} />
        <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#D9D9D9" }} />
      </Stack>
    </Box>
  )
}
