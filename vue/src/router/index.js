import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CarView from "../views/CarView.vue";
import ErrorPage from "../views/404.vue";
import Dealer from "../views/DealerView.vue";
import Manufacturer from "../views/Manufacturer.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/car/:id",
    name: "car",
    component: CarView,
    children: [
      {
        path: "dealer",
        component: Dealer,
      },
      {
        path: "manufacturer",
        component: Manufacturer,
      },
    ],
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
