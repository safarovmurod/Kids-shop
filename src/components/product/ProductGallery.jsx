import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import {
  ZoomIn,
  Close as CloseIcon,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material";

export default function ProductGallery({ item, isFavorite, onFavorite }) {
  // Пахши сурати калон open=true мекунад; крестик ва onClose онро мепӯшонанд.
  const [open, setOpen] = useState(false);
  // Пахши thumbnail индекси active-ро иваз мекунад ва ҳамон сурат калон нишон дода мешавад.
  const [active, setActive] = useState(0);

  // Агар images холӣ бошад, расми асосиро истифода мебарем
  const images = item.images && item.images.length > 0 ? item.images : [item.image];

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={onFavorite} sx={{ padding: 0, color: "#7FC9F0" }}>
          {isFavorite ? (
            <Favorite sx={{ fontSize: { xs: "30px", lg: "26px" } }} />
          ) : (
            <FavoriteBorder sx={{ fontSize: { xs: "30px", lg: "26px" } }} />
          )}
        </IconButton>
      </Box>

      <Box
        onClick={() => setOpen(true)}
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: { xs: "320px", lg: "460px" },
          cursor: "pointer",
          "&:hover .zoom": { opacity: 1 },
        }}
      >
        <Box
          component="img"
          src={images[active]}
          alt={item.name}
          sx={{
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain",
            display: "block",
          }}
        />

        <Box
          className="zoom"
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            paddingLeft: "14px",
            paddingRight: "14px",
            paddingTop: "8px",
            paddingBottom: "8px",
            borderRadius: "20px",
            backgroundColor: "rgba(127, 201, 240, 0.9)",
            color: "#FFFFFF",
            opacity: 0,
            transition: "opacity 0.2s",
          }}
        >
          <ZoomIn sx={{ fontSize: "20px" }} />

          <Typography sx={{ fontSize: "13px" }}>Увеличить</Typography>
        </Box>
      </Box>

      {images.length > 1 && (
        <Box sx={{ display: "flex", gap: "12px", marginTop: "16px" }}>
          {images.map((el, index) => (
            <Box
              key={el}
              onClick={() => setActive(index)}
              component="img"
              src={el}
              alt={item.name}
              sx={{
                width: "80px",
                height: "80px",
                padding: "6px",
                borderRadius: "8px",
                border:
                  active === index
                    ? "1px solid #7FC9F0"
                    : "1px solid #E5EEF3",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      )}

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
        slotProps={{ paper: { sx: { borderRadius: "12px" } } }}
      >
        <DialogContent sx={{ position: "relative", padding: "40px" }}>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: "12px",
              right: "12px",
              color: "#446B80",
            }}
          >
            <CloseIcon sx={{ fontSize: "24px" }} />
          </IconButton>

          <Box
            component="img"
            src={images[active]}
            alt={item.name}
            sx={{
              width: "100%",
              maxHeight: "70vh",
              objectFit: "contain",
              display: "block",
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
