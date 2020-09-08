<template>
  <div class="">
    <div class="card box-shadow  bg-white mx-auto  m-3    " style="width: 22rem;">
      <div class="card-body   bg-white">
        <div class="text-center">
          <alaje-icon name="range-icon" size="retain" />
        </div>
        <p class="font-avenir ft-16 range-card-title text-bold-purple text-center  mt-4">Sign Up</p>
        <div class="d-flex flex-column">
          <alaje-inputs label="First Name" class="m-1" v-model="form.first_name" :id="'first_name'" placeholder="John " :error="errors" />
          <alaje-inputs label="Last Name" class="m-1" v-model="form.last_name" :id="'last_name'" placeholder="Doe " :error="errors" />
          <alaje-inputs label="Email Address" class="m-1" v-model="form.email" :id="'email'" placeholder="example@alajehub.com " :error="errors" />
          <alaje-inputs label="Phone Number" class="m-1" v-model="form.phone_number" :id="'phone_number'" type="phone" :error="errors" />
          <alaje-inputs
            label="Password"
            :value="form.password"
            :passwordStrength="true"
            iconHolder="eye"
            type="password"
            v-model="form.password"
            class="m-1"
            :id="'password'"
            placeholder=" •••••••• "
            :error="errors"
          />
          <alaje-inputs label="Confirm Password" iconHolder="eye" v-model="form.confirmPassword" type="password" class="m-1" :id="'confirm_password'" placeholder=" •••••••• " :error="errors" />

          <div class="d-flex  m-3 flex-row">
            <a-check :checked="ischecked" @click="ischecked = !ischecked"> I agree to the </a-check>
            <router-link class="pink-link ft-12 font-avenir ml-1" to="/">Terms and Conditions.</router-link>
          </div>
        </div>
      </div>
      <a-button text="Sign Up" text_color="purple" class="btn  font-avenir ft-14 mx-auto m-4 " size="md" />
      <p class="text-center m-3 font-avenir ft-12">Already have an account <router-link class="pink-link ft-12 font-avenir ml-1" to="Login">Sign In</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      errors: [],
      ischecked: false,
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone_number: ""
      }
    };
  },
  components: {
    AlajeInputs: () => import("@/components/Form/AlajeInputs"),
    // AIcons: () => import("@/components/AlajeIcons"),
    AButton: () => import("@/components/Form/AlajeButtons"),
    ACheck: () => import("@/components/Form/AlajeCheckBox"),
    AlajeIcon: () => import("@/components/general/AlajeIcons")
  },
  async created() {
    this.$Bus.$on("icon-toggle", data => {
      if (data.id === "password") {
        this.form.passwordFields.password = data.type;
      } else if (data.id === "confirm_password") {
        this.form.passwordFields.confirmPassword = data.type;
      }
    });
  }
};
</script>

<style scoped>
.box-shadow {
  box-shadow: -3px 14px 5px -5px rgba(0, 0, 0, 0.15);
}
</style>
