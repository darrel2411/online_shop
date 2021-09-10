import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const baseUrl = "http://localhost:3000";

export default new Vuex.Store({
  state: {
    products: [],
    isLoggedIn: false,
    register: false,
    detail: {},
    users: []
  },
  mutations: {
    checkLoginMutation(state) {
      const token = localStorage.access_token;

      if (!token) {
        state.isLoggedIn = false;
      } else {
        state.isLoggedIn = true;
      }
    },
    setLoginMutation(state, payload) {
      state.isLoggedIn = payload;
    },
    setEmailMutaion(state, payload) {
      state.email = payload;
    },
    setProductsMutation(state, payload) {
      // console.log(payload, 123);
      state.products = payload;
    },
    setUsersMutation(state, payload) {
      // console.log(payload);
      state.users = payload;
    }
  },
  actions: {
    registerAction(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: `${baseUrl}/users/register`,
          data: {
            email: payload.email,
            password: payload.password
          }
        })
          .then(response => {
            resolve(true);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    loginAction(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: `${baseUrl}/users/login`,
          data: {
            email: payload.email,
            password: payload.password
          }
        })
          .then(response => {
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("email", payload.email);
            context.commit("setLoginMutation", true);
            context.commit("setEmailMutaion", payload.email);
            resolve(true);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    logoutAction(context) {
      localStorage.clear();
      context.commit("setLoginMutation", false);
    },
    fetchUsers(context) {
      axios({
        method: "GET",
        url: `${baseUrl}/users`
      })
        .then(response => {
          // console.log(response.data);
          context.commit("setUsersMutation", response.data);
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    fetchProducts(context) {
      axios({
        method: "GET",
        url: `${baseUrl}/products`
      })
        .then(response => {
          // console.log(response.data);
          context.commit("setProductsMutation", response.data);
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    addProductAction(context, payload) {
      console.log(payload, 12345);
      const addProduct = {
        name: payload.name,
        descriptions: payload.descriptions,
        price: +payload.price,
        image_url: payload.image_url,
        CategoryId: +payload.CategoryId
      };
      // return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `${baseUrl}/products`,
        data: addProduct
      })
        .then(response => {
          console.log(response, 12312);
        })
        .catch(err => {
          console.log(err, 1321212);
          // reject(err);
        });
      // });
    }
  },
  modules: {}
});
