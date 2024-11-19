import React from "react";
import styles from "./OverviewTabs.module.css"

const OverviewTabs = ({ title, description, icons }) => {
  return (
    <li className={styles.overviewTabs}>
      <a href="/">
        <span className={styles.overveiw_icons}>
          <img src={icons} alt="" />
        </span>
        <div className={styles.overview_text}>
          <span className={styles.overview_head}>{title}</span>
          <span className={styles.overview_para}>{description}</span>
        </div>
      </a>
    </li>
  );
};

export default OverviewTabs;
