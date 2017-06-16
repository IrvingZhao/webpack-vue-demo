//TODO  是否必选
//TODO  单选 还是多选  默认多选
//TODO  checkbox 的 值的key
//TODO  选中改变事件
//TODO  是否分页
//TODO  查询表单   暂时只做  input 后续添加其他内容

export default {
    props: {
        primary: {
            type: String,
            required: true,
            default: "id"
        },
        form: {
            type: Array
        },
        fields: {
            required: true,
            type: Array
        },
        selected: {
            default: [],
            type: Array
        },
        dataUrl: {
            type: String
        },
        data: {
            type: Array
        }
    },
    methods: {
        render(){},
        getSelectValue(){
            console.info("getSelectValue");
            return ["selectValue"];
        }
    }
}