import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./pages/HomePage.vue";
import EnConstruccion from "./pages/EnConstruccion.vue";


Vue.use(VueRouter);
let router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },

    {
      path: "/construccion/",
      name: "enConstruccion",
      component: EnConstruccion,
    },
  ],
});

export default router;
