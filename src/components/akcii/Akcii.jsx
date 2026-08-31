import { Box, Typography, Button } from "@mui/material"

export default function Akcii({ items = [] }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "20px", lg: "30px" },
        pb: { xs: "34px", lg: "60px" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Typography sx={{ color: "#A9B7C0", fontSize: { xs: "10px", lg: "11px" } }}>Главная</Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: { xs: "10px", lg: "11px" } }}>/</Typography>

        <Typography sx={{ color: "#446B80", fontSize: { xs: "10px", lg: "11px" } }}>Акции</Typography>
      </Box>

      <Typography
        sx={{
          mt: { xs: "10px", lg: "14px" },
          color: "#446B80",
          fontSize: { xs: "22px", lg: "34px" },
          fontWeight: 400,
          lineHeight: { xs: "30px", lg: "44px" },
        }}
      >
        Акции
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
          columnGap: { xs: "0px", lg: "16px" },
          rowGap: { xs: "26px", lg: "26px" },
          mt: { xs: "18px", lg: "26px" },
        }}
      >
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: "140px", lg: "200px" },
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <Box component="img" src={item.image} sx={{ width: "100%", height: "100%", display: "block" }} />
            </Box>

            <Typography
              sx={{
                mt: { xs: "12px", lg: "16px" },
                color: "#A9B7C0",
                fontSize: { xs: "11px", lg: "11px" },
                lineHeight: { xs: "15px", lg: "15px" },
              }}
            >
              {item.date}
            </Typography>

            <Typography
              sx={{
                mt: { xs: "6px", lg: "10px" },
                color: "#446B80",
                fontSize: { xs: "12px", lg: "13px" },
                lineHeight: { xs: "18px", lg: "19px" },
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: "8px", mt: "34px" }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "26px",
            height: "26px",
            borderRadius: "4px",
            border: "1px solid #D0DADF",
            color: "#446B80",
            fontSize: "11px",
          }}
        >
          1
        </Typography>

        <Typography sx={{ px: "8px", color: "#8FA6B3", fontSize: "11px" }}>2</Typography>

        <Typography sx={{ px: "8px", color: "#8FA6B3", fontSize: "11px" }}>3</Typography>

        <Typography sx={{ ml: "10px", color: "#446B80", fontSize: "11px" }}>Далее</Typography>
      </Box>

      <Button
        sx={{
          display: { xs: "flex", lg: "none" },
          width: "100%",
          height: "40px",
          mt: "24px",
          borderRadius: "4px",
          border: "1px solid #D0DADF",
          backgroundColor: "#FFFFFF",
          color: "#446B80",
          fontSize: "12px",
          textTransform: "none",
          "&:hover": { backgroundColor: "#FFFFFF" },
        }}
      >
        Показать еще
      </Button>
    </Box>
  )
}
