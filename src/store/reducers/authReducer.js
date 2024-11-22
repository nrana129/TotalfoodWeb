const initialState = {
  customerId: null,
  quoteId: null,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_DATA":
      return {
        ...state,
        customerId: action.payload.customerId,
        quoteId: action.payload.quoteId,
        token: action.payload.token,
      };
    case "CLEAR_AUTH_DATA":
      return {
        ...state,
        customerId: null,
        quoteId: null,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
