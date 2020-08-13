import Vue from "vue";
import Vuex from "vuex";
import general from "./general";
import Customer from "./Customer";
import Merchant from "./Merchant";
import Admin from "./Admin";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Customer,
    Merchant,
    Admin,
    general
  },
  plugins: [
    createPersistedState({
      key: "alajehub"
    })
  ]
});
