import React from "react";
import { Bag, LocationIcon } from "../../../assets/images";
import OverviewTabs from "./OverviewTabs/OverviewTabs";
import TotalMoney from "./TotalMoney/TotalMoney";
import styles from "./Overview.module.css";
import RightBanner from "./RightBanner/RightBanner";

const Overview = () => {
  return (
    <div className={styles.overview_section}>
      <div className={styles.overview_inner}>
      <h2>overview</h2>
      <div className={styles.profile_section}>
        <div className={styles.left_section}>
          <main>
            <div className={styles.profile}>
              <div className={styles.profile_first_name}>
                <span>N</span>
              </div>
              <div className={styles.profile_name}>
                <h3>Hi, Naveen Rana</h3>
                <div className={styles.mail_id}>naveenrana.gh@gmail.com</div>
                <div className={styles.mobile_number}>+91 9811266319</div>
              </div>
            </div>
          </main>
        </div>
        <div className={styles.right_section}>
          <a href="">Edit</a>
        </div>
      </div>
      <div className={styles.bottom_section}>
        <ul className="flex gap-20">
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
            title="Transation History"
            description="Credit, Refurnd"
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
