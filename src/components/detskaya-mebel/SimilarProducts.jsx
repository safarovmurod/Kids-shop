import { Box, Typography, Grid, Card, CardMedia, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function SimilarProducts({ products }) {
  return (
    <Box
      sx={{
        mt: "80px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          color: "#446B80",
          mb: "30px",
          textAlign: "center",
        }}
      >
        Похожие товары
      </Typography>

      <Box sx={{ width: "100%", maxWidth: "1100px", mx: "auto" }}>
        <Grid container spacing={3} justifyContent="center">
          {products.slice(0, 3).map((item, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={idx}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                elevation={0}
                sx={{
                  width: "346px",
                  p: "16px",
                  border: "1px solid #F0F4F7",
                  borderRadius: "12px",
                  textAlign: "left",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  sx={{
                    borderRadius: "8px",
                    width: "206px",
                    height: "240px",
                    mb: "12px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#446B80",
                    mb: "8px",
                    height: "36px",
                    overflow: "hidden",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#7FC9F0",
                    mb: "12px",
                  }}
                >
                  {item.price} ₽
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#7FC9F0",
                    color: "#FFF",
                    fontSize: "12px",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": { backgroundColor: "#52B4E8" },
                  }}
                >
                  В корзину
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          mt: "24px",
        }}
      >
        <ArrowBackIcon
          sx={{
            color: "#446B80",
            cursor: "pointer",
            border: "1px solid #D0DADF",
            borderRadius: "50%",
            p: "4px",
            fontSize: "28px",
          }}
        />
        <ArrowForwardIcon
          sx={{
            color: "#446B80",
            cursor: "pointer",
            border: "1px solid #D0DADF",
            borderRadius: "50%",
            p: "4px",
            fontSize: "28px",
          }}
        />
      </Box>
    </Box>
  );
}
