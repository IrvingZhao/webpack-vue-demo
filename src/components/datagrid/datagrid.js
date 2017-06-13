export default {
    name: "dataGrid",
    props: {
        url: {
            required: true,
            type: String
        },
        data: {
            type: Array
        },
        formData: {
            type: Object
        }
    },
    methods:{
        reload(){
            console.info("reload");
        }
    }
}