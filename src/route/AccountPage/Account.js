import React, { useState } from "react";
import Tabs from "../../components/Account/Tabs/Tabs";
import Overview from "../../components/Account/Overviews/Overview";
import "./Account.scss";

const Account = () => {
  return (
    <div className="container">
      <div className="flex gap-10 my-10">
        <Tabs />
        <Overview />
      </div>
    </div>
  );
};

export default Account;
