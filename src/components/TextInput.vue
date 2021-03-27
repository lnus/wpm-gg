<template>
  <div class="input-container">
    <div @keydown="readKeyPress" tabindex="1">
      <div class="word-container">
        <div class="word" :key="word.content" v-for="word in completedWords">
          <Word :userIn="word.userInput" :word="word" :current="false" />
        </div>
        <div class="word" :key="word.content" v-for="word in incomingWords">
          <Word :word="word" :current="currentWord === word" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Word from "@/components/TextInputWord";
import { mapState, mapMutations } from "vuex";

export default {
  name: "TextInput",
  components: {
    Word,
  },
  data() {
    return {
      currentWord: String,
    };
  },
  methods: {
    ...mapMutations([
      "setTimerState",
      "setCurrentUserInput",
      "setCompletedWords",
    ]),
    // TODO: Refactor using helpers
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
            correct: true,
            userInput: this.currentUserInput,
          };
        } else {
          completedWordData = {
            ...completedWord,
            correct: false,
            userInput: this.currentUserInput,
          };
        }

        // resets user input
        this.setCurrentUserInput([]);

        // adds the new word & sets current word to the next word
        this.setCompletedWords([...this.completedWords, completedWordData]);
        this.currentWord = this.incomingWords[0];
      } else if (e.keyCode === 8) {
        // Backspace
        this.setCurrentUserInput(this.currentUserInput.slice(0, -1));
      } else if (e.keyCode >= 65 && e.keyCode <= 90) {
        // Character codes a-Z (works with shift :))
        this.setCurrentUserInput([...this.currentUserInput, e.key]);
      }
    },
  },
  computed: mapState({
    incomingWords: (state) => state.incomingWords,
    completedWords: (state) => state.completedWords,
    timerState: (state) => state.timerState,
    currentUserInput: (state) => state.currentUserInput,
  }),
  mounted() {
    this.currentWord = this.incomingWords[0];
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
  background-color: lightslategray;
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
  line-height: 18px;
  max-height: 54px;
  display: flex;
  font-size: 2rem;
  font-family: monospace;
  margin-right: 0.5rem;
  text-align: center;
}

.correct {
  color: lime;
}

.incorrect {
  color: red;
  text-decoration: line-through;
}
</style>
