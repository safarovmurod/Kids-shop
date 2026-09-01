import { Box, Typography, Button } from "@mui/material"

export default function CategoryCard({ item }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        width: "100%",
        height: { xs: "150px", lg: "175px" },
        px: { xs: "16px", lg: "20px" },
        borderRadius: "6px",
        backgroundColor: item.color || "#F8FAFC",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Typography
          sx={{
            color: "#446B80",
            fontSize: { xs: "13px", lg: "14px" },
            fontWeight: 700,
            lineHeight: { xs: "18px", lg: "19px" },
          }}
        >
          {item.name || item.title}
        </Typography>

        <Typography
          sx={{
            mt: { xs: "8px", lg: "12px" },
            color: "#8FA6B3",
            fontSize: { xs: "10px", lg: "11px" },
            lineHeight: { xs: "15px", lg: "16px" },
          }}
        >
          {item.description || item.text}
        </Typography>

        <Button
          sx={{
            width: "86px",
            height: "28px",
            mt: { xs: "12px", lg: "18px" },
            borderRadius: "4px",
            border: "1px solid #DCDCDC",
            backgroundColor: "#FFFFFF",
            color: "#446B80",
            fontSize: "10px",
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
          width: "46%",
          height: { xs: "115px", lg: "140px" },
        }}
      >
        <Box
          component="img"
          src={item.image}
          sx={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
        />
      </Box>
    </Box>
  )
}
