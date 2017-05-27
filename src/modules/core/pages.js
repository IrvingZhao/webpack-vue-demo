'use strict';

export default[
    {
        path: "app",
        component: r => require.ensure([], () => r(require('./app/app.vue')), 'core/app')
    },
    {
        path: "app2",
        component: r => require.ensure([], () => r(require('./app2/app.vue')), 'core/app2'),
        children:[
            {
                path:"app3",
                component:r => require.ensure([], () => r(require('./app3/app.vue')), 'core/app3'),
            }
        ]
    }
];