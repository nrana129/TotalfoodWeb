import React, { useEffect, useState } from "react";
import Sdata from "./Sdata";
// import img from "next/img";
import { Link } from "react-router-dom";
import { getData } from "../../../utils/api";

const TrendingDelights = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  const fetchTrendingData = () => {
    getData("/trending") // API endpoint
      .then((response) => {
        console.log("responseNaveen", response)
        if (response?.status === true) {
          setTrendingData(response.categories); // Set the data in state

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

  console.log("trendingDatatrendingData", trendingData);
  useEffect(() => {
    fetchTrendingData();
  }, []);

  

  trendingData.forEach((category) => {
    category.categoryName = category.name.toLowerCase().replace(/\s+/g, "-");
  });

  return (
    <div className="TrendingDelights">
      <div className="container">
        <h3>
          Trending Delights<span className="icon-smile"></span>
        </h3>
        <ul className="flex flex-wrap">
          {trendingData.map((data) => (
            <li key={data.id} className="w-1/4 px-3">
              <Link to={`${data.categoryName}/${data.id}`}>
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

export default TrendingDelights;
