import Dashboard from "../views/Customers/Dashboard";
import Index from "../views/Customers/Trade/index";
import History from "../views/Customers/History/index";

export default [
  {
    path: "/customer/dashboard",
    name: "customer-dashboard",
    component: Dashboard
  },
  {
    path: "/customer/trade",
    name: "customer-trade",
    component: Index,
    children: [
      {
        path: "home",
        name: "customer-trade-home",
        component: () => import("@/views/Customers/Trade/Home.vue"),
        meta: {}
      },
      {
        path: "buy",
        name: "customer-trade-buy",
        component: () => import("@/views/Customers/Trade/Buy.vue"),
        meta: {}
      },
      {
        path: "sell",
        name: "customer-trade-sell",
        component: () => import("@/views/Customers/Trade/Sell.vue"),
        meta: {}
      }
    ]
  },
  {
    path: "/customer/history",
    name: "customer-history",
    component: History,
    children: [
      {
        path: "home",
        name: "customer-history-home",
        component: () => import("@/views/Customers/History/Home.vue"),
        meta: {}
      },
      {
        path: "test",
        name: "customer-history-home",
        component: () => import("@/views/Customers/History/Home.vue"),
        meta: {}
      }
    ]
  }
];
