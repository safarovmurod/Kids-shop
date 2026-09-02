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
import { NavLink } from "react-router";
import { fetchProductsByEndpoint } from "../components/detskaya-mebel/api";
import ProductCard from "../components/detskaya-mebel/ProductCard";
import Filters from "../components/detskaya-mebel/Filters";
import FiltersDialog from "../components/detskaya-mebel/FiltersDialog";
import SubCategories from "../components/detskaya-mebel/SubCategories";
import SimilarProducts from "../components/detskaya-mebel/SimilarProducts";
import {
  getOptions,
  filterProducts,
  sortProducts,
} from "../components/detskaya-mebel/filter";
import { reducer, initialState } from "../components/detskaya-mebel/reducer";
import { sortOptions } from "../data/data";

export default function DetskayaMebelPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [openFilters, setOpenFilters] = useState(false);

  async function get() {
    dispatch({ type: "setLoading", payload: true });
    const data = await fetchProductsByEndpoint(state.sub.endpoint);
    dispatch({ type: "setProducts", payload: data });
    dispatch({ type: "setLoading", payload: false });
  }

  useEffect(() => {
    get();
  }, [state.sub]);

  const options = useMemo(() => getOptions(state.products), [state.products]);

  const products = useMemo(() => {
    return sortProducts(filterProducts(state.products, state), state.sortValue);
  }, [state]);

  const shown = products.slice(0, state.visibleCount);

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
          gap: "8px",
          marginBottom: "20px",
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

        <Typography sx={{ color: "#446B80", fontSize: "11px" }}>
          {state.sub.name}
        </Typography>
      </Box>

      <Typography
        sx={{
          marginBottom: "20px",
          color: "#446B80",
          fontSize: { xs: "28px", lg: "32px" },
          fontWeight: 600,
        }}
      >
        {state.sub.name}
      </Typography>

      <Box sx={{ display: { xs: "block", lg: "none" }, marginBottom: "20px" }}>
        <SubCategories
          active={state.sub}
          onChange={(el) => dispatch({ type: "setSub", payload: el })}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "321px 1fr" },
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
          <SubCategories
            active={state.sub}
            onChange={(el) => dispatch({ type: "setSub", payload: el })}
          />

          <Filters state={state} dispatch={dispatch} options={options} />
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
              <Skeleton variant="rectangular" height={280} />
              <Skeleton variant="rectangular" height={280} />
              <Skeleton variant="rectangular" height={280} />
              <Skeleton variant="rectangular" height={280} />
            </Box>
          ) : (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(3, 1fr)" },
                gap: { xs: "12px", lg: "24px" },
              }}
            >
              {shown.map((item) => (
                <ProductCard key={item.id} item={item} />
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
                  width: { xs: "100%", lg: "220px" },
                  height: "44px",
                  borderRadius: "22px",
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

      <SimilarProducts />

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
