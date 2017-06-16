import window from "./window/window"

function install(Vue) {
    Vue.prototype.$Window = window;
}

export default {
    install
}