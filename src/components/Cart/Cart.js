import React, { useEffect, useState } from "react";
import { TryMust } from "../../assets/images/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Get cart data from Redux store
  const [cartItems, setCartItems] = useState([]);

  console.log("cart.totalQuantity: ", cart.totalQuantity);

  // Sync cart data from Redux store to local state
  useEffect(() => {
    if (cart && cart.newItemName) {
      const newItem = {
        name: cart.newItemName,
        price: cart.newItemPrice,
        sku: cart.newItemSku,
        quantity: cart.totalQuantity || 1, // Default quantity is 1
      };

      // Avoid duplicates, only add or update if the item is new
      setCartItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (item) => item.sku === newItem.sku
        );

        if (existingItemIndex >= 0) {
          // Update the quantity of the existing item
          return prevItems.map((item, index) =>
            index === existingItemIndex
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          );
        }

        // Add new item to the cart
        return [...prevItems, newItem];
      });
    }
  }, [
    cart.newItemName,
    cart.newItemPrice,
    cart.newItemSku,
    cart.totalQuantity,
  ]);

  // Handle increment and decrement for item quantity
  const handleQuantityChange = (sku, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.sku === sku
          ? {
              ...item,
              quantity: Math.max(
                1,
                item.quantity + (action === "increment" ? 1 : -1)
              ),
            }
          : item
      )
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart_section">
      <div className="top_header">
        <h2>Cart</h2>
      </div>

      <div className="deliver_address border_div">
        <h2>Deliver To</h2>
        <p className="error">Please select address</p>
      </div>

      <div className="order_section border_div">
        <h2>Your Order</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.sku}>
              <div className="left_section">
                <div className="product_img">
                  <img
                    src={TryMust}
                    height="50px"
                    width="200px"
                    alt="Product"
                  />
                </div>
                <div className="product_left_detail">
                  <h3>{item.name}</h3>
                  <span>{item.sku}</span>
                </div>
              </div>
              <div className="right_section">
                <div className="price">Rs.{item.price}</div>
                <div className="qty">
                  <button
                    className="decrement"
                    onClick={() => handleQuantityChange(item.sku, "decrement")}
                  >
                    -
                  </button>
                  <span className="number">{item.quantity}</span>
                  <button
                    className="increment"
                    onClick={() => handleQuantityChange(item.sku, "increment")}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
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
            NEW10: This is a New customer coupon <button>Apply</button>
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
              <span className="price">₹{totalPrice}</span>
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
          <li className="total_amount">
            <div className="left_section">
              <p className="bill_title">Total Amount</p>
            </div>
            <div className="right_section">
              <span className="price">₹{totalPrice}</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="policies_content">
        <h2>Policies</h2>
        <ul>
          <li>
            Item or quality modification is not allowed post placing an order.
            Verify details before you proceed.
          </li>
          <li>
            Order cancellation shall be allowed only until items are dispatched.
          </li>
        </ul>
      </div>

      <div className="pay_button">
        <Link to="/payment">Pay ₹{totalPrice}</Link>
      </div>
    </div>
  );
};

export default Cart;
