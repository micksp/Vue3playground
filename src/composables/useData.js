import { computed, ref } from "vue";
import titles from "@/assets/data/data.json";

const query = ref('');

export default function useData() {
    const resetQuery = () => {
        query.value = '';
    }

    const filteredTitles = computed(() => {
        return titles.filter(t => t.Name.toLowerCase().includes(query.value.toLowerCase()));
    });

    return { filteredTitles, query, resetQuery };
}
