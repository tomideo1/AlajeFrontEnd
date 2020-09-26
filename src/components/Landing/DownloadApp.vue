<template>
  <div class="d-flex flex-row">
    <div class=" mr-lg-auto ">
      <img src="@/assets/phoneholder.svg" />
    </div>
    <div>
      <span class=" download-box d-flex flex-column ">
        <h2 class="line-height-50 mx-auto ft-36 font-avenir  mt-5  unskew  download-box-center-text    text-bold-white">Download Our Mobile App</h2>
        <p class="text-white font-avenir ft-14  unskew w-50 text-align-justify mx-auto mt-3">
          {{ text }}
        </p>
        <div class="d-flex mx-auto mt-4 flex-row unskew">
          <img class="m-3" src="@/assets/Playstore.svg" />
          <img class="m-3" src="@/assets/Appstore.svg" />
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownloadApp",
  props: ["text"],
  components: {}
};
</script>
<style scoped lang="scss">
.download-box {
  background: #211048;
  height: 50% !important;
  width: 75% !important;
  position: absolute;
  border-radius: 20px;
  left: 35%;
  z-index: -1;
  display: table;

  margin-top: 10%;
  /*background-image: url("~@/assets/rectangle.svg");*/
  /*background-size: cover;*/
  transform: skew(15deg);
  .unskew {
    transform: skew(-15deg);
  }

  &-center-text {
    display: table-cell;
    vertical-align: middle; //centers vertically
    margin: 0px auto; //centers horizontally
  }
}
</style>
