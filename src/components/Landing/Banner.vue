<template>
  <div>
    <section class="banner"></section>
  </div>
</template>

<script>
export default {
  name: "Banner",
  components: {
    // AButton: () => import("@/components/AlajeButtons"),
  }
};
</script>

<style scoped lang="scss">
.banner {
  height: 100vh !important;
  width: 100vw !important;
  background-size: cover;
  background: url("https://res.cloudinary.com/dwpu7jpku/image/upload/v1597622097/Group_31_k0ljvo.svg") no-repeat;
  z-index: -1;
  position: absolute;
  top: 0% !important;
  /*background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);*/
}

svg {
  width: auto;
  height: auto;
}
</style>
