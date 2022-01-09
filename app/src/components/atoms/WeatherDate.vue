<script lang="ts" setup>
interface Props {
  date: string
}

const { date } = defineProps<Props>()
</script>

<template>
  <p>today - {{ date }}</p>
</template>