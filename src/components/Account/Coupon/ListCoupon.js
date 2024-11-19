import React from "react";

const ListCoupon = () => {
  return (
    <li>
      <p>Welcome </p>
      <div class="avail_box">
        <span class="tooltip-trigger">T&amp;C Apply</span>
        <div class="tooltip-content">Get 15% off on all veg items</div>
      </div>
      <div class="d_flex">
        <p>*Offer valid till 2024-09-19</p>
      </div>
      <div class="code_btn">
        <a class="coupon-code">
          Use Code: <span class="text-to-copy">WELCOME</span>
        </a>
        <p class="copynotification">Coupon copied! 🎉</p>
      </div>
    </li>
  );
};

export default ListCoupon;
