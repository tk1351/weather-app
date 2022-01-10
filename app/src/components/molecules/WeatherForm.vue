<script lang="ts" setup>
import {ref} from "vue";
import WeatherInputText from "../atoms/WeatherInputText.vue";
import WeatherButton from "../atoms/WeatherButton.vue";
import WeatherCancelIcon from "../atoms/WeatherCancelIcon.vue";

const value = ref('')

interface Emits {
  (event: 'click'): void
  (event: 'submit', query: string): void
}

const emit = defineEmits<Emits>()

const handleEvent = () => {
  emit('click')
}

const handleChange = (newValue: string) => {
  value.value = newValue
}

const handleSubmit = () => {
  const query = value.value
  if (query === '') return
  emit('submit', query)
}
</script>

<template>
  <form @submit.prevent>
    <WeatherCancelIcon @click="handleEvent" />
    <WeatherInputText :value="value" @input="handleChange" />
    <WeatherButton :value="'Search'" :type="'submit'" @click="handleSubmit" />
  </form>
</template>