<script lang="ts" setup>
interface Props {
  value: string
  type: 'button' | 'submit'
}

const { value, type } = defineProps<Props>()
</script>

<template>
  <button :type="type" class="button">{{ value }}</button>
</template>

<style scoped>
.button {
  font-size: 13px;
  background-color: #6F707A;
  color: #E7E7EB;
  cursor: pointer;
}
</style>