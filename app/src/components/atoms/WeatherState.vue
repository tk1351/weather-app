<script lang="ts" setup>
interface Props {
  state: string
}

const { state } = defineProps<Props>()
</script>

<template>
  <p>{{ state }}</p>
</template>