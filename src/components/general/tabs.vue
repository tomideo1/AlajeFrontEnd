<template>
  <div>
    <div class="mt-4" v-if="tabType === 'route'">
      <span :class="['p-2 tab m-lg-2', checkActive(tab.value) ? 'tab-active' : 'tab-inactive']" v-for="(tab, index) in tabs" :key="index">
        <span :to="tab.value" style="cursor: pointer!important; text-decoration: none;">
          {{ tab.name }}
        </span>
      </span>
    </div>
    <div class="mt-4" v-else>
      <span :class="['p-2 tab m-2', checkActive(tab.value) ? 'tab-active' : 'tab-inactive']" v-for="(tab, index) in tabs" :key="index">
        {{ tab.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs",
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
    checkActive(value) {
      return this.$route.path.match(value);
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
