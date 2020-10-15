import axios from "axios";

let baseApi = axios.create({
  baseURL:
    // "http://127.0.0.1:8000/api"
    process.env.NODE_ENV === "production" ? "https://autoidentificazione.betitaly.it/api" : "http://127.0.0.1:8000/api"

});

let Api = () => {
  // let token = localStorage.getItem("authtoken");

  // if (token) {
  //   baseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // }
  return baseApi;
};
export default Api;
