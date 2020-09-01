<template>
  <div>
    <top-nav />
    <div class="pt-5 mt-4">
      <section class="banner"></section>
      <div class="pt-4 mt-4"></div>
      <router-view />
      <footer>
        <AFooter />
      </footer>
    </div>
  </div>
</template>

<script>
import TopNav from "../../components/Landing/TopNav";
export default {
  name: "index",
  components: {
    TopNav,
    AFooter: () => import("@/components/general/AlajeFooter")
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
</style>
