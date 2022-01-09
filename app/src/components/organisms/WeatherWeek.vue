<script lang="ts" setup>
import WeatherCard from "../molecules/WeatherCard.vue";
import {Location} from "../../types/types";
import {defineProps} from "vue";

interface Props {
  location: Location
}

const { location } = defineProps<Props>()

const weekWeather =　[...location.consolidated_weather].splice(
    1, [...location.consolidated_weather].length
)

</script>

<template>
  <ul class="week">
    <WeatherCard
      v-for="(weather, index) in weekWeather"
      :key="weather.id"
      :weather="weather"
      :index="index"
    />
  </ul>
</template>

<style>
.week {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
</style>