import { Stack, IconButton } from "@mui/material"
import { ArrowBack, ArrowForward } from "@mui/icons-material"

export default function Arrows() {
  return (
    <Stack direction="row" justifyContent="center" gap="14px" sx={{ mt: { xs: "16px", lg: "24px" } }}>
      <IconButton
        sx={{
          width: "32px",
          height: "32px",
          border: "1px solid #D0DADF",
          color: "#446B80",
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
        }}
      >
        <ArrowForward sx={{ fontSize: "16px" }} />
      </IconButton>
    </Stack>
  )
}
