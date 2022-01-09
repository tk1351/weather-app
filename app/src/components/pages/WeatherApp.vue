<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import WeatherNavbar from "../templates/WeatherNavbar.vue";
import WeatherDetail from "../templates/WeatherDetail.vue";
import { defaultLocation, fetchWeather } from "../../api";
import { Location } from "../../types/types";

const state = reactive({
  weather: defaultLocation,
  loading: true
})

onMounted(async () => {
  const data: Location = await fetchWeather()
  state.weather = data
  state.loading = false
})


</script>

<template>
  <div class="weather-app">
    <p v-if="state.loading">Loading...</p>
    <WeatherNavbar v-if="!state.loading" :location="state.weather" />
    <WeatherDetail v-if="!state.loading" :location="state.weather" />
  </div>
</template>

<style scoped>
.weather-app {
  display: flex;
  width: 100vw;
  min-height: 100vh;
}
</style>