<script lang="ts" setup>
interface Props {
  state: string
}

const { state } = defineProps<Props>()
</script>

<template>
  <p class="state">{{ state }}</p>
</template>

<style scoped>
.state {
  color: #A09FB1;
  font-size: 23px;
  margin: 40px 0;
}
</style>