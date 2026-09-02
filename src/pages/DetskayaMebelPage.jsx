import React, { useState, useEffect, useMemo } from "react";
import { Box, Typography, Button, Grid, Skeleton } from "@mui/material";
import { NavLink, useNavigate } from "react-router";

import { fetchProductsByEndpoint } from "../components/detskaya-mebel/api";
import DetskayaMebelFilters from "../components/detskaya-mebel/DetskayaMebelFilters";
import ProductCard from "../components/detskaya-mebel/ProductCard";
import SimilarProductsContainer from "../components/detskaya-mebel/SimilarProductsContainer";

const subCategories = [
  { name: "Кроватки", endpoint: "krovatki" },
  { name: "Колыбели", endpoint: "kolybeli" },
  { name: "Люльки", endpoint: "lyulki" },
  { name: "Пеленальные комоды", endpoint: "pelenalnye-komody" },
  { name: "Шкафы", endpoint: "shkafy" },
  { name: "Аксессуары", endpoint: "aksessuary" },
];

export default function DetskayaMebelPage() {
  const navigate = useNavigate();
  const [activeSub, setActiveSub] = useState(subCategories[0]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loadingMore, setLoadingMore] = useState(false);

  const [sortValue, setSortValue] = useState("by popularity");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [onlyPromo, setOnlyPromo] = useState(false);
  const [brandSearch, setBrandSearch] = useState("");

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedMayatnik, setSelectedMayatnik] = useState([]);
  const [selectedYashik, setSelectedYashik] = useState([]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setVisibleCount(8);
      const data = await fetchProductsByEndpoint(activeSub.endpoint);
      setProducts(data);
      setLoading(false);
    }
    loadData();
  }, [activeSub]);

  const availableBrands = useMemo(
    () => [
      ...new Set(
        products
          .map((p) => p.brand || p.characteristics?.Бренд)
          .filter(Boolean),
      ),
    ],
    [products],
  );
  const availableColors = useMemo(
    () => [...new Set(products.flatMap((p) => p.colorOptions || []))],
    [products],
  );
  const availableMaterials = useMemo(
    () => [...new Set(products.flatMap((p) => p.materials || []))],
    [products],
  );
  const availableMayatnik = useMemo(
    () => [
      ...new Set(
        products.map((p) => p.characteristics?.Маятник).filter(Boolean),
      ),
    ],
    [products],
  );
  const availableYashik = useMemo(
    () => [
      ...new Set(
        products
          .map((p) => p.characteristics?.["Ящик для белья"])
          .filter(Boolean),
      ),
    ],
    [products],
  );

  const handleToggle = (item, list, setList) => {
    setList(
      list.includes(item) ? list.filter((i) => i !== item) : [...list, item],
    );
  };

  const handleResetFilters = () => {
    setPriceFrom("");
    setPriceTo("");
    setOnlyPromo(false);
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedMaterials([]);
    setSelectedMayatnik([]);
    setSelectedYashik([]);
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        if (priceFrom && (item.price || 0) < Number(priceFrom)) return false;
        if (priceTo && (item.price || 0) > Number(priceTo)) return false;
        if (onlyPromo && !item.isPromo && !item.discount) return false;
        if (
          selectedBrands.length &&
          !selectedBrands.includes(item.brand || item.characteristics?.Бренд)
        )
          return false;
        if (
          selectedColors.length &&
          !item.colorOptions?.some((c) => selectedColors.includes(c))
        )
          return false;
        if (
          selectedMaterials.length &&
          !item.materials?.some((m) => selectedMaterials.includes(m))
        )
          return false;
        if (
          selectedMayatnik.length &&
          !selectedMayatnik.includes(item.characteristics?.Маятник)
        )
          return false;
        if (
          selectedYashik.length &&
          !selectedYashik.includes(item.characteristics?.["Ящик для белья"])
        )
          return false;
        return true;
      })
      .sort((a, b) => {
        if (sortValue === "by price") return (a.price || 0) - (b.price || 0);
        if (sortValue === "by rating") return (b.rating || 0) - (a.rating || 0);
        if (sortValue === "by name")
          return (a.name || "").localeCompare(b.name || "");
        if (sortValue === "by discount")
          return (b.discount || 0) - (a.discount || 0);
        return 0;
      });
  }, [
    products,
    priceFrom,
    priceTo,
    onlyPromo,
    selectedBrands,
    selectedColors,
    selectedMaterials,
    selectedMayatnik,
    selectedYashik,
    sortValue,
  ]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 8);
      setLoadingMore(false);
    }, 600);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1240px",
        mx: "auto",
        px: { xs: "16px", lg: "20px" },
        pt: "20px",
        pb: "80px",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Хлебные крошки */}
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "8px", mb: "20px" }}
      >
        <Typography
          component={NavLink}
          to="/"
          sx={{ fontSize: "11px", color: "#A9B7C0", textDecoration: "none" }}
        >
          Главная
        </Typography>
        <Typography sx={{ fontSize: "11px", color: "#A9B7C0" }}>/</Typography>
        <Typography sx={{ fontSize: "11px", color: "#A9B7C0" }}>
          Детская мебель
        </Typography>
        <Typography sx={{ fontSize: "11px", color: "#A9B7C0" }}>/</Typography>
        <Typography sx={{ fontSize: "11px", color: "#446B80" }}>
          {activeSub.name}
        </Typography>
      </Box>

      {/* Заголовок */}
      <Typography
        sx={{
          fontSize: { xs: "24px", lg: "32px" },
          fontWeight: 600,
          color: "#446B80",
          mb: "20px",
        }}
      >
        {activeSub.name}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "321px 1fr" },
          gap: "30px",
          alignItems: "start",
        }}
      >
        {/* Филтрҳо */}
        <DetskayaMebelFilters
          {...{
            subCategories,
            activeSub,
            setActiveSub,
            hasActiveFilters: !!(
              priceFrom ||
              priceTo ||
              onlyPromo ||
              selectedBrands.length ||
              selectedColors.length ||
              selectedMaterials.length ||
              selectedMayatnik.length ||
              selectedYashik.length
            ),
            selectedBrands,
            selectedColors,
            selectedMaterials,
            selectedMayatnik,
            selectedYashik,
            handleToggle,
            handleResetFilters,
            priceFrom,
            setPriceFrom,
            priceTo,
            setPriceTo,
            onlyPromo,
            setOnlyPromo,
            brandSearch,
            setBrandSearch,
            availableBrands,
            availableColors,
            availableMaterials,
            availableMayatnik,
            availableYashik,
          }}
        />

        {/* Қисми рост (Маҳсулот) */}
        <Box sx={{ flexGrow: 1 }}>
          <select
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
            style={{
              fontSize: "12px",
              color: "#446B80",
              fontWeight: 600,
              border: "1px solid #E5EEF3",
              padding: "6px 12px",
              borderRadius: "6px",
              marginBottom: "24px",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="by popularity">популярности</option>
            <option value="by price">цене</option>
            <option value="by rating">рейтингу</option>
            <option value="by name">названию</option>
            <option value="by discount">скидке</option>
          </select>

          {loading ? (
            <Grid container spacing={3}>
              {[...Array(6)].map((_, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Skeleton
                    variant="rectangular"
                    height={220}
                    sx={{ borderRadius: "12px", backgroundColor: "#F2F7FA" }}
                  />
                </Grid>
              ))}
            </Grid>
          ) : displayedProducts.length > 0 ? (
            <Grid container spacing={3}>
              {displayedProducts.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={item.id || index + 1}>
                  <ProductCard item={item} index={index} navigate={navigate} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box
              sx={{
                textAlign: "center",
                py: "60px",
                border: "1px dashed #E5EEF3",
                borderRadius: "12px",
              }}
            >
              <Typography
                sx={{ fontSize: "16px", color: "#446B80", fontWeight: 600 }}
              >
                Продукты закончились / Товары не найдены
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "#A9C4D2", mt: "8px" }}
              >
                Попробуйте изменить параметры фильтрации
              </Typography>
            </Box>
          )}

          {/* Скелетоны ҳангоми боркунии 8 таи нав */}
          {loadingMore && (
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {[...Array(3)].map((_, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Skeleton
                    variant="rectangular"
                    height={220}
                    sx={{ borderRadius: "12px", backgroundColor: "#F2F7FA" }}
                  />
                </Grid>
              ))}
            </Grid>
          )}

          {/* Тугмаи Показать еще */}
          {hasMore && !loadingMore && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
              <Button
                onClick={handleLoadMore}
                sx={{
                  width: "220px",
                  height: "40px",
                  borderRadius: "20px",
                  border: "1px solid #7FC9F0",
                  color: "#7FC9F0",
                  fontSize: "13px",
                  textTransform: "none",
                  fontWeight: 500,
                  backgroundColor: "#FFFFFF",
                  "&:hover": { backgroundColor: "#7FC9F0", color: "#FFFFFF" },
                }}
              >
                Показать еще
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* Маҳсулоти шабеҳ */}
      <SimilarProductsContainer />
    </Box>
  );
}
