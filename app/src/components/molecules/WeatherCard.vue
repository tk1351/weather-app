<script lang="ts" setup>
import {computed} from "vue";
import {ConsolidatedWeather} from "../../types/types";
import WeatherImage from "../atoms/WeatherImage.vue";
import WeatherDate from "../atoms/WeatherDate.vue";
import WeatherTemp from "../atoms/WeatherTemp.vue"
import {createOrderedDate} from "../../lib";

interface Props {
  weather: ConsolidatedWeather
  index: number
}

const { weather, index } = defineProps<Props>()
const {
  weather_state_abbr,
  applicable_date,
  max_temp,
  min_temp
} = weather

const orderedDate = computed(() => {
  if (index === 0) return 'tomorrow'
  return createOrderedDate(applicable_date, 'week')
})

const orderedTemp = computed(() => {
  return (temp: number) => Math.ceil(temp)
})


</script>

<template>
  <li class="card">
    <WeatherDate :date="orderedDate" />
    <WeatherImage :abbreviation="weather_state_abbr" :today="false" />
    <div class="temps">
      <WeatherTemp :temp="orderedTemp(max_temp)"  />
      <WeatherTemp :temp="orderedTemp(min_temp)" :min="true"  />
    </div>
  </li>
</template>

<style scoped>
.card {
  width: 130px;
  height: 170px;
  background-color: #1E223A;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.temps {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
</style>