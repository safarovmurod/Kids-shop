import { useContext, useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { NavLink, useParams } from "react-router";
import { getData } from "../api/api";
import { AppContext } from "../context/AppContext";
import ProductHead from "../components/product/ProductHead";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductTabs from "../components/product/ProductTabs";
import AlsoBuy from "../components/cart/AlsoBuy";

export default function ProductPage() {
  const { id } = useParams();
  const { state, dispatch } = useContext(AppContext);
  const [item, setItem] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  async function get() {
    setLoading(true);
    const answer = await getData("product", { id });
    const product = answer.data;

    setItem(product);
    setReviews(product && product.reviews ? product.reviews : []);
    setLoading(false);
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

  if (!item) {
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
        Товар не найден
      </Typography>
    );
  }

  const isFavorite = state.favorites.find((el) => el.id === item.id);

  function handleFavorite() {
    dispatch({
      type: "favorite",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      },
    });
  }

  function handleAddReview(review) {
    setReviews([review, ...reviews]);
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1240px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: { xs: "16px", lg: "20px" },
        paddingRight: { xs: "16px", lg: "20px" },
        paddingTop: "20px",
        paddingBottom: { xs: "40px", lg: "80px" },
      }}
    >
      {/* Детская мебель / Кроватки / Название товара */}
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          gap: "10px",
          marginBottom: "24px",
        }}
      >
        <Typography
          component={NavLink}
          to={`/catalog/${item.categorySlug}`}
          sx={{ color: "#A9B7C0", fontSize: "12px", textDecoration: "none" }}
        >
          {item.categoryName}
        </Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: "12px" }}>›</Typography>

        <Typography
          component={NavLink}
          to={`/catalog/${item.categorySlug}/${item.subcategorySlug}`}
          sx={{ color: "#A9B7C0", fontSize: "12px", textDecoration: "none" }}
        >
          {item.subcategoryName}
        </Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: "12px" }}>›</Typography>

        <Typography sx={{ color: "#446B80", fontSize: "12px" }}>
          {item.name}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          columnGap: "60px",
          rowGap: "20px",
          alignItems: "start",
        }}
      >
        <Box sx={{ gridColumn: { lg: "2" }, gridRow: { lg: "1" } }}>
          <ProductHead item={item} reviewCount={reviews.length} />
        </Box>

        <Box sx={{ gridColumn: { lg: "1" }, gridRow: { lg: "1 / 3" } }}>
          <ProductGallery
            item={item}
            isFavorite={isFavorite}
            onFavorite={handleFavorite}
          />
        </Box>

        <Box sx={{ gridColumn: { lg: "2" }, gridRow: { lg: "2" } }}>
          <ProductInfo item={item} />
        </Box>
      </Box>

      <ProductTabs
        item={item}
        reviews={reviews}
        onAddReview={handleAddReview}
      />

      <AlsoBuy items={item.similar} />
    </Box>
  );
}
