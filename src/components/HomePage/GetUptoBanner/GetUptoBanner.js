import React, { useState, useEffect } from "react";
import { getData } from "../../../utils/api";
import { ShimmerThumbnail } from "react-shimmer-effects";

const GetUptoBanner = () => {
  const [getUptoBanner, setGetUptoBanner] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGetUptoData = () => {
    setLoading(true);
    getData("/staticblock/offer-banner") // API endpoint
      .then((response) => {
        if (response?.status === true) {
          setGetUptoBanner(response.data); // Set the data in state
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

  console.log("getUptoBannergetUptoBanner", getUptoBanner);
  useEffect(() => {
    fetchGetUptoData();
  }, []);

  return (
    <div className=" GetUptoBanner">
      {/* {JSON.stringify(getUptoBanner)} */}
      <div className="container">
        {loading ? (
          <ShimmerThumbnail height={400} rounded />
        ) : (
          <img
            className="pagebuilder-mobile-hidden"
            src={getUptoBanner.image_urls}
          />
        )}
      </div>
    </div>
  );
};

export default GetUptoBanner;
