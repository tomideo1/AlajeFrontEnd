<template>
  <div>
    <div class="container-fluid mb-4">
      <div class="d-flex flex-row">
        <header-card class="ml-auto" :wallet-amount="1000" showWallet :show-greetings="false" />
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <section class="col-md-5  col-lg-5 col-12">
          <div class="box-cover p-4">
            <span class="d-flex flex-row">
              <p class=" box-title ft-14">Bitcoin Rate:</p>
              <p class=" box-title ft-14 ml-auto text-success">+0.025%</p>
            </span>
            <span class="d-flex flex-row">
              <p class="mt-2  text-bold-pink " style="font-size: 36px; word-break:break-word">N4,322,521.20</p>
              <small class="mt-4 ml-2">Per BTC</small>
            </span>

            <div class="d-none d-lg-block d-md-none">
              <span class="d-flex flex-row ">
                <alaje-inputs :showLabel="false" class="m-2" placeholder="4" iconHolder="btc" iconPosition="right" />

                <alaje-inputs :showLabel="false" class="m-2" disable placeholder="N1,588,356.80" />
              </span>
            </div>
            <div class="d-block d-lg-none d-md-block">
              <span class="d-flex flex-column ">
                <alaje-inputs :showLabel="false" class="m-2 col-12" placeholder="4" iconHolder="btc" iconPosition="right" />

                <alaje-inputs :showLabel="false" class="m-2 col-12" disable placeholder="N1,588,356.80" />
              </span>
            </div>

            <div class="pt-4 pb-4"></div>
            <div class="row ">
              <alaje-buttons class="m-2 ft-10 ml-auto" @click="$bvModal.show('pay-modal')" text_color="purple" text="Sell Bitcoin" />
            </div>
          </div>
        </section>
        <section class="col-md-6  col-lg-6 col-12">
          <section class="col-md-12 mt-3  float-right  mt-md-0 col-lg-12 col-12">
            <div class="box-cover p-4">
              <p class=" box-title text-dark-purple ft-14">How To Pay:</p>
              <p class=" ft-14 text-dark-purple font-avenir">1. Aliquet risus feugiat in ante</p>
              <p class=" ft-14 text-dark-purple font-avenir">2. Mi quis hendrerit dolor magna</p>
              <p class=" ft-14 text-dark-purple font-avenir">3. Uspendisse sed nisi lacus sed aliquet risus feugiat in ante</p>
              <p class=" ft-14 text-dark-purple font-avenir">4. Erat imperdiet sed euismod nisi</p>
              <p class=" ft-14 text-dark-purple font-avenir">5. Erat imperdiet sed euismod nisi condimentum vitae sapien mi quis</p>
            </div>
          </section>
          <section class="col-md-12 mt-3 mt-lg-3 float-right  mt-md-0 col-lg-12 col-12">
            <div class="box-cover p-4">
              <p class=" box-title ">Recent Activity</p>

              <section class="mt-5">
                <div class="timeline-item " @click="$bvModal.show('modal')">
                  <div class="timeline-date" style="--circleColor:#b558f9;--rgb: rgba(181,88,249,0.2)"></div>
                  <div class="timeline-content ">
                    <span class="d-flex flex-column">
                      <p class="mt-n2">You Just Sold <a class="text-bold-pink">2 BTC</a>!</p>
                      <p class="text-grey-25 font-avenir ft-14 fw-500 mt-n2">Just Now</p>
                    </span>
                  </div>
                </div>

                <div class="timeline-item" @click="$bvModal.show('modal')">
                  <div class="timeline-date" style="--circleColor:#46cc8d;--rgb: rgba(70,204,141,0.2)"></div>
                  <div class="timeline-content">
                    <span class="d-flex flex-column">
                      <p class="mt-n2">You Just Sold <a class="text-bold-pink">1 BTC</a>!</p>
                      <p class="text-grey-25 font-avenir ft-14 fw-500 mt-n2">1 Minute Ago</p>
                    </span>
                  </div>
                </div>

                <div class="timeline-item" @click="$bvModal.show('modal')">
                  <div class="timeline-date" style="--circleColor:#f4a136;--rgb: rgba(244,171,54,0.2)"></div>
                  <div class="timeline-content">
                    <span class="d-flex flex-column">
                      <p class="mt-n2">You Just Sold <a class="text-bold-pink">4 BTC</a>!</p>
                      <p class="text-grey-25 font-avenir ft-14 fw-500 mt-n2">Just Now</p>
                    </span>
                  </div>
                </div>

                <div class="timeline-item" @click="$bvModal.show('modal')">
                  <div class="timeline-date" style="--circleColor:#0087db;--rgb: rgba(0,135,219,0.2)"></div>
                  <div class="timeline-content">
                    <span class="d-flex flex-column">
                      <p class="mt-n2">You Just Sold <a class="text-bold-pink">10 BTC</a></p>
                      <p class="text-grey-25 font-avenir ft-14 fw-500 mt-n2">Just Now</p>
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </section>
      </div>
      <b-modal :id="`modal`" centered hide-footer hide-header class="p-3">
        <span class="d-flex flex-row">
          <p class="font-avenir fw-900 font-weight-bold text-bold-black ft-24 line-height-119">Tracking Details</p>
          <span class="ml-auto" @click="$bvModal.hide('modal')">
            <alaje-icons name="close" size="sm" />
          </span>
        </span>

        <ul class="step-progressbar pt-3 pb-4">
          <li class="step-progressbar__item step-progressbar__item--complete font-avenir fw-800 ft-12 line-heigh-119 text-bold-black">Bitcoin Order Placed</li>
          <li class="step-progressbar__item step-progressbar__item--active font-avenir fw-800 ft-12 line-heigh-119 text-bold-black">Bitcoin Oder Confirmed</li>
          <li class="step-progressbar__item font-avenir fw-800 ft-12 line-heigh-119 text-bold-black">Bitcoin Order Delivered</li>
        </ul>

        <div class="d-flex flex-row">
          <p class="font-avenir fw-800 ft-24 line-height-119 text-bold-black pt-3">1 BTC</p>
          <p class="font-avenir fw-800 ft-24 line-height-119 text-bold-pink pt-3 ml-auto">N50000</p>
        </div>
        <div class="d-flex flex-row">
          <span class="d-flex flex-column">
            <p class="font-avenir fw-500 ft-14 line-height-119 text-bold-black pt-3">Darnell Steward</p>

            <p class="font-avenir fw-500 ft-14 line-height-119 text-grey-25">7/11/20</p>
          </span>

          <p :class="`alaje-badge alaje-badge-success ml-auto ft-12   d-flex justify-content-center mt-4`" style="height:40px">Success</p>
        </div>
      </b-modal>

      <b-modal :id="`pay-modal`" centered hide-footer hide-header class="p-3">
        <span class="d-flex flex-row">
          <p class="font-avenir fw-900 font-weight-bold text-bold-black ft-24 line-height-119">Sell Bitcoin</p>
          <span class="ml-auto" @click="$bvModal.hide('pay-modal')">
            <alaje-icons name="close" size="sm" />
          </span>
        </span>

        <div class="p-4">
          <alaje-inputs class="m-4" label="Full Name" />
          <alaje-inputs class="m-4" label="Amount to Sell" />
          <alaje-buttons
            class="mx-auto"
            text_color="purple"
            text="Sell Bitcoin"
            @click="
              $bvModal.show('upload-modal');
              $bvModal.hide('pay-modal');
            "
          />
        </div>
      </b-modal>

      <b-modal id="upload-modal" centered ok-only hide-footer hide-header size="lg" modal-class="mt-5 pt-5 ml-lg-5">
        <uppy model-id="upload-modal" model-class="uppy-class" />
      </b-modal>
    </div>
  </div>
</template>

<script>
import HeaderCard from "../../../components/general/headerCard";
import AlajeButtons from "../../../components/Form/AlajeButtons";
import AlajeInputs from "../../../components/Form/AlajeInputs";
import AlajeIcons from "../../../components/general/AlajeIcons";
import Uppy from "../../../components/Form/uppy";
export default {
  name: "Home",
  components: {
    Uppy,
    AlajeIcons,
    AlajeButtons,
    HeaderCard,
    AlajeInputs
  }
};
</script>

<style lang="scss" scoped>
/* apply a natural box layout model to all elements, but allowing components to change */

.timeline-item {
  display: flex;
  align-items: flex-start;
  cursor: pointer;

  > div {
    padding: 0px 20px;

    &:last-child {
      text-align: right;
      font-family: fonts(Avenir);
      padding-bottom: 35px !important;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 119.6%;
      /* identical to box height, or 22px */

      color: #000000;
    }
  }

  &:nth-child(odd) {
    > div:first-child {
      text-align: left;
      position: relative;

      &::after {
        right: -11px;
      }
    }

    > div:last-child {
      text-align: left;
      border-left: 1px solid #c4c4c4;
    }
  }

  &:nth-child(even) {
    > div:first-child {
      text-align: left;

      position: relative;

      &::after {
        right: -11px;
      }
    }

    > div:last-child {
      text-align: left;
      border-left: 1px solid #c4c4c4;
    }

    .timeline-content > h2 {
      text-align: left !important;
    }

    .timeline-date > div {
      margin-right: 0px;
    }
  }

  > div:first-child::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--circleColor);
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 4px var(--rgb);
  }
}

@media (max-width: 767px) {
  .timeline-item {
    flex-direction: column;
    border-left: 2px solid #e0e0e0;

    > div {
      border-width: 0px !important;
      text-align: left !important;
      order: unset !important;

      &::after {
        left: 0% !important;
      }
    }

    &:nth-child(odd) .timeline-content > h2 {
      text-align: left !important;
    }

    &:nth-child(even) .timeline-content > h2 {
      text-align: left !important;
    }
  }
}

.listing {
  list-style: none;
}
</style>
