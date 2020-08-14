<template>
  <div>
    <ANav />
    <banner />
    <!--    <a-button text="Read More" class="btn" text_color="green" size="md" />-->
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
    ANav: () => import("@/components/Navbar"),
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
