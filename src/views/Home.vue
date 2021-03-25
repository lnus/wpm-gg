<template>
  <div class="home">
    <Timer :time="timer" />
    <div class="text-input-container">
      <TextInput class="text-input" />
    </div>
    <WPMDisplay />
  </div>
</template>

<script>
// @ is an alias to /src
import TextInput from "@/components/TextInput";
import Timer from "@/components/Timer";
import WPMDisplay from "@/components/WPMDisplay";
import randomWords from "random-words";

export default {
  name: "Home",
  components: {
    TextInput,
    Timer,
    WPMDisplay,
  },
  data() {
    return {
      timer: Number,
    };
  },
  methods: {
    getWords(n) {
      const words = randomWords(n);
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
  created() {
    this.$store.commit("setIncomingWords", this.getWords(50));
    this.timer = 60;
  },
};
</script>
