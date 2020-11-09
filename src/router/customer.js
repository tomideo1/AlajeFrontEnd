import Dashboard from "../views/Customers/Dashboard";
import Index from "../views/Customers/Trade/index";
import History from "../views/Customers/History/index";
import Rates from "../views/Customers/Rates/index";
import Wallet from "../views/Customers/Wallet/index";
import Bitcoin from "../views/Customers/Bitcoin/index";
import Settings from "../views/Customers/Settings/index";

export default [
  {
    path: "/customer",
    component: () => import("@/views/Customers"),
    children: [
      { path: "/customer/dashboard", name: "customer-dashboard", component: Dashboard },
      {
        path: "trade",
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
        path: "history",
        name: "customer-history",
        component: History,
        children: [
          {
            path: "home",
            name: "customer-history-home",
            component: () => import("@/views/Customers/History/Home.vue"),
            meta: {}
          }
        ]
      },
      {
        path: "rates",
        name: "customer-rates",
        component: Rates,
        children: [
          {
            path: "home",
            name: "customer-rates-home",
            component: () => import("@/views/Customers/Rates/Home.vue"),
            meta: {}
          }
        ]
      },
      {
        path: "wallet",
        name: "customer-wallet",
        component: Wallet,
        children: [
          {
            path: "home",
            name: "customer-wallet-home",
            component: () => import("@/views/Customers/Wallet/Home.vue"),
            meta: {}
          }
        ]
      },
      {
        path: "settings",
        name: "customer-settings",
        component: Settings,
        children: [
          {
            path: "home",
            name: "customer-settings-home",
            component: () => import("@/views/Customers/Settings/Home.vue"),
            meta: {}
          },
          {
            path: "notification",
            name: "customer-settings-notifications",
            component: () => import("@/views/Customers/Settings/Notification.vue"),
            meta: {}
          }
        ]
      },
      {
        path: "bitcoin",
        name: "customer-bitcoin",
        component: Bitcoin,
        children: [
          {
            path: "home",
            name: "customer-bitcoin-home",
            component: () => import("@/views/Customers/Bitcoin/Home.vue"),
            meta: {}
          }
        ]
      }
    ]
  }
];
