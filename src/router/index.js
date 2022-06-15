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
    name: "JobResults",
    component: () =>
      import(
        /* webpackChunkName: "jobs-results" */ "../views/JobResultsView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
