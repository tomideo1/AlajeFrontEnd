<template>
  <div>
    <div class="table-container table-responsive font-avenir p-4">
      <div class="d-lg-block d-md-block d-none">
        <div class="d-flex flex-row mb-4  ">
          <h4 class=" fw-900 font-avenir">{{ title }}</h4>
          <div class="ml-auto d-flex flex-row">
            <b-form-select v-if="sort" class=" mr-3 col-5" v-model="sortValue" :options="soprtOptions"></b-form-select>
            <alaje-inputs iconPosition="right" iconHolder="search" :showLabel="false" v-model="searchFilter" type="text" class=" mt-n2 " placeholder="Search" />
          </div>
        </div>
      </div>

      <div class=" mb-4 d-lg-none d-md-none d-block ">
        <h4 class=" fw-900 font-avenir">{{ title }}</h4>
        <div class="mt-3">
          <b-form-select v-if="sort" class=" mr-3 col-5" v-model="sortValue" :options="soprtOptions"></b-form-select>
          <alaje-inputs iconPosition="right" iconHolder="search" :showLabel="false" v-model="searchFilter" type="text" class=" mt-n2 " placeholder="Search" />
        </div>
      </div>
      <table class="table borderless ">
        <thead>
          <tr>
            <th v-for="(item, index) in getFields" :key="index" :class="['text-black fw-900', item === 'box' ? 'grey-box' : '']" scope="col">
              {{ item !== "box" ? item.toUpperCase() : "" }}
            </th>
            <!--<th class="grey-box" scope="col"></th>-->

            <th v-if="hasActions" class="text-align-right" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableItems" :key="index" :class="['', index % 2 !== 0 ? '' : 'bg-grey-custom']">
            <td
              v-for="(field, i) in getFields"
              :key="i"
              :class="['', field === 'box' ? 'grey-box' : field === 'status' ? `alaje-badge alaje-badge-${item[field]} ft-12 mt-2 mb-2 w-75 d-flex justify-content-center  ` : '']"
            >
              <span v-if="field !== 'id' && field !== 'image'">{{ item[field] }}</span>
              <span v-if="field === 'id'">{{ index + 1 }}</span>
              <span v-if="field === 'image'"><img :src="item[field]"/></span>
            </td>
            <td v-if="hasActions" class="text-align-right cursor-pointer">
              <span class="text-pink ft-12  fw-500 font-avenir" @click="showModal(item.id)">View More</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <b-modal :id="`modal`" centered hide-footer hide-header class="p-3">
      <span class="d-flex flex-row">
        <p class="font-avenir fw-900 font-weight-bold text-bold-black ft-24 line-height-119">Tracking Details</p>
        <span class="ml-auto" @click="$bvModal.hide('modal')">
          <alaje-icons name="close" size="sm" />
        </span>
      </span>

      <ul class="step-progressbar pt-3 pb-4">
        <li class="step-progressbar__item step-progressbar__item--complete font-avenir fw-800 ft-12 line-heigh-119 text-bold-black">Giftcard Order Placed</li>
        <li class="step-progressbar__item step-progressbar__item--active font-avenir fw-800 ft-12 line-heigh-119 text-bold-black">Giftcard Oder Confirmed</li>
        <li class="step-progressbar__item font-avenir fw-800 ft-12 line-heigh-119 text-bold-black">Giftcar Order Delivered</li>
      </ul>

      <div class="d-flex flex-row">
        <p class="font-avenir fw-800 ft-24 line-height-119 text-bold-black pt-3">Adidas Gift Card</p>
        <p class="font-avenir fw-800 ft-24 line-height-119 text-bold-pink pt-3 ml-auto">N50000</p>
      </div>
      <div class="d-flex flex-row">
        <span class="d-flex flex-column">
          <p class="font-avenir fw-500 ft-14 line-height-119 text-bold-black pt-3">Darnell Steward</p>

          <p class="font-avenir fw-500 ft-14 line-height-119 text-grey-25">7/11/20</p>
        </span>

        <p :class="`alaje-badge alaje-badge-success ml-auto ft-12   d-flex justify-content-center mt-4`" style="height:40px">Success</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
import AlajeInputs from "@/components/Form/AlajeInputs";
import AlajeIcons from "./AlajeIcons";
export default {
  name: "AlajeTable",
  components: {
    AlajeIcons,
    AlajeInputs
  },
  props: {
    items: {
      type: Array,
      required: true
    },

    hasActions: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },

    sortItems: {
      type: Array,
      required: false
    },
    sort: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchFilter: "",
      sortValue: null
    };
  },

  computed: {
    tableItems() {
      const self = this;
      return self.items.filter(function(obj) {
        return Object.keys(obj).some(function(key) {
          return obj[key].includes(self.searchFilter);
        });
      });
    },

    getFields() {
      let fields = [];
      if (this.items.length > 0) {
        fields = Object.keys(this.items[0]);
        fields.splice(1, 0, "box");
        return fields;
      }

      return [];
    },
    soprtOptions() {
      let initial = [
        {
          value: null,
          text: "Sort By"
        }
      ];
      return initial.concat(this.sortItems);
    }
  },

  methods: {
    // eslint-disable-next-line no-unused-vars
    showModal(id) {
      this.$bvModal.show(`modal`);
    }
  }
};
</script>

<style lang="scss" scoped>
.table-container {
  background: #ffffff;
  /* 25% Grey */

  border: 1px solid #e6e7ef;
  box-sizing: border-box;
  border-radius: 20px;
}

.borderless td,
.borderless th {
  border: none;
}

.bg-grey-custom {
  background: #f5f5f9;
}

.grey-box {
  background: #e6e7ef;
  border-radius: 5px;
  // width: 40px;
  float: left;
  // height: 40px;
}

.modal {
  background: #ffffff !important;
  border-radius: 10px !important;

  .modal-header {
    border-bottom: none !important;
    border-top: none !important;
  }
}

.step-progressbar {
  list-style: none;
  counter-reset: step;
  display: flex;
  padding: 0;

  &__item {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;
    position: relative;

    &:before {
      width: 3em;
      height: 3em;
      content: counter(step);
      counter-increment: step;
      align-self: center;
      background: #e5e7ef;
      color: #fff;
      border-radius: 100%;
      line-height: 3em;
      margin-bottom: 0.5em;
    }

    &:after {
      height: 2px;
      width: calc(100% - 4em);
      content: "";
      background: #e5e7ef;
      position: absolute;
      top: 1.5em;
      left: calc(50% + 2em);
    }

    &:last-child {
      &:after {
        content: none;
      }
    }

    &--active {
      &:before {
        background: #e5e7ef;
      }
    }

    &--complete {
      &:before {
        content: url("~@/assets/tick.svg");
        color: #ffffff;
        background: linear-gradient(95.36deg, #03da8d 1.64%, #09efa3 100%);
      }
    }
  }
}

.modal-content {
  border-radius: 10px !important;
}
</style>
