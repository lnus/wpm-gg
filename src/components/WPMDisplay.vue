<template>
  <div class="wpm-display">
    <div class="wpm-display__text">WPM: {{ wpm.toFixed(2) }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "WPMDisplay",
  methods: {
    ...mapMutations(["calculateAndSetWpm"]),
  },
  computed: mapState({
    timer: (state) => state.timer,
    wpm: (state) => state.wpm,
  }),
  watch: {
    // When timer updates, run this.calculateWpm()
    timer() {
      this.calculateAndSetWpm();
    },
  },
};
</script>

<style scoped>
.wpm-display {
  display: flex;
  justify-content: center;
}

.wpm-display__text {
  color: var(--secondary-color);
  font-size: 2rem;
  text-transform: lowercase;
}
</style>
