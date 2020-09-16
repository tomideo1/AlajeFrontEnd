import Vue from "vue";
import Head from "vue-head";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import adminRoutes from "./admin";
import customerRoutes from "./customer";
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
const baseRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { layout: "no-sidebar" }
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/auth/index.vue"),
    meta: { layout: "no-sidebar" },
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/auth/login.vue"),
        meta: { layout: "no-sidebar" }
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/views/auth/register.vue"),
        meta: { layout: "no-sidebar" }
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    meta: { layout: "no-sidebar" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "*",
    name: "404",
    meta: { layout: "no-sidebar" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/Error404.vue")
  }
];
const routes = [...baseRoutes, ...adminRoutes, ...customerRoutes];
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior,
  base: process.env.BASE_URL
});

export default router;
