import React, { useState } from "react";
import Tabs from "../../components/Account/Tabs/Tabs";
import Overview from "../../components/Account/Overviews/Overview";
import "./Account.scss";

const Account = () => {
  return (
    <div className="account_main">
      <div className="container">
        <div className="flex gap-10">
          <Tabs />
          <Overview />
        </div>
      </div>
    </div>
  );
};

export default Account;
