<script lang="ts" setup>
import { createWeatherStateIcon } from "../../api";

interface Props {
  abbreviation: string
  today?: boolean
}

const props = defineProps<Props>()
const { abbreviation, today } = props

const src = createWeatherStateIcon(abbreviation)
</script>

<template>
  <img
    :src="src"
    alt=""
    class="weather-state"
    :class="{ 'weather-state--today': today }">
</template>

<style scoped>
.weather-state {
  width: 70px;
  height: 70px;
}

.weather-state--today {
  width: 150px;
  height: 150px;
  margin: 70px 0;
}
</style>