import { ADD_TO_CART, REMOVE_FROM_CART, SET_ERROR } from '../actions/cartActions';

const initialState = {
  items: [], // Array to store all items in the cart
  totalQuantity: 0, // To keep track of the last added item's quantity
  error: null, // To store any errors
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      // console.log(newItem.sku + newItem.name + newItem.price);
      // Check if the item already exists in the cart
      const existingItemIndex = state.items.findIndex((item) => item.sku === newItem.sku);

      

      if (existingItemIndex >= 0) {
        // Update quantity if the item already exists in the cart
        const updatedItems = [...state.items];
        console.log('new quantity' + newItem.qty);
        updatedItems[existingItemIndex].qty += newItem.qty;
        
        // Set the total quantity to the last added item's quantity
        return {
          ...state,
          items: updatedItems,
          totalQuantity: newItem.qty, // Update total quantity
          newItemName: newItem.name,  // Set only the new item's quantity
          newItemPrice: newItem.price,  // Set only the new item's quantity
          newItemSku: newItem.sku,  // Set only the new item's quantity
        };
      } else {
        // Add the new item to the cart
        return {
          ...state,
          items: [...state.items, newItem],
          totalQuantity: newItem.qty, // Update total quantity

          newItemName: newItem.name,  // Set only the new item's quantity
          newItemPrice: newItem.price,  // Set only the new item's quantity
          newItemSku: newItem.sku,  // Set only the new item's quantity
        };
      }

    case REMOVE_FROM_CART:
      const filteredItems = state.items.filter((item) => item.sku !== action.payload);
      const itemToRemove = state.items.find((item) => item.sku === action.payload);

      if (!itemToRemove) {
        // If the item is not found, return the current state
        return state;
      }
      return {
        ...state,
        items: filteredItems,
        totalQuantity: state.totalQuantity - itemToRemove.qty, // Deduct the removed item's quantity

      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
