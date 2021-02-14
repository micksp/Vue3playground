module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        // it still doesn't understand multi toot elm is valid in Vue3
        'vue/valid-template-root': false
    }
}
