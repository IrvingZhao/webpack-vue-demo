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

    methods:{
        submit(){
            console.info(this);
            this.$children[0].reload();
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