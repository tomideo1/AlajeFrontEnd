<template>
  <b-container fluid="sm">
    <b-row>
      <main-side-bar :visible="toggled" />
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
  data() {
    return {
      toggled: false
    };
  },
  components: {
    MainNavbar: () => import("@/components/layout/MainNavbar/MainNavBar.vue"),
    MainSideBar: () => import("@/components/layout/MainSideBar/MainSideBar.vue")
  },
  mounted() {
    this.$Bus.$on("toggled", res => {
      this.toggled = res.toggled;
    });
  }
};
</script>

<style scoped></style>
