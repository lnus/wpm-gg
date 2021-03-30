<template>
  <div class="home">
    <Timer />
    <div class="text-input-container">
      <TextInput class="text-input" />
    </div>
    <WPMDisplay />
    <AccuracyDisplay />
    <button @click="this.$store.commit('calculateAndSetAccuracy')">Demo</button>
  </div>
</template>

<script>
// @ is an alias to /src
import TextInput from "@/components/TextInput";
import Timer from "@/components/Timer";
import WPMDisplay from "@/components/WPMDisplay";
import AccuracyDisplay from "@/components/AccuracyDisplay.vue";

export default {
  name: "Home",
  components: {
    TextInput,
    Timer,
    WPMDisplay,
    AccuracyDisplay,
  },
};
</script>

AccuracyDisplay
