import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './../components/HelloWorld.vue'
import Login from '../views/Login.vue'
import store from "../store"
import Register from "../views/Register.vue";
import VerificationPage from "../views/VerifyPage.vue"

Vue.use(VueRouter)

const routes = [
  
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "content",
      requiresAuth: false,
    },
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "content",
      requiresAuth: false,
    },
    component: Register,
  },
  {
    path: "/verification-page/:id",
    name: "Verification page",
    meta: {
      layout: "content",
      requiresAuth: false,
    },
    component: VerificationPage,
  },
  
  {
    path:'/helloworld',
    name:"HelloWorld",
    component:HelloWorld,
    meta: {
      requiresAuth: true,
    },
  },
  
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth == false) {
    if (to.path.includes("login") && localStorage.getItem("token")) {
      next({
        path: "/",
      });
    } else {
      return next();
    }
  }
  if (localStorage.getItem("token")) {
    if (to.meta.premium) {
      if (store.state.auth.isPremiumMember) {
        next();
      } else {
        next({
          path: "/upgrade",
        });
      }
    } else {
      next();
    }
  } else {
    next({
      path: "/login",
    });
  }
});
export default router
