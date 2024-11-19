import React from "react";
// import img from "next/img";
import { TotalBanner } from "../../../assets/images/index";

const TotalClubBanner = () => {
  return (
    <div className="my-10">
      <div className="container">
        <img src={TotalBanner} />
      </div>
    </div>
  );
};

export default TotalClubBanner;
