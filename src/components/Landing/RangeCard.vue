<template>
  <div>
    <div class="tab-active"></div>
    <div class="tab-active-buy"></div>
    <div class="card range-card range-card-shadow bg-white m-3  " style="width: 18rem;">
      <div class="card-body">
        <a-icons name="range-icon" class="mx-auto" size="retain" />
        <p class="font-avenir ft-16 range-card-title text-dark-purple text-center  mt-4">Buy Giftcards on Alaje Hub!</p>

        <alaje-inputs :id="'range'" placeholder="E.g. Apple, Amazon" :error="errors" />
        <p class="font-avenir mt-3 ft-12 "><span class="text-dark-purple"> Price Range </span> <span class="text-grey-50">(In Naira)</span></p>
        <range-input class="mt-5" :min="0" :max="30000" :minValue="3000" :maxValue="25000" :step="1000" />
      </div>
      <a-button text="Continue" text_color="purple" class="btn  font-avenir ft-14 mx-auto m-4 " size="md" />
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
    AIcons: () => import("@/components/AlajeIcons"),
    RangeInput: () => import("@/components/Form/AlajeInputRange"),
    AButton: () => import("@/components/Form/AlajeButtons")
  }
};
</script>

<style scoped lang="scss">
.range-card {
  background: #ffffff;
  border-radius: 5px;
  margin-top: -20% !important;
  position: relative;
  left: 15%;
  z-index: 999;
  width: 30%;

  &-title {
    font-weight: 800;
    line-height: 119.6%;
    /* or 19px */

    color: #231047;
  }
  &-shadow {
    box-shadow: 0px 4px 50px rgba(35, 16, 71, 0.35);
  }

  .tab-active {
    /*position: absolute;*/
    width: 130px;
    height: 53.89px;
    position: relative;
    margin-top: -13%;
    left: 4%;
    border-radius: 5px;
    z-index: 99;
    /*left: 312px;*/
    /*top: 127px;*/

    background: red;
  }
  .tab-active-buy {
    /*position: absolute;*/
    width: 162.37px;
    height: 44.89px;
    position: relative;
    margin-top: -10%;
    left: 40%;
    background: green;
    border-radius: 5px;
    z-index: 99;
  }
}
</style>
