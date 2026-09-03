import { Box, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function Arrows({ onPrev, onNext, disabledPrev, disabledNext }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        width: "100%",
        mt: { xs: "20px", lg: "30px" },
      }}
    >
      <IconButton
        onClick={onPrev}
        disabled={disabledPrev}
        sx={{
          width: "36px",
          height: "36px",
          border: "1.5px solid #446B80",
          color: "#446B80",
          "&:hover": { backgroundColor: "transparent" },
          "&.Mui-disabled": { opacity: 0.4, border: "1.5px solid #A9B7C0" },
        }}
      >
        <ArrowBack sx={{ fontSize: "18px" }} />
      </IconButton>

      <IconButton
        onClick={onNext}
        disabled={disabledNext}
        sx={{
          width: "36px",
          height: "36px",
          border: "1.5px solid #446B80",
          color: "#446B80",
          "&:hover": { backgroundColor: "transparent" },
          "&.Mui-disabled": { opacity: 0.4, border: "1.5px solid #A9B7C0" },
        }}
      >
        <ArrowForward sx={{ fontSize: "18px" }} />
      </IconButton>
    </Box>
  );
}
