<template>
  <div>
    <div class="container d-lg-block d-none d-md-block  d-xl-block">
      <div class=" select-body">
        <p class="font-avenir text-bold-black ft-18 p-3">{{ title }}</p>
        <div class="p-3">
          <div class="input-icons ">
            <div class="icon-manager">
              <alaje-icons v-if="!beginSearch" class="input-icons-icon" size="sm" name="search" />
            </div>
            <input @focus="showOptions()" v-model="searchFilter" v-if="searchFilter === ''" @keyup="keyMonitor" type="text" class="w-100" placeholder="Search" />
            <input @focus="showOptions()" v-model="searched" v-else @keyup="keyMonitor" type="text" class="w-100" placeholder="Search" />
          </div>
        </div>

        <div class="items  p-2 ">
          <div v-for="(option, index) in filteredOptions" :key="index">
            <div :class="['d-flex flex-row', selected === option ? 'items-item-selected ' : 'items-item ']">
              <span class=" ml-2 d-flex flex-row m-2" @click="selectOption(option)" style="cursor:pointer">
                <img src="@/assets/addidas.svg" />
                <p class="font-avenir  m-1 ft-14">{{ option.text }}</p>
              </span>

              <span class="ml-auto m-2 " v-if="selected === option">
                <div class="close-radius mt-1 d-flex align-items-center justify-content-center">
                  <alaje-icons name="select-close" size="xs" @click="close('web')" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" d-lg-none d-md-none d-block mb-5 ">
      <div class="mobile-select-body " v-show="showMobileSelect">
        <div class="d-flex flex-row" @click="toggleSearch">
          <p class="font-avenir text-black ft-14 m-3" v-if="searched === ''">Select Merchant</p>
          <div class="font-avenir text-black ft-14 m-2" v-else>
            <span class=" ml-2 d-flex flex-row ">
              <img src="@/assets/addidas.svg" />
              <p class="font-avenir  m-2 ft-16 ">{{ searched }}</p>
            </span>
          </div>
          <span class="ml-auto m-2"><alaje-icons name="caret-down" size="xs"/></span>
        </div>
      </div>
      <div class="selection w-100  h-100" v-if="!showMobileSelect">
        <p class="font-avenir text-bold-black ft-16">
          Select Merchant
          <span class="float-right" @click="close('mobile')">X</span>
        </p>
        <div class="items  p-2 ">
          <div class="mt-4" v-for="(option, index) in filteredOptions" :key="index">
            <div :class="['d-flex flex-row', selected === option ? 'items-item-selected ' : 'items-item ']">
              <span class=" ml-2 d-flex flex-row m-2" @click="selectOption(option, 'mobile')" style="cursor:pointer">
                <img src="@/assets/addidas.svg" />
                <p class="font-avenir  m-1 ft-16">{{ option.text }}</p>
              </span>
              <span class="ml-auto m-2 " v-if="selected === option"> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Select Something"
    },
    items: {
      type: Array,
      required: true
    }
  },
  model: {
    prop: "value",
    event: "selected"
  },
  data() {
    return {
      beginSearch: false,
      searchFilter: "",
      selected: {},
      searched: "",
      optionsShown: false,
      showMobileSelect: true
    };
  },
  components: {
    AlajeIcons: () => import("@/components/general/AlajeIcons")
  },
  computed: {
    filteredOptions() {
      const filtered = [];
      const regOption = this.searchFilter;
      for (const option of this.items) {
        if (this.searchFilter.length < 1 || option.text.match(regOption)) {
          filtered.push(option);
        }
        if (regOption === "" && this.selected === {}) {
          filtered.push(option);
        }
      }
      return filtered;
    }
  },
  methods: {
    selectOption(option, type = null) {
      this.selected = option;
      this.searched = this.selected.text;
      this.$emit("selected", this.selected.value);
      if (type === "mobile") {
        setTimeout(() => this.toggleSearch(), 500);
      }
    },
    showOptions() {
      this.searchFilter = "";
      this.optionsShown = true;
    },
    keyMonitor: function(event) {
      if (event.key === "Enter") {
        this.selectOption(this.filteredOptions[0]);
      }
    },
    toggleSearch() {
      this.showMobileSelect = !this.showMobileSelect;
      this.$Bus.$emit("mobile-select-toggle", {
        toggled: this.showMobileSelect
      });
    },
    close(type) {
      if (type === "web") {
        if (this.selected) {
          this.selected = {};
          this.searchFilter = "";
          this.$emit("selected", "");
          // this.optionsShown = false
        }
      } else {
        this.toggleSearch();
      }
    }
  },
  watch: {
    searchFilter() {
      if (this.searchFilter !== "") {
        this.beginSearch = true;
      } else {
        this.beginSearch = false;
      }
      // if (this.filteredOptions.length === 0 || this.searchFilter === '') {
      //     this.selected = {};
      // } else {
      //     this.selected = this.filteredOptions[0];
      // }
      // this.$emit("filter", this.searchFilter);
    }
  }
};
</script>

<style lang="scss" scoped>
.select-body {
  border: 1px solid #e6e7ef;
  box-sizing: border-box;
  border-radius: 10px;
}

input {
  height: 42px;
  // background-color: color(bv-grey-100);
  font-size: 14px;
  color: #999999;
  font-family: fonts(Avenir);
  line-height: 1.3;
  padding: 1rem;
  border: 1px solid #e6e7ef;
  box-sizing: border-box;
  border-radius: 5px;
  background: transparent;

  &::placeholder {
    font-family: fonts(Avenir);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 119.6%;
    position: relative !important;
    left: 15% !important;
    margin-top: 1%;
    color: #e6e7ef;
  }
}

.icon-manager {
  position: absolute;
  top: 25%;

  &-right {
    left: 72%;
  }

  &-left {
    left: 0%;
  }
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

.items {
  overflow-y: auto;

  &-item {
    border-radius: 10px;
    height: 45px;
    font-family: fonts(Avenir);
    font-style: normal;
    font-weight: 900;
    line-height: 150%;
    color: #cccfdf;
  }

  &-item-selected {
    background: linear-gradient(101.54deg, #b558f9 0%, #932cff 100%);
    border-radius: 10px;
    height: 45px;
    font-family: fonts(Avenir);
    font-style: normal;
    font-weight: 900;
    line-height: 150%;
    color: #ffffff;
  }
}

.close-radius {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: #ffffff;
}

.mobile-select-body {
  background: #ffffff;
  width: 100%;
  display: inline-block;
  /* 25% Grey */

  border: 1px solid #e6e7ef;
  box-sizing: border-box;
  border-radius: 5px;
}
</style>
