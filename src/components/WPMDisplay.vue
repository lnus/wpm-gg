<template>
  <h1>WPM: {{ wpm.toFixed(2) }}</h1>
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
