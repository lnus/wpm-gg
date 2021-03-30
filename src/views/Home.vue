<template>
  <div class="home">
    <Timer />
    <div class="text-input-container">
      <TextInput class="text-input" />
    </div>
    <WPMDisplay />
    <AccuracyDisplay />
    <button @click="this.$store.commit('setShowEndscreen')">
      Open end screen
    </button>
    <Endscreen />
  </div>
</template>

<script>
// @ is an alias to /src
import TextInput from "@/components/TextInput";
import Timer from "@/components/Timer";
import WPMDisplay from "@/components/WPMDisplay";
import AccuracyDisplay from "@/components/AccuracyDisplay.vue";
import Endscreen from "../components/Endscreen.vue";

export default {
  name: "Home",
  components: {
    TextInput,
    Timer,
    WPMDisplay,
    AccuracyDisplay,
    Endscreen,
  },
};
</script>
