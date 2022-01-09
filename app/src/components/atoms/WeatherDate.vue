<script lang="ts" setup>
interface Props {
  date: string
  today?: boolean
}

const { date, today } = defineProps<Props>()
</script>

<template>
  <p :class="{'date--today': today}">{{ date }}</p>
</template>

<style scoped>
.date--today {
  color: #88869D;
  margin-bottom: 20px;
}
</style>