<template>
  <div>
    <div class="mt-5 position-relative bg-white  ">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-6 ">
            <span class="d-flex flex-row">
              <img width="50" height="50" src="@/assets/logo-dark.svg" />
              <p class="font-avenir mt-2 ml-3  text-dark-purple ft-20">Alaje Hub</p>
            </span>
          </div>

          <div class="col-md-3 col-6 mt-2 ">
            <span class="d-flex flex-row ">
              <alaje-icons class="ml-md-4 ml-4 " name="facebook" />
              <alaje-icons class="ml-md-4 ml-4" name="instagram" />
              <alaje-icons class="ml-md-4 ml-4 " name="twitter" />
            </span>
          </div>
        </div>
      </div>
      <hr style=" border: 1px solid rgba(37, 37, 37, 0.15); width: 95%;" />
      <div class="container">
        <div class="row">
          <p class="font-avenir mt-2   text-center col-10 col-lg-10 col-md-10 text-black ft-12">
            &copy; AlajeHub is a property of Alaje Hub Nigeria Limited, a company duly registered with CAC with RC Number: RC 1331517.
          </p>

          <div class=" col-lg-2 col-2 col-md-2  ">
            <alaje-icons name="arrow-up" size="xs" @click="scrollTop" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlajeFooter",
  components: {
    AlajeIcons: () => import("@/components/general/AlajeIcons")
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

<style scoped></style>
