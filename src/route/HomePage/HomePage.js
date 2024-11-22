import React, { useEffect } from "react";
import ShopByCategories from "../../components/HomePage/ShopByCategories/ShopByCategories";
import Carousel from "../../components/HomePage/BannerCarousel/Carousel";
import TrendingDelights from "../../components/HomePage/TrendingDelights/TrendingDelights";
import TotalClubBanner from "../../components/HomePage/TotalClubBanner/TotalClubBanner";
import MustTry from "../../components/HomePage/MustTry/MustTry";
import SafetyGuranteed from "../../components/HomePage/SafetyGuranteed/SafetyGuranteed";
import Testimonial from "../../components/HomePage/Testimonial/Testimonial";
import GetUptoBanner from "../../components/HomePage/GetUptoBanner/GetUptoBanner";
import FoodVideo from "../../components/HomePage/FoodVideo/FoodVideo";
import JoinOurTeam from "../../components/HomePage/JoinOurTeam/JoinOurTeam";
import ProductTab from "../../components/HomePage/ProductTab/ProductTab";
import "./HomePage.scss";
import { useSelector } from "react-redux";

const HomePage = () => {

  const auth = useSelector((state) => state.auth);
  return (
    <div>

    <div>
      <p>Customer ID: {auth.customerId}</p>
      <p>Quote ID: {auth.quoteId}</p>
      <p>Token: {auth.token}</p>
    </div>



      <Carousel />
      <div className="homeShopByCategories">
        <ShopByCategories
          title="Shop By Categories"
          description="Resehest Meats And Much More!"
        />
      </div>
      <ProductTab />
      <TrendingDelights />
      {/* <TotalClubBanner /> */}
      <MustTry />
      <GetUptoBanner />
      <SafetyGuranteed />
      <FoodVideo />
      <Testimonial />
      <JoinOurTeam />
    </div>
  );
};

export default HomePage;
