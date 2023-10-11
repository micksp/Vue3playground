<template>
    <h1>Zoekresultaten</h1>
    <table>
        <tr v-for="title in filteredTitles">
            <td>{{ title.Name }}</td>
        </tr>
    </table>
</template>

<script setup>
import { computed } from 'vue';
import useData from "../composables/useData";
const data = useData();
defineProps(['query']);
const filteredTitles = computed(() => {
    return titles.filter(s => s.Name.toLowerCase().includes(props.query.toLowerCase()));
});
</script>
