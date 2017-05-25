let Vue = require("vue");
let ScrollEvent = require("../DomScroll");
let PageUtil=require("../../pages");
let jQuery = require.ensure([], () => require("jquery"), "jquery");
jQuery.then($ => {
    let siteMenu = $(".side-menu");
    ScrollEvent.addMouseWheelEvent(siteMenu[0]);
});
// let $ = (r => require.ensure([], () => r(require('jquery')), "jquery"))(function(param){return param;});
// console.info($);
// let $=require("jquery");
// console.info($);
// let $=()=>{
//     let jQuery=1;
// require.ensure([],()=>jQuery=require("jquery"),"jquery");
// (r => require.ensure([], () => r(require('jquery')), "jquery"))(function(param){console.info(jQuery);jQuery=param;console.info(jQuery)});
//     return jQuery;
// };
let subMenu = require("./submenu/submenu.vue");
// console.info($);
export default{
    methods:{
        openPage(menu){
            let page=PageUtil.getPage("core/app");
            new Vue({
                el:"#main-content",
                components:{
                    "menu-page":page
                }
            })
        }
    },
    components: {
        "custom-sub-menu": subMenu
    },
    data (){
        return {
            name: "123123",
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