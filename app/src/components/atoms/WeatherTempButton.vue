<script lang="ts" setup>
interface Props {
  value: string
  type: 'button'
  pressed: boolean
}

interface Emits {
  (event: 'change', ariaPressed: string): void
}

const { value, type, pressed } = defineProps<Props>()

const emit = defineEmits<Emits>()

const handleClick = (event: { target: HTMLButtonElement }) => {
  emit('change', event.target.ariaPressed)
}

</script>

<template>
  <button
    :type="type"
    class="button--temp"
    role="button"
    :aria-pressed="pressed"
    :class="{ 'button--pressed': pressed }"
    @click="handleClick"
  >
    {{ value }}
  </button>
</template>

<style scoped>
.button--temp {
  font-size: 13px;
  color: #E7E7EB;
  height: 25px;
  width: 25px;
  border: 0;
  border-radius: 50%;
  background-color: #6F707A;
  cursor: pointer;
}

.button--pressed {
  background-color: #E7E7EB;
  color: #100E1D;
}
</style>