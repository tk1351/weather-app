<script lang="ts" setup>
interface Props {
  value: string
  type: 'button' | 'submit'
}

const { value, type } = defineProps<Props>()

</script>

<template>
  <button :type="type" class="button">
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

/*.button--temp {*/
/*  height: 25px;*/
/*  width: 25px;*/
/*  border: 0;*/
/*  border-radius: 50%;*/
/*  background-color: #6F707A;*/
/*  cursor: pointer;*/
/*}*/

/*.button--checked {*/
/*  background-color: #E7E7EB;*/
/*  color: #100E1D;*/
/*}*/
</style>