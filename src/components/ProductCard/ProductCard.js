import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import ProductDetailPage from "../../route/ProductDetailPage/ProductDetailPage";
import { shok_icon } from "../../assets/images";

// You can pass different props to customize the component
const ProductCard = ({ product, handleProductClick }) => {
  console.log("productproductproductproductproduct =>>>>>>", product);
  console.log("productproductproductproduct", product);
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-img">
        <Link to={`/product-detail/${product.sku}`}>
          <span className="diet_icon">
            <img src={product?.diet_icon} alt={product?.name} />
          </span>
          <img src={product?.image} alt={product?.name} />
          <span className="express_delivery_time">
            {product.express_delivery_time}
          </span>
        </Link>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h3>{product?.name}</h3>
        {/* <p>{product?.description || "No description available"}</p> */}



        {/* Serve */}
        <div className="product-serves">
          <span className="serves">₹{product?.ksp}</span>
        </div>



        {/* Price */}
        <div className="product-price">
          <span className="price">₹{product?.price}</span>
        </div>

        {/* Buttons or Links */}
        <div className="product-actions">
          {/* <Link to={`/product/${product?.id}`} className="view-details-btn">
            View Details
          </Link> */}
          {/* Add to Cart button can be added here */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
