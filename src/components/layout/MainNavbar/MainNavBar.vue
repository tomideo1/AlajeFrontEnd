<template>
  <div>
    <b-navbar toggleable="lg" fixed="top" class="bg-dark-purple " style="height: 70px">
      <span class="navbar-brand mb-0   position-absolute font-avenir text-bold-white " style="left: 15%">
        <alaje-icon name="dashboard" size="lg" />
        <span class=" text-white font-avenir"> Dashboard</span>
      </span>
      <ul class="navbar-nav ml-lg-auto ml-auto ml-md-auto mt-lg-1 mt-md-1   ">
        <li class="nav-item pr-lg-3 pr-md-3   d-none d-lg-block d-md-block ">
          <alaje-icon @click="$router.push({ name: 'login' })" name="bell" size="sm" />
        </li>
        <li class="nav-item mt-n1  pl-lg-4 pl-md-3 d-none d-lg-block d-md-block ">
          <avatar size="md" class="avatar" :user="{ name: 'ALAJE' }" />
        </li>
        <li class="nav-item mt-n1  pl-lg-4 pl-md-3 d-block d-lg-none d-md-none ">
          <b-button v-b-toggle.sidebar-1></b-button>
        </li>
      </ul>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "MainNavBar",
  components: {
    AlajeIcon: () => import("@/components/general/AlajeIcons"),
    avatar: () => import("@/components/general/avatar")
  }
};
</script>

<style scoped></style>
