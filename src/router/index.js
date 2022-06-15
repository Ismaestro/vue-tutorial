import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "HomeRoute",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResultsRoute",
    component: () =>
      import(/* webpackChunkName: "jobs" */ "../views/JobResultsView.vue"),
  },
  {
    path: "/jobs/results/:id",
    name: "JobListingRoute",
    component: () =>
      import(/* webpackChunkName: "jobs" */ "../views/JobView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
