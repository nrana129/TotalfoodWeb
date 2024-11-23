"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getData } from "../../../utils/api"; // Ensure the correct path
import { ShimmerThumbnail } from "react-shimmer-effects";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data function
  const fetchData = () => {
    setLoading(true);
    setError(null);

    getData("/reviews") // Correct API endpoint
      .then((response) => {
        console.log("API Response:", response);
        if (response?.status === true && response.data?.length) {
          setTestimonialData(response.data);
        } else {
          throw new Error("No testimonials available");
        }
      })
      .catch((err) => {
        setError(err.message || "Failed to fetch testimonials");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="testimonial_loader">
          <ShimmerThumbnail height={264} rounded />
          <ShimmerThumbnail height={264} rounded />
          <ShimmerThumbnail height={264} rounded />
        </div>
      </div>
    );
  }

  if (error || !testimonialData.length) {
    return <div className="error">{error || "No data available"}</div>;
  }

  return (
    <div className="testimonial">
      <div className="container">
        <h2>Our Happy Customers</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper) => console.log("Swiper initialized:", swiper)}
          className="testimonial_slider"
        >
          {testimonialData.map((data) => (
            <SwiperSlide key={data.review_id}>
              <div className="card">
                <div className="review_title">
                  <span className="circle_first_name">
                    {data.nickname?.charAt(0) || "N"}
                  </span>
                  <div className="customer_title">
                    {data.nickname || "Anonymous"}
                  </div>
                  <div className="verify">
                    <span className="bg-click"></span>
                  </div>
                </div>
                <div className="review_star">
                  ⭐ {data.rating_value || "N/A"} / 5
                </div>
                <div className="customer_descriptions">
                  <p>{data.title || "No review title"}</p>
                </div>
                <div className="customer_img_div">
                  <span className="customer_img">
                    <img
                      src={data.product_image_url || "/placeholder.jpg"}
                      alt={data.title || "Product"}
                    />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
