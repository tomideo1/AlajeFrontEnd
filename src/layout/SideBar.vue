<template>
  <!--  <b-container fluid="sm">-->
  <!--    <b-row>-->
  <!--      <main class="main-content col">-->
  <!--        &lt;!&ndash; Main Navbar &ndash;&gt;-->
  <!--        <main-navbar />-->

  <!--        &lt;!&ndash; Content &ndash;&gt;-->
  <!--        <slot />-->
  <!--      </main>-->
  <!--    </b-row>-->
  <!--  </b-container>-->
  <div>
    <main-navbar />
  </div>
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
