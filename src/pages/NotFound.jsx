import { Box, Stack, Typography, Button } from "@mui/material"
import { Link } from "react-router"

export default function NotFound() {
  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "40px" }, py: { xs: "80px", lg: "120px" } }}>
      <Stack alignItems="center" gap="12px">
        <Typography
          sx={{
            color: "#CAFF33",
            fontSize: { xs: "72px", lg: "120px" },
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          404
        </Typography>

        <Typography sx={{ color: "#FFFFFF", fontSize: "24px", fontWeight: 600 }}>
          Page not found
        </Typography>

        <Typography sx={{ maxWidth: "420px", color: "#99999B", fontSize: "14px", textAlign: "center" }}>
          The page you are looking for does not exist or has been moved.
        </Typography>

        <Button
          component={Link}
          to="/"
          sx={{
            height: "44px",
            px: "28px",
            mt: "12px",
            borderRadius: "100px",
            backgroundColor: "#CAFF33",
            color: "#1C1C1C",
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "none",
            whiteSpace: "nowrap",
            "&:hover": { backgroundColor: "#CAFF33" },
          }}
        >
          Back to Home
        </Button>
      </Stack>
    </Box>
  )
}