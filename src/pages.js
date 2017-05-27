'use strict';

import core from "./modules/core/pages";
import VueRouter from "vue-router";

let routes = [
    {
        path: "/core",
        children: core,
        component: require("./modules/page.vue")
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
        router.beforeEach((to,from,next)=>{
            //TODO 401 校验
            next();
        });
    }
    return router;
};
export default {
    getRouter
}