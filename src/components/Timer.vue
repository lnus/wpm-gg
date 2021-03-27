<template>
  <h1>{{ timer }}</h1>
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
