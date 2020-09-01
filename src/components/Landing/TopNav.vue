<template>
  <div>
    <b-navbar toggleable="lg" fixed="top" class="bg-white ">
      <b-navbar-brand href="#"> <img src="@/assets/logo.svg" height="45" /> </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <ul class="navbar-nav mr-auto mt-lg-1 mt-md-1">
          <li class="nav-item ">
            <router-link to="/" class="nav-link text-dark-purple ml-lg-5  ft-14 font-avenir" href="#"> Buy</router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/" class="nav-link text-dark-purple ml-lg-5   ft-14 font-avenir" href="#"> Sell</router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/" class="nav-link text-dark-purple ml-lg-5  ft-14 font-avenir" href="#"> About Us</router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/" class="nav-link text-dark-purple ml-lg-5  ft-14 font-avenir" href="#"> Downloads</router-link>
          </li>

          <li class="nav-item ">
            <router-link to="/" class="nav-link text-dark-purple ml-lg-5   ft-14 font-avenir" href="#"> Contact us</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-lg-auto mt-lg-1 mt-md-1 ">
          <li class="nav-item  mt-1   ">
            <a-button @click="$router.push({ name: 'login' })" text="Login" text_color="black" class="btn font-avenir ft-12" size="md" />
          </li>
          <li class="nav-item mt-1 pl-lg-4 ">
            <a-button text="Get Started" text_color="black" class="btn font-avenir ft-12" size="md" />
          </li>
        </ul>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  components: {
    AButton: () => import("@/components/Form/AlajeButtons")
  }
};
</script>

<style scoped></style>
