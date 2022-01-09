<script lang="ts" setup>
import WeatherText from "../atoms/WeatherText.vue";
import {ConsolidatedWeather} from "../../types/types";
import WeatherImage from "../atoms/WeatherImage.vue";

interface Props {
  weather: ConsolidatedWeather
}

const { weather } = defineProps<Props>()
const { weather_state_name, weather_state_abbr } = weather
</script>

<template>
  <li class="card">
<!--    <WeatherText :text="weather_state_name" />-->
    <WeatherImage :abbreviation="weather_state_abbr" :today="false" />
  </li>
</template>

<style scoped>
.card {
  width: 130px;
  height: 170px;
  background-color: #1E223A;
  list-style: none;
}
</style>