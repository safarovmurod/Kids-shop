import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router";
import { Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import { apiBlog } from "../data/data";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  async function get() {
    try {
      setLoading(true);
      const { data } = await axios.get(`${apiBlog}/${id}`);
      setPost(data.data || data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    get();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "400px",
        }}
      >
        <CircularProgress sx={{ color: "#7FC9F0" }} />
      </Box>
    );
  }

  if (!post) {
    return (
      <Typography
        sx={{
          paddingTop: "60px",
          paddingBottom: "60px",
          color: "#446B80",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        Статья не найдена
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "840px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: { xs: "16px", lg: "20px" },
        paddingRight: { xs: "16px", lg: "20px" },
        paddingTop: "20px",
        paddingBottom: { xs: "40px", lg: "80px" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          gap: "8px",
          marginBottom: "24px",
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
          to="/blog"
          sx={{ color: "#A9B7C0", fontSize: "11px", textDecoration: "none" }}
        >
          Блог
        </Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: "11px" }}>/</Typography>

        <Typography sx={{ color: "#446B80", fontSize: "11px" }}>
          {post.title}
        </Typography>
      </Box>

      <Box
        component="img"
        src={post.image}
        alt={post.title}
        sx={{
          width: "100%",
          maxHeight: { xs: "260px", lg: "410px" },
          marginBottom: "24px",
          borderRadius: "16px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <Typography
        sx={{
          marginBottom: "10px",
          color: "#446B80",
          fontSize: { xs: "26px", lg: "30px" },
          fontWeight: 600,
          lineHeight: 1.3,
        }}
      >
        {post.title}
      </Typography>

      <Typography
        sx={{
          marginBottom: "24px",
          color: "#A9B7C0",
          fontSize: { xs: "16px", lg: "12px" },
        }}
      >
        {post.createdAt}
      </Typography>

      <Typography
        sx={{
          color: "#8FA6B3",
          fontSize: { xs: "17px", lg: "14px" },
          lineHeight: 1.6,
        }}
      >
        {post.description}
      </Typography>

      {post.content && (
        <Typography
          sx={{
            marginTop: "16px",
            color: "#8FA6B3",
            fontSize: { xs: "17px", lg: "14px" },
            lineHeight: 1.6,
          }}
        >
          {post.content}
        </Typography>
      )}
    </Box>
  );
}
