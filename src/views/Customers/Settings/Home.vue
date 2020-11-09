<template>
  <div>
    <div class="container-fluid mb-4">
      <div class="d-flex flex-row">
        <tabs tab-type="route" :tabs="tabs" />
        <header-card class="ml-auto" :wallet-amount="1000" showWallet :show-greetings="false" />
      </div>
    </div>

    <div class="container-fluid mb-4">
      <div class="d-none d-md-block d-lg-block">
        <div class="d-flex flex-row">
          <avatar size="lg-3" :user="{ name: 'Alaje' }" />
          <span class="d-flex flex-column">
            <p class="profile-title-name ml-3" style="font-size: 48px">Mosope Coker</p>
            <p class="ml-3 mt-n3 font-avenir ft-14 ">mosopecoker@gmail.com</p>
            <alaje-buttons class="ml-3 " text_color="purple" text="Edit Profile" />
          </span>
        </div>
      </div>
      <div class="d-block d-md-none d-lg-none">
        <div class="d-flex flex-row">
          <avatar size="lg-2" :user="{ name: 'Alaje' }" />
          <span class="d-flex flex-column">
            <p class="profile-title-name ml-3 mt-n3" style="font-size: 22px">Mosope Coker</p>
            <p class="ml-3 mt-n4 font-avenir ft-12 ">mosopecoker@gmail.com</p>
            <alaje-buttons class="ml-3" text_color="purple" text="Edit Profile" />
          </span>
        </div>
      </div>

      <div class="row mt-4">
        <alaje-inputs class="col-md-4 col-lg-4 col-12 " disable label="Firstname" placeholder="Mosope" />
        <alaje-inputs class="col-md-4 col-lg-4 col-12  " disable label="Lastname" placeholder="Coker" />
        <alaje-inputs class="col-md-4 col-lg-4 col-12 " disable label="Email Address" placeholder="MosopeCoker@gmail.com" />
        <alaje-inputs disable label="Phone Number" class="col-md-4 col-lg-4 col-12 mt-3 " :id="'phone_number'" type="phone" />
      </div>
      <div class="d-flex flex-row">
        <alaje-buttons text="Reset Password" text_color="purple" class="ml-auto m-2 col-md-2 col-lg-2 mt-3" />
        <alaje-buttons text="Deactivate Account" text_color="red" class=" m-2  col-md-3 col-lg-3 mt-3" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCard from "../../../components/general/headerCard";
import Tabs from "../../../components/general/tabs";
import Avatar from "../../../components/general/avatar";
import AlajeButtons from "../../../components/Form/AlajeButtons";
import AlajeInputs from "../../../components/Form/AlajeInputs";
export default {
  name: "Home",
  components: { AlajeInputs, AlajeButtons, Avatar, Tabs, HeaderCard },
  data() {
    return {
      tabs: [
        {
          name: "Profile",
          value: "home"
        },
        {
          name: "Notifications",
          value: "notification"
        }
      ],
      currentTab: "home"
    };
  }
};
</script>

<style scoped lang="scss">
.profile-title-name {
  font-family: fonts(Avenir);
  font-style: normal;
  font-weight: 800;
  line-height: 66px;
  /* identical to box height */
  color: #000000;
}
</style>
