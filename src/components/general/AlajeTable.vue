<template>
  <div>
    <div class="table-container table-responsive font-avenir p-4">
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
              {{ field !== "id" ? item[field] : index + 1 }}
            </td>
            <td class="text-align-right cursor-pointer"><span class="text-pink ft-12  fw-500 font-avenir">View More</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlajeTable",
  props: {
    items: {
      type: Array,
      required: true
    },

    hasActions: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },

  computed: {
    tableItems() {
      return this.items;
    },

    getFields() {
      let fields = [];
      if (this.items.length > 0) {
        fields = Object.keys(this.items[0]);
        fields.splice(1, 0, "box");
        return fields;
      }

      return [];
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
