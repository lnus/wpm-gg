<template>
  <div class="home">
    <Timer :time="timer" />
    <div class="text-input-container">
      <TextInput class="text-input" :incomingWords="incomingWords" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TextInput from "@/components/TextInput";
import Timer from "@/components/Timer";
import randomWords from "random-words";

export default {
  name: "Home",
  components: {
    TextInput,
    Timer,
  },
  data() {
    return {
      incomingWords: [Object],
      timer: Number,
    };
  },
  methods: {
    async getWords(n) {
      const words = await randomWords(n);
      const wordsFormatted = words.map((word, index) => {
        let wordsObj = {
          id: index,
          content: word,
          correct: false,
        };

        return wordsObj;
      });

      console.log(wordsFormatted);

      return wordsFormatted;
    },
  },
  async created() {
    this.incomingWords = await this.getWords(50);
    this.timer = 60;
  },
};
</script>
