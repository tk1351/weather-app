<script lang="ts" setup>
import { computed, defineProps } from "vue";
import WeatherSearch from "../molecules/WeatherSearch.vue";
import WeatherImage from "../atoms/WeatherImage.vue";
import WeatherTemp from "../atoms/WeatherTemp.vue";
import WeatherState from "../atoms/WeatherState.vue";
import WeatherDate from "../atoms/WeatherDate.vue";
import WeatherMyLocation from "../molecules/WeatherMyLocation.vue";
import { Location } from "../../types/types";
import { createOrderedDate } from "../../lib";

interface Props {
  location: Location
}

interface Emits {
  (event: 'click'): void
}

const { location } = defineProps<Props>()
const emit = defineEmits<Emits>()

const todayWeather = location.consolidated_weather[0]
const {
  weather_state_abbr,
  the_temp,
  weather_state_name,
  applicable_date
} = todayWeather

const orderedTemp = computed(() => Math.ceil(the_temp))
const orderedDate = computed(() => {
  return createOrderedDate(applicable_date, 'today')
})

const handleEvent = () => {
  emit('click')
}
</script>

<template>
  <WeatherSearch @click="handleEvent" />
  <div class="today">
    <WeatherImage :abbreviation="weather_state_abbr" :today="true" />
    <WeatherTemp :temp="orderedTemp" :today="true" />
    <WeatherState :state="weather_state_name" />
    <WeatherDate :date="`today ・ ${orderedDate}`" />
    <WeatherMyLocation :location="location.title" />
  </div>
</template>

<style scoped>
.today {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>