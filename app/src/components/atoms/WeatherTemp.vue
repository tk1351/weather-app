<script lang="ts" setup>
interface Props {
  temp: number
  today?: boolean
  min?: boolean
}

const { temp, today, min } = defineProps<Props>()
</script>

<template>
  <p :class="{'temp--today': today, 'temp--min': min}">
    <span :class="{'temp__number--today': today}">{{ temp }}</span>
    ℃
  </p>
</template>

<style scoped>
.temp--today {
  font-size: 25px;
}

.temp__number--today {
  font-size: 70px;
}

.temp--min {
  color: #A09FB1;
}
</style>