import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShopByCategories from "../../components/HomePage/ShopByCategories/ShopByCategories";
import Products from "../../components/ProductCard/Products";
import { getData } from "../../utils/api";
import "./ProductCategory.scss";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import Sort from "../../components/Sort/Sort";

const Product = (order) => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [isProductData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryBannerImage, setCategoryBannerImage] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); 

  const productListData = () => {
    setLoading(true);
    getData(
      `/productlisting/category/${categoryId}?sourcecode=ST0008&page=1&pageSize=8&sortBy=${order}`
    )
      .then((response) => {
        if (response?.status === true) {
          setProductData(response.data);
        } else {
          setError("No data available");
        }
      })
      .catch((error) => {
        setError("Failed to fetch products");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    productListData(sortOrder);
    // Check if there's a banner image stored in local storage
    const storedBanner = localStorage?.getItem("categoryBanner");
    if (storedBanner) {
      setCategoryBannerImage(storedBanner);
    }
  }, [categoryId, sortOrder]);

  // Click handler for navigating to product detail
  const handleProductClick = (sku) => {
    console.log("skusku", sku);
    navigate(`/product-detail/${sku}`); // Navigate to product detail page with SKU
  };

  const handleSortChange = (order) => {
    setSortOrder(order); // Update sort order state
  };

  return (
    <div className="product_main">
      <div className="left_section">
        <ShopByCategories />
      </div>
      <div className="right_section">
        {categoryBannerImage && (
          <div className="category_banner">
            <img src={categoryBannerImage} alt="Category Banner" />
          </div>
        )}

        <div className="toolbar">
          <div className="toolbar-amount">
            {loading
              ? "Loading..."
              : isProductData.length > 0
              ? `${isProductData.length} Choices`
              : "No products available"}
          </div>
          <Sort onSortChange={handleSortChange}  />
        </div>

        {loading ? (
          <div className="loading_spinner">
            <ShimmerSimpleGallery card imageHeight={300} />
          </div>
        ) : error ? (
          <div className="error_message">{error}</div>
        ) : (
          <Products
            resp={isProductData}
            onProductClick={handleProductClick} // Pass click handler
          />
        )}
      </div>
    </div>
  );
};

export default Product;
