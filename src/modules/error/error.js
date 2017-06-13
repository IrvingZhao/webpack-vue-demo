import PageUtil from "../../pages";
const Router = PageUtil.getRouter();

export default {
    method: {
        goBack(){
            Router.go(-1);
        },
        goHome(){
            Router.go("/");
        }
    }
}