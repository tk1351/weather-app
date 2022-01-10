<script lang="ts" setup>
interface Props {
  value: string
  type: 'button' | 'submit'
}

interface Emits {
  (event: 'click'): void
}

const { value, type } = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleClick = () => {
  emit('click')
}

</script>

<template>
  <button :type="type" class="button" @click="handleClick">
    {{ value }}
  </button>
</template>

<style scoped>
.button {
  font-size: 13px;
  background-color: #6F707A;
  color: #E7E7EB;
  cursor: pointer;
}
</style>