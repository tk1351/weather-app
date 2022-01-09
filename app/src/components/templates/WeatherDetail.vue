<script lang="ts" setup>
import WeatherWeek from "../organisms/WeatherWeek.vue";
import WeatherHighlights from "../organisms/WeatherHilights.vue";
import WeatherSwitchTemp from "../molecules/WeatherSwitchTemp.vue";
</script>

<template>
  <div class="detail">
    <WeatherSwitchTemp />
    <WeatherWeek />
    <WeatherHighlights />
  </div>
</template>

<style scoped>
.detail {
  min-height: 100%;
  width: 75%;
  background-color: #100E1D;
}
</style>