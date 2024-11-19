// src/utils/api.js
import axios from "axios";
// import { store } from "../store/Store"; // Adjust the path if necessary

// Base URL of your API
const BASE_URL =
  "https://proxy.cors.sh/https://totalfood.greenhonchos.in/rest/V1/";


// Create an axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-cors-api-key": "temp_efccee76b63a0822c956c81b6631296a",
    "Content-Type": "application/json",
  },
  timeout: 20000,
});

// Function to update Bearer token dynamically
const setBearerToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};


// console.log("setBearerToken=====> ", setBearerToken)

// Apply initial token from Redux store
// const initializeBearerToken = () => {
//   const storeState = store.getState();
//   const token = storeState?.user?.customerData?.bearerToken;
//   setBearerToken(token);
// };

// Initialize the Bearer token
// initializeBearerToken();

// Interceptors
api.interceptors.request.use(
  (config) => {
    // Perform actions before the request is sent
    console.log("Request Config:", config);
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Optionally, log out or refresh token on 401 Unauthorized
      console.log("Unauthorized! Logging out...");
      // Add logout or token refresh logic here if needed
    }
    return Promise.reject(error);
  }
);

// CRUD Operations
export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// Export everything as needed
export { api, setBearerToken };
