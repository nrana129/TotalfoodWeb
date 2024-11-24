import React, { useState, useEffect } from "react";
import { getData } from "../../../utils/api";
import { useSelector } from "react-redux";
import { ShimmerThumbnail } from "react-shimmer-effects";

const ListCoupon = () => {
  const [activeCoupons, setActiveCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copiedCoupon, setCopiedCoupon] = useState(null);
  const auth = useSelector((state) => state.auth);

  const fetchActiveCoupons = () => {
    const token = auth.token;

    if (!token) {
      setError("No authentication token found");
      setLoading(false);
      return;
    }

    getData("activecoupons", token)
      .then((response) => {
        if (response?.status === true) {
          setActiveCoupons(response.data);
        } else {
          setError("No data available");
        }
      })
      .catch((error) => {
        setError("Failed to fetch coupons");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchActiveCoupons();
  }, [auth.token]);

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log("Copied Code:", code); // Debugging
        setCopiedCoupon(code);
        setTimeout(() => setCopiedCoupon(null), 2000); // Reset after 2 seconds
      })
      .catch((error) => {
        console.error("Failed to copy coupon code:", error);
      });
  };

  if (loading) {
    return (
      <div>
        <ShimmerThumbnail height={120} rounded />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {activeCoupons.length > 0 ? (
        activeCoupons.map((coupon) => (
          <li key={coupon.id}>
            <p>{coupon.name}</p>
            <div className="avail_box">
              <span className="tooltip-trigger">T&amp;C Apply</span>
              <div className="tooltip-content">{coupon.description}</div>
            </div>
            <div className="d_flex">
              <p>*Offer valid till {coupon.valid_till}</p>
            </div>
            <div className="code_btn">
              <button
                className="coupon-code"
                onClick={() => handleCopy(coupon.code)}
              >
                Use Code: <span className="text-to-copy">{coupon.code}</span>
              </button>
              {copiedCoupon === coupon.code && (
                <p
                  className="copynotification"
                  style={{ color: "green", fontSize: "16px", marginTop: "5px" }}
                >
                  Coupon copied! 🎉
                </p>
              )}
            </div>
          </li>
        ))
      ) : (
        <p>No coupons available.</p>
      )}
    </ul>
  );
};

export default ListCoupon;
