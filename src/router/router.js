import Vue from "vue";
import Head from "vue-head";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
});
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};

const router = new VueRouter({
  mode: "history",
  scrollBehavior,
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/views/auth/index.vue"),
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("@/views/auth/login.vue")
        },
        {
          path: "register",
          name: "register",
          component: () => import("@/views/auth/register.vue")
        }
      ]
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
  ]
});

export default router;
