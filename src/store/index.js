import { createStore } from "vuex";

export default createStore({
  state: {
    incomingWords: [],
    completedWords: [],
    timer: 60,
    demo: "Test",
  },
  mutations: {
    setCompletedWords(state, payload) {
      state.completedWords = payload;
    },
    setIncomingWords(state, payload) {
      state.incomingWords = payload;
    },
    setTimer(state, payload) {
      state.timer = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getCompletedWords: (state) => state.completedWords,
    getIncomingWords: (state) => state.incomingWords,
    getTimer: (state) => state.timer,
  },
});
