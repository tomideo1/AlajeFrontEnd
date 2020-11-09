<template>
  <div>
    <b-navbar toggleable="lg" fixed="top" class="bg-dark-purple alaje-nav shadow-lg " style="height: 70px;">
      <span class="navbar-brand mb-0 ml-md-5 current-nav position-absolute font-avenir text-bold-white ">
        <span v-if="currentNav !== null">
          <alaje-icon :name="currentNav.toLowerCase()" size="lg" />
          <span class=" text-white font-avenir"> {{ currentNav.toUpperCase() }}</span>
        </span>
        <span v-else>
          <alaje-icon :name="getCurrentRoute.toLowerCase()" size="lg" />
          <span class=" text-white font-avenir"> {{ getCurrentRoute.toUpperCase() }}</span>
        </span>
      </span>
      <ul class="navbar-nav ml-lg-auto ml-auto ml-md-auto mt-lg-1 mt-md-1   ">
        <li class="nav-item pr-lg-3 pr-md-3  d-none d-lg-block d-md-none ">
          <span class="m-1 w-100">
            <p style="margin-top: -18px!important;" class="text-white position-absolute p-2  noty  text-center ">You’re almost there! Click here to finish setting up your account</p>
          </span>
        </li>
      </ul>

      <ul class="navbar-nav ml-lg-auto ml-auto ml-md-auto mt-lg-1 mt-md-1   ">
        <li class="nav-item pr-lg-3 pr-md-3   d-none d-lg-block d-md-none ">
          <alaje-icon @click="$router.push({ name: 'login' })" name="bell" size="sm" />
        </li>
        <li class="nav-item mt-n1 pr-md-3  pl-lg-4 pl-md-3 d-none d-lg-block d-md-none ">
          <div class="User-area">
            <div class="User-avtar" @click="dropDownShow = !dropDownShow">
              <avatar size="md" class="avatar" :user="{ name: 'ALAJE' }" />
            </div>
            <ul class="User-Dropdown U-open" v-show="dropDownShow">
              <div class="d-flex flex-row m-2">
                <avatar size="lg" class="avatar" :user="{ name: 'ALAJE' }" />
                <p class=" ft-16 m-3 text-bold-black text-uppercase">Ayotomide</p>
              </div>
              <li><alaje-buttons text_color="purple" text="Profile" class="m-1 mb-4 p-0 ft-12 w-100  " /></li>
              <li><alaje-buttons text_color="purple" text="Logout" class="m-1 mb-4 ft-12 p-0  w-100 " /></li>
            </ul>
          </div>
        </li>
        <li class="nav-item mt-n1  pl-lg-4 pl-md-3 d-block d-lg-none d-md-block ">
          <b-button @click="toggleSidebar" style="background: transparent!important;">
            <alaje-icon name="harmburgerlight" size="md" />
          </b-button>
        </li>
      </ul>
      <!--      <span class="left-angle   d-lg-none d-md-none d-b">-->
      <!--        <img src="@/assets/subsctract-left.svg" />-->
      <!--      </span>-->
      <!--      <span class="right-angle  d-block d-lg-none d-md-none">-->
      <!--        <img src="@/assets/subsctract-left.svg" />-->
      <!--      </span>-->
    </b-navbar>
  </div>
</template>

<script>
import General from "@/mixins/general";
import AlajeButtons from "../../Form/AlajeButtons";
export default {
  mixins: [General],
  name: "MainNavBar",
  data() {
    return {
      toggled: false,
      currentNav: null,
      dropDownShow: false
    };
  },
  components: {
    AlajeButtons,
    AlajeIcon: () => import("@/components/general/AlajeIcons"),
    avatar: () => import("@/components/general/avatar")
  },
  methods: {
    toggleSidebar() {
      this.toggled = !this.toggled;
      this.$Bus.$emit("toggled", {
        toggled: this.toggled
      });
    }
  },
  mounted() {
    this.$Bus.$on("current", res => {
      this.currentNav = res.title;
    });
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 280px) and (max-width: 1023px) {
  .alaje-nav {
    z-index: 100000 !important;
  }
}

.current-nav {
  position: relative;
  left: 15%;
  /*margin-top: 22%!important;*/
}

.left-angle {
  position: absolute;
  /*margin-top: 20%;*/
  transform: rotate(270deg);
}

/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

/* For desktop: */
.left-angle {
  /*margin-top: 20%;*/
  margin-top: 33.5%;
  /*left: 50%;*/
  left: -2%;
}

.right-angle {
  /*margin-top: 20%;*/
  margin-top: 33.5%;
  display: block;
  /*left: 50%;*/
  position: absolute;
  /*margin-top: 20%;*/
  /*left: 50%;*/
  right: -2%;
  transform: rotate(0deg);
}

@media only screen and (width: 411px) {
  .left-angle {
    /*margin-top: 20%;*/
    margin-top: 21.2%;
    /*left: 50%;*/
  }

  .right-angle {
    /*margin-top: 20%;*/
    margin-top: 21.2%;
    /*left: 50%;*/
    position: absolute;
    /*margin-top: 20%;*/
    /*left: 50%;*/
    transform: rotate(0deg);
  }
}

@media only screen and (width: 320px) {
  .left-angle {
    /*margin-top: 20%;*/
    margin-top: 27.5%;
    /*left: 50%;*/
  }

  .right-angle {
    /*margin-top: 20%;*/
    margin-top: 27.5%;
    /*left: 50%;*/
    position: absolute;
    /*margin-top: 20%;*/
    /*left: 50%;*/
    transform: rotate(0deg);
  }
}

@media only screen and (width: 360px) {
  .left-angle {
    /*margin-top: 20%;*/
    margin-top: 27.5%;
    /*left: 50%;*/
  }

  .right-angle {
    /*margin-top: 20%;*/
    margin-top: 27.5%;
    /*left: 50%;*/
    position: absolute;
    /*margin-top: 20%;*/
    /*left: 50%;*/
    transform: rotate(0deg);
  }
}

@media only screen and (width: 375px) {
  .left-angle {
    /*margin-top: 20%;*/
    margin-top: 23.2%;
    /*left: 50%;*/
  }

  .right-angle {
    /*margin-top: 20%;*/
    margin-top: 23.2%;
    /*left: 50%;*/
    position: absolute;
    /*margin-top: 20%;*/
    /*left: 50%;*/
    transform: rotate(0deg);
  }
}

@media only screen and (width: 414px) {
  .left-angle {
    /*margin-top: 20%;*/
    margin-top: 23.8%;
    /*left: 50%;*/
  }

  .right-angle {
    /*margin-top: 20%;*/
    margin-top: 23.8%;
    /*left: 50%;*/
    position: absolute;
    /*margin-top: 20%;*/
    /*left: 50%;*/
    transform: rotate(0deg);
  }
}

@media only screen and (width: 540px) {
  .left-angle {
    /*margin-top: 20%;*/
    margin-top: 15.5%;
    /*left: 50%;*/
  }

  .right-angle {
    /*margin-top: 20%;*/
    margin-top: 15.5%;
    /*left: 50%;*/
    position: absolute;
    /*margin-top: 20%;*/
    /*left: 50%;*/
    transform: rotate(0deg);
  }
}

@media only screen and (width: 280px) {
  .left-angle {
    /*margin-top: 20%;*/
    margin-top: 29.5%;
    /*left: 50%;*/
  }

  .right-angle {
    /*margin-top: 20%;*/
    margin-top: 29.5%;
    /*left: 50%;*/
    position: absolute;
    /*margin-top: 20%;*/
    /*left: 50%;*/
    transform: rotate(0deg);
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1024px) {
  .current-nav {
    position: relative;
    left: 25%;
    /*margin-top: 22%!important;*/
  }
}
.noty {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50px;
}

.User-area {
  width: 45px;
  height: 45px;
  position: relative;
  cursor: pointer;
  > .User-avtar {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
}

.User-Dropdown {
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    margin-left: -0.5em;
    right: 0px;
    box-sizing: border-box;
    border: 7px solid black;
    border-color: transparent transparent #ffffff #ffffff;
    transform-origin: 0 0;
    transform: rotate(135deg);
    box-shadow: -3px 3px 3px -3px rgba(214, 214, 214, 0.78);
  }
  display: none;
  position: absolute;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0px 0px 8px rgba(214, 214, 214, 0.78);
  list-style: none;
  padding: 0 20px;
  width: 300px;
  margin: 0;
  top: 70px;
  right: -9%;
  &.U-open {
    display: block;
  }
  > li {
    padding: 0px;
    line-height: 47px;
    border-bottom: 1px solid rgba(215, 215, 215, 0.17);
    &:last-child {
      border-bottom: 0px;
    }
    > a {
      /*font-size: 13px;*/
      /*padding: 15px 25px 16px 10px;*/
      text-decoration: none;
      color: #1787e0;
      transition: all 0.2s ease-out;
    }
  }
  span {
    background: #16d67a;
    padding: 3px 10px;
    color: #fff;
    border-radius: 30px;
    font-size: 13px;
  }
  > li {
    &:before {
      content: "";
      width: 0px;
      height: 40px;
      position: absolute;
      background: #2196f3;
      margin-top: 4px;
      border-radius: 0 1px 1px 0;
      left: 0px;
      transition: all 0.2s ease;
    }
  }
}
</style>
