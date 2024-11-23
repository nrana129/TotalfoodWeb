import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../../utils/api";
import { ShimmerThumbnail } from "react-shimmer-effects";

const TrendingDelights = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTrendingData = () => {
    setLoading(true);
    getData("/trending") // API endpoint
      .then((response) => {
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
        {loading ? (
          <ul className="flex flex-wrap">
            {/* Generate dynamic shimmer effects */}
            {Array.from({ length: trendingData.length || 8 }).map(
              (_, index) => (
                <li key={index} className="w-1/4 px-3">
                  <ShimmerThumbnail height={305} rounded />
                </li>
              )
            )}
          </ul>
        ) : error ? (
          <div>{error}</div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default TrendingDelights;
