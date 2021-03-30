<template>
  <h1>Accuracy: {{ accuracy.toFixed(2) }}%</h1>
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
