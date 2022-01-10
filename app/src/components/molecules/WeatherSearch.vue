<script lang="ts" setup>
import WeatherButton from "../atoms/WeatherButton.vue";
import WeatherIconButton from "../atoms/WeatherIconButton.vue";

interface Emits {
  (event: 'click'): void
}

const emit = defineEmits<Emits>()

const handleEvent = () => {
  emit('click')
}
</script>

<template>
  <div class="search-wrapper">
    <WeatherButton
      :value="'Search for places'"
      :type="'button'"
      @click="handleEvent"
    />
    <WeatherIconButton
      :value="'my_location'"
      :material="true"
      :checked="false"
      @click="handleEvent"
    />
  </div>
</template>

<style scoped>
.search-wrapper {
  display: flex;
  justify-content: space-between;
  height: 25px;
  padding: 0 30px;
  margin: 20px 0;
}
</style>