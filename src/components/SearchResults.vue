<template>
    <h2>Zoekresultaten</h2>
    <p>Er zijn {{ filteredTitles.length }} titels gevonden.</p>
    <table class="table">
        <thead>
            <tr>
                <th>Titel</th>
                <th>Link</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="title in filteredTitles" :key="title.Id">
                <td>{{ title.Name }}</td>
                <td>
                    <a :href="title.Page" target="_blank">Link</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import useData from "../composables/useData";
const { filteredTitles } = useData();
</script>

<style scoped>
.table {
    width: 50vw;
    margin-bottom: 1rem;
    color: #212529;
    border: 1px solid #dee2e6;
    border-collapse: collapse;
    border-spacing: 0;
}
.table th, .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    text-align: left;
}
</style>
