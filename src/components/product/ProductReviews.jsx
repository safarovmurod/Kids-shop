import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Stars from "./Stars";
import ReviewDialog from "./ReviewDialog";

export default function ProductReviews({ reviews, onAdd }) {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button
        onClick={() => setOpen(true)}
        sx={{
          height: "42px",
          marginBottom: "24px",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderRadius: "8px",
          border: "1px solid #E5EEF3",
          color: "#446B80",
          fontSize: "14px",
          textTransform: "none",
          "&:hover": { backgroundColor: "#F6F9FB" },
        }}
      >
        Написать отзыв
      </Button>

      {reviews.length === 0 ? (
        <Typography sx={{ color: "#A9C4D2", fontSize: "14px" }}>
          Отзывов пока нет
        </Typography>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {reviews.map((el) => (
            <Box key={el.id}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Typography
                  sx={{
                    color: "#446B80",
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  {el.author}
                </Typography>

                <Stars rating={el.rating} size="16px" />
              </Box>

              <Typography
                sx={{
                  marginTop: "4px",
                  color: "#A9C4D2",
                  fontSize: "12px",
                }}
              >
                {el.date}
              </Typography>

              {el.pros && (
                <Box sx={{ marginTop: "12px" }}>
                  <Typography
                    sx={{
                      color: "#446B80",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Достоинства
                  </Typography>

                  <Typography
                    sx={{
                      color: "#8FA6B3",
                      fontSize: "14px",
                      lineHeight: 1.6,
                    }}
                  >
                    {el.pros}
                  </Typography>
                </Box>
              )}

              {el.cons && (
                <Box sx={{ marginTop: "12px" }}>
                  <Typography
                    sx={{
                      color: "#446B80",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Недостатки
                  </Typography>

                  <Typography
                    sx={{
                      color: "#8FA6B3",
                      fontSize: "14px",
                      lineHeight: 1.6,
                    }}
                  >
                    {el.cons}
                  </Typography>
                </Box>
              )}

              {el.comment && (
                <Box sx={{ marginTop: "12px" }}>
                  <Typography
                    sx={{
                      color: "#446B80",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Комментарий
                  </Typography>

                  <Typography
                    sx={{
                      color: "#8FA6B3",
                      fontSize: "14px",
                      lineHeight: 1.6,
                    }}
                  >
                    {el.comment}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      )}

      <ReviewDialog
        open={open}
        onClose={() => setOpen(false)}
        onSend={onAdd}
      />
    </Box>
  );
}
