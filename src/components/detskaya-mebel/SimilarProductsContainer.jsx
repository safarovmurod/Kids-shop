import React, { useState, useEffect } from "react";
import { fetchProductsByEndpoint } from "./api";
import SimilarProducts from "./SimilarProducts";

export default function SimilarProductsContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadSimilar() {
      const data = await fetchProductsByEndpoint("krovatki");
      setProducts(data);
    }
    loadSimilar();
  }, []);

  return <SimilarProducts products={products} />;
}
