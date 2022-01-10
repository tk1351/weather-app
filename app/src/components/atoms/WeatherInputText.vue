<script lang="ts" setup>
interface Props {
  value: string
}

interface Emits {
  (event: 'input', value: string): void
  (event: 'update:value', value: string): void
}

const { value } = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleInput = (event: { target: HTMLInputElement }) => {
  const { target } = event
  emit("input", target.value);
  emit("update:value", target.value);
}
</script>

<template>
  <input type="text" :value="value" @input="handleInput" />
</template>