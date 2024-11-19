import React, { useState, useEffect } from "react";
import { Logo, Search } from "../../assets/images/index";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PortalPop from "../PortalPop/PortalPop";
import PinCode from "../PinCode/PinCode";
import Login from "../Login/Login";
import ShopByCategories from "../HomePage/ShopByCategories/ShopByCategories";
import Cart from "../Cart/Cart";
import "./Header.scss"

const Header = () => {
  const [loginPortal, setLoginPortal] = useState(false);
  const [locationPortal, setLocationPortal] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showCart, setCart] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("Detecting Location");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to false
  const Qtycounter = useSelector((state) => state.Qtycounter);
  const [QtycounterShow, setQtycounterShow] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve address from localStorage on component mount
    const savedAddress = localStorage.getItem("selectedAddress");
    if (savedAddress) {
      setSelectedAddress(savedAddress);
    }

    // Check if a token exists in localStorage and update login status
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // Check if a token exists in localStorage and update login status
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, [location.pathname]); // Recheck token on route change

  const handleClose = () => {
    setLoginPortal(false);
  };

  const LocationClose = () => {
    setLocationPortal(false);
  };

  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const CategoriesHandleClose = () => {
    setShowCategories(false);
  };

  const handleToggleCart = () => {
    setCart(!showCart);
    setShowCategories(false);
  };

  const handleToggleCartClose = () => {
    setCart(false);
  };

  useEffect(() => {
    if (showCategories || showCart || loginPortal || locationPortal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showCategories, showCart, loginPortal, locationPortal]);

  // Close categories popup on route change
  useEffect(() => {
    setShowCategories(false);
  }, [location.pathname]);

  // Update QtycounterShow based on Qtycounter value
  useEffect(() => {
    setQtycounterShow(Qtycounter > 0);
  }, [Qtycounter]);

  // Custom Link component to handle popup close and navigation
  const CustomLink = ({ to, children, ...props }) => (
    <Link
      to={to}
      onClick={() => {
        setShowCategories(false);
        navigate(to);
      }}
      {...props}
    >
      {children}
    </Link>
  );

  // Function to handle address selection
  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setLocationPortal(false); // Close location portal after selecting address
    console.log("test");
  };

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setLoginPortal(false); // Close login portal
    setIsLoggedIn(true); // Set login status
  };

  // Function to handle logout
  // const handleLogout = () => {
  //   localStorage.removeItem("authToken");
  //   localStorage.removeItem("selectedAddress");
  //   setIsLoggedIn(false);
  //   navigate("/login"); // Redirect to login or home page
  // };

  return (
    <div className="header">
      <div className="container">
        <div className="main flex items-center justify-center">
          <div className="left_section flex gap-4 w-3/12">
            <div className="logo flex items-center">
              <Link to="/">
                <img src={Logo} alt="" width="72" />
              </Link>
            </div>
            <div className="location">
              <span
                onClick={() => {
                  setLocationPortal(!locationPortal);
                  setShowCategories(false);
                }}
              >
                {selectedAddress}
              </span>
              {locationPortal && (
                <PortalPop onClose={LocationClose}>
                  <PinCode onAddressSelect={handleAddressSelect} />
                </PortalPop>
              )}
            </div>
          </div>
          <div className="right_section flex items-center w-9/12 justify-between">
            <div className="search relative">
              <input type="text" placeholder="Search chicken & More" />
              <div className="submit_btn absolute top-0 right-4">
                <button title="submit">
                  <img src={Search} width="15" />
                </button>
              </div>
            </div>
            <div className="categories">
              <div className="Explore">
                <span
                  onClick={handleToggleCategories}
                  className="explore-categories"
                >
                  Explore Categories
                </span>
                <div
                  className={`shop-by-categories ${
                    showCategories ? "active" : ""
                  }`}
                  style={{ display: showCategories ? "block" : "none" }}
                >
                  <ShopByCategories />
                  <button
                    onClick={CategoriesHandleClose}
                    className="close-button"
                  >
                    Close
                  </button>
                </div>
                {showCategories && (
                  <div
                    className="overlay"
                    onClick={CategoriesHandleClose}
                  ></div>
                )}
              </div>
              <div id="portal-container"></div>
            </div>
            <div className="profile">
              {isLoggedIn ? (
                <>
                  <span className="remove_icons">
                    <Link to="overview">My account</Link>
                  </span>
                  {/* <span onClick={handleLogout}>Logout</span> */}
                </>
              ) : (
                <span
                  onClick={() => {
                    setLoginPortal(!loginPortal);
                    setShowCategories(false);
                  }}
                >
                  My profile
                </span>
              )}
              {!isLoggedIn && loginPortal && (
                <PortalPop onClose={handleClose}>
                  <Login onLoginSuccess={handleLoginSuccess} />
                </PortalPop>
              )}
            </div>
            <div className="miniCart">
              {QtycounterShow && (
                <span className="Qtycounter">{Qtycounter}</span>
              )}
              <span onClick={handleToggleCart} className="cart_icon"></span>
              <div
                className={`miniCartContent ${showCart ? "active" : ""}`}
                style={{ display: showCart ? "block" : "none" }}
              >
                <Cart />
                <button
                  onClick={handleToggleCartClose}
                  className="close-button"
                >
                  Close
                </button>
                {showCart && (
                  <div
                    className="overlay"
                    onClick={handleToggleCartClose}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
