import { Box } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

export default function Stars({ rating, size }) {
  // Барои ҳар рақами 1–5 месанҷад: агар аз rating зиёд набошад ситора пур, вагарна холӣ аст.
  const stars = [1, 2, 3, 4, 5];

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {stars.map((el) => {
        if (el <= rating) {
          return (
            <Star key={el} sx={{ fontSize: size, color: "#7FC9F0" }} />
          );
        }

        return (
          <StarBorder key={el} sx={{ fontSize: size, color: "#7FC9F0" }} />
        );
      })}
    </Box>
  );
}
