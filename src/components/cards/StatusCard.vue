<template>
  <div>
    <div :class="`status-card status-card-${status}  d-flex flex-column p-2 `">
      <p class="font-avenir text-bold-white float-right mt-n2  ml-auto " style="font-size: 40px!important;">{{ count }}</p>
      <p class="font-avenir text-bold-white ft-20 w-25 mb-n1 ">{{ statusMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusCard",
  props: ["status", "statusMessage", "count"]
};
</script>

<style scoped lang="scss">
.status-card {
  border-radius: 10px !important;
  border: none;
  padding: 10px;
  &-pending {
    background: linear-gradient(95.36deg, #01cbff 1.64%, #0193ff 100%);
  }
  &-success {
    background: linear-gradient(95.36deg, #03da8d 1.64%, #09efa3 100%);
  }
  &-failed {
    background: linear-gradient(95.36deg, #f4a136 1.64%, #fcd000 100%);
  }
  &-sold {
    background: linear-gradient(101.54deg, #b558f9 0%, #932cff 100%);
  }
}
</style>
