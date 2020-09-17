<template>
  <div class="container-fluid">
    <b-row>
      <main-side-bar :visible="toggled" :items="sidebarItems" />
      <main>
        <!-- Main Navbar -->
        <main-navbar />

        <!-- Content -->
        <slot />
      </main>
    </b-row>
  </div>
</template>

<script>
import getSidebarItems from "@/components/data/sideBarNavItems";

export default {
  name: "SideBar",
  data() {
    return {
      toggled: false,
      sidebarItems: getSidebarItems()
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
