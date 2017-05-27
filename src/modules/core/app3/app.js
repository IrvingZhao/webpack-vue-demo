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
        console.info("app3-mounted");
        console.info(this);
    },
    created(){
        console.info("app3-created");
    },
    activated(){
        console.info("app3-activated");
    }
    ,
    deactivated(){
        console.info("app3-deactivated");
    }
    ,
    beforeDestroy(){
        console.info("app3-beforeDestroy");
    }
    ,
    destroyed(){
        console.info("app3-destroyed");
    }
}