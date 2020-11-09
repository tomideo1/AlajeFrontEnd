<template>
  <div>
    <b-modal id="success-modal" centered hide-footer hide-header class="p-3">
      <div class="center d-flex flex-column">
        <img class="mx-auto pt-3 pb-3" src="@/assets/success.svg" />
        <p class="text-center notify-title pt-3 ">{{ title }}</p>
        <p class="text-center font-avenir ft-14 text-black  pb-3">{{ message }}</p>
        <alaje-buttons text_color="purple" class="mt-3 col-lg-2 mx-auto" text="close" @click="$bvModal.hide('success-modal')" />
      </div>
    </b-modal>
    <b-modal id="error-modal" centered hide-footer hide-header class="p-3">
      <div class="center d-flex flex-column">
        <img class="mx-auto pt-3 pb-3" src="@/assets/error.svg" />
        <p class="text-center notify-title pt-3 ">{{ title }}</p>
        <p class="text-center font-avenir ft-14 text-black  pb-3">{{ message }}</p>
        <alaje-buttons text_color="purple" class="mt-3 col-lg-2 mx-auto" text="close" @click="$bvModal.hide('error-modal')" />
      </div>
    </b-modal>
  </div>
</template>

<script>
import AlajeButtons from "../Form/AlajeButtons";
export default {
  name: "alert",
  components: { AlajeButtons },
  props: {
    type: String,
    message: String,
    title: String
  },

  mounted() {
    this.$Bus.$on("notify", data => {
      if (data.type === "success") {
        this.$bvModal.show("success-modal");
      } else if (data.type === "error") {
        this.$bvModal.show("error-modal");
      }
    });
  }
};
</script>

<style scoped lang="scss">
.center {
  display: flex;
  justify-content: center;
}

.notify-title {
  font-family: fonts(Avenir);
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 119.6%;
  /* identical to box height, or 36px */

  text-align: center;

  color: #000000;
}
</style>
