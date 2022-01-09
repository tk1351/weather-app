<script lang="ts" setup>
import { computed, defineProps } from "vue";
import WeatherSearch from "../molecules/WeatherSearch.vue";
import WeatherImage from "../atoms/WeatherImage.vue";
import WeatherTemp from "../atoms/WeatherTemp.vue";
import WeatherState from "../atoms/WeatherState.vue";
import WeatherDate from "../atoms/WeatherDate.vue";
import { Location } from "../../types/types";
import WeatherLocationIcon from "../atoms/WeatherLocationIcon.vue";
import WeatherLocation from "../atoms/WeatherLocation.vue";
import { createOrderedDate } from "../../lib";

interface Props {
  location: Location
}

const { location } = defineProps<Props>()

const todayWeather = location.consolidated_weather[0]
const {
  weather_state_abbr,
  the_temp,
  weather_state_name,
  applicable_date
} = todayWeather

const orderedTemp = computed(() => Math.ceil(the_temp))
const orderedDate = computed(() => {
  return createOrderedDate(applicable_date)
})
</script>

<template>
  <WeatherSearch />
  <WeatherImage :abbreviation="weather_state_abbr" />
  <WeatherTemp :temp="orderedTemp" />
  <WeatherState :state="weather_state_name" />
  <WeatherDate :date="orderedDate" />
  <WeatherLocationIcon />
  <WeatherLocation :location="location.title" />
</template>