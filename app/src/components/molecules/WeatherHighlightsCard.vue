<script lang="ts" setup>
import WeatherText from "../atoms/WeatherText.vue";
import WeatherCompassIcon from "../atoms/WeatherCompassIcon.vue";

interface Props {
  title: string
  data: string
  wind?: boolean
  direction?: string
  twoRows?: boolean
}

const { title, data, wind, direction, twoRows } = defineProps<Props>()
</script>

<template>
  <div class="box" :class="{'box--two-rows': twoRows}">
    <WeatherText :text="title" />
    <WeatherText :text="data" :highlight="true" />
    <div v-if="wind" class="box__direction">
      <WeatherCompassIcon />
      <WeatherText :text="direction" />
    </div>
  </div>
</template>

<style scoped>
.box {
  background-color: #1E223A;
  width: 48%;
  height: 200px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

.box--two-rows {
  height: 150px;
}

.box__direction {
  display: flex;
  justify-content: space-between;
  width: 20%;
}
</style>