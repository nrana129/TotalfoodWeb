import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TryMust } from "../../assets/images/index";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Get cart data from Redux store
  const [cartItems, setCartItems] = useState([]);

  // Fetch product image from API using SKU
  const fetchProductImage = async (sku) => {
    const apiUrl = `https://proxy.cors.sh/https://totalfood.greenhonchos.in/rest/V1/getproductimage/${sku}`;
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-cors-api-key": "temp_bff681b977c3dfa62725fa465683420b",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch product image for SKU: ${sku}`);
      }

      const data = await response.json();
      return data?.[0]?.product_image_url || "";
    } catch (error) {
      console.error(error);
      return ""; // Return an empty string if API call fails
    }
  };

  // Sync cart data from Redux store to local state
  useEffect(() => {
    const syncCart = async () => {
      if (cart && cart.newItemName) {
        const newItem = {
          name: cart.newItemName,
          price: cart.newItemPrice,
          sku: cart.newItemSku,
          quantity: cart.totalQuantity || 1, // Default quantity is 1
        };

        // Fetch the product image
        const imageUrl = await fetchProductImage(newItem.sku);
        newItem.image = imageUrl;

        // Avoid duplicates, only add if the item is new
        setCartItems((prevItems) => {
          const isDuplicate = prevItems.some((item) => item.sku === newItem.sku);
          if (isDuplicate) {
            return prevItems.map((item) =>
              item.sku === newItem.sku
                ? { ...item, quantity: newItem.quantity } // Update quantity if item exists
                : item
            );
          }
          return [...prevItems, newItem];
        });
      }
    };

    syncCart();
  }, [cart]);

  // Handle increment and decrement for item quantity
  const handleQuantityChange = (sku, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.sku === sku
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + (action === "increment" ? 1 : -1)),
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
                    src={item.image || "default-image.jpg"} // Fallback image
                    alt="Product" height="10px" width="200px"
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

