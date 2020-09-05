<template>
  <div>
    <div v-if="type !== 'phone'">
      <label class="font-avenir ft-12 label-class ml-1">{{ label }}</label>
      <div class="input-icons">
        <div class="icon-manager" @click="handleIcons">
          <alaje-icons class="input-icons-icon" size="sm" v-if="!errorConditions" :name="iconHolder" />
          <alaje-icons class="input-icons-icon" size="sm" v-else :name="iconHolder + '-danger'" />
          <div class="password-strength  " v-if="type === 'password' && id === 'password' && passwordStrength">
            <div :class="strengthClasses"></div>
          </div>
        </div>
        <input
          v-if="type !== 'password'"
          :class="['width-100 text-bold', error.length > 0 && error[0].code === '005' && error[0].source.hasOwnProperty(id) ? 'is-invalid' : success ? 'is-valid' : '']"
          @keyup="keyup($event)"
          :value="value"
          :placeholder="placeholder"
          :disabled="disable"
          @input="trigger($event)"
          @focus="focus"
          :type="type"
        />
        <input
          v-if="type === 'password'"
          :class="['width-100 text-bold', error.length > 0 && error[0].code === '005' && error[0].source.hasOwnProperty(id) ? 'is-invalid' : success ? 'is-valid' : '']"
          @keyup="keyup($event)"
          :value="value"
          :placeholder="placeholder"
          :disabled="disable"
          @input="trigger($event)"
          @focus="focus"
          :type="password"
        />
      </div>
      <span class="error-text " v-if="error.length > 0 && error[0].code === '005' && error[0].source.hasOwnProperty(id)">
        {{ error[0].source[id] }}
      </span>
    </div>
    <div v-if="type === 'phone'">
      <label class="font-avenir ft-12 label-class ml-1">{{ label }}</label>
      <vue-tel-input
        :validCharactersOnly="true"
        :inputOptions="inputOptions"
        :wrapperClasses="[
          'width-100 text-bold phone-class',
          error.length > 0 && error[0].code === '005' && error[0].source.hasOwnProperty(id) ? 'vue-tel-input-danger vti__input-danger' : success ? 'is-valid' : ''
        ]"
      >
      </vue-tel-input>
      <span class="error-text " v-if="error.length > 0 && error[0].code === '005'">
        {{ error[0].source[id] }}
      </span>
    </div>
  </div>
</template>
<script>
import passwordStrengthAlgorithm from "../../utils/passwordStrengthAlgorithm";
export default {
  name: "AlajeInputs",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AlajeIcons: () => import("@/components/AlajeIcons")
  },
  data() {
    return {
      password: "password",
      string: "string",
      inputOptions: {
        showDialCode: true
      },
      passwordPoints: 0,
      strengthClasses: ""
    };
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
    },
    passwordStrength: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    keyup(e) {
      this.$emit("keyup");
      this.passwordPoints = passwordStrengthAlgorithm.checkPassword(this.value);
    },
    // eslint-disable-next-line no-unused-vars
    mouseLeave(e) {
      this.$emit("mouseleave");
      this.passwordPoints = passwordStrengthAlgorithm.calculatePoints(this.value);
    },
    trigger(e) {
      this.$emit("input", e.target.value);
    },
    focus() {},
    handleIcons() {
      if (this.iconHolder === "eye") {
        this.password = this.password === "password" ? "text" : "password";
      }
    },
    passwordChecker() {
      let classes = [];
      switch (true) {
        case this.passwordPoints <= 10:
          classes.push("password-strength-meter", "password-strength-meter-very-weak");
          break;
        case this.passwordPoints <= 30:
          classes.push("password-strength-meter", "password-strength-meter-weak");
          break;
        case this.passwordPoints <= 50:
          classes.push("password-strength-meter", "password-strength-meter-manage");
          break;
        case this.passwordPoints <= 70:
          classes.push("password-strength-meter", "password-strength-meter-strong");
          break;
        case this.passwordPoints <= 90:
          classes.push("password-strength-meter", "password-strength-meter-very-strong");
          break;
        default:
          this.error = [];
          break;
      }
      this.strengthClasses = classes;
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    errorConditions() {
      if (this.error.length === 0) {
        return false;
      }
      switch (this.error) {
        case typeof this.error.length == "undefined" || this.error[0].code === "002":
          return false;
        case !Object.prototype.hasOwnProperty.call(this.error[0].source, "password") && this.iconHolder === "eye":
          return false;
        case Object.prototype.hasOwnProperty.call(this.error[0].source, "password") && this.iconHolder === "eye":
          return true;
        default:
          break;
      }
      // if(typeof this.error.length == 'undefined' || this.error[0].code === '002'){}
    },
    // eslint-disable-next-line vue/return-in-computed-property
    checkPasswordValue() {
      if (this.value === "") {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.passwordPoints = 0;
      }
      return this.passwordPoints;
    }
    // eslint-disable-next-line vue/no-dupe-keys
  },
  mounted() {},
  watch: {
    checkPasswordValue: {
      handler: "passwordChecker"
    }
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
  border: 1px solid color(a-success) !important;
  box-sizing: border-box !important;
  border-radius: 5px !important;
  &::placeholder {
    color: color(a-success) !important;
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

.phone-class {
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
}

.password-strength {
  /* 25% Grey */
  width: 50px;
  height: 1px;
  position: absolute;
  right: 20%;
  top: 50%;

  border: 1px solid #e6e7ef;
  box-sizing: border-box;
  border-radius: 50px;
  &-meter {
    width: 0px;
    height: 1px;
    position: relative;
    margin-top: -1px;
    box-sizing: border-box;
    border-radius: 50px;
    &-very-weak {
      border: 1px solid red;
      width: 10px;
    }
    &-weak {
      border: 1px solid orangered;
      width: 20px;
    }
    &-manage {
      border: 1px solid color(a-warning);
      width: 30px;
    }
    &-strong {
      border: 1px solid color(bv-primary);
      width: 40px;
    }
    &-very-strong {
      border: 1px solid color(a-success);
      width: 50px;
    }
  }
}
</style>
