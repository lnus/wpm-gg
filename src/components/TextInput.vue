<template>
  <div class="input-container">
    <div @keydown="readKeyPress" tabindex="1">
      <div class="word-container">
        <div
          :class="`word completed ${word.correct ? 'correct' : 'incorrect'}`"
          :key="word.content"
          v-for="word in completedWords"
        >
          <Word :word="word" :current="false" />
        </div>
        <div class="word" :key="word.content" v-for="word in incomingWords">
          <Word
            :word="word"
            :current="currentWord === word"
            :userInput="currentUserInput"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Word from "@/components/TextInputWord";

export default {
  name: "TextInput",
  components: {
    Word,
  },
  data() {
    return {
      incomingWords: Array,
      completedWords: Array,
      currentWord: String,
      currentUserInput: Array,
      timerState: Boolean,
    };
  },
  methods: {
    readKeyPress(e) {
      if (!this.timerState) {
        this.$store.commit("setTimerState", true);
        this.timerState = true;
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
          };
        } else {
          completedWordData = {
            ...completedWord,
            correct: false,
          };
        }

        // resets user input
        this.currentUserInput = [];

        // adds the new word & sets current word to the next word
        this.completedWords.push(completedWordData);
        this.currentWord = this.incomingWords[0];
      } else if (e.keyCode === 8) {
        // Backspace
        this.currentUserInput.pop();
      } else if (e.keyCode >= 65 && e.keyCode <= 90) {
        // Character codes
        this.currentUserInput.push(e.key);
      }
      console.log(this.currentUserInput);
      console.log(this.currentUserInput.join(""));
    },
  },
  created() {
    // Sets base state for a bunch of stuff
    this.incomingWords = this.$store.getters.getIncomingWords;
    this.completedWords = this.$store.getters.getCompletedWords;
    this.timerState = this.$store.getters.getTimerState;
    this.currentUserInput = [];
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
