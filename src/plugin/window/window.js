// import Modal from 'node_modules/iview/src/components/modal/confirm';

import Vue from "vue";
import Modal from "node_modules/iview/src/components/modal/modal.vue"
import Button from "node_modules/iview/src/components/button/button.vue";
import Local from "node_modules/iview/src/mixins/locale";

import SearchGrid from "../../components/searchgrid/searchgrid.vue";

let modals = {};
let current;

function getSlot(slot) {
}

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

    const _props = options || {};


    const instance = new Vue({
        mixins: [Local],
        render(createElement){
            //TODO 返回内容：
            //TODO  自定义头部、自定义底部、内容区render返回结果
            //TODO  添加固定监听
            //TODO 添加部分控制内容
            return createElement(modals, {}, []);
        }
    });
}

/**
 * 打开窗体
 * */
Modal.open = function (options) {

};

//
//
// let modals = {};
// let current;
//
// /**
//  * 窗体确认按钮单击事件
//  * */
// function winOkClickHandle() {
//     let modal = modals[this.$root._uid];
//     if (modal.options._ok) {
//         new Promise((r) => {
//             //调用回调
//             r(modal.options._ok.call(this));
//         }).then((result) => {
//             //如果窗体在是延迟窗体时
//             if (modal.options._loading !== false) {
//                 //检查回调返回值
//                 if (result !== false) {
//                     this.remove();
//                 } else {
//                     this.buttonLoading = false;
//                 }
//             } else {
//                 this.remove();
//             }
//         });
//     } else {
//         this.remove();
//     }
// }
//
// function winRemoveHandle() {
//     let prev = modals[this.$root._uid].prev;
//     if (prev) {
//         prev.instance.component.$data.visible = true;
//     }
//     current = prev;
//     delete modals[this.$root._uid];
// }
//
//
// Modal.open = function (options) {
//     let target = Object.assign({}, options, {
//         footerHide: true,
//         title: options.title
//     });
//     let instance = Modal.newInstance(target);
//     Object.assign(options, {
//         "_ok": options.onOk,
//         "_remove": options.onRemove,
//         onOk: winOkClickHandle,
//         onRemove: winRemoveHandle,
//         "_loading": options.loading,
//         loading: true
//     });
//     instance.show(options);
//     if (current) {
//         current.instance.component.$data.visible = false;
//     }
//     modals[instance.component.$root._uid] = current = {
//         instance: instance,
//         options: options,
//         prev: current
//     };
//
// };
//
// /**
//  * 用窗体的方式打开选项 grid
//  * @param options.data 数据
//  * @param options.url 请求地址
//  * @param options.form 查询表单
//  * @param options.columns 表格列信息
//  * @param options.selected 默认选中项
//  * @param options;primary 数据标志
//  * @param options.title 标题
//  * */
// Modal.openSearchGrid = function (options) {
//     Modal.open({
//         title: options.title,
//         width: document.getElementsByTagName("html")[0].offsetWidth * 0.8,
//         closable: false,
//         loading: true,
//         "mask-closable": false,
//         showCancel: true,
//         render(createElement){
//             return createElement(SearchGrid, {
//
//             });
//         }
//     });
//     // });
// };

export default Modal;