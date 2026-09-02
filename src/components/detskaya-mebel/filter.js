// Аз рӯйхати маҳсулот вариантҳои филтрро ҷамъ мекунад
export function getOptions(products) {
  const brands = [];
  const colors = [];
  const materials = [];
  const mayatnik = [];
  const yashik = [];

  products.forEach((item) => {
    const brand = item.brand || item.characteristics?.["Бренд"];

    if (brand && !brands.includes(brand)) {
      brands.push(brand);
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

    const swing = item.characteristics?.["Маятник"];

    if (swing && !mayatnik.includes(swing)) {
      mayatnik.push(swing);
    }

    const box = item.characteristics?.["Ящик для белья"];

    if (box && !yashik.includes(box)) {
      yashik.push(box);
    }
  });

  return { brands, colors, materials, mayatnik, yashik };
}

export function filterProducts(products, state) {
  return products.filter((item) => {
    if (state.priceFrom && item.price < Number(state.priceFrom)) {
      return false;
    }

    if (state.priceTo && item.price > Number(state.priceTo)) {
      return false;
    }

    if (state.onlyPromo && !item.oldPrice) {
      return false;
    }

    if (state.brands.length > 0) {
      const brand = item.brand || item.characteristics?.["Бренд"];

      if (!state.brands.includes(brand)) {
        return false;
      }
    }

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

    if (state.mayatnik.length > 0) {
      if (!state.mayatnik.includes(item.characteristics?.["Маятник"])) {
        return false;
      }
    }

    if (state.yashik.length > 0) {
      if (!state.yashik.includes(item.characteristics?.["Ящик для белья"])) {
        return false;
      }
    }

    return true;
  });
}

export function sortProducts(products, sortValue) {
  const list = [...products];

  list.sort((a, b) => {
    if (sortValue === "by price") {
      return a.price - b.price;
    }

    if (sortValue === "by rating") {
      return (b.rating || 0) - (a.rating || 0);
    }

    if (sortValue === "by name") {
      return a.name.localeCompare(b.name);
    }

    if (sortValue === "by discount") {
      return (b.discount || 0) - (a.discount || 0);
    }

    return 0;
  });

  return list;
}
