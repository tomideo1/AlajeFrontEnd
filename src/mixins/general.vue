<script>
export default {
  computed: {
    getCurrentRoute() {
      return this.$router.currentRoute.fullPath.substring(this.$router.currentRoute.fullPath.lastIndexOf("/") + 1);
    }
  }
};
</script>
