import React from "react";
import Tabs from "../Tabs/Tabs";

const MyOrder = () => {
  return (
    <div className="container">
    <div>
      <Tabs />

      <div className="my_order_section">
        <ul className="navigation_tab">
          <li className="active" data-tab="tab1">
            Active <span>0</span>
          </li>
          <li data-tab="tab2">
            Completed <span>0</span>
          </li>
          <li data-tab="tab3">
            Cancelled <span>0</span>
          </li>
        </ul>
        <div className="navigation_content">
          <div className="bottom_content_section active_sec" id="tab1">
            <ul className="list_order">
              <div className="empty_order_sec">
                <div className="empty_icon"></div>
                <p>You have no active orders.</p>
              </div>
            </ul>
          </div>
          <div className="bottom_content_section completed" id="tab2">
            <ul className="list_order">
              <div className="empty_order_sec">
                <div className="empty_icon"></div>
                <p>You don't have any completed orders.</p>
              </div>
            </ul>
          </div>
          <div className="bottom_content_section cancelled" id="tab3">
            <ul className="list_order"></ul>
            <div className="empty_order_sec">
              <div className="empty_icon"></div>
              <p>You don't have any canceled orders.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyOrder;
