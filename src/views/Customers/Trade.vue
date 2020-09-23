<template>
  <b-container fluid="lg" class="main-content-container ">
    <h6 class="  font-avenir mx-auto text-center mt-5 ft-20 text-black">What do you want to do today ?</h6>
    <b-container class="d-flex justify-content-center mt-lg-5 pt-lg-5">
      <div class="row  text-center ">
        <div class="col-md-6 mt-3   col-12">
          <b-card class="b-card">
            <b-card-body class="d-flex flex-column">
              <span class="text-center ft-32  font-avenir text-pink">Buy </span>
              <span class="text-center ft-32  font-avenir text-pink">Gift Cards</span>
            </b-card-body>
          </b-card>
        </div>
        <div class="col-md-6  mt-3 col-12">
          <b-card class="b-card">
            <b-card-body class="d-flex flex-column">
              <span class="text-center ft-32  font-avenir text-pink">Sell </span>
              <span class="text-center ft-32  font-avenir text-pink">Gift Cards</span>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "Trade"
};
</script>

<style lang="scss" scoped>
.b-card {
  border: 1px solid #e6e7ef !important;
  box-sizing: border-box !important;
  border-radius: 30px !important;
  height: 250px;
}
</style>
