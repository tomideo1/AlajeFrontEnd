<template>
  <span :class="`icon icon-${size}`" :id="name" v-on="$listeners">
    <arrow-shade-down v-if="name === 'arrow-shade-down'"></arrow-shade-down>
    <range-icon v-if="name === 'range-icon'"></range-icon>
    <eye v-if="name === 'eye'"></eye>
    <eye-danger v-if="name === 'eye-danger'"></eye-danger>
    <eye-success v-if="name === 'eye-success'"></eye-success>
    <approved v-if="name === 'approved'"></approved>
    <facebook v-if="name === 'facebook'"></facebook>
    <instagram v-if="name === 'instagram'"></instagram>
    <twitter v-if="name === 'twitter'"></twitter>
    <arrow-up v-if="name === 'arrow-up'"></arrow-up>
    <dashboard v-if="name === 'dashboard'"></dashboard>
    <bell v-if="name === 'bell'"></bell>
    <harmburgerlight v-if="name === 'harmburgerlight'"></harmburgerlight>
    <trade v-if="name === 'trade'"></trade>
    <elipse v-if="name === 'elipse'"></elipse>
    <search v-if="name === 'search'"></search>
    <select-close v-if="name === 'select-close'"></select-close>
    <caret-down v-if="name === 'caret-down'"></caret-down>
    <passcode v-if="name === 'passcode'"></passcode>
    <passboxpurple v-if="name === 'passboxpurple'"></passboxpurple>
    <history v-if="name === 'history'"></history>
    <rates v-if="name === 'rates'"></rates>
    <wallet v-if="name === 'wallet'"></wallet>
    <settings v-if="name === 'settings'"></settings>
    <bitcoin v-if="name === 'bitcoin'"></bitcoin>
    <close v-if="name === 'close'"></close>
    <tick v-if="name === 'tick'"></tick>
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    size: {
      type: String
    }
  },
  components: {
    arrowShadeDown: () => import("@/components/__private__/media/arrow-down-shade"),
    RangeIcon: () => import("@/components/__private__/media/RangeIcon"),
    Eye: () => import("@/components/__private__/media/eye"),
    EyeDanger: () => import("@/components/__private__/media/eye-danger"),
    EyeSuccess: () => import("@/components/__private__/media/eye-success"),
    Approved: () => import("@/components/__private__/media/approved"),
    Facebook: () => import("@/components/__private__/media/facebook"),
    Instagram: () => import("@/components/__private__/media/instagram"),
    Twitter: () => import("@/components/__private__/media/twitter"),
    ArrowUp: () => import("@/components/__private__/media/arrowUp"),
    dashboard: () => import("@/components/__private__/media/dashboard"),
    bell: () => import("@/components/__private__/media/bell"),
    harmburgerlight: () => import("@/components/__private__/media/harmburger-light"),
    Trade: () => import("@/components/__private__/media/trade"),
    Elipse: () => import("@/components/__private__/media/elipse"),
    Search: () => import("@/components/__private__/media/search"),
    SelectClose: () => import("@/components/__private__/media/select-close"),
    CaretDown: () => import("@/components/__private__/media/caret-down"),
    passcode: () => import("@/components/__private__/media/passcode"),
    passboxpurple: () => import("@/components/__private__/media/passboxpurple"),
    history: () => import("@/components/__private__/media/clock"),
    rates: () => import("@/components/__private__/media/rates"),
    wallet: () => import("@/components/__private__/media/wallet"),
    settings: () => import("@/components/__private__/media/settings"),
    Bitcoin: () => import("@/components/__private__/media/bitcoin"),
    Close: () => import("@/components/__private__/media/close"),
    Tick: () => import("@/components/__private__/media/tick")
  }
};
</script>

<style lang="scss">
.icon {
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  vertical-align: middle;
  font-size: calc(100% + 2px);
  width: 1.5rem;
  height: 1.5rem;
  z-index: 1;

  * {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }

  &-lg {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 2rem;
  }

  &-retain {
    width: 100%;
    height: 100%;
  }

  &-md {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }

  &-sm {
    width: 1.5rem;
    height: 1.5rem;
  }

  &-xs {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
