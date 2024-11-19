import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ShimmerButton } from "react-shimmer-effects";
import { getData } from "../../../utils/api";

const BannerCarousel = () => {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCarouselData = () => {
    getData("/banner-sliders") // API endpoint
      .then((response) => {
        if (response?.status === true) {
          setBannerData(response.data); // Set the data in state
        } else {
          setError("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching banner data:", error);
        setError("Failed to fetch banners");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {

    fetchCarouselData();
  }, []);

  
  if (loading) {
    return(
      <div className="banner_loader">
        <ShimmerButton size="md" />
        <ShimmerButton size="md" />
        <ShimmerButton size="md" />
      </div>
    ) // Show loading message while fetching data
  }

  if (error || !Array.isArray(bannerData) || bannerData.length === 0) {
    return <div>Error: No data available</div>; // Handle case where no data is available or error occurred
  }

  return (
    <div className="banner_carousel">
      <Swiper
        spaceBetween={40}
        slidesPerView={2.2}
        centeredSlides={true}
        freeMode={true}
        centeredSlidesBounds={true}
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation
        modules={[Navigation]}
      >
        {bannerData.map((data) => (
          <SwiperSlide key={data.banner_id}>
            <img
              src={data.image}
              alt={`Banner-${data.created_at}`}
              width={500}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
