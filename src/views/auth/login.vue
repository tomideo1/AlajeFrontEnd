<template>
  <div>
    <div class="card   bg-white mx-auto  m-3   " style="width: 22rem;">
      <div class="card-body  text-center bg-white">
        <img src="@/assets/loginKey.svg" />
        <p class="font-avenir ft-16 range-card-title text-bold-purple text-center  mt-4">Sign In</p>
        <div class="d-flex flex-column">
          <alaje-inputs label="Email Address" class="m-3" :id="'email'" placeholder="example@alajehub.com " :error="errors" />
          <alaje-inputs label="Password" class="m-3" :id="'password'" placeholder=" •••••••• " :error="errors" />

          <div class="d-flex  m-3 flex-row">
            <a-check label="Remember Me" :checked="ischecked" @click="ischecked = !ischecked" />
            <p class="font-avenir ml-auto ft-12 text-pink">Forgot Password</p>
          </div>
        </div>
      </div>
      <a-button text="Sign In" text_color="purple" class="btn  font-avenir ft-14 mx-auto m-4 " size="md" />
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      errors: [],
      ischecked: false
    };
  },
  components: {
    AlajeInputs: () => import("@/components/Form/AlajeInputs"),
    // AIcons: () => import("@/components/AlajeIcons"),
    AButton: () => import("@/components/Form/AlajeButtons"),
    ACheck: () => import("@/components/Form/AlajeCheckBox")
  }
};
</script>

<style scoped></style>
