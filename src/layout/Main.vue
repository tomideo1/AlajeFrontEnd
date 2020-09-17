<template>
  <div class="container-fluid">
    <div>
      <main-side-bar />
      <div class="main-content">
        <div class="offset-lg-2 content-container   py-lg-5 my-lg-5 py-md-5 my-md-5 my-3 py-3 ">
          <slot />
        </div>
      </div>
    </div>
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
    // eslint-disable-next-line vue/no-unused-components
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
    padding: 50px;
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
