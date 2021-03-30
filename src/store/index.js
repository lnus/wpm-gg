import { createStore } from "vuex";
import randomWords from "random-words";

export default createStore({
  state: {
    incomingWords: [],
    completedWords: [],
    currentUserInput: [],
    incomingLines: [],
    completedLines: [],
    currentTarget: String,
    timer: 60,
    maxTimer: 60,
    timerState: false,
    wpm: 0,
    accuracy: 0,
  },
  mutations: {
    setCompletedWords(state, payload) {
      state.completedWords = payload;
    },
    setIncomingWords(state, payload) {
      state.incomingWords = payload;
    },
    addIncomingWords(state, n) {
      // n = number of words to add
      let lastIndexId = 0;
      if (state.incomingWords[0]) {
        lastIndexId =
          state.incomingWords[state.incomingWords.length - 1].id + 1;
      }

      // Creates a map based on n amount of randomWords
      const newWordsMap = randomWords(n).map((word, index) => {
        return {
          content: word,
          id: lastIndexId + index,
        };
      });

      // Concats that map into the current sate
      state.incomingWords = state.incomingWords.concat(newWordsMap);
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
    updateIncomingLines(state, size) {
      // Size = length of the lines
      // Reset the lines before parse
      state.incomingLines = [];

      // Adds the incoming lines
      for (let i = 0; i < state.incomingWords.length; i += size) {
        state.incomingLines.push({
          completed: false,
          words: state.incomingWords.slice(i, i + size),
        });
      }
    },
    updateCompletedLines(state, size) {
      // Size = length of the lines
      // Reset the lines before parse
      state.completedLines = [];

      // Adds the completed lines
      for (let i = 0; i < state.completedWords.length; i += size) {
        state.completedLines.push({
          completed: true,
          words: state.completedWords.slice(i, i + size),
        });
      }
    },
    setIncomingLineWordUserInput(state, index) {
      state.incomingLines[0].words[index].userInput = state.currentUserInput;
    },
    calculateAndSetWpm(state) {
      // Gets all the correct chars from completedWords
      let correctChars = state.completedWords.map((word) => {
        // Checks the correct amount of chars based on input
        return word.content.split("").filter((char, index) => {
          if (char === word.userInput[index]) return char;
        });
      });

      // Concats all the chars into one long boi array
      let merged = [].concat.apply([], correctChars);
      let wordsCount = merged.length / 5;
      let timeElapsed = state.maxTimer - state.timer;

      state.wpm = (wordsCount / timeElapsed) * 60;
    },
    calculateAndSetAccuracy(state) {
      // Gets all the correct chars from completedWords
      let correctChars = state.completedWords.map((word) => {
        // Checks the correct amount of chars based on input
        return word.content.split("").filter((char, index) => {
          if (char === word.userInput[index]) return char;
        });
      });

      // Gets all the chars in total from completedWords
      let allChars = state.completedWords.map((word) => {
        return word.content.split("");
      });

      // Merges them for compare
      let correctCharsMerged = [].concat.apply([], correctChars);
      let allCharsMerged = [].concat.apply([], allChars);

      state.accuracy =
        (correctCharsMerged.length / allCharsMerged.length) * 100;
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
    getCurrentTarget: (state) => state.currentTarget,
    getIncomingLines: (state) => state.incomingLines,
    getCompletedLines: (state) => state.completedLines,
  },
});
