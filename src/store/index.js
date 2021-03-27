import { createStore } from "vuex";

export default createStore({
  state: {
    incomingWords: [],
    completedWords: [],
    currentUserInput: [],
    timer: 60,
    timerState: false,
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
    setTimerState(state, payload) {
      state.timerState = payload;
    },
    setCurrentUserInput(state, payload) {
      state.currentUserInput = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getCompletedWords: (state) => state.completedWords,
    getIncomingWords: (state) => state.incomingWords,
    getTimer: (state) => state.timer,
    getTimerState: (state) => state.timerState,
    getUserInput: (state) => state.currentUserInput,
  },
});
