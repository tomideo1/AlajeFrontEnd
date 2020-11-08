<template>
  <div>
    <div class="container-fluid mb-4">
      <div class="d-flex flex-row">
        <tabs tab-type="tabbed" :tabs="tabs" :current-tab="currentTab" />
        <header-card class="ml-auto" :wallet-amount="1000" showWallet :show-greetings="false" />
      </div>

      <div class="container-fluid ">
        <div class="row">
          <section class="box-cover col-md-6  col-lg-6 col-12 ">
            <div class="m-3">
              <aselect showLabel label="Select Card " v-model="giftcard" class="mb-4" :options="giftCardOptions" placeholder="Select Your Card " />

              <aselect showLabel label="Select Card Type" v-model="giftcardType" class="mb-4" :options="giftCardOptions" placeholder="Select Your Card Type" />

              <aselect showLabel label="Select Country" v-model="country" class="mb-4" :options="giftCardOptions" placeholder="Select Your Country" />

              <alaje-inputs show-label label="Enter Giftcard Value" v-model="amount" class="mb-4" type="text" placeholder="Please Enter Amount" />
            </div>
          </section>
          <section class="box-cover col-md-5 ml-lg-5 mt-3 mt-lg-0 mt-md-0 ml-md-4 col-lg-5 col-12 ">
            <div class="m-3">
              <p class=" box-title">Giftcard Information</p>
              <div class="d-flex flex-column">
                <p class="font-avenir fw-500 ft-14">GIFTCARD:</p>
                <p class="font-avenir fw-500 ft-14">TYPE:</p>
                <p class="font-avenir fw-500 ft-14">COUNTRY:</p>
                <p class="font-avenir fw-500 ft-14">VALUE:</p>
              </div>
              <p class="box-title">What You’ll Get</p>
              <div class="d-flex flex-column">
                <p class="font-avenir text-bold-pink ft-24 fw-900 ">N0</p>
                <p class="font-avenir  ft-14 fw-500 ">Rate: N0/$</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "../../../components/general/tabs";
import HeaderCard from "../../../components/general/headerCard";
import Aselect from "../../../components/Form/Aselect";
import AlajeInputs from "../../../components/Form/AlajeInputs";
export default {
  name: "Home",
  components: {
    AlajeInputs,
    Tabs,
    HeaderCard,
    Aselect
  },
  data() {
    return {
      currentTab: "Buy",
      tabs: [
        {
          name: "Buy",
          value: "Buy"
        },
        {
          name: "Sell",
          value: "sell"
        }
      ],
      giftcard: null,
      giftcardType: null,
      country: null,
      amount: "",
      giftCardOptions: [
        {
          value: "test",
          text: "Amazon "
        },
        {
          value: "book",
          text: "Alaje Stuff "
        }
      ]
    };
  },
  mounted() {
    this.$Bus.$on("current-tab", res => {
      this.currentTab = res.tab;
    });
  }
};
</script>

<style lang="scss" scoped>
.label-class {
  line-height: 119.6%;
  color: #211048;
  font-style: normal;
}
</style>
