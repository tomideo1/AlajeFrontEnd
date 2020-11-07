<template>
  <div class="container-fluid">
    <div>
      <h6 class="  font-avenir mx-auto text-center mt-5 ft-20 text-black">What do you want to do today ?</h6>
      <b-container class=" mt-lg-5 pt-lg-5 cursor-pointers">
        <div class="row  d-flex">
          <div class="col-md-5  mt-lg-3 mt-md-5 col-12   d-none  d-lg-block d-md-block d-xl-block">
            <b-card class="b-card cursor-pointer  float-lg-right float-xl-right " style="width:250px;" @click="navigate($event, 'buy')">
              <b-card-body class="d-flex flex-column mt-lg-4 mt-md-4  ">
                <p class="text-center ft-32  font-avenir text-bold-pink">Buy</p>
                <p class="text-center ft-32 w-100 font-avenir text-bold-pink">Gift Cards</p>
              </b-card-body>
            </b-card>
          </div>

          <!-- MOBILE VIEW -->

          <div class="col-md-5 mt-5 mb-5 mt-3 col-12 d-flex justify-content-center d-block cursor-pointer  d-lg-none d-md-none d-xl-none">
            <b-card class="b-card cursor-pointer  float-lg-right float-xl-right " style="width:250px;" @click="navigate($event, 'buy')">
              <b-card-body class="d-flex flex-column  mt-lg-4 mt-md-4 ">
                <p class="text-center ft-32  font-avenir text-bold-pink">Buy</p>
                <p class="text-center ft-32 w-100 font-avenir text-bold-pink">Gift Cards</p>
              </b-card-body>
            </b-card>
          </div>

          <div class="col-md-2 col-12 col-lg-2 col-xl-2"></div>
          <div class="col-md-5   mt-md-5 mt-lg-3 col-12 d-lg-block d-none d-md-block d-xl-block">
            <b-card class="b-card cursor-pointer " style="width:250px;" @click="navigate($event, 'sell')">
              <b-card-body class="d-flex flex-column mt-lg-4 mt-md-4">
                <p class="text-center ft-32  font-avenir text-bold-pink">Sell</p>
                <p class="text-center ft-32 w-100 font-avenir text-bold-pink">Gift Cards</p>
              </b-card-body>
            </b-card>
          </div>

          <!-- MOBILE VIEW -->

          <div class="col-md-5  mb-5 mt-3  cursor-pointer col-12 d-flex justify-content-center d-block d-lg-none d-md-none d-xl-none">
            <b-card class="b-card cursor-pointer " style="width:250px;" @click="navigate($event, 'sell')">
              <b-card-body class="d-flex flex-column  mt-4">
                <p class="text-center ft-32  font-avenir text-bold-pink">Sell</p>
                <p class="text-center ft-32 w-100 font-avenir text-bold-pink">Gift Cards</p>
              </b-card-body>
            </b-card>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trade",
  data() {
    return {};
  },
  components: {},
  async created() {
    this.$Bus.$on("mobile-select-toggle", res => {
      this.mobileToggleSelect = res.toggled;
    });
  },
  methods: {
    navigate(e, path) {
      e.stopImmediatePropagation();
      this.$router.push({
        name: `customer-trade-${path}`
      });
    }
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
    -webkit-transition: transform 0.5s ease-in-out;

    p {
      color: #ffff !important;
    }
  }
}
.skeleton {
  border-radius: 10px;
  border: 1px solid #e6e7ef;
}
.gift-card {
  &-active {
    border: 3px solid color(a-purple-color);
    box-sizing: border-box;
  }
}
</style>
