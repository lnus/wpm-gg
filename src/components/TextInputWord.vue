<template>
  <div
    :key="char"
    v-for="char in chars"
    :class="`char${correct ? '' : ''}${current ? ' current' : ''}`"
  >
    {{ char }}
  </div>
</template>

<script>
export default {
  name: "Word",
  props: {
    word: Object,
    correct: Boolean,
    current: Boolean,
    userInput: Array,
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
