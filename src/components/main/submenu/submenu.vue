<template>
    <ul class="menu-content">
        <li v-for="itemMenu in menus" @click.stop="menuItem(itemMenu)">
            <div :class="'menu-title'+(itemMenu.active?' active':'')+(itemMenu.open?' open':'')"
                 :style="'padding-left:'+(level*20+5)+'px;'">
                <Icon class="menu-icon" v-if="itemMenu.icon" :type="itemMenu.icon"/>
                {{itemMenu.name}}
                <Icon class="menu-drop" v-if="itemMenu.children"
                      :type="itemMenu.open?'arrow-up-b':'arrow-down-b'"></Icon>
            </div>
            <transition v-on:enter="enter" v-on:leave="leave" v-on:after-leave="changeStatus" v-bind:css="false">
                <template v-if="itemMenu.open">
                    <subMenu :menus="itemMenu.children" :level="level+1"></subMenu>
                </template>
            </transition>
        </li>
    </ul>
</template>
<style lang="less" scoped src="./submenu.less">

</style>
<script lang="es6">

    let submenu = require("./submenu.vue");
    let Velocity = require("velocity-animate");
    let currentItemMenu;
    let activeMenu;
    function checkStatus(objects) {
        for (let i = 0; i < objects.length; i++) {
            let item = objects[i];
            if (item.children) {
                item.open = false;
                checkStatus(item.children);
            }
        }
    }
    export default {
        name: "subMenu",
        props: ["menus", "level"],
        methods: {
            menuItem(itemMenu){
                if (itemMenu.children) {
                    itemMenu.open = !itemMenu.open;
                    currentItemMenu = itemMenu;
                }
                if (activeMenu) {
                    activeMenu.active = false;
                }
                activeMenu = itemMenu;
                itemMenu.active = true;
                this.$emit("openPage", itemMenu);
            },
            enter: function (el, done) {
                Velocity(el, {height: el.scrollHeight}, {
                    complete(){
                        el.style.height = "auto";
                        done();
                    }
                });
            },
            leave: function (el, done) {
                Velocity(el, {height: 0}, {complete: done});
            },
            changeStatus(el){
                checkStatus(currentItemMenu.children);
            }
        }
    }
</script>