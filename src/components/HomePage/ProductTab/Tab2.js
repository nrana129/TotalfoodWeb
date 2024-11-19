// "use client";

import React from "react";
import Sdata from "./Sdata";
// import img from "next/img";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

const Tab2 = () => {
  return (
    <div className="mustTry">
      <div className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mustSlider"
        >
          {Sdata.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <div className="img_dev">
                  <img src={data.img} className="rounded-xl" />
                </div>
                <h2 className="title mt-3">{data.name}</h2>
                <div className="flex justify-between items-center mt-3">
                  <span className="price">{`₹${data.price}`}</span>
                  <button className="add_btn">Add</button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Tab2;
