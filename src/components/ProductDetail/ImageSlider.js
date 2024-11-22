import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const ImageSlider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <div className="left_section">
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        freeMode={true}
        centeredSlidesBounds={true}
        navigation
        pagination
        modules={[Navigation, Thumbs]}
      >
        <SwiperSlide>
          <img src={images[0]?.image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[0]?.image} alt="" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="thumbSwiper"
      >
        <SwiperSlide>
          <img src={images[0]?.image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[0]?.image} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
