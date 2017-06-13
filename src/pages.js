'use strict';

import core from "./modules/core/pages";
import error from "./modules/error/pages";

import defaultPage from "./modules/page.vue";

import VueRouter from "vue-router";

let routes = [
    {
        path: "/core",
        children: core,
        component: defaultPage
    },
    {
        path: "/error",
        children: error,
        component: defaultPage
    },
    {
        path: "*",
        component: r => require.ensure([], () => r(require('./modules/error/404.vue')), 'error/404')
    }

];
let router;
/**
 * 获取路由
 * */
const getRouter = () => {
    if (!router) {
        router = new VueRouter({
            routes: routes
        });
        router.beforeEach((to, from, next) => {
            //TODO 401 校验
            next();
        });
    }
    return router;
};
export default {
    getRouter
}