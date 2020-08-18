<template>
  <div class="track-container mb-5">
    <span class="range-value min">{{ minValues.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} </span>
    <span class="range-value max">{{ maxValues.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</span>
    <div class="track mt-5" ref="_vpcTrack"></div>
    <div class="track-highlight mt-5 " ref="trackHighlight"></div>
    <button class="track-btn track1 mt-5" ref="track1"></button>
    <button class="track-btn track2 mt-5" ref="track2"></button>
  </div>
</template>

<script>
export default {
  name: "AlajeInputRange",
  props: ["min", "max", "minValue", "maxValue", "step"],
  data: function() {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      minValues: this.minValue,
      // eslint-disable-next-line vue/no-dupe-keys
      maxValues: this.maxValue,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null
      }
    };
  },

  methods: {
    moveTrack(track, ev) {
      let percentInPx = this.getPercentInPx();

      let trackX = Math.round(this.$refs._vpcTrack.getBoundingClientRect().left);
      let clientX = ev.clientX;
      let moveDiff = clientX - trackX;

      let moveInPct = moveDiff / percentInPx;
      // console.log(moveInPct)

      if (moveInPct < 1 || moveInPct > 100) return;
      let value = Math.round(moveInPct / this.percentPerStep) * this.step + this.min;
      if (track === "track1") {
        if (value >= this.maxValues - this.step) return;
        this.minValues = value;
      }

      if (track === "track2") {
        if (value <= this.minValues + this.step) return;
        this.maxValues = value;
      }

      this.$refs[track].style.left = moveInPct + "%";
      this.setTrackHightlight();
    },
    mousedown(ev, track) {
      if (this.isDragging) return;
      this.isDragging = true;
      this.pos.curTrack = track;
    },

    touchstart(ev, track) {
      this.mousedown(ev, track);
    },

    // eslint-disable-next-line no-unused-vars
    mouseup(ev, track) {
      if (!this.isDragging) return;
      this.isDragging = false;
    },

    touchend(ev, track) {
      this.mouseup(ev, track);
    },

    mousemove(ev, track) {
      if (!this.isDragging) return;
      this.moveTrack(track, ev);
    },

    touchmove(ev, track) {
      this.mousemove(ev.changedTouches[0], track);
    },

    valueToPercent(value) {
      return ((value - this.min) / this.step) * this.percentPerStep;
    },

    setTrackHightlight() {
      this.$refs.trackHighlight.style.left = this.valueToPercent(this.minValues) + "%";
      this.$refs.trackHighlight.style.width = this.valueToPercent(this.maxValues) - this.valueToPercent(this.minValues) + "%";
    },

    getPercentInPx() {
      let trackWidth = this.$refs._vpcTrack.offsetWidth;
      let oneStepInPx = trackWidth / this.totalSteps;
      // 1 percent in px
      let percentInPx = oneStepInPx / this.percentPerStep;

      return percentInPx;
    },

    setClickMove(ev) {
      let track1Left = this.$refs.track1.getBoundingClientRect().left;
      let track2Left = this.$refs.track2.getBoundingClientRect().left;
      // console.log('track1Left', track1Left)
      if (ev.clientX < track1Left) {
        this.moveTrack("track1", ev);
      } else if (ev.clientX - track1Left < track2Left - ev.clientX) {
        this.moveTrack("track1", ev);
      } else {
        this.moveTrack("track2", ev);
      }
    }
  },
  mounted() {
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step;

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps;
    // console.log('percentPerStep', this.percentPerStep)

    // set track1 initilal
    document.querySelector(".track1").style.left = this.valueToPercent(this.minValues) + "%";
    // track2 initial position
    document.querySelector(".track2").style.left = this.valueToPercent(this.maxValues) + "%";
    // set initila track highlight
    this.setTrackHightlight();

    var self = this;

    ["mouseup", "mousemove"].forEach(type => {
      document.body.addEventListener(type, ev => {
        // ev.preventDefault();
        if (self.isDragging && self.pos.curTrack) {
          self[type](ev, self.pos.curTrack);
        }
      });
    });

    ["mousedown", "mouseup", "mousemove", "touchstart", "touchmove", "touchend"].forEach(type => {
      document.querySelector(".track1").addEventListener(type, ev => {
        ev.stopPropagation();
        self[type](ev, "track1");
      });

      document.querySelector(".track2").addEventListener(type, ev => {
        ev.stopPropagation();
        self[type](ev, "track2");
      });
    });

    // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    document.querySelector(".track").addEventListener("click", function(ev) {
      ev.stopPropagation();
      self.setClickMove(ev);
    });

    document.querySelector(".track-highlight").addEventListener("click", function(ev) {
      ev.stopPropagation();
      self.setClickMove(ev);
    });
  }
};
</script>

<style scoped lang="scss">
.range-value {
  position: absolute;
  top: -3rem;
  display: flex;
  flex-direction: row;
  padding: 5px 10px;

  /* White */

  background: #ffffff;

  color: #932cff;
  /* 25% Grey */

  border: 1px solid #e6e7ef;
  box-sizing: border-box;
  border-radius: 3px;
}
.range-value::before {
  content: url("~@/assets/tiny-dot.svg");
  /*display: inline-block;*/

  /*background: linear-gradient(101.54deg, #B558F9 0%, #932CFF 100%);*/

  /* position the dot underneath the character */
  position: absolute;
  bottom: -1em;
  left: 0;

  /* center the dot horizontally */
  text-align: center;
  width: 100%;
}

/*.pink-dot{*/
/*    background: linear-gradient(101.54deg, #B558F9 0%, #932CFF 100%);*/
/*}*/
.range-value.min {
  left: 20px;
  margin-top: 15px;
}

.range-value.max {
  right: 20px;
  margin-top: 15px;
}
.track-container {
  width: 100%;
  position: relative;
  cursor: pointer;
  height: 0.8rem;
}

.track,
.track-highlight {
  display: block;
  position: absolute;
  width: 100%;
  height: 0.5rem;
}

.track {
  background: rgba(154, 159, 191, 0.15);
  box-shadow: inset 0px 1px 1px rgba(154, 159, 191, 0.5);
  border-radius: 10px;
}

.track-highlight {
  background: linear-gradient(90.11deg, #fcd001 0%, #f4a136 105.47%);
  border: 1px solid rgba(154, 159, 191, 0.25);
  z-index: 2;
}

.track-btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  display: block;
  position: absolute;
  z-index: 2;
  width: 1.5rem;
  height: 1.5rem;
  top: calc(-50% - 0.25rem);
  margin-left: -1rem;
  border: none;
  /*background-color: black;*/
  -ms-touch-action: pan-x;
  touch-action: pan-x;
  background: linear-gradient(180deg, #eeeff4 0%, #ffffff 100%);
  box-shadow: 0px 0px 2px rgba(154, 159, 191, 0.5);
  transform: matrix(1, 0, 0, -1, 0, 0);
  border-radius: 50%;
  transition: box-shadow 0.3s ease-out, background-color 0.3s ease, -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, background-color 0.3s ease;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, background-color 0.3s ease, -webkit-transform 0.3s ease-out;
}
</style>
