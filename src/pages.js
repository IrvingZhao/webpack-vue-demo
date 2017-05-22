import core from "./modules/core/pages";

let pages = {
    core
};
/**
 * 根据名称加载页面
 * @param name 页面名称  采用  模块名/页面名 的形式
 * */
const getPage = (name) => {
    let paths = name.split("/");
    let result = pages;
    paths.forEach((item) => {
        if (result == null) {
            return;
        }
        result = result[item];
    });
    if (result == pages) {
        return null;
    }
    return result;
};

export default {
    getPage
}