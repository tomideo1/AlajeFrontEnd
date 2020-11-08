<template>
  <div>
    <label>
      <input type="checkbox" :name="name" :value="value" @change="$emit('input', $event.target.checked)" />
    </label>
  </div>
</template>

<script>
export default {
  name: "Switches",
  props: {
    name: {
      type: String
    },
    value: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped lang="scss">
input[type="checkbox"] {
  position: relative;
  width: 40px;
  height: 21px;
  -webkit-appearance: none;
  background: #cccfdf;
  border-radius: 16px;
  outline: none;
  /*border-radius: 20px;*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

  &:before {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    margin-top: 1px;
    border-radius: 16px;
    // top: 5px;
    // left: 5px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 1s ease-in;
  }
  &:checked {
    transition: 1s ease-in;
    background: linear-gradient(101.54deg, #b558f9 0%, #932cff 100%);
    &:before {
      left: 20px;
    }
  }
}
</style>
