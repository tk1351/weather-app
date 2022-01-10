<script lang="ts" setup>
interface Props {
  text: string
  highlight?: true
}

const { text, highlight } = defineProps<Props>()
</script>

<template>
  <p :class="{'highlight': highlight}">{{ text }}</p>
</template>

<style scoped>
.highlight {
  font-size: 65px;
}
</style>