import React, { useState } from "react";
import { Logo, paymentIcon } from "../../assets/images";
import "./PaymentPage.scss";

const PaymentPage = () => {
  // State to track active payment method
  const [activeMethod, setActiveMethod] = useState(null);

  // Click handler to set active payment method
  const handlePaymentMethodClick = (method) => {
    setActiveMethod(method);
  };

  const handleRazorpayPayment = () => {
    console.log("Razorpay payment initiated");
    // Add Razorpay integration logic here
  };

  const handlePlaceOrder = () => {
    console.log("Order placed with Cash on Delivery");
    // Add order placement logic here
  };

  return (
    <div className="payment">
      <div className="container">
        <div className="innerPayment">
          {/* Left Section */}
          <div className="left_section">
            <img src={Logo} alt="Company Logo" className="payPageLogo" />
            <ul>
              <li
                className={activeMethod === "razorpay" ? "active" : ""}
                onClick={() => handlePaymentMethodClick("razorpay")}
              >
                <div className="left_section">
                  <p>UPI I Credit Card I Debit Card I Net Banking</p>
                  <img src={paymentIcon} alt="Payment Options" />
                </div>
                <div className="right_section">
                  <button onClick={handleRazorpayPayment}>
                    Pay with Razorpay
                  </button>
                </div>
              </li>
              <li
                className={activeMethod === "cod" ? "active" : ""}
                onClick={() => handlePaymentMethodClick("cod")}
              >
                <div className="left_section">
                  <p>Cash on delivery</p>
                </div>
                <div className="right_section">
                  <button onClick={handlePlaceOrder}>Place Order</button>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="right_section">
            <h2>Order Summary</h2>
            <ul>
              <li>
                <div className="left_section">
                  <img
                    src="https://totalfood.greenhonchos.in/media/catalog/product/cache/c370c3afe22656f2235bb5718aea30c6/c/h/chicken_breast_boneless_400_g.jpg"
                    alt="Product"
                  />
                </div>
                <div className="mid_section">
                  <div className="product_name">
                    <h2>Chicken Breast Boneless</h2>
                  </div>
                  <div className="qty">
                    <span>Qty: 1</span>
                  </div>
                </div>
                <div className="right_section">
                  <div className="price">
                    <span>₹225</span>
                  </div>
                </div>
              </li>

              <li>
                <div className="left_section">
                  <img
                    src="https://totalfood.greenhonchos.in/media/catalog/product/cache/c370c3afe22656f2235bb5718aea30c6/c/h/chicken_breast_boneless_400_g.jpg"
                    alt="Product"
                  />
                </div>
                <div className="mid_section">
                  <div className="product_name">
                    <h2>Chicken Breast Boneless</h2>
                  </div>
                  <div className="qty">
                    <span>Qty: 1</span>
                  </div>
                </div>
                <div className="right_section">
                  <div className="price">
                    <span>₹225</span>
                  </div>
                </div>
              </li>
            </ul>

            <div className="bill_summary">
              <ul>
                <li>
                  <div className="left_section">
                    <span>Total MRP</span>
                  </div>
                  <div className="right_section">
                    <span className="price">₹875</span>
                  </div>
                </li>
                <li>
                  <div className="left_section">
                    <span>Handling Charge</span>
                  </div>
                  <div className="right_section">
                    <span className="price">₹875</span>
                  </div>
                </li>
                <li>
                  <div className="left_section">
                    <span>Discount</span>
                  </div>
                  <div className="right_section">
                    <span className="price">₹875</span>
                  </div>
                </li>
                <li>
                  <div className="left_section">
                    <span>Delivery Charge</span>
                  </div>
                  <div className="right_section">
                    <span className="price">₹875</span>
                  </div>
                </li>
                <li>
                  <div className="left_section">
                    <span>Express Delivery</span>
                  </div>
                  <div className="right_section">
                    <span className="price">₹875</span>
                  </div>
                </li>

                <li className="final_price">
                  <div className="left_section">
                    <span>Order Total</span>
                  </div>
                  <div className="right_section">
                    <span className="price">₹875</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
