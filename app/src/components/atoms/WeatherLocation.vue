<script lang="ts" setup>
interface Props {
  location: string
}

const { location } = defineProps<Props>()
</script>

<template>
  <p class="location">{{ location }}</p>
</template>

<style scoped>
.location {
  color: #88869D;
}
</style>