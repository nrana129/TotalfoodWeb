import React from "react";
// import Link from "next/link";
import { Link } from "react-router-dom";
import "./Footer.scss";
import {
  email,
  facebook,
  fasil,
  instagram,
  Logo,
  map,
  phone,
  youtube,
} from "../../assets/images";

const Footer = () => {
  return (
    <>
      <div className="footer_sec">
        <div className="footer_logo">
          <div className="for_desktop">
            <img src={Logo} alt="" />
            <h4>Give us a Follow</h4>
            <div className="social_icon">
              <Link to="" className="fb">
                <img src={facebook} alt="" />
              </Link>
              <Link to="" className="in">
                <img src={instagram} alt="" />
              </Link>
              <Link to="" className="yt">
                <img src={youtube} alt="" />
              </Link>
            </div>
            <div className="copyright">
              2023 All Rights Reserved I
              <a to="https://www.greenhonchos.com/" target="_blank">
                Greenhonchos
              </a>
            </div>
          </div>
        </div>
        <div className="foot_content">
          <div className="foot_inner">
            <h2>Contact Us</h2>
            <p>
              Nivritti Foods Pvt. Ltd
              <br />
            </p>
            <p>
              <span className="foot_icon">
                <img src={map} alt="map" />
              </span>
              <span className="foot_text">
                9A.J Bose Road Ideal Center, 5th Floor, Kolkata - 700017
              </span>
            </p>
            <p>
              <span className="foot_icon">
                <img src={phone} alt="phone" />
              </span>
              <span className="foot_text">18002122102</span>
            </p>
            <p>
              <span className="foot_icon">
                <img src={email} alt="email" />
              </span>
              <span className="foot_text">info@Totalfoods.in</span>
            </p>
          </div>
          <div className="foot_inner">
            <h2>About Total Foods</h2>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">Faq</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="foot_inner">
            <h2>Useful Links</h2>
            <ul>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/shipping-policy">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/terms-condition">Delivery Timeline</Link>
              </li>
              <li>
                <Link to="/terms-condition">Term &amp; Condition</Link>
              </li>
            </ul>
          </div>
          <div className="foot_inner">
            <h2>Certified</h2>
            <img src={fasil} alt="" />
            <p>LN : 12818022000083</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
