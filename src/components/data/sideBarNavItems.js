// import store from "@/store/index"

export default function() {
  let appRoutes = [
    {
      title: "Menu",
      items: [
        {
          title: "Dashboard",
          routeIcon: "dashboard",
          to: {
            name: "/dashboard"
          }
        }
      ]
    }
  ];

  return appRoutes;
}
