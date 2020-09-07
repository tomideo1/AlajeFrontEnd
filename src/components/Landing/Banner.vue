<template>
  <div>
    <section class="banner"></section>
    <div class="d-none d-lg-block d-md-block font-avenir  text-wrap   text-align-left  center-text">
      <h2 class=" line-height-50 text-bold-white ft-36 mt-lg-n5">
        The Most Reliable Gift Card Merchant in West Africa.
      </h2>
      <span class="text-white font-avenir ft-14"> We give our clients the most flexible and reliable ways to buy and sell gift cards instantly. </span>
      <br />
      <a-button text="Get Started " @click="$router.push({ name: 'register' })" class="btn mt-lg-3 mt-md-3" text_color="white" size="md " />
      <a-icons name="arrow-shade-down" class="arrow-icon" @click="scrollDown" />
    </div>
    <range-card />
  </div>
</template>

<script>
export default {
  name: "Banner",

  components: {
    // eslint-disable-next-line vue/no-unused-components
    RangeCard: () => import("@/components/Landing/RangeCard"),
    AIcons: () => import("@/components/AlajeIcons"),
    AButton: () => import("@/components/Form/AlajeButtons")
  },
  methods: {
    scrollDown() {
      window.scrollTo({ top: 600, behavior: "smooth" });
    }
  }
};
</script>

<style scoped lang="scss">
.banner {
  height: 100vh !important;
  width: 100vw !important;
  background-size: cover;
  background: url("https://res.cloudinary.com/dwpu7jpku/image/upload/v1597622097/Group_31_k0ljvo.svg") no-repeat;
  z-index: -1;
  position: absolute;
  top: 0% !important;
  /*background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);*/
}

svg {
  width: auto;
  height: auto;
}
.center-text {
  margin-top: 15%;
  position: relative;
  left: 40%;
  z-index: 999;
  width: 30%;
}
@media only screen and (device-width: 768px) {
  .center-text {
    width: 50%;
  }
}
.arrow-icon {
  margin-top: 50%;
  position: absolute;
  left: 50%;
}
</style>
