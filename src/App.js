import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage/HomePage";
import NoPage from "./pages/NoPage/NoPage";
import About from "./pages/about-us/About";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import ShippingPolicy from "./pages/shipping-policy/ShippingPolicy";
import TermsCondition from "./pages/terms-condition/TermsCondition";
import ProductDetail from "./pages/ProductDetail";
import Account from "./pages/account/Account";
import MyOrder from "./components/Account/MyOrder/MyOrder";
import Address from "./components/Account/Address/Address";
import AvailableCoupon from "./components/Account/Coupon/AvailableCoupon";
import CustomerSupport from "./components/Account/CustomerSupport/CustomerSupport";
import ReferEarn from "./components/Account/ReferEarn/ReferEarn";
import ProductList from "./pages/ProductList/ProductList"

// import Blog from "./pages/Blog/Blog";
// import Contact from "./pages/Contact/Index";
import FAQPage from "./pages/faq/Faq";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// import "./assets/css/theme.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";






function App() {
  return (
    <>
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductList/:categoryId" element={<ProductList/>} />
        <Route path="about-us" element={<About />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="shipping-policy" element={<ShippingPolicy />} />
        <Route path="terms-condition" element={<TermsCondition />} />
        <Route path="product-detail" element={<ProductDetail />} />
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
