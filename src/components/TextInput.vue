<template>
  <div class="input-container">
    <div @keydown="readKeyPress" tabindex="1">
      <div class="word-container">
        <Line
          :key="line"
          v-for="line in completedLines.slice(-completedLinesLen)"
          :line="line"
          :currentWord="currentWord"
        />
        <Line
          :key="line"
          v-for="line in incomingLines.slice(0, incomingLinesLen)"
          :line="line"
          :currentWord="currentWord"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Line from "@/components/TextInputLine";
import { mapState, mapMutations } from "vuex";

export default {
  name: "TextInput",
  components: {
    Line,
  },
  data() {
    return {
      currentWord: String,
      inputtedWords: 0,
      lineLimit: 10,
      incomingLinesLen: 3,
      completedLinesLen: 1,
    };
  },
  methods: {
    ...mapMutations([
      "setTimerState",
      "setCurrentUserInput",
      "setCompletedWords",
      "addIncomingWords",
      "updateIncomingLines",
      "updateCompletedLines",
      "setIncomingLineWordUserInput",
      "setLineComplete",
    ]),
    readKeyPress(e) {
      if (!this.timerState) {
        this.setTimerState(true);
      }
      // Space or Enter
      if (e.keyCode === 13 || e.keyCode === 32) {
        // pops the current word
        let completedWord = this.incomingWords.shift();

        // if word is matching, add correct tag. else correct = false
        let completedWordData;
        if (this.currentUserInput.join("") === this.currentWord.content) {
          completedWordData = {
            ...completedWord,
            userInput: this.currentUserInput,
          };
        } else {
          completedWordData = {
            ...completedWord,
            userInput: this.currentUserInput,
          };
        }

        // adds the new word & sets current word to the next word
        this.setCompletedWords([...this.completedWords, completedWordData]);
        this.currentWord = this.incomingWords[0];

        // Sets the userinput of the completed word
        this.setIncomingLineWordUserInput(this.inputtedWords);

        // resets user input
        this.setCurrentUserInput([]);

        // Increments inputtedwords for check
        this.inputtedWords++;

        // Updates line formatting in case inputtedWords > Rowlimit
        if (this.inputtedWords >= this.lineLimit) {
          this.incomingLinesLen = 2; // should only happen on first hit
          this.addIncomingWords(this.lineLimit);
          this.updateLines();
          this.inputtedWords = 0;
        }
      } else if (e.keyCode === 8) {
        // Backspace
        this.setCurrentUserInput(this.currentUserInput.slice(0, -1));
      } else if (e.keyCode >= 65 && e.keyCode <= 90) {
        // Character codes a-Z (works with shift :))
        this.setCurrentUserInput([...this.currentUserInput, e.key]);
      }
    },
    updateLines() {
      this.updateIncomingLines(this.lineLimit);
      this.updateCompletedLines(this.lineLimit);
    },
  },
  computed: mapState({
    incomingWords: (state) => state.incomingWords,
    completedWords: (state) => state.completedWords,
    timerState: (state) => state.timerState,
    currentUserInput: (state) => state.currentUserInput,
    incomingLines: (state) => state.incomingLines,
    completedLines: (state) => state.completedLines,
  }),
  mounted() {
    this.addIncomingWords(30);
    this.currentWord = this.incomingWords[0];
    this.updateLines();
  },
};
</script>

<style scoped>
.input-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* temporary */
}

.word-container {
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  display: flex;
  width: 1000px;
  height: 200px;
  background-color: whitesmoke;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 2px solid transparent;
  border-radius: 10px;
  transition: 0.2s;
}

.word-container:focus {
  outline: 0;
  border: 2px solid red;
}

.word {
  display: flex;
  font-size: 2rem;
  font-family: monospace;
  margin-right: 0.5rem;
  text-align: center;
}
</style>
