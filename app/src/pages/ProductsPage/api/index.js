import api from "../../../api/apiConfig";

export const products = numberPage => api.get(`/products?page=${numberPage}`);
