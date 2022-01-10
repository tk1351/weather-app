<script lang="ts" setup>
import WeatherForm from "../molecules/WeatherForm.vue";
import {LocationSearch} from "../../types/types";
import WeatherLocationItem from "../molecules/WeatherLocationItem.vue";

interface Props {
  locations: LocationSearch[]
}

interface Emits {
  (event: 'click'): void
  (event: 'submit', query: string): void
}

const { locations } = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleEvent = () => {
  emit('click')
}

const handleSubmit = (query: string) => {
  emit('submit', query)
}
</script>

<template>
  <div>
    <WeatherForm @click="handleEvent" @submit="handleSubmit" />
    <ul class="results">
<!--      <li v-for="location in locations" :key="location.woeid">-->
<!--        {{ location.title }}-->
<!--      </li>-->
      <WeatherLocationItem
          v-for="location in locations"
          :key="location.woeid"
          :location="location"
      />
    </ul>
  </div>
</template>

<style scoped>
.results {
  margin: 0;
  padding: 0;
}
</style>