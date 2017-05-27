//es6
export default {
//        el:"#app",
    //data:function(){}，下面是es6写法
    data () {
        return {
            name: "app2",
            age: "2q1"
        }
    },
    methods: {
        nameClick(){
            this.name = "aaa";
        }
    },
    mounted(){
        console.info("app2-mounted");
        console.info(this);
    },
    created(){
        console.info("app2-created");
    },
    activated(){
        console.info("app2-activated");
    }
    ,
    deactivated(){
        console.info("app2-deactivated");
    }
    ,
    beforeDestroy(){
        console.info("app2-beforeDestroy");
        console.info(this);
    }
    ,
    destroyed(){
        console.info("app2-destroyed");
    }
}