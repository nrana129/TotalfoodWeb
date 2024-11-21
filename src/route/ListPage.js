import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Product from "../components/ProductList/Product";


const products = () => {
  return (
    <>
      <div className="page-main">
        <div className="container">
          <Sidebar />
          <Product />
        </div>
      </div>
    </>
  );
};

export default products;
