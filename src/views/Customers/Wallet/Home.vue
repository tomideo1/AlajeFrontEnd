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
            <p class=" box-title ft-14">Wallet Balance:</p>
            <p class="mt-2  text-bold-pink " style="font-size: 48px;">N1000</p>
            <div class="pt-4 pb-4"></div>
            <div class="row ">
              <alaje-buttons class="m-2 ft-10 ml-auto" text_color="purple" text="Fund Wallet" />
              <alaje-buttons class=" m-2 ft-10 " text_color="purple" text="Withdraw" />
            </div>
          </div>
        </section>
        <section class="col-md-6 mt-3 mt-lg-0 mt-md-0 col-lg-6 col-12">
          <div class="box-cover p-4">
            <p class=" box-title ">Recent Activity</p>

            <section class="mt-5">
              <div class="timeline-item ">
                <div class="timeline-date" style="--circleColor:#b558f9;--rgb: rgba(181,88,249,0.2)"></div>
                <div class="timeline-content ">
                  <span class="d-flex flex-column">
                    <p class="mt-n2">Someone bought your <a class="text-bold-pink">Adidas Gift $50.00</a> Giftcard!</p>
                    <p class="text-grey-25 font-avenir ft-14 fw-500 mt-n2">Just Now</p>
                  </span>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-date" style="--circleColor:#46cc8d;--rgb: rgba(70,204,141,0.2)"></div>
                <div class="timeline-content">
                  <span class="d-flex flex-column">
                    <p class="mt-n2">You withdrew <a class="text-bold-pink">N5,000.00</a></p>
                    <p class="text-grey-25 font-avenir ft-14 fw-500 mt-n2">Just Now</p>
                  </span>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-date" style="--circleColor:#f4a136;--rgb: rgba(244,171,54,0.2)"></div>
                <div class="timeline-content">
                  <span class="d-flex flex-column">
                    <p class="mt-n2">You funded your wallet with <a class="text-bold-pink">N5000.00</a></p>
                    <p class="text-grey-25 font-avenir ft-14 fw-500 mt-n2">Just Now</p>
                  </span>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-date" style="--circleColor:#0087db;--rgb: rgba(0,135,219,0.2)"></div>
                <div class="timeline-content">
                  <span class="d-flex flex-column">
                    <p class="mt-n2">Someone bought your <a class="text-bold-pink">Apple Music $25.00</a> Giftcard!</p>
                    <p class="text-grey-25 font-avenir ft-14 fw-500 mt-n2">Just Now</p>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCard from "../../../components/general/headerCard";
import AlajeButtons from "../../../components/Form/AlajeButtons";
export default {
  name: "Home",
  components: {
    AlajeButtons,
    HeaderCard
  }
};
</script>

<style lang="scss" scoped>
/* apply a natural box layout model to all elements, but allowing components to change */

.timeline-item {
  display: flex;
  align-items: flex-start;

  > div {
    padding: 0px 20px;

    &:last-child {
      text-align: right;
      font-family: fonts(Avenir);
      padding-bottom: 55px !important;
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
      border-left: 2px solid #c4c4c4;
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
      border-left: 2px solid #c4c4c4;
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
</style>
