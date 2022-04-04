import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import SingInPageLayout from "../components/SingInPageLayout";
import { SIGN_IN_REQUEST } from "../actions";

const SingInContainer = () => {
  const dispatch = useDispatch();
  const { isAuth, errors } = useSelector(state => state.signIn);
  const [signInValue, setChange] = useState({
    email: "",
    password: ""
  });

  const handleChange = useCallback(event => {
    const { value, name } = event.target;
    setChange(state => {
      return {
        ...state,
        [name]: value
      };
    });
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch(SIGN_IN_REQUEST(signInValue));
    },
    [signInValue, dispatch]
  );

  return (
    <SingInPageLayout
      signInValue={signInValue}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isAuth={isAuth}
      errors={errors}
    />
  );
};

export default SingInContainer;
