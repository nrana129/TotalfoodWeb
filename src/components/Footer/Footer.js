import React from "react";
// import Link from "next/link";
import { Link } from "react-router-dom";
import './Footer.scss'


const Footer = () => {
  return (
    <>
      <div className="footer_sec">
        <div className="footer_logo">
          <div className="for_desktop">
            <h4>Give us a Follow</h4>
            <div className="social_icon">
              <Link to="" className="fb">
                fb
              </Link>
              <Link to="" className="in">
                in
              </Link>
              <Link to="" className="yt">
                yt
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
          <div className="left_content">
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
          <div className="mid_content">
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
          <div className="right_content">
            <h2>Contact Us</h2>
            <p>
              Nivritti Foods Pvt. Ltd
              <br />
              9A.J Bose Road Ideal Center, 5th Floor, Kolkata - 700017
              <br />
              18002122102
              <br />
              info@Totalfoods.in
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
