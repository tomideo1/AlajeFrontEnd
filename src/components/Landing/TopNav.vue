<template>
  <div>
    <b-navbar toggleable="lg" fixed="top" class="bg-white ">
      <b-navbar-brand @click="$router.push({ name: 'Home' })"> <img src="@/assets/logo.svg" height="45" /> </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <ul class="navbar-nav mr-auto mt-lg-1 mt-md-1">
          <li class="nav-item ">
            <router-link to="/buy" class="nav-link text-dark-purple ml-lg-5  ft-14 font-avenir"> Buy</router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/sell" class="nav-link text-dark-purple ml-lg-5   ft-14 font-avenir"> Sell</router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/about" class="nav-link text-dark-purple ml-lg-5  ft-14 font-avenir"> About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/downloads" class="nav-link text-dark-purple ml-lg-5  ft-14 font-avenir"> Downloads</router-link>
          </li>

          <li class="nav-item ">
            <router-link to="/contact" class="nav-link text-dark-purple ml-lg-5   ft-14 font-avenir"> Contact us</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-lg-auto mt-lg-1 mt-md-1 ">
          <li class="nav-item  mt-1   ">
            <a-button @click="$router.push({ name: 'login' })" text="Login" text_color="black" class="btn font-avenir ft-12" size="md" />
          </li>
          <li class="nav-item mt-1 pl-lg-4 ">
            <a-button @click="$router.push({ name: 'register' })" text="Get Started" text_color="black" class="btn font-avenir ft-12" size="md" />
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
