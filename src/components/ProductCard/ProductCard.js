import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import ProductDetailPage from "../../route/ProductDetailPage/ProductDetailPage";

// You can pass different props to customize the component
const ProductCard = ({ product, handleProductClick }) => {
  console.log("productproductproductproduct", product);
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-img">
        <Link to={`/product-detail/${product.sku}`}>
          <img src={product?.image} alt={product?.name} />
        </Link>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h3>{product?.name}</h3>
        <p>{product?.description || "No description available"}</p>

        {/* Price */}
        <div className="product-price">
          <span className="price">₹{product?.price}</span>
        </div>

        {/* Buttons or Links */}
        <div className="product-actions">
          <Link to={`/product/${product?.id}`} className="view-details-btn">
            View Details
          </Link>
          {/* Add to Cart button can be added here */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
