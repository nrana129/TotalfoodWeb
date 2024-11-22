import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getData } from "../../../utils/api";
import Tabs from "../Tabs/Tabs";
import "./MyOrder.scss";

const MyOrder = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [orders, setOrders] = useState([]); // Default is an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = useSelector((state) => state.auth); // Accessing the auth state

  const fetchOrderData = () => {
    const token = auth.token; // Get token from Redux store

    if (!token) {
      setError("No authentication token found");
      setLoading(false);
      return;
    }

    getData(`customer/orders/${auth.customerId}`, token) // Pass the token to the API call
      .then((response) => {
        console.log("responseNaveen", response);
        if (response?.status === true) {
          setOrders(response.data); // Set the data in state
        } else {
          setError("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching order data:", error);
        setError("Failed to fetch orders");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrderData();
  }, [auth.token]); // Trigger when auth.token changes

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Filter orders based on the selected tab
  const filteredOrders = orders.filter((order) => {
    if (activeTab === "tab1") {
      return order.order_status === "order_confirmed"; // Active orders
    } else if (activeTab === "tab2") {
      return order.order_status === "delivered"; // Completed orders
    } else if (activeTab === "tab3") {
      return order.order_status === "canceled"; // Cancelled orders
    }
    return true; // Default case
  });

  // Calculate counts dynamically for tabs
  const activeOrdersCount = orders.filter(
    (order) => order.order_status === "order_confirmed"
  ).length;

  const completedOrdersCount = orders.filter(
    (order) => order.order_status === "delivered"
  ).length;

  const cancelledOrdersCount = orders.filter(
    (order) => order.order_status === "canceled"
  ).length;

  return (
    <div className="container">
      <div>
        <p>Customer ID: {auth.customerId}</p>
        <p>Quote ID: {auth.quoteId}</p>
        <p>Token: {auth.token}</p>
      </div>
      <div className="account my_order">
        <Tabs />

        <div className="my_order_section">
          <h2>My Orders</h2>

          <ul className="navigation_tab">
            <li
              className={activeTab === "tab1" ? "active" : ""}
              onClick={() => handleTabClick("tab1")}
            >
              Active <span>{activeOrdersCount}</span>
            </li>
            <li
              className={activeTab === "tab2" ? "active" : ""}
              onClick={() => handleTabClick("tab2")}
            >
              Completed <span>{completedOrdersCount}</span>
            </li>
            <li
              className={activeTab === "tab3" ? "active" : ""}
              onClick={() => handleTabClick("tab3")}
            >
              Cancelled <span>{cancelledOrdersCount}</span>
            </li>
          </ul>

          <div className="navigation_content">
            {loading ? (
              <p>Loading orders...</p>
            ) : (
              <div className="bottom_content_section active_sec">
                <ul className="list_order">
                  {filteredOrders.map((order) => (
                    <div key={order.increment_id} className="empty_order_sec">
                      <li>
                        <div className="mainorder-items">
                          <div className="top_header">
                            <div className="left_section">
                              <div className="arriving_img">
                                <img
                                  src="https://totalfood.greenhonchos.in//static/version1712054743/frontend/Greenhonchos/totalfood/en_US/images/Arriving.svg"
                                  alt="arriving_icon"
                                />
                              </div>
                              <div className="arriving_text">
                                <div>
                                  <strong>Order_confirmed</strong>
                                  <span>{order.increment_id}</span>
                                  <p className="date_format">
                                    Placed on {order.created_at}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="right_section" id="full_btn">
                              <a
                                href={`https://totalfood.greenhonchos.in/tfaccount/order/orderdetails?order_id=${order.increment_id}`}
                              >
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
                          <div className="food_detail">
                            <div className="food_detail_itm">
                              {order.items.map((item, index) => (
                                <p key={index}>
                                  {item.name}{" "}
                                  <span>({item.qty_ordered} Pieces)</span> x{" "}
                                  {item.qty_ordered}
                                </p>
                              ))}
                            </div>
                            <div className="delivery_detail">
                              <div className="order_price">
                                <span>₹{order.grand_total}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                  ))}
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
