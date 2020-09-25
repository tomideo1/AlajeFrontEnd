<template>
  <div class="container-fluid">
    <div v-show="tradeSelect">
      <h6 class="  font-avenir mx-auto text-center mt-5 ft-20 text-black">What do you want to do today ?</h6>
      <b-container class=" mt-lg-5 pt-lg-5">
        <div class="row  d-flex">
          <div class="col-md-5  mt-3 col-12   d-none  d-lg-block d-md-block d-xl-block">
            <b-card class="b-card  float-lg-right float-xl-right " style="width:250px;">
              <b-card-body class="d-flex flex-column mt-lg-4" @click="tradeSelect = !tradeSelect">
                <p class="text-center ft-32  font-avenir text-bold-pink">Buy</p>
                <p class="text-center ft-32 w-100 font-avenir text-bold-pink">Gift Cards</p>
              </b-card-body>
            </b-card>
          </div>

          <!-- MOBILE VIEW -->

          <div class="col-md-5 mt-5 mb-5 mt-3 col-12 d-flex justify-content-center d-block  d-lg-none d-md-none d-xl-none">
            <b-card class="b-card  float-lg-right float-xl-right " style="width:250px;">
              <b-card-body class="d-flex flex-column  mt-lg-4">
                <p class="text-center ft-32  font-avenir text-bold-pink">Buy</p>
                <p class="text-center ft-32 w-100 font-avenir text-bold-pink">Gift Cards</p>
              </b-card-body>
            </b-card>
          </div>

          <div class="col-md-2 col-12 col-lg-2 col-xl-2"></div>
          <div class="col-md-5  mt-3 col-12 d-lg-block d-none d-md-block d-xl-block">
            <b-card class="b-card " style="width:250px;" @click="tradeSelect = !tradeSelect">
              <b-card-body class="d-flex flex-column mt-lg-4">
                <p class="text-center ft-32  font-avenir text-bold-pink">Sell</p>
                <p class="text-center ft-32 w-100 font-avenir text-bold-pink">Gift Cards</p>
              </b-card-body>
            </b-card>
          </div>

          <!-- MOBILE VIEW -->

          <div class="col-md-5  mb-5 mt-3 col-12 d-flex justify-content-center d-block d-lg-none d-md-none d-xl-none">
            <b-card class="b-card " style="width:250px;">
              <b-card-body class="d-flex flex-column  mt-4">
                <p class="text-center ft-32  font-avenir text-bold-pink">Sell</p>
                <p class="text-center ft-32 w-100 font-avenir text-bold-pink">Gift Cards</p>
              </b-card-body>
            </b-card>
          </div>
        </div>
      </b-container>
    </div>
    <div v-show="!tradeSelect">
      <header-card :show-greetings="false" title="Buy GiftCards" shwo-wallet :wallet-amount="1000" />
      <div class="row">
        <a-select class="col-md-4" :items="items" v-model="merchant"></a-select>
        <div class="col-lg-8 col-12 ">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <div class="row-1-card">
                <b-skeleton-img></b-skeleton-img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCard from "../../components/general/headerCard";
export default {
  name: "Trade",
  data() {
    return {
      merchant: "",
      tradeSelect: true,
      items: [
        {
          value: "1",
          logo: "logo-image",
          text: "Addidas"
        },
        {
          value: "2",
          logo: "logo-image",
          text: "Nike"
        },
        {
          value: "3",
          logo: "logo-image",
          text: "Apple"
        },
        {
          value: "4",
          logo: "logo-image",
          text: "Amazon"
        }
      ]
    };
  },
  components: {
    HeaderCard,
    ASelect: () => import("@/components/Form/AlajeSelect")
  }
};
</script>

<style lang="scss" scoped>
.b-card {
  border: 1px solid #e6e7ef !important;
  box-sizing: border-box !important;
  border-radius: 30px !important;
  height: 250px;

  &:hover {
    transform: scale(1.3);
    /* Equal to scaleX(0.7) scaleY(0.7) */
    background: color(a-purple);

    p {
      color: #ffff !important;
    }
  }
}

.row-1-card {
  background: #ffffff;
  /* 25% Grey */

  border: 1px solid #e6e7ef;
  box-sizing: border-box;
  border-radius: 10px;
}
</style>
