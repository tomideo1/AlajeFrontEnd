<template>
  <div>
    <section class="banner">
      <!--      <img src="@/assets/banner.svg" />-->
      <b-card class="z-index-1 position-sticky shadow shadow-3 w-100 h-75" />

      <div class="arrow">
        <a-icons name="arrow-shade-down" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Banner",
  components: {
    AIcons: () => import("@/components/AlajeIcons")
  }
};
</script>

<style scoped lang="scss">
.banner {
  height: 100vh !important;
  width: 10em !important;

  .arrow {
    position: absolute;
    top: 90%;
    left: 56%;
    transform: translate(-50%, -50%);
  }
}
svg {
  width: auto;
  height: auto;
}
</style>
