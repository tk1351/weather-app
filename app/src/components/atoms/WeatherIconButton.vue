<script lang="ts" setup>
interface Props {
  material: boolean
  value: string
}

const { material, value } = defineProps<Props>()

</script>

<template>
  <button class="button">
    <span
      :class="{'material-icons-outlined': material }"
    >
      {{ value }}
    </span>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  border-radius: 50%;
  border: 0;
  background-color: #6F707A;
  cursor: pointer;
}

.material-icons-outlined {
  font-size: 18px;
  color: #E7E7EB;
}
</style>