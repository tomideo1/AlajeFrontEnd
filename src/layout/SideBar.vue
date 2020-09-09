<template>
  <b-container fluid="sm">
    <b-row>
      <main-side-bar />
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
    MainNavbar: () => import("@/components/layout/MainNavbar/MainNavBar.vue"),
    MainSideBar: () => import("@/components/layout/MainSideBar/MainSideBar.vue")
  }
};
</script>

<style scoped></style>
