<template>
  <b-container fluid="sm">
    <b-row>
      <main class="main-content col">
        <!-- Main Navbar -->
        <main-navbar />

        <!-- Content -->
        <slot />
      </main>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SideBar",
  components: {
    MainNavbar: () => import("@/components/layout/MainNavbar/MainNavBar.vue")
  }
};
</script>

<style scoped></style>
