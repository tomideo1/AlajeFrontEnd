<template>
  <div class="home-body">
    <section>
      <ANav />
      <banner />
    </section>
    <div class="p-5"></div>
    <section>
      <buy-and-sell :text="section2Text" />
    </section>
    <div class="p-5 mt-5"></div>
    <section>
      <great-deals :text="section2text" />
    </section>
    <section>
      <trust-us :text="section2text" :qualities="qualities" />
    </section>
    <section>
      <download-app :text="section2text" />
    </section>
    <section>
      <media />
    </section>
    <hr class="divide" />
    <section>
      <div class="container mb-5">
        <div class="row">
          <div class="col-md-11">
            <p class="font-avenir mt-2 ml-3  text-black ft-12">&copy; 2020 Alaje Hub All Rights Reserved</p>
          </div>

          <div class="col-md-1">
            <alaje-icons name="arrow-up" size="xs" @click="scrollTop" />
          </div>
        </div>
      </div>
    </section>
    <footer>
      <landing-footer :informations="informations" />
    </footer>
  </div>
</template>

<script>
import firebase from "@/fireBaseConfig.js";
import { mapActions } from "vuex";
const { messaging } = firebase;
export default {
  name: "Home",
  data() {
    return {
      section2text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et, placerat vitae aliquam sit amet interdum platea mauris. Feugiat consequat aliquam quam amet, auctor. Nisi, elementum, a,\n" +
        " ornare rutrum amet, est eget. Pulvinar vel, cursus lectus egestas amet, sit cursus",

      qualities: [
        {
          text: "Reliable",
          id: 1
        },
        {
          text: "Dependable",
          id: 2
        },
        {
          text: "Secure",
          id: 3
        }
      ],
      informations: [
        {
          title: "Dollar to Naira is now 465"
        },
        {
          title: "Alaje Sells at Amazing rates"
        },
        {
          title: "Best Deals"
        }
      ]
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ANav: () => import("@/components/Landing/TopNav"),
    Banner: () => import("@/components/Landing/Banner"),
    BuyAndSell: () => import("@/components/Landing/BuyAndSell"),
    GreatDeals: () => import("@/components/Landing/GreatDeals"),
    TrustUs: () => import("@/components/Landing/TrustUs"),
    DownloadApp: () => import("@/components/Landing/DownloadApp"),
    media: () => import("@/components/Landing/media"),
    LandingFooter: () => import("@/components/Landing/LandingFooter"),
    AlajeIcons: () => import("@/components/AlajeIcons")
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
              this.saveToken({
                token
              });
            })
            .catch(function(err) {
              console.log("Unable to retrieve refreshed token ", err);
            });
        });
      }
    },

    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
.home-body {
  width: 100% !important;
}
</style>
