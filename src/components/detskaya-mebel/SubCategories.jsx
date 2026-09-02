import { Box, Typography } from "@mui/material";
import { subCategories } from "../../data/data";

export default function SubCategories({ active, onChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", lg: "column" },
        flexWrap: { xs: "wrap", lg: "nowrap" },
        gap: { xs: "8px", lg: "10px" },
      }}
    >
      {subCategories.map((el) => (
        <Typography
          key={el.endpoint}
          onClick={() => onChange(el)}
          sx={{
            paddingTop: { xs: "8px", lg: "0px" },
            paddingBottom: { xs: "8px", lg: "0px" },
            paddingLeft: { xs: "14px", lg: "0px" },
            paddingRight: { xs: "14px", lg: "0px" },
            borderRadius: { xs: "16px", lg: "0px" },
            border: { xs: "1px solid #E5EEF3", lg: "none" },
            color: active.endpoint === el.endpoint ? "#7FC9F0" : "#446B80",
            fontSize: "13px",
            fontWeight: active.endpoint === el.endpoint ? 600 : 400,
            cursor: "pointer",
          }}
        >
          {el.name}
        </Typography>
      ))}
    </Box>
  );
}
