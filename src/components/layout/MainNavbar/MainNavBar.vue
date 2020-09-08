<template>
  <div>
    <b-navbar toggleable="lg" fixed="top" class="bg-dark-purple  p-4">
      <span class="navbar-brand mb-0 position-absolute font-avenir text-bold-white">
        <alaje-icon name="dashboard" size="lg" />
        <span class=" text-white font-avenir"> Dashboard</span>
      </span>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <ul class="navbar-nav ml-lg-auto mt-lg-1 mt-md-1 ">
          <li class="nav-item  mt-1   ">
            <alaje-icon @click="$router.push({ name: 'login' })" name="bell" size="md" />
          </li>
          <li class="nav-item mt-1 pl-lg-4 "></li>
        </ul>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "MainNavBar",
  components: {
    AlajeIcon: () => import("@/components/general/AlajeIcons")
  }
};
</script>

<style scoped></style>
