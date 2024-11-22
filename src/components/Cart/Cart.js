import React, { useState } from "react";
import { TryMust } from "../../assets/images/index";
import { useSelector } from "react-redux";
const Cart = () => {
  const [Qtycounter, setQtyCounter] = useState(1);
  const cart = useSelector((state) => state.cart);



  const incrementCounter = () => {
    setQtyCounter(Qtycounter + 1);
  };

  const decrementCounter = () => {
    if (Qtycounter !== 0) {
      setQtyCounter(Qtycounter - 1);
    }
  };

  return (
    <div className="cart_section">
      <div className="top_header">
        <h2>Cart 1</h2>
      </div>

      <div className="deliver_address border_div">
        <h2>Deliver To</h2>
        <p className="error">Please select address</p>
      </div>

      <div className="oder_section border_div">
        <h2>your order</h2>
        <ul>
          <li>
            <div className="left_Section">
              <div className="product_img">
                <img src={TryMust} alt="TryMust" />
              </div>
              <div className="product_left_detail">
                <h3>Frozen Chicken Precut</h3>
                <span>500gm</span>
                <span>edit</span>
              </div>
            </div>
            <div className="right_section">
              <div className="price">₹175.00</div>
              <div className="qty">
                <button className="decrement" onClick={decrementCounter}>
                  -
                </button>
                <span className="number">{Qtycounter}</span>
                <button className="increment" onClick={incrementCounter}>
                  +
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="coupons_section border_div">
        <h2>Apply Coupons</h2>
        <div className="coupons_box">
          <input type="text" />
          <button>Apply</button>
        </div>
        <ul>
          <li>
            NEW10: This is New customer coupon use to <button>Apply</button>
          </li>
          <li>
            Welcome: Get 10% off on all veg items <button>Apply</button>
          </li>
        </ul>
      </div>

      <div className="bill_summary border_div">
        <h2>Bill Summary</h2>
        <ul>
          <li>
            <div className="left_section">
              <p className="bill_title">Total MRP</p>
            </div>
            <div className="right_section">
              <span className="price">₹175.00</span>
            </div>
          </li>
          <li>
            <div className="left_section">
              <p className="bill_title">Delivery</p>
            </div>
            <div className="right_section">
              <span className="price">₹0.00</span>
            </div>
          </li>
          <li className="totle_Amount">
            <div className="left_section">
              <p className="bill_title">Total Amount </p>
            </div>
            <div className="right_section">
              <span className="price">₹175.00</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="policies_contnent">
        <h2>Policies</h2>
        <ul>
          <li>
            Item or quality modified is not allowed post placing an order.
            Verify detail before you proceed
          </li>
          <li>
            Order cancellation shall be allowed only until items are dispatched.
          </li>
        </ul>
      </div>

      <div className="pay_button">
        <button>Pay ₹175.00</button>
      </div>
    </div>
  );
};

export default Cart;
