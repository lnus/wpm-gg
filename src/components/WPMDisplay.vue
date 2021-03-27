<template>
  <h1>WPM: {{ wpm }}</h1>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WPMDisplay",
  data() {
    return {
      wpm: 0,
    };
  },
  methods: {
    calculateWpm() {
      // Gets all the correct chars from completedWords
      let completedCorrectly = this.completedWords.map((word) => {
        if (word.correct) {
          return word.content.split("");
        }
      });

      // Concats all the chars into one long boi array
      let merged = [].concat.apply([], completedCorrectly);
      let wordsCount = merged.length / 5;

      // TODO: Change this to follow a maxTimer state, in case of user change
      let timeElapsed = 60 - this.timer;

      this.wpm = (wordsCount / timeElapsed) * 60;
    },
  },
  computed: mapState({
    completedWords: (state) => state.completedWords,
    timer: (state) => state.timer,
  }),
  watch: {
    // When timer updates, run this.calculateWpm()
    timer() {
      this.calculateWpm();
    },
  },
};
</script>
