<template>
  <h1>{{ test }}</h1>
</template>

<script>
export default {
  name: "Timer",
  props: {
    time: Number,
  },
  data() {
    return {
      timerEnabled: true,
      timerCount: 30,
      test: String,
    };
  },

  watch: {
    timerEnabled(value) {
      if (value) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
    },

    timerCount: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },

  methods: {
    play() {
      this.timerEnabled = true;
    },

    pause() {
      this.timerEnabled = false;
    },
  },
  mounted() {
    this.test = this.$store.getters.getIncomingWords;
  },
};
</script>
