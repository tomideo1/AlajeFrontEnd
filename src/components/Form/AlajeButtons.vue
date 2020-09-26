<template>
  <button @click="$emit('click', $event)" :class="[classes, icon ? iconClass : '']" :disabled="loading" :style="styles">
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
    },

    loading: {
      type: Boolean,
      default: false
    },
    inverse: {
      type: Boolean,
      default: false
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
      if (this.loading) {
        return "Loading...";
      }
      return this.text.toUpperCase();
    },
    classes() {
      let classes = "";
      classes += sizes.includes(this.size) ? `btn-${this.size} ` : "";
      classes += types.includes(this.type) ? `btn-${this.type} ` : "";
      classes += this.block ? "btn-block" : "";
      if (this.inverse) {
        classes += colors.includes(this.text_color) ? `btn-${this.text_color} btn-${this.text_color}-inverse ` : "";
      } else {
        classes += colors.includes(this.text_color) ? `btn-${this.text_color}` : "";
      }
      return classes.trim();
    },

    iconPosition: function() {
      return this.text != "" && this.block ? { position: "absolute" } : {};
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
button,
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
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
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
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

  &.btn-purple {
    color: #aa4afc;
    border: 1px solid color(a-grey-25);
    background: transparent;

    &.btn-purple:hover {
      background: color(a-purple);
      color: color(a-white);
    }
    &.btn-purple-inverse {
      background: color(a-purple);
      color: color(a-white);
    }
  }

  &.btn-white {
    color: #ffffff;
    border: 1px solid color(a-white);
    background: transparent;
    &.btn-white:hover {
      background: color(a-white);
      color: color(a-black);
    }
  }

  &.btn-black {
    color: color(a-black);
    border: 1px solid color(a-grey-25);
    background: transparent;
  }

  &.btn-blue {
    color: #05c1ff;
    border: 1px solid color(a-grey-25);
    background: transparent;
    &.btn-blue:hover {
      background: color(a-blue);
      color: color(a-white);
    }
  }

  &.btn-yellow {
    color: #fcd000;
    background: transparent;
    &.btn-yellow:hover {
      background: color(a-yellow);
      color: color(a-white);
    }
  }

  &.btn-green {
    color: #09efa3;
    background: transparent;
    &.btn-green:hover {
      background: color(a-green);
      color: color(a-white);
    }
  }
  &.btn-grey-50 {
    color: color(a-grey-50);
    background: transparent;
    &.btn-grey-50:hover {
      background: color(a-grey-50);
      color: color(a-grey-50);
    }
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
