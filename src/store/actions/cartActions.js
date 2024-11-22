export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_ERROR = 'SET_ERROR';

// Action to add an item to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product, // Full item data, including item_id, sku, etc.
});

// Action to remove an item from the cart
export const removeFromCart = (sku) => ({
  type: REMOVE_FROM_CART,
  payload: sku, // SKU to identify the item to remove
});

// Action to set errors
export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
