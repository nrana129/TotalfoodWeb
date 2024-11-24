import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom"; // useLocation hook import
import { ShimmerCircularImage, ShimmerText } from "react-shimmer-effects";
import { getData } from "../../../utils/api";

const ShopByCategories = ({ title, description, setCategoryBannerImage }) => {
  const [categoriesData, CategoriesSData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation(); // useLocation hook to track current route

  const fetchShopCategorielData = () => {
    getData("/categories") // API endpoint
      .then((response) => {
        console.log("responseNaveen", response);
        if (response?.status === true) {
          CategoriesSData(response.categories); // Set the data in state
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

  useEffect(() => {
    fetchShopCategorielData();
  }, []);

  const handleCategoryClick = (categoryImage) => {
    // Store the banner image in local storage
    localStorage.setItem("categoryBanner", categoryImage);
    setCategoryBannerImage(categoryImage); // Update parent state
  };

  const divs = Array.from({ length: 12 });

  if (loading) {
    return (
      <div className="categories_loader">
        {divs.map((_, index) => (
          <div className="loader_circluar" key={index}>
            <ShimmerCircularImage className="circluar" />
            <ShimmerText line={1} height={20} className="text_line"/>
          </div>
        ))}
      </div>
    );
  }

  if (error || !Array.isArray(categoriesData) || categoriesData.length === 0) {
    return <div>Error: No data available</div>; // Handle case where no data is available or error occurred
  }

  // Filter categories that have an image
  const filteredCategories = categoriesData.filter(
    (category) => category.image
  );

  // Add categoryName as a URL-friendly string
  filteredCategories.forEach((category) => {
    category.categoryName = category.name.toLowerCase().replace(/\s+/g, "-");
  });

  return (
    <div className="ShopByCategories my-10">
      <div className="container">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}

        <ul>
          {filteredCategories.map((data) => {
            const isActive = location.pathname.includes(data.categoryName); // Check if the category is active
            return (
              <li key={data.id}>
                <Link
                  to={`/${data.categoryName}/${data.id}`}
                  className={isActive ? "active" : ""} // Add active class if category is active
                  onClick={() => handleCategoryClick(data.banner_image)} // Pass the correct category image
                >
                  <span className="product_img">
                    <img src={data.image} alt={`Categories-${data.id}`} />
                  </span>
                  <h3>{data.name}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ShopByCategories;
