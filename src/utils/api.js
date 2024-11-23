import axios from "axios";
import { useSelector } from "react-redux";

// Base URL of your API
const BASE_URL =
  "https://proxy.cors.sh/https://totalfood.greenhonchos.in/rest/V1/";

// Create an axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-cors-api-key": "temp_e64bf0e33eab01079854c8030a09f92d",
    "Content-Type": "application/json",
  },
  timeout: 20000,
});

// Function to update Bearer token dynamically
// This function expects the token to be passed from your component
const setBearerToken = (token) => {
  if (token) {
    console.log("Setting Bearer Token:", token); // Log to check the token value
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    console.log("Token is not available");
    delete api.defaults.headers.common["Authorization"];
  }
};

// Interceptors
api.interceptors.request.use(
  (config) => {
    // Log the request configuration for debugging
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
export const getData = async (endpoint, token) => {
  try {
    setBearerToken(token); // Set token dynamically
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (endpoint, data, token) => {
  try {
    setBearerToken(token); // Set token dynamically
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// Export everything as needed
export { api, setBearerToken };
