import React from "react";
import Tabs from "../Tabs/Tabs";

const CustomerSupport = () => {
  return (
    <div className="container">
      <main className="account">
        <div className="left_section">
      <Tabs />
        </div>
      <div className="right_section">
        <h2>customer support</h2>
        <div className="customer_support">
          <div className="logo">
            <img
              src="https://totalfood.greenhonchos.in//media/logo/stores/1/logo.png"
              alt=""
            />
          </div>
          <div className="title_customer_header">
            <h3>Nivritti Foods Pvt. Ltd</h3>
            <p>9 A. J. C Bose Road Ideal Centre, 5th Floor, Kolkata - 700017</p>
          </div>
          <div className="customer_contact">
            <div className="customer_details tel_no">
              <a href="tel:18002122102">
                Call Toll Free <strong>18002122102</strong>
              </a>
            </div>
            <div className="customer_details mail_to">
              <a href="mailto:info@totalfoods.in">
                Mail <strong>info@totalfoods.in</strong>
              </a>
            </div>
            <div className="customer_details wht_no">
              <a href="">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default CustomerSupport;
