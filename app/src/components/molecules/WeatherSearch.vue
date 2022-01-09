<script lang="ts" setup>
import WeatherButton from "../atoms/WeatherButton.vue";
import WeatherIconButton from "../atoms/WeatherIconButton.vue";
</script>

<template>
  <div class="search-wrapper">
    <WeatherButton
      :value="'Search for places'"
      :type="'button'"
    />
    <WeatherIconButton
      :value="'my_location'"
      :material="true"
      :checked="false"
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