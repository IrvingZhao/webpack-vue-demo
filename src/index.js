'use strict';
import Vue from "vue";
import VueRouter from "vue-router";
import PageUtils from "./pages";
import IView from "iview";

// let TotalComponent = require("./components/total/index");
Vue.use(VueRouter);
Vue.use(IView);


let header = r => require.ensure([], () => r(require('./components/header/header.vue')), "header");
let main = r => require.ensure([], () => r(require('./components/main/main.vue')), "main");
let router = PageUtils.getRouter();
// console.info(router);
let mainPage = new Vue({
    el: "#app",
    router: router,
    components: {
        "el-header": header,
        "el-main": main
    }
});
// console.info(mainPage);