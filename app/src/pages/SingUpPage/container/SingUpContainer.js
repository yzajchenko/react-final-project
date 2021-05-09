import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SING_UP_REQUEST } from "../actions";
import SingUpPageLayout from "../components/SingUpPageLayout";

const SignUpContainer = () => {
  const dispatch = useDispatch();
  const { success, errors, isLoading } = useSelector(state => state.signUp);
  const [formValue, setFormValue] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    password: "",
    phone: ""
  });

  const handleChange = useCallback(
    event => {
      const { value, name } = event.target;
      setFormValue(state => {
        return {
          ...state,
          [name]: value
        };
      });
    },
    [formValue]
  );

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch(SING_UP_REQUEST(formValue));
    },
    [dispatch, formValue]
  );

  return (
    <div>
      <SingUpPageLayout
        success={success}
        errors={errors}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formValue={formValue}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SignUpContainer;
