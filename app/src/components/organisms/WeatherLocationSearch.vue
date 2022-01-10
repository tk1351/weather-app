<script lang="ts" setup>
import WeatherForm from "../molecules/WeatherForm.vue";

interface Emits {
  (event: 'click'): void
}

const emit = defineEmits<Emits>()

const handleEvent = () => {
  emit('click')
}
</script>

<template>
  <div>
    <WeatherForm @click="handleEvent" />
  </div>
</template>