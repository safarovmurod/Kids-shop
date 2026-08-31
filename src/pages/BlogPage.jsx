import { Box } from "@mui/material"
import Blog from "../components/blog/Blog"
import BlogInfo from "../components/blog/BlogInfo"

export default function BlogPage() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#FFFFFF" }}>
      <Blog items={[]} />
      <BlogInfo item={{}} blocks={[]} />
    </Box>
  )
}
