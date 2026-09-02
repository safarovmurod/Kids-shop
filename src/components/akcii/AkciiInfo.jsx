import { Box, Typography } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";
import { NavLink } from "react-router";

export default function AkciiInfo({ item }) {
  const blocks = item.blocks || [];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "860px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: { xs: "16px", lg: "20px" },
        paddingRight: { xs: "16px", lg: "20px" },
        paddingTop: { xs: "20px", lg: "30px" },
        paddingBottom: { xs: "40px", lg: "60px" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography
          component={NavLink}
          to="/"
          sx={{ color: "#A9B7C0", fontSize: "11px", textDecoration: "none" }}
        >
          Главная
        </Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: "11px" }}>/</Typography>

        <Typography
          component={NavLink}
          to="/akcii"
          sx={{ color: "#A9B7C0", fontSize: "11px", textDecoration: "none" }}
        >
          Акции
        </Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: "11px" }}>/</Typography>

        <Typography sx={{ color: "#446B80", fontSize: "11px" }}>
          {item.name}
        </Typography>
      </Box>

      <Box
        component="img"
        src={item.image}
        alt={item.name}
        sx={{
          width: "100%",
          maxHeight: { xs: "220px", lg: "380px" },
          marginTop: { xs: "0px", lg: "22px" },
          borderRadius: "8px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <Typography
        sx={{
          marginTop: { xs: "20px", lg: "28px" },
          color: "#446B80",
          fontSize: { xs: "24px", lg: "30px" },
          fontWeight: 600,
          lineHeight: { xs: "32px", lg: "40px" },
        }}
      >
        {item.name}
      </Typography>

      <Typography
        sx={{
          marginTop: "10px",
          color: "#A9B7C0",
          fontSize: { xs: "16px", lg: "12px" },
        }}
      >
        {item.createdAt}
      </Typography>

      <Typography
        sx={{
          marginTop: { xs: "18px", lg: "24px" },
          color: "#8FA6B3",
          fontSize: { xs: "17px", lg: "14px" },
          lineHeight: { xs: "26px", lg: "24px" },
        }}
      >
        {item.description}
      </Typography>

      {blocks.map((block) => (
        <Box key={block.id} sx={{ width: "100%" }}>
          {block.type === "text" && (
            <Typography
              sx={{
                marginTop: { xs: "18px", lg: "24px" },
                color: "#8FA6B3",
                fontSize: { xs: "17px", lg: "14px" },
                lineHeight: { xs: "26px", lg: "24px" },
              }}
            >
              {block.value}
            </Typography>
          )}

          {block.type === "image" && (
            <Box
              component="img"
              src={block.value}
              alt={item.name}
              sx={{
                width: "100%",
                height: { xs: "220px", lg: "380px" },
                marginTop: { xs: "20px", lg: "28px" },
                borderRadius: "8px",
                objectFit: "cover",
                display: "block",
              }}
            />
          )}

          {block.type === "quote" && (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: { xs: "12px", lg: "20px" },
                marginTop: { xs: "20px", lg: "28px" },
              }}
            >
              <FormatQuote
                sx={{
                  flexShrink: 0,
                  color: "#D0DADF",
                  fontSize: { xs: "38px", lg: "48px" },
                  transform: "scaleX(-1)",
                }}
              />

              <Typography
                sx={{
                  color: "#8FA6B3",
                  fontSize: { xs: "17px", lg: "14px" },
                  lineHeight: { xs: "26px", lg: "24px" },
                }}
              >
                {block.value}
              </Typography>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}
