<template>
  <div class="container">
    <b-row>
      <main-side-bar />
      <b-col class="main-content" tag="main">
        <div class="offset-lg-1 content-container  offset-md-1 py-lg-5 my-lg-5 py-md-5 my-md-5 my-3 py-3 ">
          <slot />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    MainSideBar: () => import("@/layout/SideBar.vue")
  }
};
</script>

<style lang="scss">
@media only screen and (min-width: 280px) and (max-width: 540px) {
  .content-container {
    margin-top: 22% !important;
  }
}
@media only screen and (min-width: 600px) and (max-width: 1024px) {
  .content-container {
    padding: 150px;
    /*margin-top: 22%!important;*/
  }
}

@media only screen and (max-width: 280px) {
  .content-container {
    margin-top: 30% !important;
  }
}

@media only screen and (width: 540px) {
  .content-container {
    margin-top: 15% !important;
  }
}
</style>
