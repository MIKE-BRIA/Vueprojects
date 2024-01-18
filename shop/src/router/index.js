import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Product from "../views/Product.vue";
import ErrorPage from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Product/:id",
    name: "Product",
    component: Product,
  },
  {
    path: "/:catchAll(.*)",
    name: "errorPage",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
