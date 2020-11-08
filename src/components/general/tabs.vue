<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <div class="mt-4" v-if="tabType === 'route'">
        <span :class="['p-2 tab m-lg-2 m-md-2', isActiveRoute(tab.route) ? 'tab-active' : 'tab-inactive']" v-for="(tab, index) in tabs" :key="index">
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
    currentTab: {
      type: String
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
      return this.currentTab === value;
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
</style>
