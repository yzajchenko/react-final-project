import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  isLoading: false,
  products: [],
  errors: null
};

const productsReducer = handleActions(
  {
    [actions.PRODUCTS_REQUEST]: state => ({
      ...state,
      isLoading: true
    }),
    [actions.PRODUCTS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      products: payload.response
    }),
    [actions.PRODUCTS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response.message
    })
  },
  initialState
);

export default productsReducer;
