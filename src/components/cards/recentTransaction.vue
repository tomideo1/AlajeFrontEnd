<template>
  <div>
    <div class="alaje-card">
      <p class="font-avenir text-bold-black ft-22 p-3">
        Recent Transactions
        <span class="text-pink font-avenir float-right ft-12" style="font-weight: normal">See All</span>
      </p>
      <div class="table-responsive">
        <table class="table table-borderless mt-n3 ml-3 w-100 ">
          <thead>
            <tr class="font-avenir  ft-12">
              <th scope="col">Client Name</th>
              <th scope="col">Store Name</th>
              <th scope="col">Value</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="font-avenir ft-12" v-for="(item, index) in items" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.store }}</td>
              <td>{{ item.value }}</td>
              <td>
                <span :class="`alaje-badge alaje-badge-${item.status} d-flex justify-content-center mt-n2`">{{ item.status }}</span>
              </td>
              <td class="text-pink ft-10 ">View More</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recentTransaction",
  props: ["items"]
};
</script>

<style scoped lang="scss">
.alaje-card {
  background: #ffffff;
  /* 25% Grey */

  border: 1px solid #e6e7ef;
  box-sizing: border-box;
  border-radius: 20px;
}
</style>
