<script lang="ts" setup>
import WeatherInputText from "../atoms/WeatherInputText.vue";
import WeatherButton from "../atoms/WeatherButton.vue";
import WeatherCancelIcon from "../atoms/WeatherCancelIcon.vue";

interface Emits {
  (event: 'click'): void
}

const emit = defineEmits<Emits>()

const handleEvent = () => {
  emit('click')
}

const handleSubmit = () => {
  console.log('submit')
}
</script>

<template>
  <form @submit.prevent>
    <WeatherCancelIcon @click="handleEvent" />
    <WeatherInputText />
    <WeatherButton :value="'Search'" :type="'submit'" @click="handleSubmit" />
  </form>
</template>