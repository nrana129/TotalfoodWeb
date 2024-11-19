import React from "react";
import Tabs from "../Tabs/Tabs";
import ListCoupon from "./ListCoupon";

const AvailableCoupon = () => {
  return (
    <div>
      <div className="container">
        <main className="account AvailableCoupon">
          <div className="left_section">
            <Tabs />
          </div>
          <div className="right_section">
            <h2>available coupon</h2>
            <ul>
                <ListCoupon/>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AvailableCoupon;
