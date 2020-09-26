<template>
  <div>
    <div class="row">
      <div class=" col-md-12 col-lg-12 col-12  row-1-card p-4">
        <p class="font-avenir text-grey-50 ft-18 fw-900">{{ title }}</p>
        <div v-if="showSkeleton" class="row">
          <!-- Mobile  View-->
          <div class="col-lg-12 col-md-12 col-12 d-block d-lg-none d-md-none">
            <div class="  row d-flex align-items-center justify-content-center  ">
              <b-skeleton v-for="index in maxItems" :width="mobileWidth" :key="index" :height="mobileHeight" :class="`skeleton col-${size} m-2`"> </b-skeleton>
            </div>
          </div>
          <!-- WEB VIEW -->

          <div class="col-lg-12 col-md-12 col-12  d-none d-lg-block d-md-block">
            <div class="  d-flex flex-row  ">
              <b-skeleton v-for="index in maxItems" :key="index" :width="width" class=" skeleton  m-2" :height="height"> </b-skeleton>
            </div>
          </div>
        </div>
      </div>
      <!--      <div class=" col-md-12 mt-4 col-lg-12 col-12  row-1-card p-4">-->
      <!--        <p class="font-avenir text-grey-50 ft-18 fw-900">Select Country/Currency</p>-->
      <!--        <div class="row">-->
      <!--          &lt;!&ndash; Mobile  View&ndash;&gt;-->
      <!--          <div class="col-lg-12 col-md-12 col-12 d-block d-lg-none d-md-none">-->
      <!--            <div class="  row d-flex align-items-center justify-content-center  ">-->
      <!--              <b-skeleton v-for="index in 8" :key="index" width="5%" class=" skeleton col-2  m-2" :height="height"> </b-skeleton>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          &lt;!&ndash; WEB VIEW &ndash;&gt;-->
      <!--          <div class="col-lg-12 col-md-12 col-12  d-none d-lg-block d-md-block">-->
      <!--            <div class=" row  ">-->
      <!--              <b-skeleton v-for="index in 18" :key="index" width="10%" class="col-lg-1 col-md-1 skeleton  m-2" height="50px"> </b-skeleton>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "skeleton",
  props: {
    showSkeleton: {
      type: Boolean,
      default: true
    },
    maxItems: {
      type: Number,
      default: 4
    },
    height: {
      type: String
    },
    mobileWidth: {
      type: String
    },
    mobileHeight: {
      type: String
    },
    width: {
      type: String
    },
    title: {
      type: String
    },
    size: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.row-1-card {
  background: #ffffff;
  /* 25% Grey */

  border: 1px solid #e6e7ef;
  box-sizing: border-box;
  border-radius: 10px;
}

.skeleton {
  background: #f5f5f9;
  border-radius: 10px;
}
</style>
