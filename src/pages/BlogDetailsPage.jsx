import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router";
import { Box, Typography, CircularProgress } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPostDetails() {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://swagger-wheat.vercel.app/api/blog/${id}`,
        );
        setPost(res.data);
      } catch (error) {
        console.error("Ошибка при запросе статьи:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id && id !== "undefined") {
      getPostDetails();
    } else {
      setLoading(false);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <CircularProgress sx={{ color: "#7FC9F0" }} />
      </Box>
    );
  }

  // Данные по умолчанию (если API вернет частичный объект)
  const title = post?.title || "Питание в I триместре";
  const date = post?.date || post?.createdAt || "25.05.2020";
  const image1 =
    post?.image ||
    "https://swagger-wheat.vercel.app/api/images/post-pitanie-v-pervom-trimestre.svg";
  const image2 =
    post?.images?.[1] ||
    "https://swagger-wheat.vercel.app/api/images/post-pitanie-v-pervom-trimestre.svg?variant=2";
  const excerpt =
    post?.excerpt ||
    post?.description ||
    "В 1-м триместре беременности рацион женщины существенно не отличается от ее меню до беременности, могут лишь поменяться вкусы беременной. Но уже сейчас нужно начать придерживаться принципов правильного питания, чтобы избежать токсикоза и заложить основу правильного развития эмбриона.";
  const quote =
    post?.quote ||
    "В 1-м триместре беременности рацион женщины существенно не отличается от ее меню до беременности, могут лишь поменяться вкусы беременной.";

  const nextId = Number(id) ? Number(id) + 1 : 1;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "840px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: "20px",
        pb: "80px",
      }}
    >
      {/* Хлебные крошки */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          mb: "24px",
          flexWrap: "wrap",
        }}
      >
        <Typography
          component={NavLink}
          to="/"
          sx={{
            fontSize: "11px",
            color: "#A9B7C0",
            textDecoration: "none",
            "&:hover": { color: "#7FC9F0" },
          }}
        >
          Главная
        </Typography>
        <Typography sx={{ fontSize: "11px", color: "#A9B7C0" }}>/</Typography>
        <Typography
          component={NavLink}
          to="/blog"
          sx={{
            fontSize: "11px",
            color: "#A9B7C0",
            textDecoration: "none",
            "&:hover": { color: "#7FC9F0" },
          }}
        >
          Блог
        </Typography>
        <Typography sx={{ fontSize: "11px", color: "#A9B7C0" }}>/</Typography>
        <Typography sx={{ fontSize: "11px", color: "#446B80" }}>
          {title}
        </Typography>
      </Box>

      {/* Первое изображение */}
      <Box
        component="img"
        src={image1}
        alt={title}
        sx={{
          width: "100%",
          maxHeight: "410px",
          objectFit: "cover",
          borderRadius: "16px",
          mb: "24px",
        }}
      />

      {/* Заголовок и Дата */}
      <Typography
        sx={{
          fontSize: { xs: "22px", lg: "30px" },
          fontWeight: 600,
          color: "#446B80",
          lineHeight: 1.3,
          mb: "8px",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{ fontSize: "11px", color: "#A9B7C0", marginBottom: "24px" }}
      >
        {date}
      </Typography>

      {/* Основной текст */}
      <Typography
        sx={{
          fontSize: "13px",
          color: "#8FA6B3",
          lineHeight: 1.6,
          mb: "16px",
        }}
      >
        {excerpt}
      </Typography>

      <Typography
        sx={{
          fontSize: "13px",
          color: "#8FA6B3",
          lineHeight: 1.6,
          mb: "28px",
        }}
      >
        Постарайтесь включить в меню ежедневно зеленые салаты с растительным
        маслом и морскую рыбу. Важно начать прием препаратов фолиевой кислоты,
        йода и витамина E, принимать на протяжении всей беременности.
      </Typography>

      {/* Второе изображение */}
      <Box
        component="img"
        src={image2}
        alt="Детали"
        sx={{
          width: "100%",
          maxHeight: "410px",
          objectFit: "cover",
          borderRadius: "16px",
          mb: "28px",
        }}
      />

      {/* Цитата */}
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          alignItems: "flex-start",
          mb: "28px",
        }}
      >
        <FormatQuoteIcon
          sx={{
            fontSize: "48px",
            color: "#D0DADF",
            transform: "scaleX(-1)",
            flexShrink: 0,
          }}
        />
        <Typography
          sx={{
            fontSize: "13px",
            color: "#8FA6B3",
            lineHeight: 1.6,
          }}
        >
          {quote}
        </Typography>
      </Box>

      {/* Заключительный текст */}
      <Typography
        sx={{
          fontSize: "13px",
          color: "#8FA6B3",
          lineHeight: 1.6,
          mb: "40px",
        }}
      >
        За время беременности организм должен получать достаточно железа, чтобы
        предотвратить анемию у матери и плода, а также запастись железом на
        время грудного вскармливания.
      </Typography>

      {/* Переход к следующей статье */}
      <Box
        onClick={() => {
          navigate(`/blog/${nextId}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          color: "#7FC9F0",
          cursor: "pointer",
          fontSize: "13px",
          fontWeight: 500,
          "&:hover": { textDecoration: "underline" },
        }}
      >
        <span>Читать следующую статью</span>
        <ArrowForwardIcon sx={{ fontSize: "16px" }} />
      </Box>
    </Box>
  );
}
