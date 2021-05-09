import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  isLoading: false,
  isAuth: false,
  errors: null,
  token: null,
  username: null
};

const signInReducer = handleActions(
  {
    [actions.SIGN_IN_REQUEST]: state => ({
      ...state,
      isLoading: true
    }),
    [actions.SIGN_IN_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      isAuth: true,
      token: payload.response.accessToken,
      username: payload.response.firstName
    }),
    [actions.SIGN_IN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response
    }),
    [actions.HANDLE_LOG_OUT]: state => ({
      ...state,
      isAuth: false,
      errors: null
    })
  },
  initialState
);

export default signInReducer;
