import { Box, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function MobileSearch() {
  return (
    <Box
      sx={{
        display: { xs: "block", lg: "none" },
        width: "100%",
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingBottom: "14px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          height: "48px",
          paddingLeft: "16px",
          paddingRight: "16px",
          borderRadius: "12px",
          backgroundColor: "#F4F4F4",
        }}
      >
        <Search sx={{ fontSize: "22px", color: "#446B80" }} />

        <InputBase
          placeholder="Я хочу купить..."
          sx={{ flexGrow: 1, fontSize: "15px", color: "#446B80" }}
        />
      </Box>
    </Box>
  );
}
