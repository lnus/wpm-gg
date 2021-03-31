<template>
  <div class="timer">
    <div class="timer__text">{{ timer }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Timer",
  watch: {
    timerState(value) {
      if (value) {
        setTimeout(() => {
          this.setTimer(this.timer - 1);
        }, 1000);
      }
    },

    timer: {
      handler(value) {
        if (value > 0 && this.timerState) {
          setTimeout(() => {
            this.setTimer(this.timer - 1);
          }, 1000);
        }
      },
    },
  },
  computed: mapState({
    timer: (state) => state.timer,
    timerState: (state) => state.timerState,
  }),
  methods: {
    ...mapMutations(["setTimer"]),
  },
};
</script>

<style scoped>
.timer {
  display: flex;
  width: 100%;
  justify-content: center;
}

.timer__text {
  color: var(--primary-text-color);
  font-size: 5rem;
}
</style>
