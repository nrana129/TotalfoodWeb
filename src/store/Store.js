import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Could not load state from localStorage", error);
    return undefined;
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Could not save state to localStorage", error);
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedState = loadStateFromLocalStorage();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
