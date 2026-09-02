import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";

export default function CheckboxList({ title, items, selected, onToggle }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Box sx={{ marginBottom: "16px" }}>
      {title && (
        <Typography
          sx={{
            marginBottom: "8px",
            color: "#446B80",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "150px",
          overflowY: "auto",
        }}
      >
        {items.map((el) => (
          <FormControlLabel
            key={el}
            control={
              <Checkbox
                size="small"
                checked={selected.includes(el)}
                onChange={() => onToggle(el)}
                sx={{ color: "#7FC9F0", "&.Mui-checked": { color: "#7FC9F0" } }}
              />
            }
            label={
              <Typography sx={{ color: "#446B80", fontSize: "13px" }}>
                {el}
              </Typography>
            }
          />
        ))}
      </Box>
    </Box>
  );
}
