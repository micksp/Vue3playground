<template>
    <h2>Filter learn Vue Articles</h2>
    <input 
      type='text' 
      placeholder='Filter Search' 
      v-model='query'
    />
    <button @click="reset">Reset</button>
    <div class='queryoutput'>
        {{ query }}
    </div>
    
    <search-results class="results"  :query="query"></search-results>
</template>

<script>
// see https://learnvue.co/2020/12/setting-up-your-first-vue3-project-vue-3-0-release/#started
import { ref } from 'vue';
import SearchResults from './SearchResults.vue'
export default {
    name: 'HelloWorld',
    components: { SearchResults },
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    setup () {

        const query = ref('');
        const reset = () => {
            query.value = '';
        } 
        return {
            reset,
            query
        }
    }
}
</script>
<style scoped>
.queryoutput {
    margin-top: 2rem;
}
</style>