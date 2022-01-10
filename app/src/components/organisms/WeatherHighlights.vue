<script lang="ts" setup>
import {Location} from "../../types/types";
import {computed} from "vue";
import WeatherHighlightsCard from "../molecules/WeatherHighlightsCard.vue";

interface Props {
  location: Location
}

const { location } = defineProps<Props>()

const todayWeather = location.consolidated_weather[0]
const {
  wind_speed,
  wind_direction_compass,
  humidity,
  visibility,
  air_pressure
} = todayWeather

const orderedNumber = computed(() => {
  return (data: number) => Math.ceil(data)
})

const orderedData = computed(() => {
  return (value: number, unit: string) => `${value}${unit}`
})

</script>

<template>
  <h1>Today's Highlights</h1>
  <div class="wrapper">
    <WeatherHighlightsCard
        :title="'Wind Status'"
        :data="orderedData(orderedNumber(wind_speed), 'mph')"
        :wind="true"
        :direction="wind_direction_compass"
    />
    <WeatherHighlightsCard
        :title="'Humidity'"
        :data="orderedData(humidity, '%')"
    />
    <WeatherHighlightsCard
        :title="'Visibility'"
        :data="orderedData(orderedNumber(visibility), '%')"
        :twoRows="true"
    />
    <WeatherHighlightsCard
        :title="'Air Pressure'"
        :data="orderedData(orderedNumber(air_pressure), 'miles')"
        :twoRows="true"
    />
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>