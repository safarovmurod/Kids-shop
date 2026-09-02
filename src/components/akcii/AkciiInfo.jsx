import { Box, Typography } from "@mui/material";
import { ArrowForward, FormatQuote } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router";

export default function AkciiInfo({ item = {}, blocks = [] }) {
  const navigate = useNavigate();
  const nextId = Number(item.id) ? Number(item.id) + 1 : 1;

  const title =
    item.name || item.title || "Вкусные скидки до -25% на все детское питание";
  const image =
    item.image ||
    "https://swagger-wheat.vercel.app/assets/products/tovar-nedeli-nuovita-day-offer-1.jpg";
  const date = item.date || item.createdAt || "25.05.2020";
  const description =
    item.description ||
    "В 1-м триместре беременности рацион женщины существенно не отличается от ее меню до беременности, могут лишь поменяться вкусы беременной. Но уже сейчас нужно начать придерживаться принципов правильного питания, чтобы избежать токсикоза и заложить основу правильного развития эмбриона.";

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "860px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: { xs: "20px", lg: "30px" },
        pb: { xs: "34px", lg: "60px" },
      }}
    >
      {/* Breadcrumbs */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <Typography
          component={NavLink}
          to="/"
          sx={{
            color: "#A9B7C0",
            fontSize: { xs: "10px", lg: "11px" },
            textDecoration: "none",
            "&:hover": { color: "#7FC9F0" },
          }}
        >
          Главная
        </Typography>

        <Typography
          sx={{ color: "#A9B7C0", fontSize: { xs: "10px", lg: "11px" } }}
        >
          /
        </Typography>

        <Typography
          component={NavLink}
          to="/akcii"
          sx={{
            color: "#A9B7C0",
            fontSize: { xs: "10px", lg: "11px" },
            textDecoration: "none",
            "&:hover": { color: "#7FC9F0" },
          }}
        >
          Акции
        </Typography>

        <Typography
          sx={{ color: "#A9B7C0", fontSize: { xs: "10px", lg: "11px" } }}
        >
          /
        </Typography>

        <Typography
          sx={{ color: "#446B80", fontSize: { xs: "10px", lg: "11px" } }}
        >
          {title}
        </Typography>
      </Box>

      {/* Главное изображение акции */}
      <Box
        sx={{
          width: "100%",
          maxHeight: "380px",
          mt: { xs: "14px", lg: "22px" },
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      {/* Заголовок */}
      <Typography
        sx={{
          mt: { xs: "18px", lg: "28px" },
          color: "#446B80",
          fontSize: { xs: "20px", lg: "30px" },
          fontWeight: 600,
          lineHeight: { xs: "28px", lg: "40px" },
        }}
      >
        {title}
      </Typography>

      {/* Дата */}
      <Typography
        sx={{
          mt: { xs: "8px", lg: "12px" },
          color: "#A9B7C0",
          fontSize: { xs: "10px", lg: "11px" },
        }}
      >
        {date}
      </Typography>

      {/* Текст акции */}
      <Typography
        sx={{
          mt: { xs: "16px", lg: "24px" },
          color: "#8FA6B3",
          fontSize: { xs: "13px", lg: "14px" },
          lineHeight: { xs: "22px", lg: "24px" },
        }}
      >
        {description}
      </Typography>

      <Typography
        sx={{
          mt: { xs: "16px", lg: "20px" },
          color: "#8FA6B3",
          fontSize: { xs: "13px", lg: "14px" },
          lineHeight: { xs: "22px", lg: "24px" },
        }}
      >
        Постарайтесь включить в меню ежедневно зеленые салаты с растительным
        маслом и морскую рыбу. Важно начать прием препаратов фолиевой кислоты,
        йода и витамина E.
      </Typography>

      {/* Динамические блоки если они есть */}
      {blocks.map((block, idx) => (
        <Box key={block.id || idx} sx={{ width: "100%" }}>
          {block.type === "text" && (
            <Typography
              sx={{
                mt: { xs: "16px", lg: "24px" },
                color: "#8FA6B3",
                fontSize: { xs: "13px", lg: "14px" },
                lineHeight: { xs: "22px", lg: "24px" },
              }}
            >
              {block.value}
            </Typography>
          )}

          {block.type === "image" && (
            <Box
              sx={{
                width: "100%",
                height: { xs: "200px", lg: "380px" },
                mt: { xs: "18px", lg: "28px" },
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={block.value}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          )}

          {block.type === "quote" && (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: { xs: "12px", lg: "20px" },
                width: "100%",
                mt: { xs: "18px", lg: "28px" },
              }}
            >
              <FormatQuote
                sx={{
                  flexShrink: 0,
                  color: "#D0DADF",
                  fontSize: { xs: "34px", lg: "48px" },
                  transform: "scaleX(-1)",
                }}
              />
              <Typography
                sx={{
                  color: "#8FA6B3",
                  fontSize: { xs: "13px", lg: "14px" },
                  lineHeight: { xs: "22px", lg: "24px" },
                }}
              >
                {block.value}
              </Typography>
            </Box>
          )}
        </Box>
      ))}

      {/* Следующая акция */}
      <Box
        onClick={() => {
          navigate(`/akcii/${nextId}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          mt: { xs: "24px", lg: "40px" },
          cursor: "pointer",
          width: "fit-content",
          "&:hover": { opacity: 0.8 },
        }}
      >
        <Typography
          sx={{
            color: "#7FC9F0",
            fontSize: { xs: "12px", lg: "13px" },
            fontWeight: 500,
          }}
        >
          Читать следующую акцию
        </Typography>

        <ArrowForward sx={{ color: "#7FC9F0", fontSize: "16px" }} />
      </Box>
    </Box>
  );
}
