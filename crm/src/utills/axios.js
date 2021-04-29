import axios from "axios";

 var VUE_APP_BASE_URL = "http://api.dev.dreamtusk.com";


export const axiosWithoutToken = axios.create({
  baseURL: VUE_APP_BASE_URL,
  timeout: 20000,
});

export const axiosWithToken = axios.create({
  baseURL: VUE_APP_BASE_URL,
  timeout: 20000,
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});
