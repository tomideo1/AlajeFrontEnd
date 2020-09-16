<template>
  <div class="">
    <div class="card box-shadow  bg-white mx-auto  m-3    " style="width: 22rem;">
      <div class="card-body   bg-white">
        <div class="text-center">
          <img src="@/assets/loginKey.svg" />
        </div>
        <p class="font-avenir ft-16 range-card-title text-bold-purple text-center  mt-4">Sign In</p>
        <div class="d-flex flex-column">
          <alaje-inputs label="Email Address" type="string" v-model="form.email" class="m-1" :id="'email'" placeholder="Enter Email Address " :error="errors" />
          <alaje-inputs label="Password" v-model="form.password" iconHolder="eye" type="password" class="m-1" :id="'password'" placeholder=" •••••••• " :error="errors" />

          <div class="d-flex  m-3 flex-row">
            <a-check :checked="ischecked" @click="ischecked = !ischecked">
              Remember Me
            </a-check>
            <router-link class="pink-link ft-12 font-avenir ml-auto" to="/">Forgot Password.</router-link>
          </div>
        </div>
      </div>
      <a-button text="Sign In" @click="handleLogin" text_color="purple" :loading="buttonLoader" action="submit" class="btn  font-avenir ft-14 mx-auto m-4 " size="md" />
      <p class="text-center m-3 font-avenir ft-12">Don't have an account <router-link class="pink-link ft-12 font-avenir ml-1" to="Register">Sign Up</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      errors: [],
      ischecked: false,
      form: {
        email: "",
        password: ""
      },
      buttonLoader: false
    };
  },
  components: {
    AlajeInputs: () => import("@/components/Form/AlajeInputs"),
    // AIcons: () => import("@/components/AlajeIcons"),
    AButton: () => import("@/components/Form/AlajeButtons"),
    ACheck: () => import("@/components/Form/AlajeCheckBox")
  },
  methods: {
    async handleLogin() {
      this.buttonLoader = true;
      await setTimeout(this.$router.push({ name: "customer-dashboard" }), 30000);
    }
  }
};
</script>

<style scoped>
.box-shadow {
  box-shadow: -3px 14px 5px -5px rgba(0, 0, 0, 0.15);
}
</style>
