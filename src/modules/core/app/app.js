//es6
let searchGrid = r => require.ensure([], () => r(require('../../../components/searchgrid/searchgrid.vue')), 'components/searchgrid');


function windowOk() {
    console.info("---------------------");
    console.info(arguments);
    console.info("onOk");
    console.info(this);
    console.info(windowData.objValue.test);
    if (this.loading) {
        this.loading = false;
    }
    // setTimeout(()=>{
    //     this.buttonLoading=false;
    // },1000);
}


export default {
//        el:"#app",
    //data:function(){}，下面是es6写法
    data () {
        return {
            name: "guowenfh",
            age: "2q1"
        }
    },

    methods: {
        buttonclick(){
            this.$Window.openSearchGrid({
                title:"请选择。。。"
            });
            // searchGrid((grid)=>{
            //     return grid;
            // }).then((grid)=>{
            //     this.$Window.open({
            //         title:"请选择",
            //         render(createElement){
            //             return createElement("div",{},[
            //                 createElement(grid,{
            //                     props: {
            //                         data: [
            //                             {id: "1", name: "名称1", age: 1},
            //                             {id: "2", name: "名称2", age: 2},
            //                             {id: "3", name: "名称3", age: 3},
            //                             {id: "4", name: "名称4", age: 4},
            //                             {id: "5", name: "名称5", age: 5},
            //                             {id: "6", name: "名称6", age: 6},
            //                             {id: "7", name: "名称7", age: 7},
            //                             {id: "8", name: "名称8", age: 8},
            //                             {id: "9", name: "名称9", age: 9},
            //                             {id: "10", name: "名称10", age: 10}
            //                         ],
            //                         fields: [
            //                             {key: "name", title: "名称"},
            //                             {key: "age", title: "年龄"}
            //                         ],
            //                         primary: "id",
            //                         form:[
            //                             {label:"名称",type:"text"}
            //                         ]
            //                     }
            //                 })
            //             ]);
            //         }
            //     });
            // });
            // index++;
            // this.$Window.open({
            //     title: "标题2",
            //     content: "<p>我是内容" + index + "</p>",
            //     icon: "info",
            //     width: 600,
            //     loading: false,
            //     closable: false,
            //     "mask-closable": false,
            //     scrollable: true,
            //     okText: "确认按钮",
            //     showCancel: true,
            //     cancelText: "取消按钮",
            //     "transition-names": ["easy", "fade"],
            //     onOk: function () {
            //         console.info("ok");
            //     },
            //     onCancel: function () {
            //         console.info("cancel");
            //     },
            //     onRemove: function () {
            //         console.info("remove");
            //
            //     }
            // });
            // this.$Modal.info({
            //     title:"标题1"
            // });
            // let temp=this.$Modal.info({
            //     title:"标题2"
            // });
            // let app_temp = r => require.ensure([], () => r(require('../../../components/searchgrid/searchgrid.vue')), 'components/searchgrid');
            // let app_temp = r => require.ensure([], () => r(require('../app3/app.vue')), 'app3/app');
            //
            // app_temp((component)=>{
            //     return component;
            // }).then((component)=>{
            //     this.$Modal.confirm({
            //         render:function(h){
            //             // return h(component,{props:{name:"测试",age:"11"}});
            //             return h("div",{},[h(component,{props:windowData,on:{valueChange:function(){console.info(arguments);}}})]);
            //             // return h("div",{},[h(component)]);
            //         },
            //         onOk:windowOk,
            //         title:"标题",
            //         loading:true
            //     });
            //     //TODO 通过loading  buttonLoading 控制按钮和窗体关闭
            //     //TODO 尝试多  窗体
            //     //TODO  替换  $Modal 中的  各种方法  并添加 额外方法
            // });
        }


    },
    mounted(){
    },
    created(){
    },
    activated(){
    }
    ,
    deactivated(){
    }
    ,
    beforeDestroy(){
    }
    ,
    destroyed(){
    }
}