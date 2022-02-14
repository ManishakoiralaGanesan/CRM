//import * as axios from "axios";
import { axiosWithoutToken } from "./../../utills/axios.js";

function getUser() {
  const userString = localStorage.getItem("user");
  console.log(userString);
  if (userString != null) {
    try {
      return JSON.parse(userString);
    } catch (err) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return null;
    }
  }
  return null;
}
export default {
  namespaced: true,

  state: {
    user: getUser(),
    token: localStorage.getItem("token"),
  },

  getters: {
    isLoggedIn: (state) => {
      if (state.token == null || state.token == "") return false;
      return true;
    },
  },

  mutations: {
    updateUser: (state, payload) => {
      localStorage.setItem("user", JSON.stringify(payload));
      state.user = payload;
    },

    updateToken: (state, payload) => {
      localStorage.setItem("token", payload.token);
      state.token = payload.token;
    },
    clearToken: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.token = null;
      state.user = null;
    },
  },

  actions: {
    login: ({ commit, dispatch }, payload) => {
      return axiosWithoutToken
        .post("/user/login", {
          email: payload.email,
          password: payload.password,
        })
        .then((response) => {         
            console.log("res",response); 
          const serverResponse = response.data;
          const status = serverResponse.status;
          if (status == true) {
            const token = serverResponse.data.token;
            const user = serverResponse.data.user;
            commit("updateToken", { token });

            //
            dispatch("updateUserInfo", user);
          }
          return response;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    

    updateUserInfo: ({ commit }, user) => {
      commit("updateUser", user);
    },
  },
};
