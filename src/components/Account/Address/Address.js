import React from "react";
import ListAddress from "./ListAddress";
import Tabs from "../Tabs/Tabs";
import "./Address.scss";

const Address = () => {
  return (
    <div className="account_main">
      <div className="container">
        <main className="flex gap-10 address_book">
          <div className="left_section">
            <Tabs />
          </div>
          <div className="right_section">
            <div className="addAddress_header">
              <h2>address book</h2>
              <button>Add Address</button>
            </div>

            <ul className="all_address">
              <ListAddress />
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Address;
