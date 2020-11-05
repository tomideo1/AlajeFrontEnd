<template>
  <div class=" d-flex flex-row mt-2 ">
    <p class="text-dark-purple mt-lg-2 mt-md-1 mt-0 font-avenir " v-if="showGreetings">
      <span class="ft-24 d-lg-block d-md-block d-none"
        >{{ greetings.text }} <span class=" text-bold-purple ft-24 ">{{ greetings.name }}</span></span
      >
      <span class="ft-14 d-lg-none d-md-none d-block"
        >{{ greetings.text }} <span class=" text-bold-purple ft-14">{{ greetings.name }}</span></span
      >
    </p>
    <p class="text-bold-purple ft-24 mt-lg-2 mt-md-1 mt-0 font-avenir " v-else>
      {{ title }}
    </p>
    <div class="mt-lg-n1 mt-1 mt-lg-0 mt-md-0 ml-md-auto ml-lg-auto ml-auto" v-if="showWallet">
      <p class="font-avenir text-bold-purple  d-lg-block d-md-block d-none ft-20 wallet-card p-lg-3 p-md-3  ">
        Wallet Balance:
        <span class="text-dark-purple ft-16">{{ walletAmount }}</span>
      </p>
      <p class="font-avenir  d-lg-none d-md-none d-block text-bold-purple ft-10 wallet-card p-lg-3 p-md-3  ">
        Wallet Balance:
        <span class="text-dark-purple ft-10">{{ walletAmount }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerCard",
  props: {
    showGreetings: {
      type: Boolean,
      default: true
    },
    greetings: {
      type: Object
    },
    showWallet: {
      type: Boolean,
      default: false
    },
    walletAmount: {
      type: Number
    },
    title: {
      type: String
    }
  }
};
</script>

<style scoped>
.wallet-card {
  background: #f5f5f9;
  border-radius: 100px;
}
</style>
