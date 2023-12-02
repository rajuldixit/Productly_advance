import React, { useCallback, useEffect } from "react";
import useProductsApi from "../lib/ProductsApi";
import { IProduct } from "../utils/interfaces";

const Product = () => {
  const { products, errorMessage, getProducts } = useProductsApi();
  const fetchProducts = useCallback(async () => {
    await getProducts();
  }, [getProducts]);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (products.length == 0) {
    return <h1>Loading...</h1>;
  }
  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }
  const productsLoaded = () => {
    const maxProducts = 50;
    return (products.length / maxProducts) * 100;
  };
  return (
    <>
      <div>
        <span>Products loaded</span>
        <div
          style={{
            width: "400px",
            background: "#d0c6c6",
            height: "24px",
            borderRadius: "16px",
            marginBottom: "24px"
          }}
        >
          <div
            style={{
              width: `${productsLoaded()}%`,
              background: "steelblue",
              height: "24px",
              borderRadius: "16px"
            }}
          ></div>
        </div>
      </div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <h6>{product.description}</h6>
        </div>
      ))}
    </>
  );
};

export default Product;
