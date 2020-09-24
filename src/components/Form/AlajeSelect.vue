<template>
  <div class="container d-lg-block d-none d-md-block  d-xl-block">
    <div class=" select-body">
      <p class="font-avenir text-bold-black ft-18 p-3">{{ title }}</p>
      <div class="p-3">
        <div class="input-icons ">
          <div class="icon-manager">
            <alaje-icons v-if="!beginSearch" class="input-icons-icon" size="sm" name="search" />
          </div>
          <input @focus="showOptions()" @keyup="keyMonitor" type="text" class="w-100" placeholder="Search" />
        </div>
      </div>

      <div class="items  p-2 ">
        <div class="items-item d-flex flex-row ">
          <span class=" ml-2 d-flex flex-row m-2">
            <img src="@/assets/addidas.svg" />
            <p class="font-avenir  m-1 ft-14">Addidas</p>
          </span>

          <span class="ml-auto m-2 ">
            <div class="close-radius mt-1 d-flex align-items-center justify-content-center">
              <alaje-icons name="select-close" size="xs" />
            </div>
          </span>
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
    }
  },
  model: {
    prop: "value"
  },
  data() {
    return {
      beginSearch: false
    };
  },
  components: {
    AlajeIcons: () => import("@/components/general/AlajeIcons")
  },
  methods: {
    showOptions() {},
    keyMonitor(event) {
      this.beginSearch = true;
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
  &-item {
    border-radius: 10px;
    height: 45px;
    font-family: Avenir;
    font-style: normal;
    font-weight: 900;
    line-height: 150%;
    color: #cccfdf;
  }

  &-item-selected {
    background: linear-gradient(101.54deg, #b558f9 0%, #932cff 100%);
    border-radius: 10px;
    height: 45px;
    font-family: Avenir;
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
</style>
