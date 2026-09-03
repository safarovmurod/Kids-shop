import { useEffect, useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import Blog from "../components/blog/Blog";
import { getList } from "../api/api";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  async function get() {
    setLoading(true);
    const answer = await getList("blog", { page, pageSize: 12 });

    if (page >= answer.totalPages) {
      setHasMore(false);
    }

    if (page === 1) {
      setPosts(answer.list);
    } else {
      setPosts((prev) => [...prev, ...answer.list]);
    }

    setLoading(false);
  }

  useEffect(() => {
    get();
  }, [page]);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: { xs: "16px", lg: "20px" },
        paddingRight: { xs: "16px", lg: "20px" },
        paddingTop: { xs: "20px", lg: "30px" },
        paddingBottom: { xs: "40px", lg: "80px" },
      }}
    >
      <Typography
        sx={{
          marginBottom: "24px",
          color: "#2B5674",
          fontSize: { xs: "30px", lg: "32px" },
          fontWeight: 700,
        }}
      >
        Блог
      </Typography>

      <Blog items={posts} />

      {loading && (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        >
          <CircularProgress sx={{ color: "#7FC9F0" }} />
        </Box>
      )}

      {hasMore && !loading && (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
        >
          <Button
            onClick={() => setPage(page + 1)}
            sx={{
              width: { xs: "100%", lg: "220px" },
              height: "46px",
              borderRadius: "23px",
              border: "1px solid #7FC9F0",
              color: "#7FC9F0",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "none",
              "&:hover": { backgroundColor: "#7FC9F0", color: "#FFFFFF" },
            }}
          >
            Показать еще
          </Button>
        </Box>
      )}
    </Box>
  );
}
