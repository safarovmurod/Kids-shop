import { Box, Typography } from "@mui/material";

export default function ProductCharacteristics({ item }) {
  // Ҳамаи хусусиятҳо ба як рӯйхати оддӣ ҷамъ карда мешаванд
  const rows = [];

  if (item.article) {
    rows.push({ name: "Артикул", value: item.article });
  }

  if (item.brand) {
    rows.push({ name: "Бренд", value: item.brand });
  }

  if (item.country) {
    rows.push({ name: "Страна производства", value: item.country });
  }

  if (item.ageGroup) {
    rows.push({ name: "Возраст", value: item.ageGroup });
  }

  if (item.materials && item.materials.length > 0) {
    rows.push({ name: "Материал", value: item.materials.join(", ") });
  }

  if (item.colorOptions && item.colorOptions.length > 0) {
    rows.push({ name: "Цвет", value: item.colorOptions.join(", ") });
  }

  if (item.characteristics) {
    Object.keys(item.characteristics).forEach((key) => {
      const old = rows.find((el) => el.name === key);

      if (!old) {
        rows.push({ name: key, value: item.characteristics[key] });
      }
    });
  }

  if (rows.length === 0) {
    return null;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "620px" }}>
      {rows.map((el) => (
        <Box
          key={el.name}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
            paddingTop: "14px",
            paddingBottom: "14px",
            borderBottom: "1px solid #F0F4F7",
          }}
        >
          <Typography
            sx={{ color: "#8EABC0", fontSize: { xs: "15px", lg: "14px" } }}
          >
            {el.name}
          </Typography>

          <Typography
            sx={{
              color: "#2B5674",
              fontSize: { xs: "15px", lg: "14px" },
              textAlign: "right",
            }}
          >
            {el.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
