<template>
  <div>
    <alert :type="notify.type" :message="notify.message" :title="notify.title ? notify.title : 'Congratulations'" />
    <router-view />
  </div>
</template>

<script>
import Alert from "../../components/general/alert";
export default {
  name: "index",
  data() {
    return {
      notify: {
        type: null,
        show: false,
        title: "",
        message: ""
      }
    };
  },
  components: { Alert },
  mounted() {
    this.$Bus.$on("notify", data => {
      this.notify.show = true;
      this.notify.type = data.type;
      this.notify.title = data.title;
      this.notify.message = data.message;
    });
  }
};
</script>

<style scoped></style>
