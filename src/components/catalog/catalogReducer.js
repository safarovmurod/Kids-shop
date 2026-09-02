function toggleItem(list, item) {
  if (list.includes(item)) {
    return list.filter((el) => el !== item);
  }

  return [...list, item];
}

export const initialState = {
  products: [],
  loading: false,
  visibleCount: 12,
  sortValue: "popularity",
  priceFrom: "",
  priceTo: "",
  onlyPromo: false,
  brandSearch: "",
  brands: [],
  colors: [],
  materials: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "setProducts":
      return { ...state, products: action.payload, visibleCount: 12 };

    case "setLoading":
      return { ...state, loading: action.payload };

    case "setSort":
      return { ...state, sortValue: action.payload };

    case "setPriceFrom":
      return { ...state, priceFrom: action.payload };

    case "setPriceTo":
      return { ...state, priceTo: action.payload };

    case "setPromo":
      return { ...state, onlyPromo: action.payload };

    case "setBrandSearch":
      return { ...state, brandSearch: action.payload };

    case "toggleBrand":
      return { ...state, brands: toggleItem(state.brands, action.payload) };

    case "toggleColor":
      return { ...state, colors: toggleItem(state.colors, action.payload) };

    case "toggleMaterial":
      return {
        ...state,
        materials: toggleItem(state.materials, action.payload),
      };

    case "removeChip":
      return {
        ...state,
        brands: state.brands.filter((el) => el !== action.payload),
        colors: state.colors.filter((el) => el !== action.payload),
        materials: state.materials.filter((el) => el !== action.payload),
      };

    case "reset":
      return {
        ...state,
        priceFrom: "",
        priceTo: "",
        onlyPromo: false,
        brands: [],
        colors: [],
        materials: [],
      };

    case "more":
      return { ...state, visibleCount: state.visibleCount + 12 };

    default:
      return state;
  }
}
