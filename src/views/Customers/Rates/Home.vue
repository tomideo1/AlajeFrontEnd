<template>
  <div>
    <div class="container-fluid mb-4">
      <div class="d-flex flex-row">
        <tabs tab-type="tabbed" :tabs="tabs" :current-tab="currentTab" />
        <header-card class="ml-auto" :wallet-amount="1000" showWallet :show-greetings="false" />
      </div>

      <div class="container-fluid ">
        <div class="row">
          <section class="box-cover col-md-6 col-lg-6 col-12 ">
            <div class="m-3">
              <label class="font-avenir ft-12 label-class text-bold-black fw-900 ml-1">Select Giftcard</label>
              <b-form-select class=" mr-3 col-5 mb-4 col-12" v-model="giftcard" :options="giftCardOptions"></b-form-select>

              <label class="font-avenir ft-12 label-class text-bold-black fw-900 ml-1">Select Card Type</label>
              <b-form-select class=" mr-3 col-5 mb-4 col-12" v-model="giftcardType" :options="giftCardOptions"></b-form-select>

              <aselect showLabel label="Select Country" />
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
export default {
  name: "Home",
  components: {
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
      giftCardOptions: [
        {
          value: null,
          text: "Please Select Giftcard "
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
