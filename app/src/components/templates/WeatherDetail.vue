<script lang="ts" setup>
import WeatherWeek from "../organisms/WeatherWeek.vue";
import WeatherHighlights from "../organisms/WeatherHilights.vue";
import WeatherSwitchTemp from "../molecules/WeatherSwitchTemp.vue";
import {Location} from "../../types/types";

interface Props {
  location: Location
}

const { location } = defineProps<Props>()
</script>

<template>
  <div class="detail">
    <WeatherSwitchTemp />
    <WeatherWeek :location="location" />
    <WeatherHighlights />
  </div>
</template>

<style scoped>
.detail {
  min-height: 100%;
  width: 75%;
  background-color: #100E1D;
  padding: 20px 170px;
}
</style>