import React, { useState, useEffect } from "react";
import ImageSlider from "../../components/ProductDetail/ImageSlider";
import RightSec from "../../components/ProductDetail/RightSec";
import FoodVideo from "../../components/HomePage/FoodVideo/FoodVideo";
import { getData } from "../../utils/api";
import "./ProductDetailPage.scss";

const ProductDetailPage = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTrendingData = () => {
    getData("/product/details/Frozen-Chicken-Precut?sourcecode=ST0008") // API endpoint
      .then((response) => {
        console.log("responseNaveen", response);
        if (response?.status === true) {
          setProductDetail(response.data); // Set the data in state
        } else {
          setError("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching banner data:", error);
        setError("Failed to fetch banners");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  console.log("productDetailproductDetail", productDetail);
  useEffect(() => {
    fetchTrendingData();
  }, []);

  return (
    <>
      <div className="flex gap-10 custom_product_detail">
        <ImageSlider />
        <RightSec productDetail={productDetail} />
      </div>
      <FoodVideo />
    </>
  );
};

export default ProductDetailPage;
