<template>
  <b-container fluid="lg" class="main-content-container ">
    <h6 class="  font-avenir mx-auto text-center mt-5 ft-20 text-black">What do you want to do today ?</h6>
    <b-container v-show="false" class=" mt-lg-5 pt-lg-5">
      <div class="row  d-flex">
        <div class="col-md-5  mt-3 col-12   d-none  d-lg-block d-md-block d-xl-block">
          <b-card class="b-card  float-lg-right float-xl-right " style="width:250px;">
            <b-card-body class="d-flex flex-column mt-lg-4">
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
          <b-card class="b-card " style="width:250px;">
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
    <a-select class="col-md-3 float-left" :items="items" v-model="merchant"></a-select>
  </b-container>
</template>

<script>
export default {
  name: "Trade",
  data() {
    return {
      merchant: "",

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
</style>
