import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShopByCategories from "../../components/HomePage/ShopByCategories/ShopByCategories";
import Products from "../../components/ProductCard/Products";
import { getData } from "../../utils/api";
import "./ProductList.scss";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Product = () => {
  const { categoryId } = useParams();
  const [isProductData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productListData = () => {
    setLoading(true); // Start loading when API call begins
    getData(
      `/productlisting/category/${categoryId}?sourcecode=ST0008&page=1&pageSize=8&sortBy=as`
    )
      .then((response) => {
        console.log("responseListPage", response);
        if (response?.status === true) {
          setProductData(response.data); // Set the data in state
        } else {
          setError("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setError("Failed to fetch products");
      })
      .finally(() => {
        setLoading(false); // Stop loading after API call finishes
      });
  };

  console.log("isProductDataisProductData", isProductData);

  useEffect(() => {
    productListData();
  }, [categoryId]);

  return (
    <div className="product_main">
      <div className="left_section">
        <ShopByCategories />
      </div>
      <div className="right_section">
        {loading ? (
          <div className="loading_spinner">
            <ShimmerSimpleGallery card imageHeight={300} />
          </div>
        ) : error ? (
          <div className="error_message">{error}</div>
        ) : (
          <Products resp={isProductData} setLoading={setLoading} />
        )}
      </div>
    </div>
  );
};

export default Product;
