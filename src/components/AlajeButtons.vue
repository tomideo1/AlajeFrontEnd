<template>
  <button @click="$emit('click', $event)" :class="[classes, icon ? iconClass : '']" :disabled="disable" :style="styles">
    <!-- Button Text -->
    <span v-if="text">
      {{ textProp }}
    </span>
  </button>
</template>
<script>
const sizes = ["xs", "sm", "md", "lg"];
const types = ["inverse", "filled", "outline"];
const colors = ["purple", "green", "white", "black", "grey-25", "grey-50", "green", "yellow", "blue", "pink"];

export default {
  name: "AlajeButtons",
  data() {
    return {
      widths: {
        xs: 26,
        sm: 34,
        md: 42,
        lg: 48
      }
    };
  },
  props: {
    // The type of the button
    type: {
      // `'inverse'` / `'filled'` / `'outline'`
      type: String,
      default: types[1],
      required: false
    },

    // The size of the button
    size: {
      // `'xs'` / `'sm'` / `'md'` / `'lg'`
      type: String,
      default: sizes[2],
      required: false
    },
    // To set button to be full width
    block: {
      type: Boolean,
      default: false,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    // The disabled state of the button
    disable: {
      // `'true'` / `'false'`
      type: Boolean,
      default: false,
      required: false
    },
    text: {
      type: String
    },

    text_color: {
      type: String,
      default: colors[9]
    }
  },
  computed: {
    styles() {
      if (!this.text && typeof this.icon != "undefined") {
        return `width: ${this.widths[this.size]}px; border-radius: 50%; padding: 0;`;
      }
      return false;
    },
    iconClass() {
      let btnBlock = this.block == true ? "btn-block-icon" : "";
      return `${btnBlock}`;
    },
    iconMargin() {
      if (!this.text && typeof this.icon != "undefined") {
        return "mr-0";
      }
      return "mr-4";
    },
    textProp() {
      return this.text.toUpperCase();
    },
    classes() {
      let classes = "";
      classes += sizes.includes(this.size) ? `btn-${this.size} ` : "";
      classes += types.includes(this.type) ? `btn-${this.type} ` : "";
      classes += colors.includes(this.text_color) ? `btn-${this.text_color}` : "";
      classes += this.block ? "btn-block" : "";
      return classes.trim();
    },

    iconPosition: function() {
      return this.text != "" && this.block ? { position: "absolute" } : {};
    }
  }
};
</script>

<style scoped lang="scss">
button,
.btn {
  /*font-family: fonts(bv-montserrat);*/
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 0.9rem;
  border: 1px solid color(a-grey-25);
  /* 25% Grey */

  box-sizing: border-box;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  background: #ffffff;
  padding: 15px 30px;
  position: relative;
  &.btn-lg {
    height: 48px;
    font-size: 1.3rem;
    padding: 0 2rem;
  }
  &.btn-md {
    height: 50px;
    font-size: 14px;
    padding: 0 1.9rem;
  }
  &.btn-sm {
    height: 34px;
    padding: 0 1rem;
  }
  &.btn-xs {
    height: 26px;
    padding: 0 0.75rem;
  }

  &:disabled {
    cursor: auto;
    opacity: 0.5 !important;
  }

  &.btn-white {
    color: #03da8d;
    border: 1px solid color(a-white);
    &.btn-green:hover {
      background: color(a-green);
      color: color(a-black);
    }
  }
  &.btn-green {
    color: #03da8d;
    border: 1px solid color(a-green);
    &.btn-green:hover {
      background: color(a-green);
      color: color(a-white);
    }
  }
  &.btn-yellow {
    color: #03da8d;
    border: 1px solid color(a-yellow);
    &.btn-green:hover {
      background: color(a-);
      color: color(a-white);
    }
  }
  &.btn-purple {
    color: #b558f9;
    &.btn-purple:hover {
      background: color(a-purple);
      color: color(a-white);
    }
  }

  &.btn-pink {
    border: 1px solid color(a-pink);
    background: color(a-pink);
  }
  &.btn-blue {
    border: 1px solid color(a-blue);
    background: color(a-blue);
  }
}

.btn-block {
  width: 100% !important;
  &.btn-lg {
    padding: 0 0 0 calc(2rem / 2) !important;
  }
  &.btn-md {
    padding: 0 0 0 0;
  }
  &.btn-sm,
  &.btn-xs {
    padding: 0 0 0 calc(1rem / 2) !important;
  }
  &-icon {
    display: flex;
    justify-content: flex-start !important;
    border-radius: 50px !important;
    & > :last-child {
      margin: auto;
    }
  }
}
</style>
