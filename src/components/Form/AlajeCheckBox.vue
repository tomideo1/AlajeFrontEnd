<template>
  <div>
    <label class="checkbox  font-avenir text-dark-purple ft-12">
      <slot> </slot>
      <input type="checkbox" :checked="checked" />
      <span :class="['checkmark', `checkmark-${checkedColor}`]"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "AlajeCheckBox",
  props: {
    checkedColor: {
      type: String,
      default: "purple"
    },
    checked: {
      type: Boolean
    },
    label: {
      type: String,
      default: "Label"
    }
  }
};
</script>

<style scoped lang="scss">
/* Customize the label (the checkbox) */
.checkbox {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ffffff;
  border: 1px solid #e6e7ef;
  box-sizing: border-box;
  border-radius: 5px;
}

/* On mouse-over, add a grey background color */
.checkbox:hover input ~ .checkmark {
  &-purple {
    border: 1px solid #932cff;
  }
  &-yellow {
    border: 1px solid color(a-warning);
  }
}

/* When the checkbox is checked, add a blue background */
.checkbox input:checked ~ .checkmark {
  background-color: #ffffff;
  &-purple {
    border: 1px solid #932cff;
  }
  &-yellow {
    border: 1px solid color(a-warning);
  }
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox .checkmark-purple:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid #932cff;
  border-width: 0 1px 1px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkbox .checkmark-yellow:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid color(a-warning);
  border-width: 0 1px 1px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
