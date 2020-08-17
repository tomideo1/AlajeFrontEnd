<template>
  <div>
    <label class="font-avenir ft-12 label-class ml-1">{{ label }}</label>
    <div class="input-icons">
      <div class="icon-manager">
        <alaje-icons class="input-icons-icon" size="sm" v-if="!error.length || error[0].code === '002'" :name="iconHolder" />
        <alaje-icons class="input-icons-icon" size="sm" v-else-if="success" :name="iconHolder" />
        <alaje-icons class="input-icons-icon" size="sm" v-else :name="iconHolder + '-danger'" />
      </div>
      <input
        :class="['width-100 text-bold', error.length > 0 && error[0].code === '005' ? 'is-invalid' : success ? 'is-valid' : '']"
        @keyup="keyup($event)"
        :value="value"
        :placeholder="placeholder"
        :disabled="disable"
        @input="trigger($event)"
        @focus="focus"
        :type="type"
      />
    </div>
    <span class="error-text " v-if="error.length > 0 && error[0].code === '005'">
      {{ error[0].source[id] }}
    </span>
  </div>
</template>
<script>
export default {
  name: "AlajeInputs",
  components: {
    AlajeIcons: () => import("@/components/AlajeIcons")
  },
  props: {
    value: {},
    disable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "Placeholder"
    },
    type: {
      type: String,
      default: "text"
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    error: {
      type: Array
    },
    success: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: "Label"
    },
    iconHolder: {
      type: String
    },
    id: {
      type: String
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    keyup(e) {
      this.$emit("keyup");
    },
    trigger(e) {
      this.$emit("input", e.target.value);
    },
    focus() {}
  }
};
</script>
<style scoped lang="scss">
input {
  height: 52px;
  // background-color: color(bv-grey-100);
  font-size: 14px;
  color: #999999;
  font-family: Avenir;
  line-height: 1.3;
  padding: 1rem;
  border: 1px solid #e6e7ef;
  box-sizing: border-box;
  border-radius: 5px;
  background: transparent;

  &::placeholder {
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 119.6%;
  }
}
.label-class {
  line-height: 119.6%;
  color: #211048;
  font-style: normal;
  font-weight: 500;
}

.error-text {
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 119.6%;
  color: #e41f2d;
}

.is-invalid {
  background: #fef4f4;
  border: 1px solid color(a-danger);
  box-sizing: border-box;
  border-radius: 5px;
  color: color(a-danger);
  &::placeholder {
    color: color(a-danger);
  }
}

.is-valid {
  background: #ffffff;
  border: 1px solid color(a-success);
  box-sizing: border-box;
  border-radius: 5px;
  &::placeholder {
    color: color(a-success);
  }
}

.icon-manager {
  position: absolute;
  top: 25%;
  left: 72%;
}

.input-icons {
  width: 100%;
  margin: 0 auto;
  position: relative;
  &-icon {
    position: relative;
    left: 80%;
  }
}

input:focus {
  // outline: 1px color(bv-primary) solid;
  outline: none;
}
</style>
