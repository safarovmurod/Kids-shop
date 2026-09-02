import { useEffect, useMemo, useReducer, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  Skeleton,
} from "@mui/material";
import { FilterListOutlined } from "@mui/icons-material";
import { NavLink, useParams, useSearchParams } from "react-router";
import { getList } from "../api/api";
import ProductCard from "../components/ProductCard";
import CatalogFilters from "../components/catalog/CatalogFilters";
import FiltersDialog from "../components/catalog/FiltersDialog";
import SubCategories from "../components/catalog/SubCategories";
import {
  getOptions,
  filterProducts,
  sortProducts,
} from "../components/catalog/filter";
import { reducer, initialState } from "../components/catalog/catalogReducer";
import { getCategory, getSubcategory, sortOptions } from "../data/data";
import NotFound from "./NotFound";

export default function CatalogPage() {
  const { category, subcategory } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [openFilters, setOpenFilters] = useState(false);
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const currentCategory = getCategory(category);
  const currentSub = getSubcategory(currentCategory, subcategory);

  async function get() {
    dispatch({ type: "setLoading", payload: true });

    let answer = null;

    if (search) {
      answer = await getList("search", { search, pageSize: 60 });
    } else if (subcategory) {
      answer = await getList("subcategory", {
        category,
        subcategory,
        pageSize: 60,
      });
    } else {
      answer = await getList("category", { category, pageSize: 60 });
    }

    dispatch({ type: "setProducts", payload: answer.list });
    dispatch({ type: "setLoading", payload: false });
  }

  useEffect(() => {
    if (currentCategory) {
      get();
    }
  }, [category, subcategory, search]);

  const options = useMemo(() => getOptions(state.products), [state.products]);

  const products = useMemo(() => {
    return sortProducts(filterProducts(state.products, state), state.sortValue);
  }, [state]);

  if (!currentCategory) {
    return <NotFound />;
  }

  const shown = products.slice(0, state.visibleCount);

  let title = currentCategory.name;

  if (currentSub) {
    title = currentSub.name;
  }

  if (search) {
    title = `Поиск: ${search}`;
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
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Typography
          component={NavLink}
          to="/"
          sx={{ color: "#A9B7C0", fontSize: "12px", textDecoration: "none" }}
        >
          Главная
        </Typography>

        <Typography sx={{ color: "#A9B7C0", fontSize: "12px" }}>›</Typography>

        <Typography
          component={NavLink}
          to={`/catalog/${currentCategory.slug}`}
          sx={{ color: "#A9B7C0", fontSize: "12px", textDecoration: "none" }}
        >
          {currentCategory.name}
        </Typography>

        {currentSub && (
          <>
            <Typography sx={{ color: "#A9B7C0", fontSize: "12px" }}>
              ›
            </Typography>

            <Typography sx={{ color: "#446B80", fontSize: "12px" }}>
              {currentSub.name}
            </Typography>
          </>
        )}
      </Box>

      <Typography
        sx={{
          marginBottom: "20px",
          color: "#446B80",
          fontSize: { xs: "30px", lg: "32px" },
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>

      <Box sx={{ display: { xs: "block", lg: "none" }, marginBottom: "20px" }}>
        <SubCategories category={currentCategory} activeSlug={subcategory} />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "300px 1fr" },
          gap: "30px",
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <SubCategories category={currentCategory} activeSlug={subcategory} />

          <CatalogFilters
            state={state}
            dispatch={dispatch}
            options={options}
          />
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            <Button
              onClick={() => setOpenFilters(true)}
              startIcon={<FilterListOutlined sx={{ fontSize: "18px" }} />}
              sx={{
                display: { xs: "inline-flex", lg: "none" },
                height: "40px",
                paddingLeft: "16px",
                paddingRight: "16px",
                borderRadius: "8px",
                border: "1px solid #E5EEF3",
                color: "#446B80",
                fontSize: "13px",
                textTransform: "none",
              }}
            >
              Фильтры
            </Button>

            <Select
              size="small"
              value={state.sortValue}
              onChange={(e) =>
                dispatch({ type: "setSort", payload: e.target.value })
              }
              sx={{
                height: "40px",
                borderRadius: "8px",
                color: "#446B80",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {sortOptions.map((el) => (
                <MenuItem key={el.value} value={el.value}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </Box>

          {state.loading ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(3, 1fr)" },
                gap: { xs: "12px", lg: "24px" },
              }}
            >
              <Skeleton variant="rectangular" height={320} />
              <Skeleton variant="rectangular" height={320} />
              <Skeleton variant="rectangular" height={320} />
              <Skeleton variant="rectangular" height={320} />
              <Skeleton variant="rectangular" height={320} />
              <Skeleton variant="rectangular" height={320} />
            </Box>
          ) : (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(3, 1fr)" },
                gap: { xs: "12px", lg: "24px" },
              }}
            >
              {shown.map((el) => (
                <ProductCard key={el.id} item={el} />
              ))}
            </Box>
          )}

          {shown.length === 0 && !state.loading && (
            <Typography
              sx={{
                paddingTop: "40px",
                color: "#446B80",
                fontSize: "15px",
                textAlign: "center",
              }}
            >
              Товары не найдены
            </Typography>
          )}

          {state.visibleCount < products.length && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <Button
                onClick={() => dispatch({ type: "more" })}
                sx={{
                  width: { xs: "100%", lg: "240px" },
                  height: "46px",
                  borderRadius: "23px",
                  border: "1px solid #7FC9F0",
                  color: "#7FC9F0",
                  fontSize: "14px",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#7FC9F0", color: "#FFFFFF" },
                }}
              >
                Показать еще
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      <FiltersDialog
        open={openFilters}
        onClose={() => setOpenFilters(false)}
        state={state}
        dispatch={dispatch}
        options={options}
        total={products.length}
      />
    </Box>
  );
}
