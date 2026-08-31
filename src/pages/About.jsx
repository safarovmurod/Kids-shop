import { Box, Typography } from "@mui/material"

export default function About() {
  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "40px" }, py: "60px" }}>
      <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto" }}>
        <Typography sx={{ color: "#FFFFFF", fontSize: "32px" }}>About</Typography>
      </Box>
    </Box>
  )
}