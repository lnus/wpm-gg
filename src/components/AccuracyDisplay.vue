<template>
  <div class="accuracy-display">
    <div class="accuracy-display__text">
      Accuracy: {{ accuracy.toFixed(2) }}%
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "AccuracyDisplay",
  methods: {
    ...mapMutations(["calculateAndSetAccuracy"]),
  },
  computed: mapState({
    timer: (state) => state.timer,
    accuracy: (state) => state.accuracy,
  }),
  watch: {
    // When timer updates run calculateAndSetAccuracy, from vuex
    timer() {
      this.calculateAndSetAccuracy();
    },
  },
};
</script>

<style scoped>
.accuracy-display {
  display: flex;
  justify-content: center;
}

.accuracy-display__text {
  color: var(--secondary-color);
  font-size: 2rem;
  text-transform: lowercase;
}
</style>
