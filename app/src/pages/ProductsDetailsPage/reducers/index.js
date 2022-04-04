import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  isLoading: false,
  productInfo: {},
  errors: null
};

const productsDetailsReducer = handleActions(
  {
    [actions.PRODUCTS_DETAILS_REQUEST]: state => ({
      ...state,
      isLoading: true
    }),
    [actions.PRODUCTS_DETAILS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      productInfo: payload.response
    }),
    [actions.PRODUCTS_DETAILS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response.message
    })
  },
  initialState
);

export default productsDetailsReducer;
