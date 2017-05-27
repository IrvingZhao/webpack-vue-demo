import Vue from "vue";
import ScrollEvent from "../DomScroll";
import PageUtils from "../../pages";
import Router from "vue-router";

let subMenu = require("./submenu/submenu.vue");
let timeInterval;
export default{
    mounted(){
        ScrollEvent.addMouseWheelEvent(document.getElementsByClassName("side-menu")[0]);
    },
    components: {
        "custom-sub-menu": subMenu
    },
    methods: {
        openPage(menu){
            let router=PageUtils.getRouter();
            router.push("/core/app");
            // Router.push("/core/app");
            console.info(router);
            // let page = PageUtil.getPage("core/app");
            // let pageId = "page_" + Date.now();
            // let pageData = {name: pageId, label: "tab" + pageId, component:PageUtil.getPage("core/app")};
            // this.tabs.push(pageData);
            //
            // this.tabActiveName = pageData.pageId;
            // let pageVue = new Vue({
            //     components: {
            //         "tab-page": page
            //     }
            // });
            // pageData.vueObj = pageVue;
            // timeInterval = setInterval(() => {
            //     if (document.getElementById(pageId)) {
            //         clearInterval(timeInterval);
            //         pageVue.$mount(document.getElementById(pageId));
            //     }
            // }, 10);
        },
        handleTabRemove(pageName){
            // this.tabs[pageName].vueObj.$destroy();
            // delete this.tabs[pageName];
            // console.info(this);
            // let obj = this.tabs.splice(index, 1);
            // obj[0].vueObj.$destroy();
            // console.info(obj);
            // console.info(obj.vueObj)
            //TODO  tabs.remove
            //TODO  tab.value=name
            //TODO   tab.Vue.destory
            // console.info(this);
            // console.info(arguments);
        }
    },
    data (){
        return {
            tabActiveName: "0",
            tabs: [],
            menus: [
                {id: "a", active: false, name: "菜单1", url: "/pages/common/page.html", icon: "sa-side-home"},
                {
                    id: "b",
                    active: false,
                    open: false,
                    height: "40px",
                    name: "菜单2",
                    icon: "sa-side-typography",
                    children: [
                        {
                            id: "b-a", active: false, open: false, name: "菜单2-1", children: [
                            {id: "b-a-a", active: false, name: "菜单2-1-1", url: "#url2-1-1"},
                            {id: "b-a-b", active: false, name: "菜单2-1-2", url: "#url2-1-2"},
                            {id: "b-a-c", active: false, name: "菜单2-1-3", url: "#url2-1-3"}
                        ]
                        },
                        {id: "b-b", active: false, name: "菜单2-2", url: "#url2-2"}
                    ]
                },
                {
                    id: "c", active: false, open: false, name: "菜单3", icon: "sa-side-widget", children: [
                    {
                        id: "c-a", active: false, open: false, name: "菜单3-1", children: [
                        {id: "c-a-a", active: false, name: "菜单3-1-1", url: "#url3-1-1"},
                        {id: "c-a-b", active: false, name: "菜单3-1-2", url: "#url3-1-2"},
                        {id: "c-a-c", active: false, name: "菜单3-1-3", url: "#url3-1-3"}
                    ]
                    },
                    {id: "c-b", active: false, name: "菜单3-2", url: "#url3-2"},
                    {id: "c-c", active: false, name: "菜单3-3", url: "#url3-3"}
                ]
                },
                {
                    id: "d", active: false, open: false, name: "菜单4", icon: "sa-side-table", children: [
                    {id: "d-a", active: false, name: "菜单4-1", url: "#url4-1"},
                    {id: "d-b", active: false, name: "菜单4-2", url: "#url4-2"},
                    {id: "d-c", active: false, name: "菜单4-3", url: "#url4-3"}
                ]
                },
                {
                    id: "e", active: false, open: false, name: "菜单5", icon: "sa-side-form", children: [
                    {id: "e-a", active: false, name: "菜单5-1", url: "#url5-1"},
                    {id: "e-b", active: false, name: "菜单5-2", url: "#url5-2"},
                    {id: "e-c", active: false, name: "菜单5-3", url: "#url5-3"}
                ]
                },
                {
                    id: "f", active: false, open: false, name: "菜单6", icon: "sa-side-ui", children: [
                    {id: "f-a", active: false, name: "菜单6-1", url: "#url6-1"},
                    {id: "f-b", active: false, name: "菜单6-2", url: "#url6-2"},
                    {id: "f-c", active: false, name: "菜单6-3", url: "#url6-3"}
                ]
                }
            ]
        }
    }
}