import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import cartReducer from './reducers/cartReducer';

// Function to load the Redux state from localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined; // Return undefined if no state is saved in localStorage
    }
    return JSON.parse(serializedState); // Parse and return the saved state
  } catch (error) {
    console.error("Could not load state from localStorage", error);
    return undefined; // Return undefined in case of an error
  }
};

// Function to save the Redux state to localStorage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state); // Convert the state to a JSON string
    localStorage.setItem("reduxState", serializedState); // Save the state to localStorage
  } catch (error) {
    console.error("Could not save state to localStorage", error);
  }
};

// Combine the reducers
const rootReducer = combineReducers({
  auth: authReducer, // Authentication state
  cart: cartReducer, // Cart state
});

// Load the persisted state from localStorage (if available)
const persistedState = loadStateFromLocalStorage();

// Create the Redux store with the persisted state
const store = createStore(rootReducer, persistedState);

// Subscribe to store updates and save the latest state to localStorage whenever it changes
store.subscribe(() => {
  saveStateToLocalStorage(store.getState()); // Save the updated state to localStorage
});

export default store; // Export the store for use in the application
