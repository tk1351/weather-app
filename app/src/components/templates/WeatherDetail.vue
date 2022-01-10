<script lang="ts" setup>
import WeatherWeek from "../organisms/WeatherWeek.vue";
import WeatherHighlights from "../organisms/WeatherHighlights.vue";
import WeatherSwitchTemp from "../molecules/WeatherSwitchTemp.vue";
import {Location} from "../../types/types";

interface Props {
  location: Location
}

const { location } = defineProps<Props>()
</script>

<template>
  <div class="detail">
    <WeatherSwitchTemp />
    <WeatherWeek :location="location" />
    <WeatherHighlights :location="location" />
    <span class="footer">created by username - devChallenges.io</span>
  </div>
</template>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  width: 75%;
  background-color: #100E1D;
  padding: 20px 170px;
}

.footer {
  text-align: center;
  font-size: 13px;
  color: #A09FB1;
}
</style>