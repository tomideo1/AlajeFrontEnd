<template>
  <footer class="  bg-white  position-relative  ">
    <div class="mini-footer">
      <div class="d-lg-none d-block d-md-none container-fluid">
        <div class="row">
          <div class="col-lg-10 col-6">
            <span class="d-flex  flex-row pl-lg-5 ml-lg-5 pl-1 ml-1 mt-2">
              <img width="50" height="50" src="@/assets/logo-dark.svg" />
              <p class="font-avenir mt-2 ml-3  text-dark-purple ft-20">Alaje Hub</p>
            </span>
          </div>
          <div class="ml-auto col-lg-2 col-6  mt-lg-3 mt-3 ">
            <span class="d-flex flex-row ">
              <alaje-icons class="ml-md-4 ml-4 " name="facebook" />
              <alaje-icons class="ml-md-4 ml-4" name="instagram" />
              <alaje-icons class="ml-md-4 ml-4 " name="twitter" />
            </span>
          </div>
        </div>
      </div>
      <div class="container d-lg-block d-md-block d-none d-md-none">
        <div class="row">
          <div class="col-lg-10  col-md-9 col-6">
            <span class="d-flex  flex-row pl-lg-5 ml-lg-5 pl-1 ml-1 mt-2" style="position: relative;">
              <img width="50" height="50" src="@/assets/logo-dark.svg" />
              <p class="font-avenir mt-2 ml-3  text-dark-purple ft-20">Alaje Hub</p>
            </span>
          </div>
          <div class="ml-auto col-md-3 col-lg-2 col-6  mt-lg-3 mt-3 ">
            <span class="d-flex flex-row ">
              <alaje-icons class="ml-md-4 ml-4 " name="facebook" />
              <alaje-icons class="ml-md-4 ml-4" name="instagram" />
              <alaje-icons class="ml-md-4 ml-4 " name="twitter" />
            </span>
          </div>
        </div>
      </div>

      <hr class="d-none d-lg-block d-md-none" style=" border: 1px solid rgba(37, 37, 37, 0.15); width: 100%;" />
      <hr class="m-auto d-lg-none d-md-block d-block" style=" border: 1px solid rgba(37, 37, 37, 0.15); width: 100%;" />

      <div class="container-fluid d-lg-none d-block d-md-none mx-auto mt-2">
        <div class="row">
          <div class=" mt-2  col-10 col-lg-10 col-md-10">
            <p class="font-avenir text-black ft-12">&copy; 2020 Alaje Hub All Rights Reserved</p>
          </div>
          <div class=" col-lg-2 col-2 col-md-2  ">
            <alaje-icons name="arrow-up" size="xs" @click="scrollTop" />
          </div>
        </div>
      </div>

      <div class="  d-lg-block mt-2  d-md-block d-none d-md-none">
        <div class="d-flex flex-row ">
          <div class="  mt-2  " style="position: relative; left: 10%">
            <p class="font-avenir text-black ft-12">&copy; 2020 Alaje Hub All Rights Reserved</p>
          </div>
          <div class="ml-auto" style="position: relative; left: -10%">
            <alaje-icons name="arrow-up" size="xs" @click="scrollTop" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import AlajeIcons from "./AlajeIcons";
export default {
  name: "dashboardFooter",
  components: {
    AlajeIcons
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
.footer-menu {
  padding-left: 48px;
}

@media (max-width: 991px) {
  .footer-menu {
    padding-left: 0;
  }
}
</style>
