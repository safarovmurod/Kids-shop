import { Box, Typography, Button } from "@mui/material"

export default function Blog({ items = [] }) {
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

        <Typography sx={{ color: "#446B80", fontSize: { xs: "10px", lg: "11px" } }}>Блог</Typography>
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
        Блог
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(4, 1fr)" },
          gap: { xs: "16px", lg: "20px" },
          mt: { xs: "16px", lg: "26px" },
        }}
      >
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              borderRadius: "6px",
              border: "1px solid #F1F1F1",
              backgroundColor: "#FFFFFF",
              overflow: "hidden",
            }}
          >
            <Box sx={{ width: "100%", height: { xs: "180px", lg: "165px" }, overflow: "hidden" }}>
              <Box component="img" src={item.image} sx={{ width: "100%", height: "100%", display: "block" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                px: { xs: "14px", lg: "16px" },
                pt: { xs: "14px", lg: "16px" },
                pb: { xs: "14px", lg: "16px" },
              }}
            >
              <Typography
                sx={{
                  color: "#446B80",
                  fontSize: { xs: "12px", lg: "12px" },
                  lineHeight: { xs: "17px", lg: "17px" },
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  mt: { xs: "8px", lg: "10px" },
                  color: "#8FA6B3",
                  fontSize: { xs: "11px", lg: "11px" },
                  lineHeight: { xs: "17px", lg: "17px" },
                }}
              >
                {item.text}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  width: "100%",
                  mt: "auto",
                  pt: { xs: "14px", lg: "18px" },
                }}
              >
                <Button
                  sx={{
                    width: "76px",
                    height: "28px",
                    borderRadius: "4px",
                    border: "1px solid #D0DADF",
                    backgroundColor: "#FFFFFF",
                    color: "#446B80",
                    fontSize: "10px",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#FFFFFF" },
                  }}
                >
                  Читать
                </Button>

                <Typography sx={{ color: "#A9B7C0", fontSize: "10px" }}>{item.date}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: "8px", mt: "30px" }}>
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
          mt: "20px",
          borderRadius: "4px",
          border: "1px solid #D0DADF",
          backgroundColor: "#FFFFFF",
          color: "#446B80",
          fontSize: "12px",
          textTransform: "none",
          "&:hover": { backgroundColor: "#FFFFFF" },
        }}
      >
        Перейти в каталог
      </Button>
    </Box>
  )
}
