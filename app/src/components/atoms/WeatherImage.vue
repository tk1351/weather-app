<script lang="ts" setup>
import { createWeatherStateIcon } from "../../api";

interface Props {
  abbreviation: string
}

const props = defineProps<Props>()
const { abbreviation } = props

const src = createWeatherStateIcon(abbreviation)
</script>

<template>
  <img :src="src" alt="" class="weather-state">
</template>

<style scoped>
.weather-state {
  width: 150px;
  height: 150px;
  margin: 70px 0;
}
</style>