<template>
  <div>
    <b-sidebar id="sidebar-1" body-class="bg-dark-purple" :no-header-close="true" width="200px" header-class="bg-dark-purple" :visible="true">
      <div class="d-flex justify-content-center mt-3">
        <img src="@/assets/logo-light.svg" />
      </div>
      <div class="px-3 py-2"></div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "MainSideBr"
};
</script>

<style scoped></style>
