<template>
  <transition name="fade">
    <div v-if="showEndscreen" class="endscreen__wrapper">
      <div class="endscreen__inner">
        <h1 class="endscreen__inner__title">Final scores:</h1>
        <span class="endscreen__inner__wpm info">{{ wpm.toFixed(2) }} WPM</span>
        <span class="endscreen__inner__accuracy info"
          >{{ accuracy.toFixed(2) }}% Accuracy
        </span>
        <button @click="closeEndscreen" class="endscreen__inner__close button">
          Close
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Endscreen",
  methods: {
    ...mapMutations(["setShowEndscreen"]),
    closeEndscreen() {
      this.setShowEndscreen(false);
    },
  },
  computed: mapState({
    showEndscreen: (state) => state.showEndscreen,
    wpm: (state) => state.wpm,
    accuracy: (state) => state.accuracy,
    timer: (state) => state.timer,
  }),
  watch: {
    timer() {
      if (this.timer <= 0) {
        this.setShowEndscreen(true);
      }
    },
  },
};
</script>

<style scoped>
.endscreen__wrapper {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.endscreen__inner {
  background-color: white;
  width: 25%;
  height: 25%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.endscreen__inner * {
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
