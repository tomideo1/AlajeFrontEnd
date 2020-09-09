<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-6 ">
          <span class="d-flex flex-row">
            <img width="50" height="50" src="@/assets/logo-dark.svg" />
            <p class="font-avenir mt-2 ml-3  text-dark-purple ft-20">Alaje Hub</p>
          </span>
        </div>

        <div class="col-md-2 col-6 mt-2 ">
          <span class="d-flex flex-row ">
            <alaje-icons class="ml-md-4 ml-4 " name="facebook" />
            <alaje-icons class="ml-md-4 ml-4" name="instagram" />
            <alaje-icons class="ml-md-4 ml-4 " name="twitter" />
          </span>
        </div>
      </div>
    </div>
    <hr class="divide" />
    <div class="container mb-5">
      <div class="row">
        <div class="col-md-11 col-7">
          <p class="font-avenir mt-2 ml-3  text-black ft-12">&copy; 2020 Alaje Hub All Rights Reserved</p>
        </div>

        <div class="col-md-1 col-3">
          <alaje-icons name="arrow-up" size="xs" @click="scrollTop" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "media",
  components: {
    AlajeIcons: () => import("@/components/general/AlajeIcons")
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style scoped></style>
