<template>
  <div class="home-body">
    <section>
      <ANav />
      <banner />
    </section>
    <div class="p-5"></div>
    <section>
      <div class="container ">
        <div class="row">
          <div class="col-md-6 ml-lg-5 ml-md-5">
            <h2 class="line-height-50  ft-36 font-roboto  text-bold-black">Buy And Sell Giftcards</h2>
            <p class="text-align-justify text-regular ft-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et, placerat vitae aliquam sit amet interdum platea mauris. Feugiat consequat aliquam quam amet, auctor. Nisi, elementum, a,
              ornare rutrum amet, est eget. Pulvinar vel, cursus lectus egestas amet, sit cursus.
            </p>
            <a-button text="Get Started " class="btn mt-lg-3 mt-md-3" text_color="blue" size="md " />
          </div>
          <div class="col-md-5 mr-lg-4 mr-md-4 ">
            <img src="@/assets/dashboardlayout.svg" />
          </div>
        </div>
      </div>
    </section>
    <div class="p-5 mt-5"></div>
    <section>
      <div class="row pt-5 mt-5">
        <div class="col-md-6 ">
          <img src="@/assets/cards.svg" />
        </div>
        <div class="col-md-5 mt-lg-5 mt-md-5 pt-lg-5 pt-md-5 ">
          <div class=" mt-lg-5 mt-md-5 pt-lg-5 pt-md-5 "></div>
          <div class=" mt-lg-5 mt-md-5 pt-lg-5 pt-md-5 "></div>
          <h2 class="line-height-50 mr-lg-5 ml-md-5   text-align-right  ft-36 font-roboto  text-bold-black ">Great Deals At Popular Stores</h2>
          <p class="text-align-justify text-regular ft-14 w-75 ml-lg-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et, placerat vitae aliquam sit amet interdum platea mauris. Feugiat consequat aliquam quam amet, auctor. Nisi, elementum, a,
            ornare rutrum amet, est eget. Pulvinar vel, cursus lectus egestas amet, sit cursus.
          </p>
          <a-button text="Get Started " class="btn mt-lg-3 mt-md-3" text_color="yellow" size="md " />
        </div>
      </div>
    </section>
    <section>
      <div class="row">
        <div class="container">
          <div class=" col-md-6 ml-lg-5 ml-md-5">
            <h2 class="line-height-50  ft-36 font-roboto  text-bold-black">You Can Trust Us</h2>
            <p class="text-align-justify text-regular ft-14 w-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et, placerat vitae aliquam sit amet interdum platea mauris. Feugiat consequat aliquam quam amet, auctor. Nisi, elementum, a,
              ornare rutrum amet, est eget. Pulvinar vel, cursus lectus egestas amet, sit cursus.
            </p>
            <div class="flex flex-column">
              <span v-for="(quality, index) in qualities" :key="index">
                <div class="flex flex-row">
                  <alaje-icons name="approved" size="sm" />
                  <span class="ml-5">{{ quality.text }}</span>
                </div>
                <div class="pt-4"></div>
              </span>
            </div>
            <a-button text="Get Started " class="btn mt-lg-3 mt-md-3" text_color="green" size="md " />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 ml-lg-auto position-relative" style="left: 5%; margin-top: -20%">
          <img src="@/assets/bubbles.svg" />
        </div>
      </div>
    </section>
    <section>
      <div class="d-flex flex-row">
        <div class=" mr-lg-auto ">
          <img src="@/assets/phoneholder.svg" />
        </div>
        <div>
          <span class=" download-box d-flex flex-column ">
            <h2 class="line-height-50 mx-auto ft-36 font-roboto  mt-5  unskew  download-box-center-text    text-bold-white">Download Our Mobile App</h2>
            <p class="text-white font-roboto ft-14  unskew w-50 text-align-justify mx-auto mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et, placerat vitae aliquam sit amet interdum platea mauris. Feugiat consequat aliqua.
            </p>
            <div class="d-flex mx-auto mt-4 flex-row unskew">
              <img class="m-3" src="@/assets/Playstore.svg" />
              <img class="m-3" src="@/assets/Appstore.svg" />
            </div>
          </span>
        </div>
      </div>
    </section>
    <section></section>
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
      ]
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components

    ANav: () => import("@/components/Landing/TopNav"),
    Banner: () => import("@/components/Landing/Banner"),
    AButton: () => import("@/components/Form/AlajeButtons"),
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
.download-box {
  background: #211048;
  height: 50% !important;
  width: 75% !important;
  position: absolute;
  border-radius: 20px;
  left: 35%;
  z-index: -1;
  display: table;

  margin-top: 10%;
  /*background-image: url("~@/assets/rectangle.svg");*/
  /*background-size: cover;*/
  transform: skew(15deg);
  .unskew {
    transform: skew(-15deg);
  }

  &-center-text {
    display: table-cell;
    vertical-align: middle; //centers vertically
    margin: 0px auto; //centers horizontally
  }
}
</style>
