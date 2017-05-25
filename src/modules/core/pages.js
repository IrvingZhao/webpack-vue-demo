'use strict';

export default {
    app: r => require.ensure([], () => r(require('./app/app.vue')), 'core/app')
}