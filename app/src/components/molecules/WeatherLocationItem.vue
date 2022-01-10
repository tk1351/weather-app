<script lang="ts" setup>
import {LocationSearch} from "../../types/types";
import WeatherText from "../atoms/WeatherText.vue";

interface Props {
  location: LocationSearch
}

const { location } = defineProps<Props>()

const { title } = location
</script>

<template>
  <li class="location-item">
    <WeatherText :text="title" />
  </li>
</template>

<style scoped>
.location-item {
  list-style: none;
  margin: 25px;
  cursor: pointer;
  border: 1px solid #1e223a;
}

.location-item:hover {
  border: 1px solid #626475;
}
</style>