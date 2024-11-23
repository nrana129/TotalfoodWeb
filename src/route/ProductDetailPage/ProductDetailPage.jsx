import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/ProductDetail/ImageSlider";
import RightSec from "../../components/ProductDetail/RightSec";
import FoodVideo from "../../components/HomePage/FoodVideo/FoodVideo";
import { getData } from "../../utils/api";
import "./ProductDetailPage.scss";
import {
  ShimmerThumbnail,
  ShimmerSectionHeader,
  ShimmerText,
} from "react-shimmer-effects";

const ProductDetailPage = () => {
  const { sku } = useParams(); // Extract SKU from URL
  const [productDetail, setProductDetail] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product details based on SKU
  const fetchProductDetail = () => {
    setLoading(true); // Start loading
    getData(`/product/details/${sku}?sourcecode=ST0008`) // Dynamic API endpoint
      .then((response) => {
        if (response?.status === true) {
          setProductDetail(response.data); // Set the data in state
          setError(null); // Clear previous errors
        } else {
          setError("No product details available."); // Handle empty data
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setError("Failed to fetch product details."); // Handle API error
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  // Fetch product details on component mount or SKU change
  useEffect(() => {
    fetchProductDetail();
  }, [sku]);

  // Render loading, error, or product detail
  if (loading) {
    return (
      <div className="loading flex gap-10">
        <div className="left_section">
          <ShimmerThumbnail height={730} rounded />
        </div>
        <div className="right_section">
          <ShimmerSectionHeader />
          <ShimmerText line={8} gap={15} />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="custom_product_detail">
      <div className="flex gap-10">
        <ImageSlider images={productDetail} imageLoading={loading} />{" "}
        {/* Pass product images */}
        <RightSec productDetail={productDetail} /> {/* Pass product details */}
      </div>
      <FoodVideo />
    </div>
  );
};

export default ProductDetailPage;
