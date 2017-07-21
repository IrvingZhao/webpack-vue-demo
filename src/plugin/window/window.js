// import Modal from 'node_modules/iview/src/components/modal/confirm';

import Vue from "vue";
import Modal from "node_modules/iview/src/components/modal/modal.vue"
import Local from "node_modules/iview/src/mixins/locale";

import SearchGrid from "../../components/searchgrid/searchgrid.vue";

let modals = {};
let current;

/**
 * 获取窗体实例
 * @param options.closeRender 关闭区域render函数
 * @param options.headerRender 头部区域render函数
 * @param options.footerRender 底部区域render函数
 * @param options.render 主体区域render函数
 * @param options.title 标题
 * @param options.value 是否展示 默认为 true
 * @param options.closable 右上角关闭按钮是否显示  取消后 esc退出也将关闭，默认为 false
 * @param options.mask-closable 点击遮罩层是否关闭，默认为 false
 * @param options.loading 点击确认按钮后，是否进入loading状态，开启则需要手动关闭窗体，默认为 true
 * @param options.scrollable 页面是否可以滚动，默认为 false
 * @param options.ok-text 确认按钮文字，默认为 确认
 * @param options.cancel-text 取消按钮文字，默认为 取消
 * @param options.width 窗体宽度，默认为 页面宽度的80%
 * @param options.styles 窗体样式
 * */
function getInstance(options) {

    let _props = Object.assign({
        value: false,
        closable: false,
        "mask-closable": false,
        loading: true,
        scrollable: false,
        "ok-text": "确认",
        "cancel-text": "取消",
        width: document.getElementsByTagName("html")[0].offsetWidth * 0.8
    }, options);


    return new Vue({
        mixins: [Local],
        render(createElement){
            let child = [];
            if (typeof options.closeRender == "function") {
                child.push(createElement("div", {slot: "close"}, [options.closeRender(createElement)]))
            }
            if (typeof options.headerRender == "function") {
                child.push(createElement("div", {slot: "header"}, [options.headerRender(createElement)]));
            }
            if (typeof options.footerRender == "function") {
                child.push(createElement("div", {slot: "footer"}, [options.footerRender(createElement)]));
            }
            child.push(createElement("div", {}, [options.render(createElement)]));
            return createElement(Modal, {
                props: _props, on: {
                    "on-ok": this.ok,
                    "on-cancel": this.cancel
                }
            }, child);
        },
        methods: {
            close(){
                this.$children[0].close();
            },
            ok(){
                let modal = modals[this.$root._uid];
                if (modal.options.ok) {
                    new Promise((r) => {
                        //调用回调
                        r(modal.options.ok.call(this));
                    }).then((result) => {
                        //如果窗体在是延迟窗体时
                        if (modal.options._loading !== false) {
                            //检查回调返回值
                            if (result !== false) {
                                this.remove();
                            } else {
                                this.$children[0].buttonLoading = false;
                            }
                        } else {
                            this.remove();
                        }
                    });
                } else {
                    this.remove();
                }
            },
            cancel(){
                this.remove();
            },
            remove(){
                this.$destroy();
                this.$el.remove();
                current = modals[this.$root._uid].prev;
                delete modals[this.$root._uid];
                if (current) {
                    current.instance.$children[0].$data.visible = true;
                }
            }
        }
    });
}

/**
 * 打开窗体
 * @param options.closeRender 关闭区域render函数
 * @param options.headerRender 头部区域render函数
 * @param options.footerRender 底部区域render函数
 * @param options.render 主体区域render函数
 * @param options.title 标题
 * @param options.ok 确认按钮单击事件，footerRender 为null时有效
 * @param options.cancel 取消按钮单击事件，footerRender为null时有效
 * @param options.value 是否展示 默认为 true
 * @param options.closable 右上角关闭按钮是否显示  取消后 esc退出也将关闭，默认为 false
 * @param options.mask-closable 点击遮罩层是否关闭，默认为 false
 * @param options.loading 点击确认按钮后，是否进入loading状态，开启则需要手动关闭窗体，默认为 true
 * @param options.scrollable 页面是否可以滚动，默认为 false
 * @param options.ok-text 确认按钮文字，默认为 确认
 * @param options.cancel-text 取消按钮文字，默认为 取消
 * @param options.width 窗体宽度，默认为 页面宽度的80%
 * @param options.styles 窗体样式
 * */
Modal.open = function (options) {

    if (current) {
        current.instance.$children[0].$data.visible = false;
    }
    let instance = getInstance(options);

    let component = instance.$mount();
    document.body.appendChild(component.$el);
    current = modals[instance.$root._uid] = {
        instance: instance,
        prev: current,
        options: options
    };
    instance.$children[0].$data.visible = true;
    // instance.$children[0].$data.visiable = true;
};

/**
 * 打开查询表格选择器
 * <p>
 *     请求数据返回值为分页格式，包含 pageIndex  pageSize   total
 * </p>
 * @param options.url 数据请求地址
 * @param options.labels 表格表头
 * @param options.labels[].label 表格展示信息
 * @param options.labels[].key 对应数据key
 * @param options.param 数据过滤参数
 * @param options.param[].label 过滤参数展示标题
 * @param options.param[].key 数据提交内容
 * @param options.callback 选中数据回调，在用户单击确认按钮后调用
 * */
Modal.openSearchGrid = function (options) {
    //TODO 打开查询窗体
};

export default Modal;