import ReactDOM from "react-dom/client";
import HomePage from "./route/HomePage/HomePage";
import NoPage from "./route/NoPage/NoPage";
import About from "./route/AboutUsPage/About";
import PrivacyPolicy from "./route/PrivacyPolicyPage/PrivacyPolicy";
import ShippingPolicy from "./route/ShippingPolicyPage/ShippingPolicy";
import TermsCondition from "./route/TermsConditionPage/TermsCondition";
import ProductDetailPage from "./route/ProductDetailPage/ProductDetailPage";
import Account from "./route/AccountPage/Account";
import MyOrder from "./components/Account/MyOrder/MyOrder";
import Address from "./components/Account/Address/Address";
import AvailableCoupon from "./components/Account/Coupon/AvailableCoupon";
import CustomerSupport from "./components/Account/CustomerSupport/CustomerSupport";
import ReferEarn from "./components/Account/ReferEarn/ReferEarn";
import ProductCategory from "./route/ProductCategory/ProductCategory"


// import Blog from "./pages/Blog/Blog";
// import Contact from "./pages/Contact/Index";
import FAQPage from "./route/FaqPage/Faq";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./assets/css/theme.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";






function App() {
  return (
    <>
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:categoryName/:categoryId" element={<ProductCategory/>} />
        <Route path="about-us" element={<About />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="shipping-policy" element={<ShippingPolicy />} />
        <Route path="terms-condition" element={<TermsCondition />} />
        <Route path="product-detail/:sku" element={<ProductDetailPage />} />
        <Route path="overview" element={<Account />} />
        <Route path="my-order" element={<MyOrder />} />
        <Route path="address-book" element={<Address />} />
        <Route path="available-coupon" element={<AvailableCoupon />} />
        <Route path="customer-support" element={<CustomerSupport />} />
        <Route path="refer-earn" element={<ReferEarn />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
