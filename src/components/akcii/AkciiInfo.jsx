import { Box, Typography } from "@mui/material"
import { ArrowForward, FormatQuote } from "@mui/icons-material"

export default function AkciiInfo({ item = {}, blocks = [] }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "860px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "20px", lg: "30px" },
        pb: { xs: "34px", lg: "60px" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
        <Typography sx={{ color: "#A9B7C0", fontSize: { xs: "10px", lg: "11px" } }}>Главная</Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: { xs: "10px", lg: "11px" } }}>/</Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: { xs: "10px", lg: "11px" } }}>Акции</Typography>

        {item.title && (
          <Typography sx={{ color: "#A9B7C0", fontSize: { xs: "10px", lg: "11px" } }}>/</Typography>
        )}

        <Typography sx={{ color: "#446B80", fontSize: { xs: "10px", lg: "11px" } }}>{item.title}</Typography>
      </Box>

      {item.image && (
        <Box
          sx={{
            width: { xs: "100%", lg: "620px" },
            height: { xs: "150px", lg: "232px" },
            mt: { xs: "14px", lg: "22px" },
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <Box component="img" src={item.image} sx={{ width: "100%", height: "100%", display: "block" }} />
        </Box>
      )}

      <Typography
        sx={{
          mt: { xs: "18px", lg: "28px" },
          color: "#446B80",
          fontSize: { xs: "20px", lg: "30px" },
          fontWeight: 400,
          lineHeight: { xs: "28px", lg: "40px" },
        }}
      >
        {item.title}
      </Typography>

      <Typography
        sx={{
          mt: { xs: "8px", lg: "12px" },
          color: "#A9B7C0",
          fontSize: { xs: "10px", lg: "11px" },
          lineHeight: { xs: "14px", lg: "15px" },
        }}
      >
        {item.date}
      </Typography>

      {blocks.map((block) => (
        <Box key={block.id} sx={{ width: "100%" }}>
          {block.type === "text" && (
            <Typography
              sx={{
                mt: { xs: "16px", lg: "24px" },
                color: "#8FA6B3",
                fontSize: { xs: "12px", lg: "13px" },
                lineHeight: { xs: "20px", lg: "22px" },
              }}
            >
              {block.value}
            </Typography>
          )}

          {block.type === "image" && (
            <Box
              sx={{
                width: { xs: "100%", lg: "620px" },
                height: { xs: "150px", lg: "232px" },
                mt: { xs: "18px", lg: "28px" },
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <Box component="img" src={block.value} sx={{ width: "100%", height: "100%", display: "block" }} />
            </Box>
          )}

          {block.type === "quote" && (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: { xs: "12px", lg: "20px" },
                width: "100%",
                mt: { xs: "18px", lg: "28px" },
              }}
            >
              <FormatQuote sx={{ flexShrink: 0, color: "#D0DADF", fontSize: { xs: "34px", lg: "48px" } }} />

              <Typography
                sx={{
                  color: "#8FA6B3",
                  fontSize: { xs: "12px", lg: "13px" },
                  lineHeight: { xs: "20px", lg: "22px" },
                }}
              >
                {block.value}
              </Typography>
            </Box>
          )}
        </Box>
      ))}

      <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mt: { xs: "24px", lg: "40px" } }}>
        <Typography sx={{ color: "#7FC9F0", fontSize: { xs: "12px", lg: "13px" } }}>
          Читать следующую акцию
        </Typography>

        <ArrowForward sx={{ color: "#7FC9F0", fontSize: "16px" }} />
      </Box>
    </Box>
  )
}
