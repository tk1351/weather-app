<script lang="ts" setup>
interface Emits {
  (event: 'click'): void
}

const emit = defineEmits<Emits>()

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <span class="material-icons-outlined" @click="handleClick">
    close
  </span>
</template>

<style scoped>
.material-icons-outlined {
  cursor: pointer;
}
</style>