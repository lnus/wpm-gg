<template>
  <transition name="fade">
    <div v-if="showEndscreen" class="endscreen__wrapper">
      <div class="endscreen__inner">
        <h1 class="endscreen__inner__title">final scores</h1>
        <div class="endscreen__inner__wpm info">{{ wpm.toFixed(2) }} WPM</div>
        <div class="endscreen__inner__accuracy info">
          {{ accuracy.toFixed(2) }}% Accuracy
        </div>
        <div class="endscreen__button-grouping">
          <button
            @click="closeEndscreen"
            class="endscreen__inner__close button"
          >
            Close
          </button>
        </div>
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
  background-color: rgba(0, 0, 0, 0.9);
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
  background-color: var(--secondary-color);
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 20px;
  text-transform: lowercase;
  font-size: 1.1rem;
}

.endscreen__inner * {
  padding: 1rem;
  color: var(--secondary-text-color);
}

.endscreen__button-grouping {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.button {
  margin: 0 20px 0 20px;
  background-color: transparent;
  text-transform: uppercase;
  outline: none;
  border: 4px solid var(--accent-color);
  border-radius: 1rem;
  transition: 0.2s;
  cursor: pointer;
}

.button:hover {
  background-color: var(--accent-color);
}

/* Animation stuff */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
