<template>
  <h1>{{ wpm }}</h1>
</template>

<script>
export default {
  name: "WPMDisplay",
  data() {
    return {
      wpm: 0,
    };
  },
  methods: {
    calculateWpm() {
      let completed = this.$store.getters.getCompletedWords;
      let timer = this.$store.getters.getTimer;

      let completedCorrectly = completed.filter((word) => {
        if (word.correct) {
          return word;
        }
      });

      this.wpm = completedCorrectly / (60 - timer);
    },
  },
  computed: {},
  mounted() {
    console.log("hello");
    this.unsubscribe = this.$store.subscribe((mutation) => {
      if (
        mutation.type === "setTimer" ||
        mutation.type === "setCompletedWords"
      ) {
        console.log("hello");
      }
    });
  },
};
</script>
