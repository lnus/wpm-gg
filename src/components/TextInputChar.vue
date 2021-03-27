<template>
  <div
    :class="
      correct ? 'corr' : incorrect ? 'incorr' : showCursor ? 'cursor' : ''
    "
  >
    {{ char }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Char",
  props: {
    char: String,
    current: Boolean,
    index: Number,
    wordLength: Number,
  },
  data() {
    return {
      complete: false,
      correct: false,
      incorrect: false,
      showCursor: false,
    };
  },
  methods: {
    compareUserInput() {
      // Only run on current word, otherwise will be set by other props
      if (this.current) {
        let thisChar = this.currentUserInput[this.index];
        if (thisChar) {
          if (thisChar === this.char) {
            this.incorrect = false;
            this.correct = true;
          } else {
            this.incorrect = true;
            this.correct = false;
          }
        } else {
          this.incorrect = false;
          this.correct = false;
        }
      }
    },
    displayCursor() {
      if (this.currentUserInput.length >= this.index && this.current) {
        this.showCursor = true;
      } else {
        this.showCursor = false;
      }
    },
  },
  watch: {
    // This might be mad slow
    currentUserInput() {
      this.compareUserInput();
      this.displayCursor();
    },
    current() {
      this.displayCursor();
    },
  },
  computed: mapState({
    currentUserInput: (state) => state.currentUserInput,
  }),
  created() {
    this.displayCursor();
  },
};
</script>

<style scoped>
.corr {
  color: white;
}

.incorr {
  color: orange;
  text-decoration: line-through;
}

.cursor {
  box-shadow: -1px 0px 0px 0px white;
}
</style>
