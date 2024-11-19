import React from "react";
import ListAddress from "./ListAddress";
import Tabs from "../Tabs/Tabs";

const Address = () => {
  return (
    <div className="container">
      <main className="account">
        <div className="left_section">
          <Tabs />
        </div>
        <div className="right_section">
          <h2>address book</h2>
          <ul className="all_address">
            <ListAddress />
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Address;
