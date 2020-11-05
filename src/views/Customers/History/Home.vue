<template>
  <div>
    <div class="container-fluid mb-4">
      <div class="d-flex flex-row">
        <tabs tab-type="route" :tabs="tabs" />
        <header-card class="ml-auto" :wallet-amount="1000" showWallet :show-greetings="false" />
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "../../../components/general/tabs";
import HeaderCard from "../../../components/general/headerCard";
export default {
  name: "Home",
  data() {
    return {
      tabs: [
        {
          name: "All",
          value: "home"
        },
        {
          name: "Successful",
          value: "success"
        },
        {
          name: "Pending",
          value: "pending"
        }
      ]
    };
  },
  components: {
    Tabs,
    HeaderCard
  }
};
</script>

<style scoped></style>
