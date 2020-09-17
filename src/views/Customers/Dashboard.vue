<template>
  <div>
    <div class="container-fluid mb-4">
      <header-card :greetings="greetings" shwo-wallet :wallet-amount="1000" />
      <div class="row">
        <div class="col-md-4 col-lg-3 col-6 p-2" v-for="(item, index) in statusCards" :key="index">
          <status-card :status="item.status" :count="item.count" :statusMessage="item.message" />
        </div>
      </div>
      <div class="clear-line"></div>
      <div class="row">
        <recent-transaction class="col-md-6 col-12 col-lg-6" :items="items" />
        <div class="col-md-6 col-12 col-lg-6">
          <div class="row">
            <img src="@/assets/trade_gift.svg" class="mt-3 mt-lg-0 mt-md-0 col-md-12" style="width: 100%" />
            <div class="col-md-12 mt-4 p-2 w-100 process_card">
              <p class="font-avenir text-bold-black ft-22 m-3">Complete Your Registration</p>
              <div class="m-4 d-flex flex-grow-1 flex-row">
                <div>
                  <span v-for="(stage, index) in stages" :key="index">
                    <div class=" d-lg-block d-md-none d-none ">
                      <alaje-icons v-if="stage.status" name="approved" size="sm" />
                      <alaje-icons v-else name="elipse" size="sm" />
                      <span class="ml-3  ">{{ stage.text }}</span>
                    </div>
                    <div class=" d-lg-none d-md-block d-block ">
                      <alaje-icons v-if="stage.status" name="approved" size="sm" />
                      <alaje-icons v-else name="elipse" size="sm" />
                      <!--                  <span class="ml-3 d-lg-block d-md-none d-none ">{{ stage.text }}</span>-->
                      <span class="ml-3  ft-10">{{ stage.text }}</span>
                    </div>
                    <div class="pt-4"></div>
                  </span>
                </div>
                <div class="ml-auto d-lg-block d-md-none d-none">
                  <vue-ellipse-progress :size="200" :progress="45" color="#09EFA3" fontColor="#09EFA3" animation="reverse 700 400">
                    <span slot="legend-value">%</span>
                  </vue-ellipse-progress>
                </div>
                <div class="ml-auto d-lg-none d-md-block d-block">
                  <vue-ellipse-progress :size="100" :progress="45" color="#09EFA3" fontColor="#09EFA3" animation="reverse 700 400">
                    <span slot="legend-value">%</span>
                  </vue-ellipse-progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clear-line mt-5 pt-5 "></div>
    </div>
    <dashboard-footer />
  </div>
</template>

<script>
import HeaderCard from "../../components/general/headerCard";
import StatusCard from "../../components/cards/StatusCard";
import RecentTransaction from "../../components/cards/recentTransaction";
import AlajeIcons from "../../components/general/AlajeIcons";
import DashboardFooter from "../../components/general/dashboardFooter";
export default {
  name: "Dashboard",
  data() {
    return {
      greetings: {
        text: "Welcome,",
        name: "TOMIDE"
      },
      statusCards: [
        {
          status: "pending",
          message: "Pending Transactions",
          count: 10
        },
        {
          status: "success",
          message: "SccuessFul Transactions",
          count: 20
        },
        {
          status: "failed",
          message: "Cancelled Transactions",
          count: 2
        },
        {
          status: "sold",
          message: "Sold Transactions",
          count: 20
        }
      ],
      items: [
        {
          name: "Mosope",
          store: "Amazon",
          value: "N5000",
          status: "success"
        },
        {
          name: "Brooklyn Simmons",
          store: "Steam",
          value: "N5000",
          status: "pending"
        }
      ],
      stages: [
        {
          text: "Verify your Email Address",
          status: true
        },
        {
          text: "Add your Bank Account",
          status: true
        },
        {
          text: "Add your BVN",
          status: false
        },
        {
          text: "Add your Debit Card",
          status: false
        }
      ]
    };
  },
  components: {
    DashboardFooter,
    AlajeIcons,
    RecentTransaction,
    StatusCard,
    HeaderCard
  }
};
</script>

<style scoped lang="scss">
.process_card {
  /* White */

  background: #ffffff;
  /* 25% Grey */

  border: 1px solid #e6e7ef;
  box-sizing: border-box;
  border-radius: 20px;
}
</style>
