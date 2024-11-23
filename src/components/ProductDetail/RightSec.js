import React, { useState } from "react";
import Tabbing from "./Tabbing";
import { addToCart, removeFromCart, setError } from '../../store/actions/cartActions';
import { useSelector, useDispatch } from "react-redux";


const RightSec = ({ productDetail }) => {
  const auth = useSelector((state) => state.auth);
  
  const dispatch = useDispatch(); // For dispatching actions to the store
  const [addToCartData, setAddToCartData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedSku, setSelectedSku] = useState(productDetail[0]?.sku); // Default SKU
  const [quantity, setQuantity] = useState(1);

  const handleOptionChange = (event) => {
    setSelectedSku(event.target.value);
    console.log("Selected SKU:", event.target.value);
  };

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) => (type === "increment" ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)));
  };

 // Function to save cart data into localStorage
 const saveCartToLocalStorage = (cartItem) => {
  const currentCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  currentCart.push(cartItem);
  localStorage.setItem("cartItems", JSON.stringify(currentCart));
};


  const handleAddToCart = async () => {
    if (!auth.token || !auth.quoteId || !productDetail[0]?.sku) {
      setError("Missing required data to add the product to the cart.");
      return;
    }

    const apiUrl = "https://proxy.cors.sh/https://totalfood.greenhonchos.in/rest/V1/carts/mine/items";
    const payload = {
      cartItem: {
        sku: selectedSku || productDetail[0]?.sku, // Use the selected SKU for configurable products
        qty: 1,
        quote_id: auth.quoteId,
      },
    };

    console.log("Payload:", payload);

    try {
      setLoading(true);
      setError(null);

      // Make the API call
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-cors-api-key": "temp_bff681b977c3dfa62725fa465683420b",
          Authorization: `Bearer ${auth.token}`, // Replace with dynamic token
        },
        body: JSON.stringify(payload),
      });

      // Handle response
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to add product to cart:", errorText);
        setError("Failed to add product to cart. Please try again.");
      } else {
        const responseData = await response.json();
        console.log("Product added to cart successfully:", responseData);
        // Dispatch addToCart action to update the store
        dispatch(addToCart(responseData));

        // Set local state with the response data
        setAddToCartData(responseData);

        // Store updated cart in local storage
        saveCartToLocalStorage(responseData);

        setError(null);

        
      }
    } catch (error) {
      console.error("Error while adding product to cart:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCartConfigurable = async () => {
    if (!auth.token || !auth.quoteId || !selectedSku) {
      setError("Missing required data to add the configurable product to the cart.");
      return;
    }

    const apiUrl = "https://proxy.cors.sh/https://totalfood.greenhonchos.in/rest/V1/carts/mine/items";

    // Find the selected option from the product details
    const selectedOption = productDetail[0]?.options?.find(
      (option) => option.sku === selectedSku
    );

    if (!selectedOption) {
      setError("Selected option is invalid.");
      return;
    }

    const payload = {
      cartItem: {
        sku: selectedSku, // Selected variant SKU
        qty: quantity,
        quote_id: auth.quoteId,
        product_option: {
          extension_attributes: {
            configurable_item_options: [
              {
                option_id: selectedOption.option_id, // Pass the option_id for the selected variant
                option_value: selectedOption.option_value, // The specific value associated with the option
              },
            ],
          },
        },
      },
    };

    console.log("Payload for configurable product:", payload);

    try {
      setLoading(true);
      setError(null);

      // Make the API call
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-cors-api-key": "temp_bff681b977c3dfa62725fa465683420b",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(payload),
      });

      // Handle response
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to add configurable product to cart:", errorText);
        setError("Failed to add product to cart. Please try again.");
      } else {
        const responseData = await response.json();
        console.log("Configurable product added to cart successfully:", responseData);
        // Dispatch addToCart action to update the store
        dispatch(addToCart(responseData));

        // Set local state with the response data
        setAddToCartData(responseData);

        // Store updated cart in local storage
        saveCartToLocalStorage(responseData);

        setError(null);

      }
    } catch (error) {
      console.error("Error while adding configurable product to cart:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="right_section">
      <h2>{productDetail[0]?.name}</h2>
      <p>Nine months if stored & transported at or below minus 18°C from date of manufacture.</p>

      <div className="featured_detail">
        <ul>
          <li>
            <span></span>
            <h3>{productDetail[0]?.options[0]?.ksp}</h3>
          </li>
          <li>
            <span></span>
            <h3>{productDetail[0]?.options[0]?.pieces}</h3>
          </li>
        </ul>
      </div>

      <div className="price_sec">
        <span className="price">₹{productDetail[0]?.options[0]?.price}</span>
      </div>
      <span className="inclusive_of_all_taxes">Inclusive of all taxes</span>

      <div className="button_section">
        {productDetail[0]?.product_type === "configurable" && (
          <div className="left_section">
            <select
              name="product-options"
              id="product-options"
              onChange={(e) => handleOptionChange(e)}
            >
              {productDetail[0]?.options?.map((option, index) => (
                <option key={index} value={option.sku}>
                  {option.name} - {option.special_price ? `Special Price: ₹${option.special_price}` : `Price: ₹${option.price}`}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="right_section">
          <div className="qty">
            <button onClick={() => handleQuantityChange("decrement")}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={() => handleQuantityChange("increment")}>+</button>
          </div>
        </div>

        
        {productDetail[0]?.product_type === "simple" && (
           <div className="left_section">
           <button onClick={handleAddToCart} disabled={loading}>
             {loading ? "Adding..." : "Add to Cart"}
           </button>
         </div>
        )}

        {productDetail[0]?.product_type === "configurable" && (
           <div className="left_section">
           <button onClick={handleAddToCartConfigurable} disabled={loading}>
             {loading ? "Adding..." : "Add to Cart"}
           </button>
         </div>
        )}

     
      </div>

      {error && <p className="error_message">{error}</p>}

      <div className="product_details">
        <h2>Nutrition Value (Per 100g)</h2>
        <div className="nutrition_value_box">
          <div className="nutrition_value_inner">
            {productDetail[0]?.energy}
            <span>Energy</span>
          </div>
          <div className="nutrition_value_inner">
            {productDetail[0]?.protein}
            <span>Protein</span>
          </div>
          <div className="nutrition_value_inner">
            {productDetail[0]?.fat}
            <span>Fats</span>
          </div>
          <div className="nutrition_value_inner">
            {productDetail[0]?.carbs}
            <span>Carbs</span>
          </div>
        </div>

        <ul className="tabbingSec">
          <Tabbing title="Description" content={productDetail[0]?.description} />
          <Tabbing title="Storage Instructions" content={productDetail[0]?.storage_instructions} />
          <Tabbing title="Marketed By" content={productDetail[0]?.manufacturing_details} />
        </ul>
      </div>
    </div>
  );
};

export default RightSec;
