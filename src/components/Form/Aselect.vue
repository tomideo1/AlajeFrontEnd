<template>
  <div>
    <div>
      <label v-if="showLabel" class="font-avenir ft-12 label-class ml-1">{{ label }}</label>
      <select class="styled-select" v-model="currentOption" @change="onSelectedEvent(currentOption)" @input="$emit('input', $event.target.value)">
        <option class="select-placeholder" value="" disabled selected>{{ placeholder }}</option>
        <option v-for="(item, index) in options" :value="item.value" :key="index">{{ defaultSelectedValue }}{{ item.text || item.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aselect",
  props: {
    showLabel: {
      type: Boolean,
      default: true
    },
    value: {
      type: String
    },

    label: {
      type: String,
      default: ""
    },
    onSelectedEvent: Function,
    placeholder: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      required: true
    },
    defaultSelectedValue: {
      type: String,
      default: ""
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
  },
  data() {
    return {
      currentOption: ""
    };
  },
  watch: {
    value: function(newValue) {
      this.currentOption = newValue;
    }
  },

  mounted() {
    this.currentOption = this.defaultSelectedValue;
  }
};
</script>

<style lang="scss" scoped>
.label-class {
  font-weight: 800;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 18px */

  color: #000000;
}

.styled-select {
  position: relative;
  font-family: font(avenir);
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #000;
  line-height: 1.3;
  background: transparent;
  background-image: url("~@/assets/select-arrow.svg");
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%, 0 0;
  padding: 15px;
  width: 100%;
  max-width: 100%;
  /* useful when width is set to anything other than 100% */
  box-sizing: border-box;
  margin: 0;
  border: 1px solid rgba(154, 159, 191, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

/* Focus style */
.styled-select:focus {
  /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}

.select-placeholder {
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  /* 50% Grey */

  color: #cccfdf !important;
}
</style>
