import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Product from "../views/Product.vue";
import ErrorPage from "../views/404.vue";
import Balance from "../components/Balance.vue";
import Photo from "../views/Todo.vue";
import News from "../views/News.vue";
import Newsp from "../views/Newsp";

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
    path: "/news/:title",
    name: "new",
    component: Newsp,
  },
  {
    path: "/photos",
    name: "photos",
    component: Photo,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/balance",
    name: "Balance",
    component: Balance,
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
