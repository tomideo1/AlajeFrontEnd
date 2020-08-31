<template>
  <div class="fixed-bottom   footer-bg">
    <div class="d-flex demo-1 flex-row">
      <p class="text-success ml-5 mt-3  font-avenir" v-for="(information, index) in informations" :key="index">{{ information.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingFooter",
  props: ["informations"]
};
</script>

<style lang="scss" scoped>
.demo-1 {
  text-align: center;
  /* Starting position */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  /* Apply animation to this element */
  -moz-animation: demo-1 15s linear infinite;
  -webkit-animation: demo-1 15s linear infinite;
  animation: demo-1 15s linear infinite;
}
/* Move it (define the animation) */
@-moz-keyframes demo-1 {
  0% {
    -moz-transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%);
  }
}
@-webkit-keyframes demo-1 {
  0% {
    -webkit-transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}
@keyframes demo-1 {
  0% {
    -moz-transform: translateX(100%); /* Firefox bug fix */
    -webkit-transform: translateX(100%); /* Firefox bug fix */
    transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%); /* Firefox bug fix */
    -webkit-transform: translateX(-100%); /* Firefox bug fix */
    transform: translateX(-100%);
  }
}

.footer-bg {
  background: color(a-dark-purple);
}
</style>
