<template>
  <div>
    <main-side-bar />
    <div class="offset-lg-1 offset-md-1">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {
    MainSideBar: () => import("@/layout/SideBar.vue")
  }
};
</script>

<style scoped></style>
