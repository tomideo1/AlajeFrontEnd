<template>
  <div>
    <ANav />
    <banner />
    <div class=" font-avenir  text-wrap  text-align-left  center-text">
      <h2 class=" line-height-50 text-bold-white ft-36 mt-lg-n5">
        The Most Reliable Gift Card Merchant in West Africa.
      </h2>
      <span class="text-white font-avenir ft-14"> We give our clients the most flexible and reliable ways to buy and sell gift cards instantly. </span>
      <br />
      <a-button text="Get Started " class="btn mt-lg-3 mt-md-3" text_color="white" size="md " />
    </div>
  </div>
</template>

<script>
import firebase from "@/fireBaseConfig.js";
import { mapActions } from "vuex";
const { messaging } = firebase;
export default {
  name: "Home",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AButton: () => import("@/components/AlajeButtons"),
    ANav: () => import("@/components/TopNav"),
    Banner: () => import("@/components/Banner")
  },
  methods: {
    ...mapActions(["getMessagingToken", "saveToken"]),
    notificationsPermisionRequest() {
      messaging
        .requestPermission()
        .then(() => {
          this.getMessagingToken();
        })
        .catch(err => {
          console.log("Unable to get permission to notify.", err);
        });
    },

    listenTokenRefresh() {
      const currentMessageToken = window.localStorage.getItem("messagingToken");
      if (!!currentMessageToken || currentMessageToken == null) {
        messaging.onTokenRefresh(function() {
          messaging
            .getToken()
            .then(function(token) {
              this.saveToken({ token });
            })
            .catch(function(err) {
              console.log("Unable to retrieve refreshed token ", err);
            });
        });
      }
    }

    //this method goes into our vuex states
  },
  mounted() {
    if (Notification.permission !== "allow") {
      if (Object.entries(messaging).length > 0) {
        this.notificationsPermisionRequest();
      }
    }
    if (Object.entries(messaging).length > 0) {
      this.listenTokenRefresh();
    }
  }
};
</script>
<style lang="scss" scoped>
.center-text {
  margin-top: 15%;
  position: relative;
  top: 40%;
  left: 40%;
  z-index: 9999999;
  width: 30%;
}
@media only screen and (device-width: 768px) {
  .center-text {
    width: 50%;
  }
}
</style>
