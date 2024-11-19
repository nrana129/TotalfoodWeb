import React from "react";
import styles from "./TotalMoneyTabs.module.css"

const TotalMoneyTabs = ({title, description, icons}) => {
  return (
    <li className={styles.TotalMoneySection}>
      <span className={styles.money_icon}>
        <img
          src={icons}
          alt={icons}
        />
      </span>
      <div className={styles.money_content}>
        <span className={styles.money_title}>{title}</span>
        <span className={styles.money_para}>{description}</span>
      </div>
    </li>
  );
};

export default TotalMoneyTabs;
