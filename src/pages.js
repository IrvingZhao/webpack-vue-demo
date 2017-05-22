
export default {
    app: r => require.ensure([], () => r(require('./components/app.vue')), 'app.vue')
}