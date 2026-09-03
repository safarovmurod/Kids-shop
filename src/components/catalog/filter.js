// Аз рӯйхати маҳсулот вариантҳои филтрро ҷамъ мекунад
export function getOptions(products) {
  const brands = [];
  const colors = [];
  const materials = [];

  products.forEach((item) => {
    if (item.brand && !brands.includes(item.brand)) {
      brands.push(item.brand);
    }

    if (item.colorOptions) {
      item.colorOptions.forEach((color) => {
        if (!colors.includes(color)) {
          colors.push(color);
        }
      });
    }

    if (item.materials) {
      item.materials.forEach((material) => {
        if (!materials.includes(material)) {
          materials.push(material);
        }
      });
    }
  });

  return { brands, colors, materials };
}

// Ҳар product бояд ба ҳамаи filter-ҳои интихобшуда мувофиқ бошад; return false онро аз натиҷа мебарорад.
export function filterProducts(products, state) {
  return products.filter((item) => {
    if (state.priceFrom && item.price < Number(state.priceFrom)) {
      return false;
    }

    if (state.priceTo && item.price > Number(state.priceTo)) {
      return false;
    }

    if (state.onlyPromo && !item.isPromo) {
      return false;
    }

    if (state.brands.length > 0 && !state.brands.includes(item.brand)) {
      return false;
    }

    // some кофӣ будани як ранги мувофиқро месанҷад; барои materials ҳам ҳамин қоида аст.
    if (state.colors.length > 0) {
      const colors = item.colorOptions || [];

      if (!colors.some((el) => state.colors.includes(el))) {
        return false;
      }
    }

    if (state.materials.length > 0) {
      const materials = item.materials || [];

      if (!materials.some((el) => state.materials.includes(el))) {
        return false;
      }
    }

    return true;
  });
}

// Нусхаи array-ро sort мекунад, то array-и state тағйир наёбад.
// Барои popularity comparator 0 медиҳад, яъне тартиби аз API омадаро нигоҳ медорад.
export function sortProducts(products, sortValue) {
  const list = [...products];

  list.sort((a, b) => {
    if (sortValue === "price") {
      return a.price - b.price;
    }

    if (sortValue === "rating") {
      return b.rating - a.rating;
    }

    if (sortValue === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortValue === "discount") {
      return (b.discount || 0) - (a.discount || 0);
    }

    return 0;
  });

  return list;
}
