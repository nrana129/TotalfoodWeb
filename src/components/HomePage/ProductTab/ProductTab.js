// Tabs.js
import React, { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderTabContent = () => {
    switch (activeTab) {
      case "tab1":
        return <Tab1 />;
      case "tab2":
        return <Tab2 />;
      default:
        return <Tab1 />;
    }
  };

  return (
    <div className="tab_section my-20">
      <div className="tab-buttons-main text-center my-5">
        <div className="tab-buttons">
          <button
            onClick={() => setActiveTab("tab1")}
            className={activeTab === "tab1" ? "active" : ""}
          >
            Recommended
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
            className={activeTab === "tab2" ? "active" : ""}
          >
            Favourite's
          </button>
        </div>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default ProductTab;
