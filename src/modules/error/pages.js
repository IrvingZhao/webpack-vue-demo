'use strict';

export default [
    {
        path: "404",
        component: r => require.ensure([], () => r(require('./404.vue')), 'error/404')
    },
    {
        path: "500",
        component: r => require.ensure([], () => r(require('./500.vue')), 'error/500')
    }
]