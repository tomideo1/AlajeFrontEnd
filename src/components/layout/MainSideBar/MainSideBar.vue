<template>
  <div>
    <b-sidebar id="sidebar-1" body-class="bg-dark-purple position-static" :no-header="true" :no-header-close="true" width="200px" header-class="bg-dark-purple" :visible="true">
      <div class="d-flex justify-content-center mt-3">
        <img src="@/assets/logo-light.svg" />
      </div>
      <span class="left-angle   d-none d-lg-block d-md-block">
        <img src="@/assets/subsctract-left.svg" />
      </span>
      <div class="px-3 py-2">
        <nav class="mb-3 mt-4 ml-4">
          <b-nav vertical>
            <ul style="list-style: none">
              <li class="nav-item font-avenir ft-14 text-white">
                <div class="d-flex flex-row">
                  <alaje-icons name="dashboard" />
                  <p></p>
                </div>
              </li>
            </ul>
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "MainSideBr",
  components: {
    AlajeIcons: () => import("@/components/general/AlajeIcons")
  }
};
</script>

<style scoped lang="scss">
.left-angle {
  position: fixed;
  top: 6%;
  left: 99.8%;
  transform: rotate(270deg);
}

@media only screen and (max-width: 600px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (width: 1366px) {
  .left-angle {
    position: fixed;
    top: 4.5%;
    left: 99.5%;
    transform: rotate(270deg);
  }
}

@media only screen and (width: 1024px) and (height: 1366px) {
  .left-angle {
    position: fixed;
    top: 3.5%;
    left: 99.4%;
    transform: rotate(270deg);
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (width: 768px) and (height: 1024px) {
  .left-angle {
    position: fixed;
    top: 7.2%;
    left: 99.4%;
    transform: rotate(270deg);
  }
}
@media only screen and (width: 1024px) and (height: 768px) {
  .left-angle {
    position: fixed;
    top: 6.2%;
    left: 100%;
    transform: rotate(270deg);
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
