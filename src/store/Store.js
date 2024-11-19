import { createStore } from 'redux';

const initialState = {
  Qtycounter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, Qtycounter: state.Qtycounter + 1 };
    case 'DECREMENT':
      return { ...state, Qtycounter: state.Qtycounter - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
