import React from "react";
import TotalMoneyTabs from "./TotalMoneyTabs/TotalMoneyTabs";
import { Coin, Gift, Wallet } from "../../../../assets/images";
import styles from "./TotalMoney.module.css"

const TotalMoney = () => {
  return (
    <div className={styles.total_money_section}>
      <h3 className={styles.total_title}>Total Money</h3>
      <ul className="flex gap-5">
        <TotalMoneyTabs title="Food Credits" description="Balance: ₹0" icons={Coin}/>
        <TotalMoneyTabs title="Gift Card" description="Balance: ₹0" icons={Gift}/>
        <TotalMoneyTabs title="My Wallet" description="Balance: ₹0" icons={Wallet}/>
      </ul>
    </div>
  );
};

export default TotalMoney;
