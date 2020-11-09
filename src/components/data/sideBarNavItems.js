// import store from "@/store/index"

export default function() {
  let mobileViewRoutes = [
    {
      title: "Notifications",
      routeIcon: "bell",
      to: {
        name: "notifications"
      }
    },
    {
      title: "Logout",
      routeIcon: "logout",
      to: {
        name: "logout"
      }
    }
  ];
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
    },
    {
      title: "Bitcoin",
      routeIcon: "bitcoin",
      activeIcon: "active-bitcoin",
      identifier: "bitcoin",
      to: {
        name: "customer-bitcoin-home"
      }
    },
    {
      title: "History",
      routeIcon: "history",
      activeIcon: "active-history",
      identifier: "history",
      to: {
        name: "customer-history-home"
      }
    },
    {
      title: "Rates",
      routeIcon: "rates",
      activeIcon: "active-rates",
      identifier: "rates",
      to: {
        name: "customer-rates-home"
      }
    },
    {
      title: "Wallet",
      routeIcon: "wallet",
      activeIcon: "active-wallet",
      identifier: "wallet",
      to: {
        name: "customer-wallet-home"
      }
    },
    {
      title: "Settings",
      routeIcon: "settings",
      activeIcon: "active-settings",
      identifier: "settings",
      to: {
        name: "customer-settings-home"
      }
    }
  ];
  let appRoutes = [
    {
      title: "Menu",
      items: []
    }
  ];

  appRoutes[0].items = [...customerRoutes, ...mobileViewRoutes];
  return appRoutes[0].items;
}
