<script lang="ts" setup>
interface Props {
  temp: number
}

const { temp } = defineProps<Props>()
</script>

<template>
  <p class="temp">
    <span class="temp__number">{{ temp }}</span>
    ℃
  </p>
</template>

<style scoped>
.temp {
  font-size: 25px;
}

.temp__number {
  font-size: 70px;
}
</style>