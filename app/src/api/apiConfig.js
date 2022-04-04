import axios from "axios";

const baseURL = "https://demo-api.it-shatle.by";

const apiConfig = {
  baseURL,
  timeout: 100000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Pragma: "no-cache"
  },
  params: {}
};

export default axios.create(apiConfig);
