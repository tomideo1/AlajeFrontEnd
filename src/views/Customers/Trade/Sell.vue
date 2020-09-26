<template>
  <div class="container-fluid">
    <div>
      <header-card :show-greetings="false" title="Sell GiftCards" v-if="mobileToggleSelect" shwo-wallet :wallet-amount="1000" />
      <div class="row">
        <a-select class="col-md-4" :items="items" v-model="merchant"></a-select>
        <div v-show="mobileToggleSelect" class="col-lg-8 col-12  col-md-8">
          <skeleton v-if="merchant === ''" title="Select GiftCard" size="4" width="20%" mobile-height="80px" height="90px" :max-items="4" />
          <div class="skeleton p-4" v-else>
            <p class="font-avenir text-bold-black ft-18 fw-900">Select Giftcard</p>
            <div class="col-lg-12 col-md-12 col-12 d-block d-lg-none d-md-none">
              <div class=" row  ">
                <div class="col-6 d-flex flex-column p-3" v-for="(item, index) in items" :key="index">
                  <img @click="toggleCard(item.value)" src="@/assets/demo-card.png" :class="['gift-card', activeCard === item.value ? 'gift-card-active' : '']" />

                  <p v-if="item.value === merchant" class="mx-auto mt-3">{{ item.text }}</p>
                </div>
              </div>
            </div>
            <!-- WEB VIEW -->

            <div class="col-lg-12 col-md-12 col-12  d-none d-lg-block d-md-block">
              <div class=" row  ">
                <div class="col-lg-3 col-md-3 d-flex flex-column  " v-for="(item, index) in items" :key="index">
                  <img @click="toggleCard(item.value)" src="@/assets/demo-card.svg" :class="['gift-card', activeCard === item.value ? 'gift-card-active' : '']" />
                  <p v-if="item.value === merchant" class="mx-auto mt-3">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>

          <skeleton v-if="activeCard === '' || merchant === ''" class="mt-4" title="Select Country/Currency" size="2" width="5%" mobile-height="30px" height="40px" :max-items="9" />
          <div class="skeleton p-4 mt-4" v-else>
            <p class="font-avenir text-bold-black ft-18 fw-900">Select Country/Currency</p>

            <div class="d-block d-lg-none d-md-none col-12">
              <div class=" row  ">
                <div class="   col-3  d-flex flex-column  " v-for="(item, index) in items" :key="index">
                  <img @click="toggleCountry(item.value)" src="@/assets/demo-country.png" :class="['gift-card', activeCountry === item.value ? 'gift-card-active' : '']" />
                  <p v-if="activeCard !== ''" class="mx-auto mt-3">{{ item.country }}</p>
                </div>
              </div>
            </div>

            <div class=" d-none d-lg-block d-md-block  ">
              <div class="row">
                <div class=" col-lg-1 m-3 col-md-2  d-flex flex-column  " v-for="(item, index) in items" :key="index">
                  <img @click="toggleCountry(item.value)" src="@/assets/demo-country.png" :class="['gift-card', activeCountry === item.value ? 'gift-card-active' : '']" />
                  <p v-if="activeCard !== ''" class="mx-auto mt-3">{{ item.country }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <alaje-buttons v-show="mobileToggleSelect" v-if="activeCountry === ''" class="ml-auto mt-3" :disable="true" text_color="grey-50" text="Continue" />
        <alaje-buttons v-show="mobileToggleSelect" v-else class="ml-auto mt-3" text_color="purple" text="Continue" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCard from "../../../components/general/headerCard";
import Skeleton from "../../../components/cards/skeleton";
import AlajeButtons from "../../../components/Form/AlajeButtons";
export default {
  name: "Trade",
  data() {
    return {
      merchant: "",
      mobileToggleSelect: true,
      activeCard: "",
      activeCountry: "",
      items: [
        {
          value: "1",
          logo: "logo-image",
          text: "Addidas",
          country: "NGN"
        },
        {
          value: "2",
          logo: "logo-image",
          text: "Nike",
          country: "USA"
        },
        {
          value: "3",
          logo: "logo-image",
          text: "Apple",
          country: "FIN"
        },
        {
          value: "4",
          logo: "logo-image",
          text: "Amazon",
          country: "ENG"
        }
      ]
    };
  },
  components: {
    AlajeButtons,
    Skeleton,
    HeaderCard,
    ASelect: () => import("@/components/Form/AlajeSelect")
  },
  async created() {
    this.$Bus.$on("mobile-select-toggle", res => {
      this.mobileToggleSelect = res.toggled;
    });
  },
  methods: {
    toggleCard(item) {
      return (this.activeCard = item);
    },
    toggleCountry(item) {
      return (this.activeCountry = item);
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
