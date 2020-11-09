<template>
  <div>
    <div class="container-fluid mb-4">
      <div class="d-flex flex-row">
        <tabs tab-type="route" :tabs="tabs" />
        <header-card class="ml-auto" :wallet-amount="1000" showWallet :show-greetings="false" />
      </div>
    </div>

    <section class="container-fluid mb-4">
      <div class="d-flex flex-row-reverse">
        <p class="col-3 pl-5 font-avenir ft-14 text-bold-black ">Emails</p>
        <p class="col-3   font-avenir ft-14 text-bold-black ">Push Notifications</p>
      </div>
      <div class="d-flex flex-column">
        <span class="d-flex flex-row">
          <p class="mt-3 font-avenir ft-14 text-bold-black ">Wallet Notification</p>
          <p class="mt-3 ml-auto col-3 pl-5"><Switches name="noty-wallet" v-model="showWallet" /></p>
          <p class="mt-3  col-3 pl-5"><Switches name="noty-wallet" v-model="showWallet" /></p>
        </span>
        <span class="d-flex flex-row">
          <p class="mt-3 font-avenir ft-14 text-bold-black ">Trade Notification</p>
          <p class="mt-3 ml-auto col-3 pl-5"><Switches name="noty-wallet" v-model="showWallet" /></p>
          <p class="mt-3  col-3 pl-5"><Switches name="noty-wallet" v-model="showWallet" /></p>
        </span>
        <span class="d-flex flex-row">
          <p class="mt-3 font-avenir ft-14 text-bold-black ">News Letters</p>
          <p class="mt-3 ml-auto col-3 pl-5"><Switches name="noty-wallet" v-model="showWallet" /></p>
          <p class="mt-3  col-3 pl-5"><Switches name="noty-wallet" v-model="showWallet" /></p>
        </span>
      </div>

      <alaje-buttons text_color="purple" text="Update" class="ml-auto mt-3 " />
    </section>
  </div>
</template>

<script>
import HeaderCard from "../../../components/general/headerCard";
import Tabs from "../../../components/general/tabs";
import Switches from "../../../components/Form/Switches";
import AlajeButtons from "../../../components/Form/AlajeButtons";
export default {
  name: "Home",
  components: { AlajeButtons, Switches, Tabs, HeaderCard },
  data() {
    return {
      tabs: [
        {
          name: "Profile",
          value: "home"
        },
        {
          name: "Notifications",
          value: "notification"
        }
      ],
      currentTab: "home",
      showWallet: false
    };
  }
};
</script>

<style scoped lang="scss"></style>
