<template>
  <div class="container ">
    <div class="row">
      <transition name="fade" enter-active-class="fadeInLeft" leave-active-class="fadeOutLeft">
        <div class=" animation col-md-6 ml-lg-5 ml-md-5">
          <h2 class="line-height-50  ft-36 font-roboto  text-bold-black">Buy And Sell Giftcards</h2>
          <p class="text-align-justify text-regular ft-14">
            {{ text }}
          </p>
          <a-button text="Get Started " class="btn mt-lg-3 mt-md-3" text_color="blue" size="md " />
        </div>
      </transition>
      <transition name="fade" enter-active-class="fadeInRight" leave-active-class="fadeOutRighy"> </transition>
      <div class=" animation col-md-5 mr-lg-4 mr-md-4 ">
        <img src="@/assets/dashboardlayout.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyAndSell",
  props: ["text"],
  components: {
    AButton: () => import("@/components/Form/AlajeButtons")
  }
};
</script>

<style scoped></style>
