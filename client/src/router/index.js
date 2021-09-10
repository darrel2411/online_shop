import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import User from "../views/User.vue";
import AddProduct from "../views/AddProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!localStorage.access_token) {
        next({ name: "Login" });
      } else {
        next();
      }
    }
  },
  {
    path: "/users",
    name: "User",
    component: User,
    beforeEnter: (to, from, next) => {
      if (!localStorage.access_token) {
        next({ name: "Login" });
      } else {
        next();
      }
    }
  },
  {
    path: "/add",
    name: "Add",
    component: AddProduct,
    beforeEnter: (to, from, next) => {
      if (!localStorage.access_token) {
        next({ name: "Login" });
      } else {
        next();
      }
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        next({ name: "Home" });
      } else {
        next();
      }
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        next({ name: "Home" });
      } else {
        next();
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
