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
    currentWord: Object,
  },
  computed: mapState({
    currentUserInput: (state) => state.currentUserInput,
  }),
};
</script>

<style scoped>
.word {
  display: flex;
  font-size: 1.5rem;
  margin-right: 0.5rem;
  text-align: center;
  color: var(--accent-color);
  filter: drop-shadow(4px 2px 4px #000000);
}

.line {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 100%;
  justify-content: space-between;
}
</style>
