<script lang="ts" setup>
import WeatherLocationIcon from "../atoms/WeatherLocationIcon.vue";
import WeatherLocation from "../atoms/WeatherLocation.vue";

interface Props {
  location: string
}

const { location } = defineProps<Props>()
</script>

<template>
  <div class="my-location-wrapper">
    <WeatherLocationIcon />
    <WeatherLocation :location="location" />
  </div>
</template>

<style scoped>
.my-location-wrapper {
  display: flex;
}
</style>