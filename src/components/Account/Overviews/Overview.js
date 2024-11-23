import React, { useState, useEffect } from "react";
import { Bag, LocationIcon } from "../../../assets/images";
import OverviewTabs from "./OverviewTabs/OverviewTabs";
import TotalMoney from "./TotalMoney/TotalMoney";
import styles from "./Overview.module.css";
import RightBanner from "./RightBanner/RightBanner";
import { getData } from "../../../utils/api";
import { useSelector } from "react-redux";
import { ShimmerThumbnail } from "react-shimmer-effects";

const Overview = () => {
  const [overview, setOverview] = useState(null); // Default is null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = useSelector((state) => state.auth);

  const fetchOrderData = () => {
    const token = auth.token;

    // if (!token) {
    //   setError("No authentication token found");
    //   setLoading(false);
    //   return;
    // }

    getData("customers/me", token)
      .then((response) => {
        console.log("Response:", response);
        if (response) {
          setOverview(response);
        } else {
          setError("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching order data:", error);
        setError("Failed to fetch orders");
      })
      .finally(() => setLoading(false));
  };

  console.log("overviewoverview", overview);

  useEffect(() => {
    fetchOrderData();
  }, [auth.token]);

  if (loading)
    return (
      <div className={styles.overviewMainLoader}>
        <div className="overviewTopLoader">
          <ShimmerThumbnail height={20} rounded />
          <ShimmerThumbnail height={80} rounded />
          <div className={styles.overviewInnerLoader}>
            <ShimmerThumbnail height={62} rounded className={styles.overviewItem} />
            <ShimmerThumbnail height={62} rounded className={styles.overviewItem} />
            <ShimmerThumbnail height={62} rounded className={styles.overviewItem} />
          </div>
        </div>
        <div className={styles.overviewBottomLoader}>
          <ShimmerThumbnail height={20} rounded />
          <div className={styles.overviewInnerLoader}>
            <ShimmerThumbnail height={58} rounded className={styles.overviewItem} />
            <ShimmerThumbnail height={58} rounded className={styles.overviewItem} />
            <ShimmerThumbnail height={58} rounded className={styles.overviewItem} />
          </div>
        </div>
      </div>
    );
  if (error) return <div>{error}</div>;

  const { firstname, lastname, email, addresses } = overview || {};

  return (
    <div className={styles.overview_section}>
      <div className={styles.overview_inner}>
        <h2>Overview</h2>
        <div className={styles.profile_section}>
          <div className={styles.left_section}>
            <main>
              <div className={styles.profile}>
                <div className={styles.profile_first_name}>
                  <span>{firstname?.[0] || "U"}</span>
                </div>
                <div className={styles.profile_name}>
                  <h3>
                    Hi, {firstname} {lastname}
                  </h3>
                  <div className={styles.mail_id}>{email}</div>
                  <div className={styles.mobile_number}>
                    {addresses?.[0]?.telephone || "N/A"}
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div className={styles.right_section}>
            <a href="">Edit</a>
          </div>
        </div>
        <div className={styles.bottom_section}>
          <ul className="flex gap-10">
            <OverviewTabs
              title="My Order"
              description="Check Order Status"
              icons={Bag}
            />
            <OverviewTabs
              title="Delivery Address"
              description="Manage Address"
              icons={LocationIcon}
            />
            <OverviewTabs
              title="Transaction History"
              description="Credit, Refund"
              icons={LocationIcon}
            />
          </ul>
        </div>
        <div className="total_money_section">
          <TotalMoney />
        </div>
      </div>
      <RightBanner />
    </div>
  );
};

export default Overview;
