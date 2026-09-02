import { useState, useEffect } from "react";
import { Box, Button, Grid, Skeleton, Typography } from "@mui/material";
import axios from "axios";
import Blog from "../components/blog/Blog";

const API_URL = "https://swagger-wheat.vercel.app/api/blog";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const pageSize = 12;

  async function fetchBlogPosts(currentPage) {
    try {
      setLoading(true);
      const res = await axios.get(
        `${API_URL}?page=${currentPage}&pageSize=${pageSize}`,
      );

      const rawData = res?.data;
      let list = [];

      if (Array.isArray(rawData)) {
        list = rawData;
      } else if (Array.isArray(rawData?.data)) {
        list = rawData.data;
      }

      if (list.length < pageSize) {
        setHasMore(false);
      }

      setPosts((prev) => (currentPage === 1 ? list : [...prev, ...list]));
    } catch (error) {
      console.error("Ошибка при получении блогов:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogPosts(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchBlogPosts(nextPage);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: "30px",
        pb: "80px",
      }}
    >
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#2B5674",
          marginBottom: "24px",
        }}
      >
        Блог
      </Typography>

      {/* Список карточек */}
      <Blog items={posts} />

      {/* Скелетон ҳангоми загрузка */}
      {loading && (
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {[...Array(4)].map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Skeleton
                variant="rectangular"
                height={180}
                sx={{ borderRadius: "16px", backgroundColor: "#F2F7FA" }}
              />
              <Skeleton
                variant="text"
                sx={{ mt: 1, backgroundColor: "#F2F7FA" }}
              />
            </Grid>
          ))}
        </Grid>
      )}

      {/* Тугмаи «Показать еще» ба ҷои пагинация */}
      {hasMore && !loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
          <Button
            onClick={handleLoadMore}
            sx={{
              height: "46px",
              px: "40px",
              borderRadius: "23px",
              border: "1px solid #7FC9F0",
              color: "#7FC9F0",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "none",
              backgroundColor: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#7FC9F0",
                color: "#FFFFFF",
                boxShadow: "0px 6px 20px rgba(127, 201, 240, 0.3)",
              },
            }}
          >
            Показать еще
          </Button>
        </Box>
      )}
    </Box>
  );
}
