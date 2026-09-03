import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function Blog({ items }) {
  // «Читать» route-и /blog/:id-ро мекушояд; BlogDetailsPage мақоларо аз API мегирад.
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" },
        gap: { xs: "16px", lg: "24px" },
      }}
    >
      {items.map((el) => (
        <Box
          key={el.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "16px",
            borderRadius: "16px",
            border: "1px solid #F0F4F7",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Box>
            <Box
              component="img"
              src={el.image}
              alt={el.title}
              sx={{
                width: "100%",
                height: { xs: "200px", lg: "160px" },
                marginBottom: "16px",
                borderRadius: "12px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <Typography
              sx={{
                marginBottom: "8px",
                color: "#2B5674",
                fontSize: { xs: "18px", lg: "15px" },
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              {el.title}
            </Typography>

            <Typography
              sx={{
                color: "#A9C4D2",
                fontSize: { xs: "14px", lg: "12px" },
                lineHeight: 1.5,
              }}
            >
              {el.description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "16px",
            }}
          >
            <Button
              onClick={() => navigate(`/blog/${el.id}`)}
              sx={{
                height: "34px",
                paddingLeft: "18px",
                paddingRight: "18px",
                borderRadius: "8px",
                border: "1px solid #E5EEF3",
                color: "#7FC9F0",
                fontSize: "13px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#F6F9FB" },
              }}
            >
              Читать
            </Button>

            <Typography sx={{ color: "#A9C4D2", fontSize: "12px" }}>
              {el.createdAt}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
