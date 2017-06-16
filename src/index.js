'use strict';
import Vue from "vue";
import VueRouter from "vue-router";
import PageUtils from "./pages";
import IView from "iview";

import VueResource from "vue-resource";

import Plugin from "./plugin/index"
// import jQuery from "jquery";
// // import Bootstrap from "bootstrap";
// console.info(jQuery)

Vue.use(VueRouter);
Vue.use(IView);
Vue.use(Plugin);

Vue.use(VueResource);


let header = r => require.ensure([], () => r(require('./components/header/header.vue')), "header");
let main = r => require.ensure([], () => r(require('./components/main/main.vue')), "main");
let app=r => require.ensure([], () => r(require('./modules/core/app/app.vue')), 'core/app')
let router = PageUtils.getRouter();
let components={
    "el-header": header,
    "el-main": main
};
let mainPage = new Vue({
    el: "#app",
    router: router,
    components: components
});
// let mainPage=new Vue({
//     el:"#app",
//     components:{
//         app:app
//     }
// });
// let windowApp = new Vue({
//     el: "#window",
//     data: {
//         show: true,
//         iconType: "",
//         title: "我是标题",
//         width: "2000px",
//         height: "3000px",
//         left: "0",
//         top: "0",
//         style: ""
//     },
//     mounted(){
//         let root=document.getElementsByTagName("html");
//         let bodyWidth = root.offsetWidth;
//         let bodyHeight = root.offsetHeight;
//         let contentEl = this.$el.getElementsByClassName("content")[0];
//         let winWidth = contentEl.offsetWidth;
//         let winHeight = contentEl.offsetHeight;
//         this.left = (bodyWidth - winWidth) / 2 + "px";
//         this.top = (bodyHeight - winHeight) / 2 * 0.8 + "px";
//     }
// });
// console.info(windowApp);