<template>
  <div class="container">
    <b-row>
      <main-side-bar />
      <b-col class="main-content" tag="main">
        <div class="offset-lg-1  main-content offset-md-1 py-lg-5 my-lg-5 py-md-5 my-md-5 my-3 py-3">
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

<style lang="scss"></style>
