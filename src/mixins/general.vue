<script>
export default {
  computed: {
    getCurrentRoute() {
      return this.$router.currentRoute.fullPath.substring(this.$router.currentRoute.fullPath.lastIndexOf("/") + 1);
    }
  },
  methods: {
    convertToNaira(value) {
      let conversionn = value * 450;
      return conversionn.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>
