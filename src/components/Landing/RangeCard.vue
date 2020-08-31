<template>
  <div>
    <div class="card range-card range-card-shadow bg-white  m-3  " style="width: 18rem;">
      <div :class="['tab-active text-dark-purple fade fadeInRight ', toggle ? ' fade fadeInLeft tab-active-toggle text-dark-purple' : '']" style="animation-duration: 0.5s" @click="switchToggle">
        <p v-if="toggle" class="text-center   mt-2 ft-12 font-avenir">Sell</p>
        <p v-else class="text-center  mt-2 ft-12 font-avenir">Buy</p>
      </div>
      <div :class="['tab-active-buy text-white  fade fadeInLeft', toggle ? 'tab-active-buy-toggle text-dark-purple fade fadeInRight' : '']" style="animation-duration: 0.5s" @click="switchToggle">
        <p v-if="toggle" class="text-center ml-n3 mt-1 ft-12 font-avenir">Buy</p>
        <p v-else class="text-center mt-1 ml-3 ft-12 font-avenir">Sell</p>
      </div>

      <div class="card-body bg-white">
        <a-icons name="range-icon" class="mx-auto" size="retain" />
        <p class="font-avenir ft-16 range-card-title text-dark-purple text-center  mt-4">Buy Giftcards on Alaje Hub!</p>

        <div v-if="!toggle" :class="['fade', toggle ? ' fadeOut' : 'fadeIn']">
          <alaje-inputs label="Store Name" :id="'range'" placeholder="E.g. Apple, Amazon" :error="errors" />
          <p class="font-avenir mt-3 ft-12 "><span class="text-dark-purple"> Price Range </span> <span class="text-grey-50">(In Naira)</span></p>
          <range-input class="mt-5" :min="0" :max="30000" :minValue="5000" :maxValue="25000" :step="1000" />
        </div>
        <div v-else>
          <alaje-inputs label="Store Name" :id="'range'" placeholder="E.g. Apple, Amazon" :error="errors" />
          <alaje-inputs label="Gift Card Value" :id="'range'" placeholder="E.g. 5000" :error="errors" />
        </div>
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
      errors: [],
      toggle: false
    };
  },
  methods: {
    switchToggle() {
      return (this.toggle = !this.toggle);
    }
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
  border-radius: 5px;
  margin-top: -20% !important;
  position: relative;
  left: 15%;
  z-index: 999;
  width: 30%;
  border: 1px solid color(a-white);
  .card-body {
    border-radius: 5px;
    border: 1px solid color(a-white);
  }

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
    position: absolute;
    margin-top: -13%;
    left: 4%;
    border-radius: 5px;
    z-index: -1;

    &-toggle {
      left: 49%;
    }

    /*left: 312px;*/
    /*top: 127px;*/

    background: #ffffff;
  }
  .tab-active-buy {
    /*position: absolute;*/
    width: 162.37px;
    height: 44.89px;
    position: absolute;
    margin-top: -10%;
    left: 40%;
    background: #392859;
    border-radius: 5px;
    z-index: -3;
    shape-outside: inset(1% round 45%);

    &-toggle {
      left: 4%;
    }
  }
}
</style>
