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
        <li class="nav-item mt-n1 pr-md-3  pl-lg-4 pl-md-3 d-none d-lg-block d-md-block ">
          <avatar size="md" class="avatar" :user="{ name: 'ALAJE' }" />
        </li>
        <li class="nav-item mt-n1  pl-lg-4 pl-md-3 d-block d-lg-none d-md-none ">
          <b-button v-b-toggle.sidebar-1 style="background: transparent!important;">
            <alaje-icon name="harmburgerlight" size="md" />
          </b-button>
        </li>
      </ul>
      <span class="left-angle  d-lg-none d-md-none d-b">
        <img src="@/assets/subsctract-left.svg" />
      </span>
      <span class="right-angle  d-block d-lg-none d-md-none">
        <img src="@/assets/subsctract-left.svg" />
      </span>
    </b-navbar>
  </div>
  <footer>
    <main-footer />
  </footer>
</template>

<script>
export default {
  name: "MainNavBar",
  components: {
    AlajeIcon: () => import("@/components/general/AlajeIcons"),
    avatar: () => import("@/components/general/avatar"),
    MainFooter: () => import("@/components/layout/MainFooter/MainFooter.vue")
  }
};
</script>

<style scoped lang="scss">
.left-angle {
  position: absolute;
  /*margin-top: 20%;*/
  transform: rotate(270deg);
}
/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

/* For desktop: */
.left-angle {
  /*margin-top: 20%;*/
  margin-top: 28%;
  /*left: 50%;*/
  left: 0%;
}
.right-angle {
  /*margin-top: 20%;*/
  margin-top: 28%;
  display: block;
  /*left: 50%;*/
  position: absolute;
  /*margin-top: 20%;*/
  /*left: 50%;*/
  right: 0%;
  transform: rotate(0deg);
}
</style>
