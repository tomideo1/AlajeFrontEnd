import Dashboard from "../views/Customers/Dashboard";
import Trade from "../views/Customers/Trade";

export default [
  {
    path: "/customer/dashboard",
    name: "customer-dashboard",
    component: Dashboard
  },
  {
    path: "/customer/trade",
    name: "customer-trade",
    component: Trade
  }
];
