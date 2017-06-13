import Vue from "vue";
import ScrollEvent from "../DomScroll";
import PageUtils from "../../pages";
import Router from "vue-router";
import Request from "axios";

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
            if (menu.url) {
                let router = PageUtils.getRouter();
                router.push(menu.url);
            }
        },
        handleTabRemove(pageName){
        }
    },
    data (){
        return {
            tabActiveName: "0",
            tabs: [],
            menus: []
        }
    },
    created(){
        let currentPath = PageUtils.getRouter().currentRoute.path;
        let root = {children: []};
        let menuTemp = {};
        Request.get("./mock/menu.data.json").then(
            response => {
                for (let i = 0; i < response.data.length; i++) {
                    let menuItem = response.data[i];
                    menuItem.active = menuItem.url == currentPath;
                    menuTemp[menuItem.id] = menuItem;
                }
                for (let i = 0; i < response.data.length; i++) {
                    let menuItem = response.data[i];
                    if (menuItem.parent) {
                        let menuParent = menuTemp[menuItem.parent];
                        if (menuParent) {
                            if (!menuParent.children) {
                                menuParent.children = [];
                                menuParent.open=false;
                            }
                            menuParent.children.push(menuItem);
                            menuItem.parent = menuParent;
                        }
                    } else {
                        menuItem.parent = root;
                        root.children.push(menuItem);
                    }
                }
            }
        ).then(() => {
            for (let i = 0; i < root.children.length; i++) {
                this.menus.push(root.children[i]);
            }
        }).catch();
    }
}