<template>
  <div class="container-fluid">
    <div>
      <header-card :show-greetings="false" title="Sell GiftCards" v-if="mobileToggleSelect" shwo-wallet :wallet-amount="1000" />
      <div class="row" v-show="!selectDone">
        <a-select class="col-md-4" :items="items" v-model="merchant" @selected="handleData"></a-select>
        <div v-show="mobileToggleSelect" class="col-lg-8 col-12  col-md-8">
          <skeleton v-if="merchant === ''" title="Select GiftCard" size="4" width="20%" mobile-height="80px" height="90px" :max-items="4" />
          <div class="skeleton p-4" v-else>
            <p class="font-avenir text-bold-black ft-18 fw-900">Select Giftcard</p>

            <div class="col-lg-12 col-md-12 col-12 d-block d-lg-none d-md-none">
              <div class=" row  ">
                <div class="col-6 d-flex flex-column p-3" v-for="(item, index) in getCurrentItem.cards" :key="index">
                  <img @click="toggleCard(item)" src="@/assets/demo-card.png" :class="['gift-card', activeCard.id === item.id ? 'gift-card-active' : '']" />

                  <p class="mx-auto mt-3">{{ item.title }}</p>
                </div>
              </div>
            </div>
            <!-- WEB VIEW -->

            <div class="col-lg-12 col-md-12 col-12  d-none d-lg-block d-md-block">
              <div class=" row  ">
                <div class="col-lg-3 col-md-3 d-flex flex-column  " v-for="(item, index) in getCurrentItem.cards" :key="index">
                  <img @click="toggleCard(item)" src="@/assets/demo-card.svg" :class="['gift-card', activeCard.id === item.id ? 'gift-card-active' : '']" />
                  <p class="mx-auto mt-3">{{ item.title }}</p>
                </div>
              </div>
            </div>
          </div>

          <skeleton v-if="activeCard === '' || merchant === ''" class="mt-4" title="Select Country/Currency" size="2" width="5%" mobile-height="30px" height="40px" :max-items="9" />

          <div class="skeleton p-4 mt-4" v-else>
            <p class="font-avenir text-bold-black ft-18 fw-900">Select Country/Currency</p>

            <div class="d-block d-lg-none d-md-none col-12">
              <div class=" row  ">
                <div class="   col-3  d-flex flex-column  " v-for="(item, index) in activeCard.country" :key="index">
                  <img @click="toggleCountry(item)" src="@/assets/demo-country.png" :class="['gift-card', activeCountry.title === item.title ? 'gift-card-active' : '']" />
                  <p v-if="activeCard !== ''" class="mx-auto mt-3">{{ item.title }}</p>
                </div>
              </div>
            </div>

            <div class=" d-none d-lg-block d-md-block  ">
              <div class="row">
                <div class=" col-lg-1 m-3 col-md-2  d-flex flex-column  " v-for="(item, index) in activeCard.country" :key="index">
                  <img @click="toggleCountry(item)" width="50" src="@/assets/demo-country.png" :class="['country-card', activeCountry.title === item.title ? 'country-card-active' : fadeClass]" />
                  <p v-if="activeCard !== ''" :class="['mx-auto mt-3', activeCountry.title === item.title ? '' : fadeClass]">{{ item.title }}</p>
                </div>
              </div>
            </div>
          </div>
          <alaje-buttons v-if="activeCountry === '' || activeCard === '' || merchant === ''" v-show="mobileToggleSelect" class="ml-auto mt-3" :disable="true" text_color="grey-50" text="Continue" />

          <alaje-buttons @click="selectDone = true" v-else class="ml-auto mt-3" text_color="purple" text="Continue" />
        </div>
      </div>

      <div class="row" v-if="selectDone">
        <div class="col-md-3 col-12 col-lg-3 m-lg-3 m-md-3  p-5 preview">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-10  ">
              <div class="d-flex flex-column align-items-center justify-content-center">
                <img class="d-none d-lg-block d-md-block" src="@/assets/demo-card.svg" />
                <img class="d-block d-lg-none d-md-none" src="@/assets/demo-card.svg" width="179" height="112" />
                <p class="font-avenir mx-auto mt-3 ft-14 text-black fw-700">{{ activeCard.title }}</p>
              </div>
            </div>
            <div class="col-md-12 col-lg-12 col-2  mt-4 ">
              <div class="d-flex flex-column align-items-center justify-content-center">
                <span> <img class="mt-lg-3 mt-md-3" src="@/assets/demo-country.png"/></span>
                <p class="font-avenir mx-auto mt-3 ft-14 text-black fw-700">{{ activeCountry.title }}</p>
              </div>
            </div>

            <div class="col-md-12 col-lg-12 col-12  mt-4 ">
              <div class="d-flex flex-column align-items-center justify-content-center">
                <alaje-buttons text_color="purple" text="Edit" class="bg-white" @click="selectDone = false" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 m-lg-3 m-md-3  mt-3 mt-lg-0 mt-md-0 col-12 col-lg-4 p-3 skeleton ">
          <p class="font-avenir fw-900 ft-18 rates ">Rates</p>
          <div class="d-flex flex-row rates-header ">
            <p class="font-avenir text-black fw-900 p-2 mt-2">Range ($)</p>
            <p class="font-avenir text-black fw-900 ml-auto p-2 mt-2">Price ( per $)</p>
          </div>
          <p class="text-bold-pink mt-3 d-flex mr-auto  fw-900 ft-12  font-avenir line-height-119">Single</p>
          <div :class="['d-flex flex-row', i % 2 == 0 ? 'rates-header-no-bg' : 'rates-header']" v-for="i in 3" :key="i">
            <p class="font-avenir text-black fw-500 p-2 mt-2">1 - 25</p>
            <p class="font-avenir text-black fw-500 ml-auto p-2 mt-2">N 1000</p>
          </div>

          <p class="text-bold-pink mt-3  d-flex mr-auto fw-900 ft-12  font-avenir line-height-119">Bulk</p>
          <div class="d-flex flex-row rates-header ">
            <p class="font-avenir text-black fw-500 p-2 mt-2">1 - 25</p>
            <p class="font-avenir text-black fw-500 ml-auto p-2 mt-2">N 1000</p>
          </div>
        </div>
        <div class="col-md-3 m-lg-3 m-md-3 mt-3 mt-lg-0 mt-md-0 col-12 col-lg-4 p-3 skeleton ">
          <p class="font-avenir fw-900 ft-18 ">
            Select Gift Card Type
            <span class="float-right mt-2 font-avenir ft-10 text-pink"> Need Help ?</span>
          </p>
          <div class="row ml-lg-2 ml-md-2">
            <div class="skeleton col-lg-5 col-md-5 m-lg-2 m-md-2 mt-2 mt-lg-0 mt-md-0 col-12">
              <div class="outer-pass-box m-3 p-4 d-flex align-items-center justify-content-center">
                <div class="pass-box p-1 p w-100  d-flex align-items-center justify-content-center">
                  <alaje-icons name="passcode" size="xs" />
                </div>
              </div>
            </div>
            <div class="skeleton col-lg-5 col-md-5 m-lg-2 m-md-2 mt-2 mt-lg-0 mt-md-0 col-12">
              <div class="outer-pass-box m-3 p-4 d-flex align-items-center justify-content-center">
                <alaje-icons name="passboxpurple" size="xs" />
              </div>
            </div>
          </div>
          <p class="font-avenir fw-900 font-weight-bold ft-18 mt-3 text-black line-height-119">Enter Giftcard Value</p>
          <div class="row">
            <alaje-inputs label="Total Giftcard Value" class="col-md-6" />
            <alaje-inputs :label="`what You'll Get`" disable class="col-md-6" />
          </div>
          <alaje-inputs label="Enter Giftcard Code" type="password" placeholder="****  ****  ****  *****" :error="[]" />
          <alaje-buttons v-b-modal.my-modal centered text_color="purple" text="Upload Giftcard Photo" class="mx-auto text-center mt-5" />
        </div>

        <b-modal id="my-modal" ok-only hide-footer size="lg" modal-class="mt-5 pt-5 ml-lg-5">
          <uppy model-id="my-modal" model-class="uppy-class" />
        </b-modal>
      </div>
      <alaje-buttons v-if="selectDone" text="Continue" text_color="purple" class="ml-auto mt-3" />
    </div>
  </div>
</template>

<script>
import HeaderCard from "../../../components/general/headerCard";
import Skeleton from "../../../components/cards/skeleton";
import AlajeButtons from "../../../components/Form/AlajeButtons";
import General from "@/mixins/general";
import AlajeIcons from "../../../components/general/AlajeIcons";
import AlajeInputs from "../../../components/Form/AlajeInputs";
import Uppy from "../../../components/Form/uppy";
export default {
  mixins: [General],
  name: "Trade",
  data() {
    return {
      merchant: "",
      mobileToggleSelect: true,
      activeCard: "",
      activeCountry: "",
      selectDone: false,
      items: [
        {
          value: "1",
          logo: "logo-image",
          cards: [
            {
              title: "addidas-black",
              image: null,
              id: "1",
              amounts: [
                {
                  amount: 5,
                  quantity: 0
                },
                {
                  amount: 10,
                  quantity: 0
                },
                {
                  amount: 15,
                  quantity: 0
                },
                {
                  amount: 20,
                  quantity: 0
                }
              ],
              country: [
                {
                  title: "NGN",
                  logo: ""
                },
                {
                  title: "USA",
                  logo: ""
                },
                {
                  title: "ENG",
                  logo: ""
                },
                {
                  title: "ARG",
                  logo: ""
                }
              ]
            },
            {
              title: "addidas-small",
              image: null,
              id: "2",
              amounts: [
                {
                  amount: 5,
                  quantity: 0
                },
                {
                  amount: 10,
                  quantity: 0
                },
                {
                  amount: 15,
                  quantity: 0
                },
                {
                  amount: 20,
                  quantity: 0
                }
              ],
              country: [
                {
                  title: "EU",
                  logo: ""
                },
                {
                  title: "AUS",
                  logo: ""
                },
                {
                  title: "LONDON",
                  logo: ""
                }
              ]
            }
          ],
          text: "Addidas"
        },
        {
          value: "2",
          logo: "logo-image",
          text: "Nike",
          cards: [
            {
              title: "Nike-black",
              image: null,
              id: "3",
              amounts: [
                {
                  amount: 5,
                  quantity: 0
                },
                {
                  amount: 10,
                  quantity: 0
                },
                {
                  amount: 15,
                  quantity: 0
                },
                {
                  amount: 20,
                  quantity: 0
                }
              ],
              country: [
                {
                  title: "NGN",
                  logo: ""
                },
                {
                  title: "USA",
                  logo: ""
                },
                {
                  title: "ENG",
                  logo: ""
                },
                {
                  title: "ARG",
                  logo: ""
                }
              ]
            },
            {
              title: "nike-small",
              image: null,
              id: "4",
              amounts: [
                {
                  amount: 5,
                  quantity: 0
                },
                {
                  amount: 10,
                  quantity: 0
                },
                {
                  amount: 15,
                  quantity: 0
                },
                {
                  amount: 20,
                  quantity: 0
                }
              ],
              country: [
                {
                  title: "EU",
                  logo: ""
                },
                {
                  title: "AUS",
                  logo: ""
                },
                {
                  title: "LONDON",
                  logo: ""
                }
              ]
            }
          ]
        },
        {
          value: "3",
          logo: "logo-image",
          text: "Apple",
          cards: [
            {
              title: "Apple-black",
              image: null,
              id: "7",
              amounts: [
                {
                  amount: 5,
                  quantity: 0
                },
                {
                  amount: 10,
                  quantity: 0
                },
                {
                  amount: 15,
                  quantity: 0
                },
                {
                  amount: 20,
                  quantity: 0
                }
              ],
              country: [
                {
                  title: "NGN",
                  logo: ""
                },
                {
                  title: "USA",
                  logo: ""
                },
                {
                  title: "ENG",
                  logo: ""
                },
                {
                  title: "ARG",
                  logo: ""
                }
              ]
            },
            {
              title: "Apple-small",
              image: null,
              id: "8",
              amounts: [
                {
                  amount: 5,
                  quantity: 0
                },
                {
                  amount: 10,
                  quantity: 0
                },
                {
                  amount: 15,
                  quantity: 0
                },
                {
                  amount: 20,
                  quantity: 0
                }
              ],
              country: [
                {
                  title: "EU",
                  logo: ""
                },
                {
                  title: "AUS",
                  logo: ""
                },
                {
                  title: "LONDON",
                  logo: ""
                }
              ]
            }
          ]
        },
        {
          value: "4",
          logo: "logo-image",
          text: "Amazon",
          cards: [
            {
              title: "Amazon-black",
              image: null,
              id: "5",
              amounts: [
                {
                  amount: 5,
                  quantity: 0
                },
                {
                  amount: 10,
                  quantity: 0
                },
                {
                  amount: 15,
                  quantity: 0
                },
                {
                  amount: 20,
                  quantity: 0
                }
              ],
              country: [
                {
                  title: "NGN",
                  logo: ""
                },
                {
                  title: "USA",
                  logo: ""
                },
                {
                  title: "ENG",
                  logo: ""
                },
                {
                  title: "ARG",
                  logo: ""
                }
              ]
            },
            {
              title: "Amazon-small",
              image: null,
              id: "6",
              amounts: [
                {
                  amount: 5,
                  quantity: 0
                },
                {
                  amount: 10,
                  quantity: 0
                },
                {
                  amount: 15,
                  quantity: 0
                },
                {
                  amount: 20,
                  quantity: 0
                }
              ],
              country: [
                {
                  title: "EU",
                  logo: ""
                },
                {
                  title: "AUS",
                  logo: ""
                },
                {
                  title: "LONDON",
                  logo: ""
                }
              ]
            }
          ]
        }
      ],
      fadeClass: ""
    };
  },
  components: {
    Uppy,
    AlajeInputs,
    AlajeIcons,
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
  computed: {
    getCurrentItem() {
      return this.searchItems(this.merchant, this.items);
    },
    getTotalItems() {
      let total = [];
      // return total;
      this.activeCard.amounts.forEach(amount => {
        total.push(amount.amount * amount.quantity);
      });
      return total.reduce((a, b) => a + b, 0);
    }
  },
  methods: {
    toggleCard(item) {
      this.fadeClass = "";
      return (this.activeCard = item);
    },
    toggleCountry(item) {
      this.fadeClass += "opaque opaque-half";

      return (this.activeCountry = item);
    },
    handleData() {
      this.activeCard = "";
      this.activeCountry = "";
    },
    searchItems(needle, haystack) {
      return haystack.find(item => {
        if (Object.values(item).includes(needle)) {
          return item;
        }
      });
    }
  },
  watch: {
    merchant() {
      if (this.merchant === "") {
        this.activeCard = "";
        this.activeCountry = "";
      }
    }
  },
  mounted() {}
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
    border-radius: 10px;
    box-sizing: border-box;
  }
}

.country-card {
  &-active {
    border: 3px solid color(a-purple-color);
    border-radius: 10px;
    box-sizing: border-box;
  }
}

.preview {
  background: #f5f5f9 !important;
  border-radius: 10px !important;
}

.rates {
  &-header {
    background: rgb(250, 245, 255);
    border-radius: 5px;
  }

  &-header-no-bg {
    border-radius: 5px;
  }
}

.outer-pass-box {
  background: rgb(250, 245, 255);
  border-radius: 5px;
  padding: 5px;
}

.pass-box {
  background: linear-gradient(101.54deg, #b558f9 0%, #932cff 100%);
  border-radius: 5px;
  padding: 5px;
}
</style>
