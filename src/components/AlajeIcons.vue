<template>
  <span :class="`icon icon-${size}`" :id="name" v-on="$listeners">
    <arrow-shade-down v-if="name === 'arrow-shade-down'"></arrow-shade-down>
    <range-icon v-if="name === 'range-icon'"></range-icon>
    <eye v-if="name === 'eye'"></eye>
    <eye-danger v-if="name === 'eye-danger'"></eye-danger>
  </span>
</template>
<script>
export default {
  props: {
    name: {
      type: String
    },
    size: {
      type: String
    }
  },
  components: {
    arrowShadeDown: () => import("@/components/__private__/media/arrow-down-shade"),
    RangeIcon: () => import("@/components/__private__/media/RangeIcon"),
    Eye: () => import("@/components/__private__/media/eye"),
    EyeDanger: () => import("@/components/__private__/media/eye-danger")
  }
};
</script>
<style lang="scss">
.icon {
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  vertical-align: middle;
  font-size: calc(100% + 2px);
  width: 1.5rem;
  height: 1.5rem;
  z-index: 1;
  * {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
  &-lg {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 2rem;
  }
  &-retain {
    width: 100%;
    height: 100%;
  }
  &-md {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
  &-sm {
    width: 1.5rem;
    height: 1.5rem;
  }
  &-xs {
    width: 1rem;
    height: 1rem;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
