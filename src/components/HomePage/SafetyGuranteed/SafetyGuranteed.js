import React, { useState, useEffect } from "react";
import { getData } from "../../../utils/api";
import "./SafetyGuranteed.scss";
import { ShimmerThumbnail } from "react-shimmer-effects";

const SafetyGuranteed = () => {
  const [guaranteeData, setGuaranteeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGuaranteeData = () => {
    setLoading(true);
    getData("/staticblock/ourpromise/certificate") // API endpoint
      .then((response) => {
        if (response?.status === true) {
          setGuaranteeData(response.data); // Set the data in state
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

  console.log("fetchGuaranteeData", guaranteeData);
  useEffect(() => {
    fetchGuaranteeData();
  }, []);
  return (
    <div className="mt-16">
      <div className="container">
        {/* <pre
          style={{
            backgroundColor: "#f4f4f4",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {JSON.stringify(guaranteeData, null, 2)}
        </pre> */}

        <div className="certificate_section section_space">
          <h3>Our Promise</h3>
          {loading ? (
            <ShimmerThumbnail height={250} rounded />
          ) : (
            <ul>
              {guaranteeData.image_urls &&
                guaranteeData.image_urls.map((data, id) => {
                  return (
                    <li data-aos="fade-up">
                      <img src={data.icon} alt="" />
                      <span>{data.text}</span>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SafetyGuranteed;
