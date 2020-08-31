<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <span class="d-flex flex-row">
          <img width="50" height="50" src="@/assets/logo.svg" />
          <p class="font-avenir mt-2 ml-3  text-dark-purple ft-20">Alaje Hub</p>
        </span>
      </div>

      <div class="col-md-2">
        <span class="d-flex flex-row ">
          <alaje-icons class="ml-4" name="facebook" />
          <alaje-icons class="ml-4" name="instagram" />
          <alaje-icons class="ml-4 " name="twitter" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "media"
};
</script>

<style scoped></style>
