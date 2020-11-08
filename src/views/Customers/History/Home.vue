<template>
  <div>
    <div class="container-fluid mb-4">
      <div class="d-flex flex-row">
        <tabs tab-type="tabbed" :tabs="tabs" :current-tab="currentTab" />
        <header-card class="ml-auto" :wallet-amount="1000" showWallet :show-greetings="false" />
      </div>
      <alaje-table search title="All Transactions" v-if="currentTab === 'home'" :items="items" hasActions />
    </div>
  </div>
</template>

<script>
import Tabs from "../../../components/general/tabs";
import HeaderCard from "../../../components/general/headerCard";
import AlajeTable from "../../../components/general/AlajeTable";
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
      ],
      currentTab: "home",
      items: [
        {
          id: "u3929292892920",
          image: `@/assets/demo-card.png`,
          name: "sksksk",
          date: "ssksksk",
          status: "pending"
        },
        {
          id: "u3929292892920",
          image: `@/assets/demo-card.png`,
          name: "Ayotomide",
          date: "29/102/2003",
          status: "success"
        }
      ],
      tableItem: null
    };
  },
  components: {
    AlajeTable,
    Tabs,
    HeaderCard
  },
  mounted() {
    this.$Bus.$on("current-tab", res => {
      this.currentTab = res.tab;
    });
  }
};
</script>

<style scoped></style>
