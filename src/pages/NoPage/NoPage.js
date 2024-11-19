import React from "react";
import { NoPageImg } from "../../assets/images/index";
import "../../index.css"

const NoPage = () => {
  return (
    <div className="no-route-container text-center my-20">
      <img src={NoPageImg} alt="NoPageImg" className="mx-auto my-10" style={{width: "45%"}}/>
      <p className="line-through">
        <a href="/">PLEASE RETURN TO HOME PAGE</a>
      </p>
    </div>
  );
};

export default NoPage;
