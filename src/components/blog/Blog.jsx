import React from "react";
import { Box, Grid, Card, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function Blog({ items = [] }) {
  const navigate = useNavigate();

  if (!Array.isArray(items)) return null;

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={3}>
        {items.map((item, index) => {
          const postId = item.id ?? item._id ?? item.slug ?? index + 1;

          return (
            <Grid item xs={12} sm={6} md={3} key={postId}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "16px",
                  border: "1px solid #F0F4F7",
                  padding: "16px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.03)",
                }}
              >
                <Box>
                  <CardMedia
                    component="img"
                    height="160"
                    image={
                      item.image ||
                      item.img ||
                      "https://via.placeholder.com/300x160"
                    }
                    alt={item.title || "Блог"}
                    sx={{
                      borderRadius: "12px",
                      objectFit: "cover",
                      marginBottom: "16px",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#2B5674",
                      lineHeight: 1.4,
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {(item.description || item.excerpt) && (
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#A9C4D2",
                        lineHeight: 1.3,
                        marginBottom: "16px",
                      }}
                    >
                      {item.description || item.excerpt}
                    </Typography>
                  )}
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
                    onClick={() => navigate(`/blog/${postId}`)}
                    variant="outlined"
                    size="small"
                    sx={{
                      height: "32px",
                      px: "16px",
                      borderRadius: "8px",
                      borderColor: "#E5EEF3",
                      color: "#7FC9F0",
                      fontSize: "12px",
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "#7FC9F0",
                        backgroundColor: "#F6F9FB",
                      },
                    }}
                  >
                    Читать
                  </Button>

                  <Typography sx={{ fontSize: "11px", color: "#A9C4D2" }}>
                    {item.createdAt || item.date || "25.05.2020"}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
