<template>
  <div>
    <div class="row">
      <div class="container">
        <div class=" col-md-6 ml-lg-5 ml-md-5">
          <h2 class="line-height-50  ft-36 font-roboto  text-bold-black">You Can Trust Us</h2>
          <p class="text-align-justify text-regular ft-14 w-75">
            {{ text }}
          </p>
          <div class="flex flex-column">
            <span v-for="(quality, index) in qualities" :key="index">
              <div class="flex flex-row">
                <alaje-icons name="approved" size="sm" />
                <span class="ml-5">{{ quality.text }}</span>
              </div>
              <div class="pt-4"></div>
            </span>
          </div>
          <a-button text="Get Started " class="btn mt-lg-3 mt-md-3" text_color="green" size="md " />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5 ml-lg-auto position-relative" style="left: 5%; margin-top: -20%">
        <img src="@/assets/bubbles.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrustUs",
  props: ["text", "qualities"],
  components: {
    AButton: () => import("@/components/Form/AlajeButtons"),
    AlajeIcons: () => import("@/components/general/AlajeIcons")
  }
};
</script>

<style scoped></style>
