import { Box, Typography, Button, IconButton } from "@mui/material"
import { FavoriteBorder } from "@mui/icons-material"

export default function WideCard({ items = [] }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "26px", lg: "60px" },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: "14px", lg: "24px" },
        }}
      >
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: "10px", lg: "16px" },
              height: { xs: "175px", lg: "185px" },
              px: { xs: "16px", lg: "26px" },
              borderRadius: "6px",
              border: "1px solid #F1F1F1",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Box sx={{ width: "52%" }}>
              <Typography
                sx={{
                  color: "#446B80",
                  fontSize: { xs: "10px", lg: "11px" },
                  fontWeight: 500,
                  lineHeight: { xs: "16px", lg: "18px" },
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  mt: { xs: "12px", lg: "16px" },
                  color: "#7FC9F0",
                  fontSize: { xs: "14px", lg: "15px" },
                }}
              >
                {item.price} ₽
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  mt: { xs: "12px", lg: "18px" },
                }}
              >
                <Button
                  sx={{
                    width: "80px",
                    height: "26px",
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

                <Typography sx={{ color: "#446B80", fontSize: { xs: "9px", lg: "10px" } }}>
                  Купить в один клик
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "42%",
                height: { xs: "130px", lg: "145px" },
              }}
            >
              <Box
                component="img"
                src={item.image}
                sx={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
              />
            </Box>

            <IconButton
              sx={{
                position: "absolute",
                top: "4px",
                right: "4px",
                color: "#7FC9F0",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <FavoriteBorder sx={{ fontSize: "16px" }} />
            </IconButton>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          width: "100%",
          mt: "16px",
        }}
      >
        <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#7FC9F0" }} />

        <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#D9D9D9" }} />
      </Box>
    </Box>
  )
}
