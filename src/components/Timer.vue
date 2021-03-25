<template>
  <h1>{{ timerCount }}</h1>
</template>

<script>
export default {
  name: "Timer",
  props: {
    time: Number,
  },
  data() {
    return {
      timerEnabled: false,
      timerCount: Number,
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
    this.timerCount = this.$store.getters.getTimer;
    this.timerEnabled = this.$store.getters.getTimerState; // not sure if needed
    this.unsubscribe = this.$store.subscribe((mutation) => {
      if (mutation.type === "setTimerState") {
        // TODO: update this to allow stopping :)
        this.timerEnabled = true;
      }
    });
  },
  beforeUnmount() {
    this.unsubscribe();
  },
};
</script>
