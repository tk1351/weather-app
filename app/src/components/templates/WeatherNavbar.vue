<script lang="ts" setup>
import {defineProps, reactive} from "vue";
import WeatherToday from "../organisms/WeatherToday.vue";
import WeatherLocationSearch from "../organisms/WeatherLocationSearch.vue";
import {Location} from "../../types/types";
import {defaultSearchResults, searchLocation} from "../../api";

interface Props {
  location: Location
}

const { location } = defineProps<Props>()

const state = reactive({
  search: false,
  searchResults: defaultSearchResults
})

const changeComponent = () => {
  state.search = !state.search
}

const search = async (query: string) => {
  const results = await searchLocation(query)
  state.searchResults = results
}
</script>

<template>
  <div class="nav">
    <WeatherToday v-if="!state.search" :location="location" @click="changeComponent" />
    <WeatherLocationSearch
        v-if="state.search"
        @click="changeComponent"
        @submit="search"
        :locations="state.searchResults"
    />
  </div>
</template>

<style scoped>
.nav{
  min-height: 100%;
  width: 25%;
  background-color: #1e223a;
}
</style>