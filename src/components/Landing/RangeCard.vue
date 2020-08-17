<template>
  <div class="card range-card bg-white m-3  " style="width: 18rem;">
    <div class="card-body">
      <a-icons name="range-icon" class="mx-auto" size="retain" />
      <p class="font-avenir ft-16 range-card-title text-dark-purple text-center  mt-4">Buy Giftcards on Alaje Hub!</p>

      <alaje-inputs :id="'range'" placeholder="E.g. Apple, Amazon" :error="errors" />
      <p class="font-avenir mt-3 "><span class="text-dark-purple"> Price Range </span> <span class="text-grey-50">(In Naira)</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeCard",
  data() {
    return {
      errors: []
    };
  },
  components: {
    AlajeInputs: () => import("@/components/Form/AlajeInputs"),
    AIcons: () => import("@/components/AlajeIcons")
  }
};
</script>

<style scoped lang="scss">
.range-card {
  background: #ffffff;
  border-radius: 5px;
  position: absolute;
  left: -90%;
  /*margin-top: 20%;*/
  top: 0%;
  z-index: 9999999;

  &-title {
    font-weight: 800;
    line-height: 119.6%;
    /* or 19px */

    color: #231047;
  }
}
</style>
