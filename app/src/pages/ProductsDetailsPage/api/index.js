import api from "../../../api/apiConfig";

export const productsDetails = productDetails =>
  api.get(`/products/${productDetails}`);
