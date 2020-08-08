import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/router";
import store from "./store";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
Vue.config.productionTip = false;

Sentry.init({
  dsn: "https://b4353ab1e01e4d4bb7a20e9c9f1a0b31@o430929.ingest.sentry.io/5383067",
  integrations: [new VueIntegration({ Vue, attachProps: true })]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
