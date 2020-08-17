<template>
  <div class="card range-card" style="width: 18rem;">
    <div class="card-body">
      <a-icons name="range-icon" class="mx-auto" size="retain" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeCard",
  components: {
    AIcons: () => import("@/components/AlajeIcons")
  }
};
</script>

<style scoped lang="scss">
.range-card {
  background: #ffffff;
  border-radius: 5px;
  position: relative;
}
</style>
