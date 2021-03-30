<template>
  <div class="home">
    <Timer />
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

export default {
  name: "Home",
  components: {
    TextInput,
    Timer,
    WPMDisplay,
  },
};
</script>
