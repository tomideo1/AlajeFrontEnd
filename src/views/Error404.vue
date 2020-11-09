<template>
  <div>
    <div class="pt-5 mt-4  ">
      <section class="banner"></section>
      <span class="wrong"><img src="@/assets/wrong.svg"/></span>
      <div class="d-block d-lg-none d-md-none">
        <p class=" d-md-none wrong wrong-status-sm">404</p>
      </div>
      <div class="d-md-block d-lg-block d-none">
        <p class=" wrong wrong-status-lg">404</p>
      </div>
      <p class="wrong font-avenir text-bold text-center ">The page you are looking for was moved, removed, renamed or might never existed.</p>
      <alaje-buttons class="wrong mx-auto mt-4" text_color="purple" text="Go Back" @click="$router.go(-1)" />
      <!--      <p class=" wrong wrong-status-lg">404</p>-->
    </div>
  </div>
</template>

<script>
import AlajeButtons from "../components/Form/AlajeButtons";
export default {
  name: "Error404",
  components: { AlajeButtons }
};
</script>

<style lang="scss" scoped>
.body {
  overflow: hidden !important;
}
.banner {
  height: 100vh !important;
  width: 100vw !important;
  background-size: cover;
  z-index: -1;
  background: url("~@/assets/404.svg") no-repeat top right;
  position: absolute;
  top: -10%;
  /*background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);*/
}

.wrong {
  display: flex;
  justify-content: center;
  &-status-sm {
    font-family: fonts(Avenir);
    font-style: normal;
    font-weight: 900;

    line-height: 119.6%;
    /* or 344px */

    text-align: justify;

    color: #211048;
    font-size: 150px;
  }
  &-status-lg {
    font-family: fonts(Avenir);
    font-style: normal;
    font-weight: 900;

    line-height: 119.6%;
    /* or 344px */

    text-align: justify;

    color: #211048;
    font-size: 288px;
  }
}
</style>
