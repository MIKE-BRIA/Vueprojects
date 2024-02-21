import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Blog.vue";
import AdminView from "../views/Admin.vue";
import LoginView from "../components/Login.vue";
import SignupView from "../components/Signup.vue";
import ErrorView from "../components/401.vue";
import axios from "axios";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    // meta: {
    //   requiresAuth: true,
    // },
    beforeEnter: requireAuth,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/error",
    name: "error",
    component: ErrorView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

async function requireAuth(to, from, next) {
  const response = await axios.get("http://localhost:3000/checkauth");
  console.log(response.data);

  if (!response.data.isAuth) {
    next();
  } else {
    next({ name: "error" });
  }
  // try {
  //   const response = await axios.get("http://localhost:3000/checkauth");
  //   console.log(response.data);

  //   if (response.data.isAuth) {
  //     next();
  //   } else {
  //     next({ name: "error" });
  //   }
  // } catch (error) {
  //   console.error("Error checking authentication status:", error);
  //   next({ name: "error" }); // Handle error cases
  // }
}

export default router;
