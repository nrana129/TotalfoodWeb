"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Testimonial = () => {
  const [testimonialData, TestimonialSData] = useState([]);

  const[loading, SetLoading] = useState(true);
  const[error, SetError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://proxy.cors.sh/https://totalfood.greenhonchos.in/rest/V1/reviews",
          {
            method: "GET",
            headers: {
              "x-cors-api-key": "temp_bff681b977c3dfa62725fa465683420b",
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjIsInV0eXBpZCI6MiwiaWF0IjoxNzIxMzkxNjgwLCJleHAiOjE3MjEzOTUyODB9.KV3NjeUDc0pYsAYRbhEdELKt375JaNrNsFOH9BmvZks",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        TestimonialSData(data.data || []);
        SetLoading(false);
      } catch (error) {
        SetError(error);
        SetLoading(false);
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // console.log("testimoniladata", testimonialData);


  if(loading){
    return <>loading...</>
  }

  if (error || !Array.isArray(testimonialData) || testimonialData.length === 0) {
    return <div>Error: No data available</div>; // Handle case where no data is available or error occurred
  }

  return (
    <div className="container testimonial">
      <h2>10,00,000+ Happy Customers</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="testimonial_slider"
      >
        {testimonialData.map((data) => {
          return (
            <SwiperSlide key={data.review_id}>
              <div className="card">
                <div className="review_title">
                  <span className="cirle_first_name">{data.nickname[0]}</span>
                  <div className="customer_title">{data.nickname}</div>
                  <div className="verify">
                    <span className="bg-click"></span>
                  </div>
                </div>
                <div className="review_star">
                  {data.rating_value}
                </div>
                <div className="customer_discriptions">
                  <p>
                  {data.title}
                  </p>
                </div>
                <div className="customer_img_div">
                  <span className="customer_img">
                    <img src={data.product_image_url} />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
