import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ resp, setLoading, onProductClick }) => {
  console.log("resprespresp", resp);
  return (
    <div className="product_card_main">
      {resp &&
        resp.map((product, index) => {
          return (
            <ProductCard
              product={product}
              handleProductClick={onProductClick}
            />
          );
        })}
    </div>
  );
};

export default Products;
