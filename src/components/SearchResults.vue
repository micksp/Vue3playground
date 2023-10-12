<template>
    <h2>Zoekresultaten</h2>
    <p>Er zijn {{ filteredTitles.length }} titels gevonden.</p>
    <ul>
        <li v-for="title in filteredTitles">
            {{ title.Name }}
        </li>
    </ul>
</template>

<script setup>
import useData from "../composables/useData";
const { filteredTitles } = useData();
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
</style>
