<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <div class="mt-4" v-if="tabType === 'route'">
        <span :class="['p-2 tab m-lg-2 m-md-2', isActiveRoute(tab.value) ? 'tab-active' : 'tab-inactive']" v-for="(tab, index) in tabs" :key="index">
          <span :to="tab.value" style="cursor: pointer!important; text-decoration: none;" @click="checkActive(tab)">
            {{ tab.name }}
          </span>
        </span>
      </div>
      <div class="mt-4" v-else>
        <span :class="['p-2 tab m-2', isActiveTab(tab.value) ? 'tab-active' : 'tab-inactive']" v-for="(tab, index) in tabs" :key="index">
          <span :to="tab.value" style="cursor: pointer!important; text-decoration: none;" @click="checkActive(tab)">
            {{ tab.name }}
          </span>
        </span>
      </div>
    </div>

    <div class="d-block d-md-none d-lg-none">
      <select id="sources" class="custom-select sources" @change="checkActiveEvent($event)">
        <option v-for="(tab, index) in tabs" :key="index" :value="tab.value">{{ tab.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs",
  data() {
    return {
      activeTab: "Home"
    };
  },
  props: {
    tabs: {
      type: Array,
      required: false
    },
    tabType: {
      type: String
    }
  },
  methods: {
    checkActive(tab) {
      if (this.tabType === "route") {
        return this.$router.push(tab.route);
      } else {
        this.$Bus.$emit("current-tab", {
          tab: tab.value
        });
      }
    },

    isActiveRoute(value) {
      return this.$route.path.match(value);
    },
    isActiveTab(value) {
      return true;
    },
    checkActiveEvent(event) {
      if (this.tabType === "route") {
        return this.$router.push(event.target.route);
      } else {
        this.$Bus.$emit("current-tab", {
          tab: event.target.value
        });
      }
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.tab {
  &-active {
    background: linear-gradient(101.54deg, #b558f9 0%, #932cff 100%);
    border: 1px solid rgba(154, 159, 191, 0.5);
    box-sizing: border-box;
    border-radius: 5px;
    color: #ffffff !important;
  }

  &-inactive {
    border: 1px solid rgba(154, 159, 191, 0.25);
    box-sizing: border-box;
    border-radius: 5px;
    color: color(a-purple-color) !important;
  }
}

/** Custom Select **/
.custom-select-wrapper {
  position: relative;
  display: inline-block;
  user-select: none;
}

.custom-select-wrapper select {
  display: none;
}

.custom-select {
  position: relative;
  display: inline-block;
}

.custom-select-trigger {
  position: relative;
  display: block;
  width: 130px;
  padding: 0 84px 0 22px;
  font-size: 22px;
  font-weight: 300;
  color: #fff;
  line-height: 60px;
  background: #5c9cd8;
  border-radius: 4px;
  cursor: pointer;
}

.custom-select-trigger:after {
  position: absolute;
  display: block;
  content: "";
  width: 10px;
  height: 10px;
  top: 50%;
  right: 25px;
  margin-top: -3px;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(45deg) translateY(-50%);
  transition: all 0.4s ease-in-out;
  transform-origin: 50% 0;
}

.custom-select.opened .custom-select-trigger:after {
  margin-top: 3px;
  transform: rotate(-135deg) translateY(-50%);
}

.custom-options {
  position: absolute;
  display: block;
  top: 100%;
  left: 0;
  right: 0;
  min-width: 100%;
  margin: 15px 0;
  border: 1px solid #b5b5b5;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.07);
  background: #fff;
  transition: all 0.4s ease-in-out;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(-15px);
}

.custom-select.opened .custom-options {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
  transform: translateY(0);
}

.custom-options:before {
  position: absolute;
  display: block;
  content: "";
  bottom: 100%;
  right: 25px;
  width: 7px;
  height: 7px;
  margin-bottom: -4px;
  border-top: 1px solid #b5b5b5;
  border-left: 1px solid #b5b5b5;
  background: #fff;
  transform: rotate(45deg);
  transition: all 0.4s ease-in-out;
}

.option-hover:before {
  background: #f9f9f9;
}

.custom-option {
  position: relative;
  display: block;
  padding: 0 22px;
  border-bottom: 1px solid #b5b5b5;
  font-size: 18px;
  font-weight: 600;
  color: #b5b5b5;
  line-height: 47px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}

.custom-option:first-of-type {
  border-radius: 4px 4px 0 0;
}

.custom-option:last-of-type {
  border-bottom: 0;
  border-radius: 0 0 4px 4px;
}

.custom-option:hover,
.custom-option.selection {
  background: #f9f9f9;
}
</style>
