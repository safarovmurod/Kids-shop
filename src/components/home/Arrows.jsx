import { Box, IconButton } from "@mui/material"
import { ArrowBack, ArrowForward } from "@mui/icons-material"

export default function Arrows() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
        width: "100%",
        mt: { xs: "18px", lg: "26px" },
      }}
    >
      <IconButton
        sx={{
          width: "32px",
          height: "32px",
          border: "1px solid #D0DADF",
          color: "#446B80",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <ArrowBack sx={{ fontSize: "16px" }} />
      </IconButton>

      <IconButton
        sx={{
          width: "32px",
          height: "32px",
          border: "1px solid #446B80",
          color: "#446B80",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <ArrowForward sx={{ fontSize: "16px" }} />
      </IconButton>
    </Box>
  )
}
