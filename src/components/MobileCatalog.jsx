import { Box, Typography, IconButton, Drawer } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { catalogCategories } from "../data/data";

export default function MobileCatalog({ open, onClose }) {
  const navigate = useNavigate();

  function handleClick(path) {
    onClose();
    navigate(path);
  }

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: "80%",
            maxWidth: "320px",
            backgroundColor: "#446B80",
            paddingTop: "16px",
            paddingBottom: "16px",
          },
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", paddingRight: "16px" }}>
        <IconButton onClick={onClose} sx={{ color: "#FFFFFF" }}>
          <CloseIcon sx={{ fontSize: "22px" }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          marginTop: "16px",
        }}
      >
        {catalogCategories.map((el) => (
          <Typography
            key={el.id}
            onClick={() => handleClick(el.path)}
            sx={{
              paddingTop: "12px",
              paddingBottom: "12px",
              paddingLeft: "28px",
              paddingRight: "28px",
              color: "#FFFFFF",
              fontSize: "15px",
              cursor: "pointer",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.12)" },
            }}
          >
            {el.name}
          </Typography>
        ))}
      </Box>
    </Drawer>
  );
}
