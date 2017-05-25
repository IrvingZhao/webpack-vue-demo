'use strict';
import Vue from "vue";
import VueRouter from "vue-router";
import IView from "iview";
Vue.use(IView);
Vue.use(VueRouter);


let header = r => require.ensure([], () => r(require('./components/header/header.vue')), "header");
let main = r => require.ensure([], () => r(require('./components/main/main.vue')), "main");
let mainPage=new Vue({
    el: "#app",
    components: {
        "el-header": header,
        "el-main":main
    }
});