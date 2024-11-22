export const setAuthData = (data) => {
    return {
      type: "SET_AUTH_DATA",
      payload: data,
    };
  };
  
  export const clearAuthData = () => {
    return {
      type: "CLEAR_AUTH_DATA",
    };
  };
  