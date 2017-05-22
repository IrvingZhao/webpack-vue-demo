# webpack-vue-demo
Webpack2+VUE单文件异步加载实例，辅助scss、ES6 

- src 源码目录
- dist 打包目录
- src/index.js 首页脚本
- src/pages.js 页面信息配置脚本
- src/index.html 首页页面
- src/app.vue 测试异步加载模块

VUE 组件中的渲染节点查找默认为全页面查找，使用时需注意

### 使用方式
1. 执行npm install 安装所需类库
2. 执行webpack进行打包 或 执行webpack-dev-server 运行测试服务器