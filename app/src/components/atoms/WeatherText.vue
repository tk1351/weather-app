<script lang="ts" setup>
interface Props {
  text: string
}

const { text } = defineProps<Props>()
</script>

<template>
  <p>{{ text }}</p>
</template>