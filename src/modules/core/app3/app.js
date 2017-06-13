//es6
export default {
//        el:"#app",
    //data:function(){}，下面是es6写法
    data () {
        return {
            name: "app3",
            age: "2q1"
        }
    },
    methods: {
        nameClick(){
            this.name = "aaa";
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