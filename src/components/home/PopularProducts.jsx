// import { Box, Typography } from "@mui/material"
// import ProductCard from "./ProductCard"
// import Arrows from "./Arrows"

// export default function PopularProducts({ items = [] }) {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: "1200px",
//         mx: "auto",
//         px: { xs: "16px", lg: "20px" },
//         pt: { xs: "34px", lg: "70px" },
//       }}
//     >
//       <Typography
//         sx={{
//           color: "#446B80",
//           fontSize: { xs: "19px", lg: "34px" },
//           fontWeight: 400,
//           lineHeight: { xs: "26px", lg: "44px" },
//           textAlign: "center",
//         }}
//       >
//         Популярные товары
//       </Typography>

//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" },
//           gap: { xs: "12px", lg: "20px" },
//           mt: { xs: "18px", lg: "34px" },
//         }}
//       >
//         {items.map((item) => (
//           <ProductCard key={item.id} item={item} />
//         ))}
//       </Box>

//       <Arrows />
//     </Box>
//   )
// }
