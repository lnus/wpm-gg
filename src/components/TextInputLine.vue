<template>
  <div class="line">
    <div class="word" :key="word.content" v-for="word in line.words">
      <Word
        :word="word"
        :current="currentWord === word"
        :userIn="word.userInput"
      />
    </div>
  </div>
</template>

<script>
import Word from "@/components/TextInputWord";
import { mapState } from "vuex";

export default {
  name: "Line",
  components: {
    Word,
  },
  props: {
    line: Object,
    currentWord: String,
  },
  computed: mapState({
    currentUserInput: (state) => state.currentUserInput,
  }),
};
</script>

<style scoped>
.word {
  display: flex;
  font-size: 2rem;
  font-family: monospace;
  margin-right: 0.5rem;
  text-align: center;
}

.line {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 100%;
  justify-content: space-between;
}
</style>
