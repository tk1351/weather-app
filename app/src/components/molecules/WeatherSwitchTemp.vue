<script lang="ts" setup>
import {reactive} from "vue";
import WeatherTempButton from "../atoms/WeatherTempButton.vue";

const pressed = reactive({
  c: true,
  f: false
})

const changePressed = (ariaPressed: string) => {
  if (ariaPressed === 'true') return
  pressed.c = !pressed.c
  pressed.f = !pressed.f
}
</script>

<template>
  <div class="switch-temp-wrapper">
    <WeatherTempButton
      :type="'button'"
      :value="'℃'"
      :pressed="pressed.c"
      @change="changePressed"
    />
    <WeatherTempButton
      :type="'button'"
      :value="'℉'"
      :pressed="pressed.f"
      @change="changePressed"
    />
  </div>
</template>

<style scoped>
.switch-temp-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>