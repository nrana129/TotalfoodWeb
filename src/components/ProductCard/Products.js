import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ resp, setLoading }) => {
  console.log("resprespresp", resp);
  return (
    <div className="product_card_main">
      {resp &&
        resp.map((product, index) => {
          return <ProductCard product={product} />;
        })}
    </div>
  );
};

export default Products;
