// //es6语法：
// 引入 VUE核心包
import Vue from "../node_modules/vue/dist/vue.min.js";
// 引入VUE Router 做页面跳转使用
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 引入 页面定义 脚本
import Pages from "./pages";

const appComponent = Pages.getPage("core/app");

// 简单组件
const Foo = {template: '<div>foo</div>'};
const Bar = {template: '<div>bar</div>'};

// 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {path: '/foo', component: Foo},
    {path: "/app", component: appComponent},
    {path: '/bar', component: Bar}
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes: routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router,
    // render: h => h(),
    data: {
        message: ""
    }
}).$mount('#app');