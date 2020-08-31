<template>
  <div class="row pt-5 mt-5">
    <div class="col-md-6 ">
      <img src="@/assets/cards.svg" />
    </div>
    <div class="col-md-5 mt-lg-5 mt-md-5 pt-lg-5 pt-md-5 ">
      <div class=" mt-lg-5 mt-md-5 pt-lg-5 pt-md-5 "></div>
      <div class=" mt-lg-5 mt-md-5 pt-lg-5 pt-md-5 "></div>
      <h2 class="line-height-50 mr-lg-5 ml-md-5   text-align-right  ft-36 font-roboto  text-bold-black ">Great Deals At Popular Stores</h2>
      <p class="text-align-justify text-regular ft-14 w-75 ml-lg-5">
        {{ text }}
      </p>
      <a-button text="Get Started " class="btn mt-lg-3 mt-md-3" text_color="yellow" size="md " />
    </div>
  </div>
</template>

<script>
export default {
  name: "GreatDeals",
  props: ["text"],
  components: {
    AButton: () => import("@/components/Form/AlajeButtons")
  }
};
</script>

<style scoped></style>
