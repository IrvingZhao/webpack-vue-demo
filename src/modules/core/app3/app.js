//es6
export default {
//        el:"#app",
    //data:function(){}，下面是es6写法
    props:[
        "name",
        "age",
        "objValue"
    ],
    // data () {
    //     return {
    //         name: "app3",
    //         age: "2q1"
    //     }
    // },
    methods: {
        nameClick(){
            this.name = "aaa";
            console.info(this);
            this.objValue.test="修改后";
            this.$Modal.remove();
            this.$emit("valueChange","新的value");
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