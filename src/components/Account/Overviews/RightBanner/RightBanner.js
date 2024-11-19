import React from "react";
import Refferal from '../../../../assets/images/account/Refferal.png'
import Styles from "./RightBanner.module.css"
const RightBanner = () => {
  return (
    <div className={Styles.refernal_bg}>
      <div className={Styles.refernal_icon}>
        <img
          src={Refferal}
          alt={Refferal}
        />
      </div>
      <div className={Styles.refernal_text}>
        <p>Get ₹50 for Every Referral</p>
        <a href="">Know More</a>
      </div>
      <div className={Styles.refernal_arrow}></div>
    </div>
  );
  };
export default RightBanner;
