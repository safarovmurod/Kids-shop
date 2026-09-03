import {
  Box,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import CatalogFilters from "./CatalogFilters";

export default function FiltersDialog({
  open,
  onClose,
  state,
  dispatch,
  options,
  total,
}) {
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <Typography
          sx={{ color: "#446B80", fontSize: "18px", fontWeight: 600 }}
        >
          Фильтры
        </Typography>

        <IconButton onClick={onClose} sx={{ padding: 0, color: "#446B80" }}>
          <CloseIcon sx={{ fontSize: "22px" }} />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ paddingLeft: "16px", paddingRight: "16px" }}>
        <CatalogFilters state={state} dispatch={dispatch} options={options} />
      </DialogContent>

      <DialogActions sx={{ padding: "16px" }}>
        <Box sx={{ width: "100%" }}>
          <Button
            onClick={onClose}
            fullWidth
            sx={{
              height: "48px",
              borderRadius: "10px",
              backgroundColor: "#7FC9F0",
              color: "#FFFFFF",
              fontSize: "15px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#68B7DE" },
            }}
          >
            Показать {total} товаров
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
