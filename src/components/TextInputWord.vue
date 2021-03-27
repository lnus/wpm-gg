<template>
  <div
    :key="char"
    v-for="char in chars"
    :class="`char${current ? '' : ''}${current ? ' current' : ''}`"
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
    // compareUserInput(i, c) {
    //   let userIn = this.$store.getters.getCurrentUserInput;
    //   console.log(userIn[i], c);
    // },
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
