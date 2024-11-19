import React from "react";
import Refer from "../../../assets/images/account/refer.jpg";
import Tabs from "../Tabs/Tabs";

const ReferEarn = () => {
  return (
    <div className="container">
      <div className=" account refer_image">
        <div className="left_section">
          <Tabs />
        </div>
        <div className="right_section">
          <h2>refer earn</h2>
          <img src={Refer} alt={Refer} />
        </div>
      </div>
    </div>
  );
};

export default ReferEarn;
