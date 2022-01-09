<script lang="ts" setup>
import { defineProps } from "vue";
import WeatherToday from "../organisms/WeatherToday.vue";
import { Location } from "../../types/types";

interface Props {
  location: Location
}

const { location } = defineProps<Props>()
</script>

<template>
  <div class="nav">
    <WeatherToday :location="location" />
  </div>
</template>

<style scoped>
.nav{
  min-height: 100%;
  width: 25%;
  background-color: #1e223a;
}
</style>