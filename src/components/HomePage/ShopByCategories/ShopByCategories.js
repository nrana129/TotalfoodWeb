import React, { useState, useEffect } from "react";
// import img from "next/img";
import Sdata from "./Sdata";
import { Outlet, Link } from "react-router-dom";
import { ShimmerButton } from "react-shimmer-effects";
import { getData } from "../../../utils/api";

const ShopByCategories = ({ title, description }) => {
  const [categoriesData, CategoriesSData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  console.log("categoriesDatacategoriesData", categoriesData)

  useEffect(() => {
    fetchShopCategorielData();
  }, []);

  const divs = Array.from({ length: 12 });

  if (loading) {
    return (
      <div className="categories_loader">
        {divs.map((_, index) => (
          <ShimmerButton size="md" />
        ))}
      </div>
    );
  }

  if (error || !Array.isArray(categoriesData) || categoriesData.length === 0) {
    return <div>Error: No data available</div>; // Handle case where no data is available or error occurred
  }

  // console.log(categoriesData);

  const filteredCategories = categoriesData.filter(
    (category) => category.image
  );

  console.log(filteredCategories);

  return (
    <div className="ShopByCategories my-10">
      <div className="container">
        
        {title ? <h2>{title}</h2> : null}
        {description ? <p>{description}</p> : null}

        <ul>
          {filteredCategories.map((data) => (
            <li key={data.id}>
              {/* <a href={`http://localhost:3000//${data.link}`}> */}
              <Link to={`/ProductList/${data.id}`} >
                <span className="product_img">
                  <img src={data.image} alt={`Categories-${data.id}`} />
                </span>
                <h3>{data.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopByCategories;
