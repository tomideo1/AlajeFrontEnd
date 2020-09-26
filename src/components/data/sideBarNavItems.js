// import store from "@/store/index"

export default function() {
  let customerRoutes = [
    {
      title: "Dashboard",
      routeIcon: "dashboard",
      activeIcon: "active-dashboard",
      identifier: "dashboard",
      to: {
        name: "customer-dashboard"
      }
    },
    {
      title: "Trade",
      routeIcon: "trade",
      activeIcon: "active-trade",
      identifier: "trade",
      to: {
        name: "customer-trade-home"
      }
    }
  ];
  let appRoutes = [
    {
      title: "Menu",
      items: []
    }
  ];

  appRoutes[0].items = [...customerRoutes];
  return appRoutes[0].items;
}
