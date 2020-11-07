<template>
  <div>
    <div class="table-container table-responsive font-avenir p-4">
      <div class="d-flex flex-row mb-4  ">
        <h4 class=" fw-900 font-avenir">{{ title }}</h4>
        <div class="ml-auto d-flex flex-row">
          <b-form-select v-if="sort" class=" mr-3 col-5" v-model="sortValue" :options="soprtOptions"></b-form-select>
          <alaje-inputs iconPosition="right" iconHolder="search" :showLabel="false" v-model="searchFilter" type="text" class=" mt-n2 " placeholder="Search" />
        </div>
      </div>
      <table class="table borderless ">
        <thead>
          <tr>
            <th v-for="(item, index) in getFields" :key="index" :style="item === 'name' ? 'width:50%' : ''" :class="['text-black fw-900', item === 'box' ? 'grey-box' : '']" scope="col">
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
              <span class="text-pink ft-12  fw-500 font-avenir" @click="sendDetails(item)">View More</span>
              <slot v-if="hasActions" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AlajeInputs from "@/components/Form/AlajeInputs";
export default {
  name: "AlajeTable",
  components: {
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
    sendDetails(item) {
      this.$Bus.$emit("show-table-details", {
        details: item
      });
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
</style>
