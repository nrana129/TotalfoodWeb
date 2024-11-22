import React, { useState } from "react";
import Tabs from "../Tabs/Tabs";
import "./MyOrder.scss";

const MyOrder = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="account my_order">
        <Tabs />

        <div className="my_order_section">
          <h2>My Orders</h2>
          <ul className="navigation_tab">
            <li
              className={activeTab === "tab1" ? "active" : ""}
              onClick={() => handleTabClick("tab1")}
            >
              Active <span>0</span>
            </li>
            <li
              className={activeTab === "tab2" ? "active" : ""}
              onClick={() => handleTabClick("tab2")}
            >
              Completed <span>0</span>
            </li>
            <li
              className={activeTab === "tab3" ? "active" : ""}
              onClick={() => handleTabClick("tab3")}
            >
              Cancelled <span>0</span>
            </li>
          </ul>
          <div className="navigation_content">
            {activeTab === "tab1" && (
              <div className="bottom_content_section active_sec">
                <ul className="list_order">
                  <div className="empty_order_sec">
                    <li>
                      <div class="mainorder-items">
                        <div class="top_header">
                          <div class="left_section">
                            <div class="arriving_img">
                              <img
                                src="https://totalfood.greenhonchos.in//static/version1712054743/frontend/Greenhonchos/totalfood/en_US/images/Arriving.svg"
                                alt="arriving_icon"
                              />
                            </div>
                            <div class="arriving_text">
                              <div>
                                <strong>Order_confirmed</strong>
                                <span>#000000234</span>
                                <p class="date_format">
                                  {" "}
                                  Placed on Thu, 14 Nov'24, 09:25 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="right_section" id="full_btn">
                            <a href="https://totalfood.greenhonchos.in/tfaccount/order/orderdetails?order_id=234">
                              {" "}
                              <span>Full Details</span>
                            </a>
                            <span>
                              <img
                                src="https://totalfood.greenhonchos.in//static/version1712143100/frontend/Greenhonchos/totalfood/en_US/images/blue_arrow_right.svg"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div class="food_detail">
                          <div class="food_detail_itm">
                            <p>
                              Chicken Cocktail Sausages{" "}
                              <span>(8-9 Pieces)</span> x 1
                            </p>
                            <p>
                              Chicken Breast Boneless <span>(2-3 Pieces)</span>{" "}
                              x 1
                            </p>
                            <p>
                              Chicken Classic Salami <span>(9-11 Pieces)</span>{" "}
                              x 1
                            </p>
                            <p>
                              Chicken Cheese Onion Sausages{" "}
                              <span>(8-9 Pieces)</span> x 1
                            </p>
                          </div>
                          <div class="delivery_detail">
                            <div class="order_price">
                              <span>₹810</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="bottom_content_section completed">
                <ul className="list_order">
                  <div className="empty_order_sec">
                    <div className="empty_icon"></div>
                    <li>
                      <div class="mainorder-items">
                        <div class="top_header">
                          <div class="left_section">
                            <div class="arriving_img">
                              <img
                                src="https://totalfood.greenhonchos.in//static/version1712054743/frontend/Greenhonchos/totalfood/en_US/images/Arriving.svg"
                                alt="arriving_icon"
                              />
                            </div>
                            <div class="arriving_text">
                              <div>
                                <strong>Order_confirmed</strong>
                                <span>#000000234</span>
                                <p class="date_format">
                                  {" "}
                                  Placed on Thu, 14 Nov'24, 09:25 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="right_section" id="full_btn">
                            <a href="https://totalfood.greenhonchos.in/tfaccount/order/orderdetails?order_id=234">
                              {" "}
                              <span>Full Details</span>
                            </a>
                            <span>
                              <img
                                src="https://totalfood.greenhonchos.in//static/version1712143100/frontend/Greenhonchos/totalfood/en_US/images/blue_arrow_right.svg"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div class="food_detail">
                          <div class="food_detail_itm">
                            <p>
                              Chicken Cocktail Sausages{" "}
                              <span>(8-9 Pieces)</span> x 1
                            </p>
                            <p>
                              Chicken Breast Boneless <span>(2-3 Pieces)</span>{" "}
                              x 1
                            </p>
                            <p>
                              Chicken Classic Salami <span>(9-11 Pieces)</span>{" "}
                              x 1
                            </p>
                            <p>
                              Chicken Cheese Onion Sausages{" "}
                              <span>(8-9 Pieces)</span> x 1
                            </p>
                          </div>
                          <div class="delivery_detail">
                            <div class="order_price">
                              <span>₹810</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="bottom_content_section cancelled">
                <ul className="list_order">
                  <div className="empty_order_sec">
                    <li>
                      <div class="mainorder-items">
                        <div class="top_header">
                          <div class="left_section">
                            <div class="arriving_img">
                              <img
                                src="https://totalfood.greenhonchos.in//static/version1712054743/frontend/Greenhonchos/totalfood/en_US/images/Arriving.svg"
                                alt="arriving_icon"
                              />
                            </div>
                            <div class="arriving_text">
                              <div>
                                <strong>Order_confirmed</strong>
                                <span>#000000234</span>
                                <p class="date_format">
                                  {" "}
                                  Placed on Thu, 14 Nov'24, 09:25 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="right_section" id="full_btn">
                            <a href="https://totalfood.greenhonchos.in/tfaccount/order/orderdetails?order_id=234">
                              {" "}
                              <span>Full Details</span>
                            </a>
                            <span>
                              <img
                                src="https://totalfood.greenhonchos.in//static/version1712143100/frontend/Greenhonchos/totalfood/en_US/images/blue_arrow_right.svg"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div class="food_detail">
                          <div class="food_detail_itm">
                            <p>
                              Chicken Cocktail Sausages{" "}
                              <span>(8-9 Pieces)</span> x 1
                            </p>
                            <p>
                              Chicken Breast Boneless <span>(2-3 Pieces)</span>{" "}
                              x 1
                            </p>
                            <p>
                              Chicken Classic Salami <span>(9-11 Pieces)</span>{" "}
                              x 1
                            </p>
                            <p>
                              Chicken Cheese Onion Sausages{" "}
                              <span>(8-9 Pieces)</span> x 1
                            </p>
                          </div>
                          <div class="delivery_detail">
                            <div class="order_price">
                              <span>₹810</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
