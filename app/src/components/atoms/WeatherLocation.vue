<script lang="ts" setup>
interface Props {
  location: string
}

const { location } = defineProps<Props>()
</script>

<template>
  <p>{{ location }}</p>
</template>