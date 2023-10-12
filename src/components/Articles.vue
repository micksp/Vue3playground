<template>
    <h1>Filter 'learn Vue' Articles</h1>
    <input
      type='text'
      placeholder='Filter Titles'
      v-model='query'
    />
    <button @click="resetQuery">Reset</button>
    <SearchResults />
</template>

<script setup>
import SearchResults from "@/components/SearchResults.vue";
import useData from "@/composables/useData";
const { query, resetQuery } = useData();
</script>
