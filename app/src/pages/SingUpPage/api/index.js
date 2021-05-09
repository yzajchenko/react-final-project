import api from "../../../api/apiConfig";

export const signUp = body => {
  return api.post("auth/signup", body);
};
