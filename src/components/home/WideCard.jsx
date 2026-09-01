import { Box, Typography, Button, IconButton } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

const api = "https://swagger-wheat.vercel.app/api/akcii";

export default function WideCard() {
  const [data, setData] = useState([]);

  async function get() {
    try {
      const { data } = await axios.get(api);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1464px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "26px", lg: "60px" },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: "14px", lg: "24px" },
        }}
      >
        {data.slice(0, 2).map((el) => (
          <Box
            key={el.id}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: "10px", lg: "16px" },
              width: { xs: "100%", lg: "720px" },
              height: { xs: "auto", lg: "360px" },
              px: { xs: "16px", lg: "30px" },
              borderRadius: "6px",
              border: "1px solid #F1F1F1",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Box sx={{ width: "52%" }}>
              <Typography
                sx={{
                  color: "#446B80",
                  fontSize: { xs: "10px", lg: "14px" },
                  fontWeight: 500,
                  lineHeight: { xs: "16px", lg: "22px" },
                }}
              >
                {el.name}
              </Typography>

              <Typography
                sx={{
                  mt: { xs: "12px", lg: "16px" },
                  color: "#7FC9F0",
                  fontSize: { xs: "14px", lg: "18px" },
                  fontWeight: 600,
                }}
              >
                {el.price} ₽
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  mt: { xs: "12px", lg: "24px" },
                }}
              >
                <Button
                  sx={{
                    width: { xs: "80px", lg: "110px" },
                    height: { xs: "26px", lg: "34px" },
                    borderRadius: "4px",
                    backgroundColor: "#7FC9F0",
                    color: "#FFFFFF",
                    fontSize: { xs: "10px", lg: "12px" },
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#7FC9F0" },
                  }}
                >
                  В корзину
                </Button>

                <Typography
                  sx={{
                    color: "#446B80",
                    fontSize: { xs: "9px", lg: "12px" },
                    cursor: "pointer",
                  }}
                >
                  Купить в один клик
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "291px",
                height: "291px",
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={el.image}
                sx={{ width: "291px", height: "291px", display: "block" }}
              />
            </Box>

            <IconButton
              sx={{
                position: "absolute",
                top: "8px",
                right: "8px",
                color: "#7FC9F0",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <FavoriteBorder sx={{ fontSize: "18px" }} />
            </IconButton>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          width: "100%",
          mt: "16px",
        }}
      >
        <Box
          sx={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#7FC9F0",
          }}
        />

        <Box
          sx={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#D9D9D9",
          }}
        />
      </Box>
    </Box>
  );
}
