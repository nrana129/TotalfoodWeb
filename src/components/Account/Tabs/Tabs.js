import React, { useState } from "react";
import styles from "./Tabs.module.css";
import { Link, useNavigate } from "react-router-dom";

const tabsData = [
  { label: "Overview", UrlPath: "/overview" },
  {
    label: "My Accounts",
    children: [
      { label: "My Order", UrlPath: "/my-order" },
      { label: "Address Book", UrlPath: "/address-book" },
      { label: "Available Coupon", UrlPath: "/available-coupon" },
      { label: "Customer Support", UrlPath: "/customer-support" },
    ],
  },
  {
    label: "Total Money",
    children: [{ label: "Food Credit", UrlPath: "/food-credit" }],
  },
  { label: "Refer Earn", UrlPath: "/refer-earn" },
  { label: "Logout" },
];

const Tabs = () => {
  const [openTab, setOpenTab] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(null); // Track active tab
  const navigate = useNavigate();

  const handleToggle = (index) => {
    // Toggle submenu visibility
    setOpenTab(openTab === index ? null : index);
    setActiveTabIndex(index); // Set the clicked tab as active
  };

  const handleActiveClick = (label, UrlPath) => {
    if (label === "Logout") {
      localStorage.removeItem("authToken");
      localStorage.removeItem("selectedAddress");
      navigate("/");
    } else {
      if (UrlPath) {
        navigate(UrlPath); // Navigate to the correct URL
      }
    }
  };

  return (
    <ul className={styles.Tabs_section}>
      {tabsData.map((tab, index) => (
        <li
          key={index}
          className={`${styles.Tabs_section_list} ${
            activeTabIndex === index ? styles.active : ""
          }`}
        >
          {tab.children ? (
            <>
              <span onClick={() => handleToggle(index)}>{tab.label}</span>
              {openTab === index && (
                <ul className={styles.Submenu}>
                  {tab.children.map((child, childIndex) => (
                    <li
                      key={childIndex}
                      onClick={() => handleActiveClick(child.label, child.UrlPath)}
                      className={styles.Submenu_item}
                    >
                      <Link to={child.UrlPath}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <a
              href={tab.UrlPath}
              onClick={(e) => {
                e.preventDefault();
                handleActiveClick(tab.label, tab.UrlPath); // For non-nested tabs
              }}
              className={activeTabIndex === index ? styles.activeLink : ""}
            >
              {tab.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
