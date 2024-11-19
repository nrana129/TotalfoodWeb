import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Chicken1 } from "../../assets/images/index";

const Sidebar = () => {
  return (
    <div className="left_section">
      <ul>
        <li className="active">
          <Link to="/ListPage">
            <span className="product_img">
              <img src={Chicken1} alt="" />
            </span>
            <h3>Chicken</h3>
          </Link>
        </li>

        <li>
          <Link to="/ListPage">
            <span className="product_img">
              <img src={Chicken1} alt="" />
            </span>
            <h3>Ready To Cook</h3>
          </Link>
        </li>

        <li>
          <Link to="/ListPage">
            <span className="product_img">
              <img src={Chicken1} alt="" />
            </span>
            <h3>Marinated</h3>
          </Link>
        </li>

        <li>
          <Link to="/ListPage">
            <span className="product_img">
              <img src={Chicken1} alt="" />
            </span>
            <h3>Cold Cuts</h3>
          </Link>
        </li>

        <li>
          <Link to="/ListPage">
            <span className="product_img">
              <img src={Chicken1} alt="" />
            </span>
            <h3>Kebabs</h3>
          </Link>
        </li>

        <li>
          <Link to="/ListPage">
            <span className="product_img">
              <img src={Chicken1} alt="" />
            </span>
            <h3>Heat &amp; Eat</h3>
          </Link>
        </li>

        <li>
          <Link to="/ListPage">
            <span className="product_img">
              <img src={Chicken1} alt="" />
            </span>
            <h3>Parathas</h3>
          </Link>
        </li>

        <li>
          <Link to="/ListPage">
            <span className="product_img">
              <img src={Chicken1} alt="" />
            </span>
            <h3>Veg Delights</h3>
          </Link>
        </li>

        <li>
          <Link to="/ListPage">
            <span className="product_img">
              <img src={Chicken1} alt="" />
            </span>
            <h3>Eggs</h3>
          </Link>
        </li>

        <li>
          <Link to="/ListPage">
            <span className="product_img">
              <img src={Chicken1} alt="" />
            </span>
            <h3>Prawn</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
