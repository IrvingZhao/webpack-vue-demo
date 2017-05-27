//es6
export default {
//        el:"#app",
    //data:function(){}，下面是es6写法
    data () {
        return {
            name:"guowenfh",
            age:"2q1"
        }
    },
    mounted(){
        console.info("app1-mounted");
    },
    created(){
        console.info("app1-created");
    },
    activated(){
        console.info("app1-activated");
    }
    ,
    deactivated(){
        console.info("app1-deactivated");
    }
    ,
    beforeDestroy(){
        console.info("app1-beforeDestroy");
    }
    ,
    destroyed(){
        console.info("app1-destroyed");
    }
}