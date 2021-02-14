<template>
    <h1>Zoekresultaten</h1>
    <table>
        <tr v-for="title in filteredTitles">
            <td>{{ title.Name }}</td>
        </tr>
    </table>
</template>

<script>
import { computed } from 'vue';
import titles from '/data.json';
export default {
    props: {
        query: {
            type: String,
            default: ''
        }
    },
    setup (props, context) {
        const filteredTitles = computed(() => {
            return titles.filter(s => s.Name.toLowerCase().includes(props.query.toLowerCase()));
        });
        return {
            filteredTitles
        };
    }    
}
</script>