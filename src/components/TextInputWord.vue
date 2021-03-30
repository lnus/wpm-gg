<template>
  <div :key="index" v-for="(char, index) in chars">
    <Char
      :char="char"
      :current="current"
      :index="index"
      :wordLength="chars.length"
      :userIn="userIn"
    />
  </div>
</template>

<script>
import Char from "./TextInputChar";

export default {
  name: "Word",
  props: {
    word: Object,
    correct: Boolean,
    current: Boolean,
    userIn: Array,
  },
  components: {
    Char,
  },
  data() {
    return {
      chars: [String],
    };
  },
  methods: {
    splitToChars() {
      this.chars = this.word.content.split("");
    },
  },
  created() {
    this.splitToChars();
  },
};
</script>

<style scoped>
.current {
  color: blue;
}
.correct {
  color: lime;
}
</style>
