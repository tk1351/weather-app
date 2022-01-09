<script lang="ts" setup>
interface Props {
  temp: number
}

const { temp } = defineProps<Props>()
</script>

<template>
  <p>{{ temp }}℃</p>
</template>