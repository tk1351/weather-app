<script lang="ts" setup>
interface Props {
  date: string
}

const { date } = defineProps<Props>()
</script>

<template>
  <p class="date">today ・ {{ date }}</p>
</template>

<style scoped>
.date {
  color: #88869D;
  margin-bottom: 20px;
}
</style>