<template>
  <b-container fluid="sm">
    <b-row>
      <main-side-bar />
      <b-col tag="main" class="main-content">
        <div class="offset-lg-1 offset-md-1">
          <slot />
        </div>
      </b-col>
    </b-row>
  </b-container>
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
